import { SessionType, NewsFlag, RegimeVolatility } from "./signal";

export type MarketDataSnapshot = {
  symbol: string;
  session: SessionType;
  windowMinutes: number;

  // ここは CryptoQuant / Grok からの集約結果を「バイアス値」として受け取る想定
  onChainBias: number;      // -5〜+5 想定
  derivativesBias: number;  // -5〜+5
  sentimentBias: number;    // -5〜+5

  newsRisk: NewsFlag;
  volatilityRegime: RegimeVolatility;
};
