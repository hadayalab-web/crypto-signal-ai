export type SignalType = "BUY" | "SELL" | "NO-TRADE";

export type ConfidenceLevel = "Low" | "Medium" | "High";

export type SessionType = "London Open" | "NY Open";

export type NewsFlag = "Green" | "Yellow" | "Red";

export type RegimeVolatility = "Low" | "Normal" | "High";

export type ReasonCategory = "OnChain" | "Derivatives" | "Sentiment" | "News";

export type SignalReason = {
  category: ReasonCategory;
  text: string;
};

export type SignalDecision = {
  symbol: string;
  signal: SignalType;
  rawScore: number; // -5〜+5など
  normalizedScore: number; // 1〜5
  confidence: ConfidenceLevel;

  session: SessionType;
  windowMinutes: number;

  reasons: SignalReason[];

  newsFlag: NewsFlag;
  regimeVolatility: RegimeVolatility;

  recentLossStreak?: number;
};
