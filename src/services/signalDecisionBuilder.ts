export type ScoreSnapshot = {
  symbol: string;
  session: string;
  windowMinutes: number;
  onChainScore: number;
  derivativesScore: number;
  sentimentScore: number;
  newsFlag: "Green" | "Yellow" | "Red";
  regimeVolatility: string;
};

export type DecisionReason = {
  category: string;
  text: string;
};

export type SignalDecision = {
  symbol: string;
  signal: "BUY" | "SELL" | "STAND_ASIDE";
  rawScore: number;
  normalizedScore: 1 | 2 | 3 | 4 | 5;
  confidence: "Low" | "Medium" | "High";
  session: string;
  windowMinutes: number;
  reasons: DecisionReason[];
  newsFlag: ScoreSnapshot["newsFlag"];
  regimeVolatility: ScoreSnapshot["regimeVolatility"];
};

function clampRawScore(raw: number): number {
  if (raw > 5) return 5;
  if (raw < -5) return -5;
  return raw;
}

function normalizeScore(raw: number): 1 | 2 | 3 | 4 | 5 {
  // v1.1 相当のシンプルなしきい値正規化
  if (raw >= 4) return 5;
  if (raw >= 2) return 4;
  if (raw > -2 && raw < 2) return 3;
  if (raw <= -2 && raw > -4) return 2;
  return 1;
}

function inferConfidence(raw: number): "Low" | "Medium" | "High" {
  const abs = Math.abs(raw);
  if (abs >= 4) return "High";
  if (abs >= 2) return "Medium";
  return "Low";
}

/**
 * v1.1.1:
 * - 通常は onChain + derivatives + sentiment の合計スコアから方向と強さを決定
 * - NewsFlag=Red の場合はシグナルを必ず STAND_ASIDE に倒し、normalizedScore は 3 に寄せる
 */
export function buildSignalDecisionFromScores(
  scores: ScoreSnapshot,
): SignalDecision {
  const {
    symbol,
    session,
    windowMinutes,
    onChainScore,
    derivativesScore,
    sentimentScore,
    newsFlag,
    regimeVolatility,
  } = scores;

  const raw = clampRawScore(
    onChainScore + derivativesScore + sentimentScore,
  );

  let signal: "BUY" | "SELL" | "STAND_ASIDE";
  let normalized: 1 | 2 | 3 | 4 | 5;
  let confidence: "Low" | "Medium" | "High";

  if (newsFlag === "Red") {
    // ニュースリスク優先で様子見誘導
    signal = "STAND_ASIDE";
    normalized = 3;
    confidence = "Medium";
  } else {
    if (raw >= 0.5) {
      signal = "BUY";
    } else if (raw <= -0.5) {
      signal = "SELL";
    } else {
      signal = "STAND_ASIDE";
    }
    normalized = normalizeScore(raw);
    confidence = inferConfidence(raw);
  }

  const reasons: DecisionReason[] = [
    {
      category: "OnChain",
      text: `On-chain score: ${onChainScore.toFixed(1)}`,
    },
    {
      category: "Derivatives",
      text: `Derivatives score: ${derivativesScore.toFixed(1)}`,
    },
    {
      category: "Sentiment",
      text: `Sentiment score: ${sentimentScore.toFixed(1)}`,
    },
  ];

  if (newsFlag !== "Green") {
    reasons.push({
      category: "News",
      text:
        newsFlag === "Red"
          ? "Significant news risk detected (Red)."
          : "Elevated news risk (Yellow).",
    });
  }

  reasons.push({
    category: "Regime",
    text: `Volatility regime: ${regimeVolatility}`,
  });

  return {
    symbol,
    signal,
    rawScore: raw,
    normalizedScore: normalized,
    confidence,
    session,
    windowMinutes,
    reasons,
    newsFlag,
    regimeVolatility,
  };
}
