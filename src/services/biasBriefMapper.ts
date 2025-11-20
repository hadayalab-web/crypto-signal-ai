import { BiasBriefInput } from "./biasBriefBuilder";
import { SignalDecision } from "../types/signal";

function buildSummary(decision: SignalDecision): string {
  if (decision.signal === "BUY") {
    return "Buyers are stepping in — upside has the edge this session.";
  }
  if (decision.signal === "SELL") {
    return "Leverage is stacked on longs — downside risk dominates if momentum flips.";
  }
  // NO-TRADE
  if (decision.newsFlag === "Red") {
    return "Market is noisy and event-driven — standing aside protects your capital today.";
  }
  return "Market is noisy and directionless — sitting out protects your edge today.";
}

function buildReasons(decision: SignalDecision): string {
  const picked = decision.reasons.slice(0, 4).map((r) => r.text);
  return picked.join(", ");
}

function buildRiskNote(decision: SignalDecision): string {
  if (decision.newsFlag === "Red") {
    return "News-driven volatility can ignore technicals; taking fresh positions here is closer to gambling than trading.";
  }
  if (decision.regimeVolatility === "High") {
    return "Volatility is elevated; avoid oversized positions and respect your predefined stop.";
  }
  if (decision.regimeVolatility === "Low") {
    return "24h range is still tight — expect slower follow-through and avoid overleveraging.";
  }
  return "Mixed signals remain; treat this setup as opportunistic, not must-trade.";
}

function buildSuggestedPlan(decision: SignalDecision): string | undefined {
  if (decision.signal === "BUY") {
    return "Enter near support, risk ~1.5%, scale out at +1.5% and +3.0%.";
  }
  if (decision.signal === "SELL") {
    return "Look to fade strength into resistance, keep risk tight above recent highs.";
  }
  return "No new trades; use this session to review past setups instead.";
}

export function mapSignalToBiasBriefInput(
  decision: SignalDecision
): BiasBriefInput {
  return {
    signal: decision.signal,
    score: decision.normalizedScore,
    confidence: decision.confidence,
    session: decision.session,
    windowLabel: `last ${decision.windowMinutes}m`,
    summary: buildSummary(decision),
    reasons: buildReasons(decision),
    riskNote: buildRiskNote(decision),
    suggestedPlan: buildSuggestedPlan(decision),
  };
}
