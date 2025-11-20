import type { SignalDecision } from "./signalDecisionBuilder";

export type BiasBriefInput = {
  symbol: string;
  signal: "BUY" | "SELL" | "STAND_ASIDE";
  score: number;
  confidence: "Low" | "Medium" | "High";
  session: string;
  windowMinutes: number;
  summary: string;
  reasons: string[];
  riskNote: string;
  suggestedPlan: string;
};

function buildSummary(decision: SignalDecision): string {
  const { signal, normalizedScore, newsFlag } = decision;

  // NewsFlag=Red 専用サマリ
  if (newsFlag === "Red") {
    return "Major news risk is in play; the edge is to stand aside until volatility settles.";
  }

  if (signal === "BUY") {
    if (normalizedScore >= 5) {
      return "Buyers are firmly in control and upside has a clear edge this session.";
    }
    if (normalizedScore >= 4) {
      return "Buyers have a moderate edge, but the trend is not one-sided.";
    }
    return "Buyer interest is emerging, but the edge over sellers is still limited.";
  }

  if (signal === "SELL") {
    if (normalizedScore >= 5) {
      return "Sellers are firmly in control and downside has a clear edge this session.";
    }
    if (normalizedScore >= 4) {
      return "Sellers have a moderate edge, but the trend is not one-sided.";
    }
    return "Selling pressure is visible, but the edge over buyers is still limited.";
  }

  // STAND_ASIDE (Green/Yellow) のとき
  if (normalizedScore === 3) {
    return "The risk/reward is roughly balanced; there is no clear directional edge.";
  }
  if (normalizedScore > 3) {
    return "Conditions are somewhat constructive, but not strong enough to justify an aggressive stance.";
  }
  return "Conditions are somewhat fragile, and a cautious or flat stance is reasonable.";
}

function buildRiskNote(decision: SignalDecision): string {
  const { newsFlag, signal, regimeVolatility } = decision;

  if (newsFlag === "Red") {
    // v1.1.1: 強めの様子見誘導
    return "Significant news-driven risk is present; avoid initiating new positions until the event and immediate reaction are fully priced in.";
  }

  if (newsFlag === "Yellow") {
    // v1.1.2: Yellow 時は方向は出すが、サイズ縮小と警戒を強調
    if (signal === "BUY" || signal === "SELL") {
      return "News risk is elevated; keep position sizes smaller than usual and be prepared to exit quickly if volatility spikes.";
    }
    return "News risk is elevated and the directional edge is limited; staying light or flat can help avoid unnecessary drawdowns.";
  }

  // newsFlag = Green のとき
  if (signal === "BUY") {
    if (regimeVolatility === "High") {
      return "Trend conditions favor buyers, but elevated volatility requires tighter stops and smaller position sizes.";
    }
    return "Trend conditions are favorable; still size positions within your standard risk limits.";
  }

  if (signal === "SELL") {
    if (regimeVolatility === "High") {
      return "Downside pressure aligns with the trend, but elevated volatility requires tighter stops and smaller position sizes.";
    }
    return "Downside conditions are favorable; manage risk with conservative position sizing.";
  }

  // STAND_ASIDE (Green)
  if (regimeVolatility === "High") {
    return "Volatility is high and the directional edge is unclear; staying light or flat can help avoid unnecessary drawdowns.";
  }

  return "The directional edge is limited; waiting for a clearer setup may offer better risk/reward than forcing a trade.";
}

function buildSuggestedPlan(decision: SignalDecision): string {
  const { signal, normalizedScore, newsFlag } = decision;

  if (newsFlag === "Red") {
    return "Stay flat or significantly reduce exposure; reassess after the next key news updates or 1–2 new candles.";
  }

  if (newsFlag === "Yellow") {
    // v1.1.2: Yellow 時は「半サイズ以下＋素早い撤退」を明示
    if (signal === "BUY") {
      return "If you participate, keep long size clearly below your normal risk (for example half-size) and be ready to exit quickly if the news flow worsens.";
    }
    if (signal === "SELL") {
      return "If you participate, keep short size clearly below your normal risk and be ready to exit quickly if the tape squeezes against your position.";
    }
    return "Consider staying flat or using only very small feeler positions until the news picture becomes clearer.";
  }

  if (signal === "BUY") {
    if (normalizedScore >= 5) {
      return "Enter near support, risk around 1.0–1.5%, and scale out at roughly +1.5% and +3.0% if momentum holds.";
    }
    return "Consider a smaller-than-usual long position near support with clearly defined stops and modest profit targets.";
  }

  if (signal === "SELL") {
    if (normalizedScore >= 5) {
      return "Enter on bounces toward resistance, risk around 1.0–1.5%, and scale out at roughly -1.5% and -3.0% if downside continues.";
    }
    return "Consider a smaller-than-usual short position near resistance with clearly defined stops and modest profit targets.";
  }

  // STAND_ASIDE (Green)
  if (normalizedScore === 3) {
    return "Remain patient and wait for either a stronger imbalance in the data or a clearer technical setup before committing capital.";
  }

  if (normalizedScore > 3) {
    return "If you participate, keep size small and treat the setup as exploratory rather than high-conviction.";
  }

  return "Avoid new positions for now; monitor the next data update for a clearer directional edge.";
}

/**
 * Bias Brief v1.1.2
 * - NewsFlag=Red: サマリ/リスクノート/プランすべてで様子見を強く推奨
 * - NewsFlag=Yellow: 方向は出すが、サイズ縮小と撤退の速さを明示して警戒度を一段引き上げ
 */
export function mapSignalDecisionToBiasBrief(
  decision: SignalDecision,
): BiasBriefInput {
  const reasons = decision.reasons.map((r) => r.text);

  return {
    symbol: decision.symbol,
    signal: decision.signal,
    score: decision.normalizedScore,
    confidence: decision.confidence,
    session: decision.session,
    windowMinutes: decision.windowMinutes,
    summary: buildSummary(decision),
    reasons,
    riskNote: buildRiskNote(decision),
    suggestedPlan: buildSuggestedPlan(decision),
  };
}
