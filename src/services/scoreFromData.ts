import type { ScoreSnapshot } from "./signalDecisionBuilder";

/**
 * buildMarketDataSnapshot が返すスナップショットの形
 * - 実際の実装に合わせて最低限のプロパティだけ型定義
 */
type MarketDataSnapshot = {
  symbol: string;
  session: string;
  windowMinutes: number;
  onChainBias: number;
  derivativesBias: number;
  sentimentBias: number;
  newsRisk: "Green" | "Yellow" | "Red";
  volatilityRegime: string;
};

/**
 * v1.1.1:
 * - MarketData の Bias 系フィールドを、そのまま ScoreSnapshot にマッピング
 * - ここではスケーリングや係数調整は行わず、「Bias = Score」として扱う
 *   （必要なら将来ここに係数ロジックを追加）
 */
export function buildScoresFromMarketData(
  snapshot: MarketDataSnapshot,
): ScoreSnapshot {
  const {
    symbol,
    session,
    windowMinutes,
    onChainBias,
    derivativesBias,
    sentimentBias,
    newsRisk,
    volatilityRegime,
  } = snapshot;

  return {
    symbol,
    session,
    windowMinutes,
    onChainScore: onChainBias,
    derivativesScore: derivativesBias,
    sentimentScore: sentimentBias,
    newsFlag: newsRisk,
    regimeVolatility: volatilityRegime,
  };
}
