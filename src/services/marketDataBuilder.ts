import { MarketDataSnapshot } from "../types/marketData";
import { CryptoQuantClient } from "./providers/cryptoquantClient";
import { GrokClient } from "./providers/grokClient";
import { GrokSentimentMetrics } from "../types/providers";
import { CqOnChainMetrics, CqDerivativesMetrics } from "../types/providers";

type BuildMarketDataDeps = {
  cqClient: CryptoQuantClient;
  grokClient: GrokClient;
};

export async function buildMarketDataSnapshot(
  deps: BuildMarketDataDeps,
  params: { symbol: string; session: "London Open" | "NY Open"; windowMinutes: number }
): Promise<MarketDataSnapshot> {
  const { symbol, session, windowMinutes } = params;

  const [cq, grok] = await Promise.all([
    deps.cqClient.fetchMetrics(symbol, windowMinutes),
    deps.grokClient.fetchSentiment(symbol, windowMinutes),
  ]);

  const onChainBias = computeOnChainBias(cq.onChain);
  const derivativesBias = computeDerivativesBias(cq.derivatives);
  const sentimentBias = computeSentimentBias(grok);

  const newsRisk = computeNewsFlagFromSentiment(grok);
  const volatilityRegime = computeVolatilityRegime(cq.derivatives);

  return {
    symbol,
    session,
    windowMinutes,
    onChainBias,
    derivativesBias,
    sentimentBias,
    newsRisk,
    volatilityRegime,
  };
}

// v1の暫定ロジック（あとでCSAI_SignalSpec_v1に合わせてチューニング）

function computeOnChainBias(onChain: CqOnChainMetrics): number {
  // exchangeNetflow がマイナス（流出） → ブル寄り
  // stablecoinNetflow がプラス → ブル寄り
  const score =
    -onChain.exchangeNetflow * 0.8 +
    onChain.stablecoinNetflow * 1.0 -
    onChain.minerOutflow * 0.5 -
    onChain.longTermHolderActivity * 0.5;

  return clamp(score, -5, 5);
}

function computeDerivativesBias(deriv: CqDerivativesMetrics): number {
  // fundingRate が高い & OI増 → ロング過熱 → ベア
  // fundingRate が低い or マイナス & OI増 → ショート積み上げ → ブル
  let score = 0;

  score -= deriv.fundingRate * 50; // 0.01 → -0.5 くらい
  score += deriv.openInterestChange * 5; // 0.1 → +0.5

  if (deriv.longShortRatio > 1.5) {
    score -= 1;
  } else if (deriv.longShortRatio < 0.7) {
    score += 1;
  }

  return clamp(score, -5, 5);
}

/**
 * SentimentBias v1.1
 * - sentimentScore: -1〜+1
 * - mentionVolumeScore: 0〜1
 * - narrativeRiskScore: 0〜1
 *
 * score = 3.5*s + 3*max(0, v-0.6) - 4*r
 * 最後に -5〜+5 にクリップ
 */
function computeSentimentBias(grok: GrokSentimentMetrics): number {
  const s = grok.sentimentScore;
  const v = grok.mentionVolumeScore;
  const r = grok.narrativeRiskScore;

  const volumeBoost = Math.max(0, v - 0.6) * 3; // v>0.6 のときだけ +寄与

  let score = 0;
  score += 3.5 * s;
  score += volumeBoost;
  score -= 4 * r;

  return clamp(score, -5, 5);
}

/**
 * NewsFlag v1.1
 * - narrativeRiskScore をベースに単純な3段階で判定
 */
function computeNewsFlagFromSentiment(grok: GrokSentimentMetrics): "Green" | "Yellow" | "Red" {
  const r = grok.narrativeRiskScore;

  if (r >= 0.75) {
    return "Red";
  }
  if (r >= 0.4) {
    return "Yellow";
  }
  return "Green";
}

function computeVolatilityRegime(deriv: CqDerivativesMetrics): "Low" | "Normal" | "High" {
  const absFunding = Math.abs(deriv.fundingRate);
  const absOiChange = Math.abs(deriv.openInterestChange);

  if (absFunding < 0.005 && absOiChange < 0.02) {
    return "Low";
  }
  if (absFunding > 0.02 || absOiChange > 0.1) {
    return "High";
  }
  return "Normal";
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}
