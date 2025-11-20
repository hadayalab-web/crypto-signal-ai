export type CqOnChainMetrics = {
  exchangeNetflow: number;
  stablecoinNetflow: number;
  minerOutflow: number;
  longTermHolderActivity: number;
};

export type CqDerivativesMetrics = {
  fundingRate: number;
  openInterestChange: number;
  longShortRatio: number;
};

export type GrokSentimentMetrics = {
  sentimentScore: number;      // -1〜+1
  mentionVolumeScore: number;  // 0〜1
  narrativeRiskScore: number;  // 0〜1
};
