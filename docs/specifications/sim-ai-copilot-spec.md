# 📊 CryptoSignal AI™ v0.6 - 完全仕様書

**最終更新**: 2025-11-01 02:10 JST  
**ステータス**: 本番稼働中 (PRODUCTION)  
**作成者**: CryptoSignal Development Team

---

## 📑 目次

1. [システム概要](#1-システム概要)
2. [アーキテクチャ](#2-アーキテクチャ)
3. [ブロック詳細仕様](#3-ブロック詳細仕様)
4. [データフロー](#4-データフロー)
5. [シグナル分類ロジック](#5-シグナル分類ロジック)
6. [API統合](#6-api統合)
7. [出力フォーマット](#7-出力フォーマット)
8. [運用設定](#8-運用設定)
9. [パフォーマンス指標](#9-パフォーマンス指標)
10. [今後の拡張計画](#10-今後の拡張計画)

---

## 1. システム概要

### 1.1 目的

暗号通貨市場における**スマートマネー（機関投資家/クジラ）の動き**と**リテール投資家のFOMO（恐怖と欲望）**の乖離を検出し、高勝率なエントリー/エグジットシグナルを生成する。

### 1.2 主要機能

- ✅ マルチアセット監視 (BTC/SOL/ETH)
- ✅ 7次元AI分析 (GPT-4o)
- ✅ クジラ活動検出 (Messari API)
- ✅ ソーシャルセンチメント集約 (YouTube/Twitter/Reddit)
- ✅ スマートマネータイミング検出
- ✅ シグナル分類エンジン (4タイプ)
- ✅ プロフェッショナルアラートフォーマット
- ✅ Telegram リアルタイム配信
- ✅ 自動スケジューリング (5分間隔)

### 1.3 技術スタック

```
Platform: Sim.ai Workflow Automation
Trigger: Schedule Trigger (5 min intervals, Asia/Tokyo)
AI Model: GPT-4o (OpenAI)
APIs: Messari, CoinGecko, YouTube Data API v3, Reddit API
Output: Telegram Bot API
Language: JavaScript (Function Blocks)
```

---

## 2. アーキテクチャ

### 2.1 システム構成図

```
┌─────────────────────────────────────────────────────────┐
│                    TRIGGER LAYER                        │
│  Schedule Trigger (Every 5 min, Asia/Tokyo timezone)   │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│                   DATA LAYER                            │
├─────────────────────────────────────────────────────────┤
│  Block 1: Multi-Asset Data Fetcher (BTC/SOL/ETH)       │
│  Block 2: Whale Net Flow Extractor (Messari API)       │
│  Block 3: Social Monitors (YouTube/Twitter/Reddit)      │
│  Block 4: On-Chain Metrics (24h Historical Average)     │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│                  ANALYSIS LAYER                         │
├─────────────────────────────────────────────────────────┤
│  Block 5: GPT-4o Multi-Dimensional Analysis (7次元)    │
│  Block 6: Whale Confidence Score Calculator            │
│  Block 7: FOMO Alert Aggregator                        │
│  Block 8: Divergence Detector (Smart Money vs Retail)  │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│                 DECISION LAYER                          │
├─────────────────────────────────────────────────────────┤
│  Block 9: Smart Money Timing Detector                  │
│  Block 11e: Signal Classification Engine ⭐            │
│    ├─ 🎯 SMART_MONEY_FRONT_RUN                         │
│    ├─ ⚠️ RETAIL_EXHAUSTION                             │
│    ├─ 🚀 EVENT_CASCADE                                  │
│    └─ 🚫 SOCIAL_TRAP                                    │
│  Block 12: Entry/Exit Calculator (Risk:Reward)         │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│                  OUTPUT LAYER                           │
├─────────────────────────────────────────────────────────┤
│  Block 13: Professional Alert Formatter (4 Templates)  │
│  Block 14: Telegram Sender Handler                     │
└─────────────────────────────────────────────────────────┘
```

### 2.2 レイヤー間連携

| レイヤー | 入力 | 出力 | 処理時間 |
|---------|------|------|----------|
| Data Layer | External APIs | Raw JSON Data | ~8-12秒 |
| Analysis Layer | Raw Data | Scored Metrics (0-100) | ~15-20秒 |
| Decision Layer | Scored Metrics | Signal Type + Confidence | ~5-8秒 |
| Output Layer | Signal Data | Formatted Telegram Message | ~2-3秒 |

**総処理時間**: 約30-45秒/実行

---

## 3. ブロック詳細仕様

### 3.1 Data Layer

#### Block 1: Multi-Asset Data Fetcher

```javascript
// 目的: BTC/SOL/ETH の現在価格・24h変動・出来高を取得
// API: CoinGecko Free API
// 更新頻度: 5分ごと

INPUT: なし (Scheduled Trigger)
OUTPUT: {
  btc: {
    price: 67450.23,
    change_24h: 2.34,
    volume_24h: 28500000000,
    market_cap: 1320000000000
  },
  sol: {
    price: 178.45,
    change_24h: -1.23,
    volume_24h: 2100000000,
    market_cap: 82000000000
  },
  eth: {
    price: 3245.67,
    change_24h: 1.89,
    volume_24h: 15200000000,
    market_cap: 390000000000
  },
  timestamp: "2025-11-01T02:05:00Z"
}

ERROR HANDLING:
- API Rate Limit → Fallback to cached data (max 15 min old)
- Network Timeout → Retry 3 times with exponential backoff
- Invalid Response → Log error, skip this cycle
```

#### Block 2: Whale Net Flow Extractor

```javascript
// 目的: クジラ（大口保有者）の資金流入/流出を検出
// API: Messari API (Professional Tier)
// メトリクス: Net Flow (24h), Large Transaction Count

INPUT: Asset symbols ["BTC", "SOL", "ETH"]
OUTPUT: {
  btc_whale_netflow: 1250000000,  // USD (正 = 流入, 負 = 流出)
  btc_large_tx_count: 142,        // 24h内の大口取引数
  sol_whale_netflow: -45000000,
  sol_large_tx_count: 67,
  eth_whale_netflow: 320000000,
  eth_large_tx_count: 98,
  confidence: 0.87,               // データ信頼度
  timestamp: "2025-11-01T02:06:30Z"
}

THRESHOLD DEFINITIONS:
- Small Whale: $1M - $10M
- Medium Whale: $10M - $100M
- Large Whale: $100M+
```

#### Block 3: Social Monitors

```javascript
// 目的: YouTube/Twitter/Reddit のセンチメントを集約
// APIs: YouTube Data API v3, Twitter API v2, Reddit API

// YouTube Monitor
INPUT: Channels ["CoinBureau", "Crypto Daily", "TradingView"]
OUTPUT: {
  uploads_last_4h: 23,
  urgency_score: 78,              // 0-100
  sentiment: "EXTREMELY_BULLISH",
  top_keywords: ["BTC breakout", "bull market"],
  velocity: 5.75                  // videos/hour
}

// Twitter Monitor
INPUT: Keywords ["#BTC", "#Ethereum", "#SOL", "pump", "moon"]
OUTPUT: {
  tweet_volume_2h: 1245,
  sentiment_score: 82,            // -100 to +100
  viral_status: true,
  engagement_rate: 0.64
}

// Reddit Monitor
INPUT: Subreddits ["r/CryptoCurrency", "r/Bitcoin", "r/ethtrader"]
OUTPUT: {
  post_volume_6h: 342,
  upvote_momentum: 0.71,
  comment_velocity: 12.4          // comments/minute
}

AGGREGATION:
social_fomo_score = (youtube_urgency + twitter_sentiment + reddit_momentum) / 3
```

#### Block 4: On-Chain Metrics

```javascript
// 目的: 24時間の平均オンチェーンメトリクスを計算
// データソース: Block 1, Block 2 の履歴データ

INPUT: Historical data (last 24h)
OUTPUT: {
  btc_avg_volume: 27800000000,
  btc_avg_whale_flow: 980000000,
  sol_avg_volume: 2050000000,
  sol_avg_whale_flow: -12000000,
  eth_avg_volume: 14900000000,
  eth_avg_whale_flow: 290000000,
  volatility_index: 0.42          // 0-1 (high = volatile)
}

CALCULATION:
- Rolling 24h average
- Outlier removal (±3 standard deviations)
- Weighted by volume
```

---

### 3.2 Analysis Layer

#### Block 5: GPT-4o Multi-Dimensional Analysis

```javascript
// 目的: 7次元の市場分析を実行
// Model: GPT-4o (temperature=0.3, max_tokens=800)

INPUT: Blocks 1-4 の全データ
PROMPT STRUCTURE:
"""
あなたは機関投資家レベルの暗号通貨アナリストです。
以下のデータを分析し、7つの次元でスコアを付けてください（0-100）：

1. **Price Action Quality**: テクニカル分析の強度
2. **Volume Legitimacy**: 出来高の信頼性
3. **Whale Conviction**: クジラの確信度
4. **Retail FOMO Level**: リテール投資家の過熱感
5. **On-Chain Health**: ブロックチェーンの健全性
6. **Social Sentiment Divergence**: ソーシャルとオンチェーンの乖離
7. **Market Structure**: マーケット全体の構造

データ:
{Block 1-4 の全JSON}

出力形式（JSON only）:
{
  "btc_analysis": {
    "price_action_quality": 85,
    "volume_legitimacy": 72,
    "whale_conviction": 91,
    "retail_fomo_level": 34,
    "onchain_health": 88,
    "social_divergence": 67,
    "market_structure": 79,
    "summary": "Strong whale accumulation with low retail FOMO - ideal entry"
  },
  "sol_analysis": { ... },
  "eth_analysis": { ... }
}
"""

OUTPUT: 各アセットの7次元スコア + 要約
```

#### Block 6: Whale Confidence Score Calculator

```javascript
// 目的: クジラの行動から確信度スコアを計算
// アルゴリズム: 加重平均 + モメンタム調整

INPUT: Block 2 (Whale Net Flow) + Block 5 (AI Analysis)
CALCULATION:
function calculateWhaleScore(netflow, large_tx_count, ai_whale_conviction) {
  // 正規化
  netflow_normalized = normalize(netflow, -1B, +1B);  // -100 to +100
  tx_count_normalized = normalize(large_tx_count, 0, 200);  // 0 to 100
  
  // 加重平均
  raw_score = (
    netflow_normalized * 0.5 +      // 50% weight
    tx_count_normalized * 0.3 +     // 30% weight
    ai_whale_conviction * 0.2       // 20% weight
  );
  
  // モメンタム調整（過去3回の平均との比較）
  momentum = (raw_score - rolling_avg_3_cycles) / rolling_avg_3_cycles;
  
  final_score = raw_score * (1 + momentum * 0.2);  // ±20% adjustment
  
  return clamp(final_score, 0, 100);
}

OUTPUT: {
  btc_whale_score: 87,
  sol_whale_score: 42,
  eth_whale_score: 71,
  momentum: "ACCELERATING",
  confidence: 0.89
}
```

#### Block 7: FOMO Alert Aggregator

```javascript
// 目的: リテール投資家のFOMOレベルを集約
// ソース: Block 3 (Social Monitors) + Block 5 (AI Analysis)

INPUT: Social data + AI retail_fomo_level
CALCULATION:
function calculateFOMOScore(youtube, twitter, reddit, ai_fomo) {
  // 各ソースのFOMOシグナル
  youtube_fomo = youtube.urgency_score;
  twitter_fomo = normalize(twitter.sentiment_score, -100, 100);  // to 0-100
  reddit_fomo = reddit.upvote_momentum * 100;
  
  // 時間加重（新しいデータほど重要）
  time_weights = {
    youtube: 0.25,   // 4h window
    twitter: 0.35,   // 2h window (most recent)
    reddit: 0.20,    // 6h window
    ai: 0.20         // AI総合判断
  };
  
  fomo_score = (
    youtube_fomo * time_weights.youtube +
    twitter_fomo * time_weights.twitter +
    reddit_fomo * time_weights.reddit +
    ai_fomo * time_weights.ai
  );
  
  // バイラル補正（Twitter viral_status = true なら +15%）
  if (twitter.viral_status) {
    fomo_score *= 1.15;
  }
  
  return clamp(fomo_score, 0, 100);
}

OUTPUT: {
  btc_fomo_score: 34,
  sol_fomo_score: 78,
  eth_fomo_score: 52,
  viral_assets: ["SOL"],
  alert_level: "MODERATE"
}
```

#### Block 8: Divergence Detector

```javascript
// 目的: スマートマネーとリテールの乖離を検出
// 理論: クジラが買ってリテールがFOMOしていない = 絶好の買い場

INPUT: Block 6 (Whale Score) + Block 7 (FOMO Score)
LOGIC:
function detectDivergence(whale_score, fomo_score) {
  const divergence = whale_score - fomo_score;
  
  // 分類
  if (divergence >= 30) {
    return {
      type: "SMART_MONEY_ACCUMULATION",
      strength: "STRONG",
      action: "BUY_SIGNAL",
      confidence: 0.85 + (divergence - 30) * 0.01  // max 0.95
    };
  } else if (divergence <= -30) {
    return {
      type: "RETAIL_FOMO_EXHAUSTION",
      strength: "STRONG",
      action: "SELL_SIGNAL",
      confidence: 0.80 + (Math.abs(divergence) - 30) * 0.01
    };
  } else if (whale_score >= 70 && fomo_score >= 70) {
    return {
      type: "EVENT_CASCADE",
      strength: "EXPLOSIVE",
      action: "STRONG_BUY",
      confidence: 0.90
    };
  } else {
    return {
      type: "NO_DIVERGENCE",
      strength: "NEUTRAL",
      action: "WAIT",
      confidence: 0.50
    };
  }
}

OUTPUT: {
  btc: {
    divergence_type: "SMART_MONEY_ACCUMULATION",
    divergence_gap: +53,
    strength: "STRONG",
    action: "BUY_SIGNAL",
    confidence: 0.88
  },
  sol: { ... },
  eth: { ... }
}
```

---

### 3.3 Decision Layer

#### Block 9: Smart Money Timing Detector

```javascript
// 目的: 最適なエントリータイミングを検出
// 手法: クジラ活動のモメンタム + 価格アクション

INPUT: Block 6 (Whale Score) + Block 1 (Price Data)
ALGORITHM:
function detectTiming(whale_score, whale_momentum, price_change_24h) {
  let timing_score = 0;
  
  // クジラ活動スコア (0-40点)
  if (whale_score >= 80) timing_score += 40;
  else if (whale_score >= 60) timing_score += 30;
  else if (whale_score >= 40) timing_score += 20;
  
  // モメンタムスコア (0-30点)
  if (whale_momentum === "ACCELERATING") timing_score += 30;
  else if (whale_momentum === "STEADY") timing_score += 20;
  else if (whale_momentum === "DECELERATING") timing_score += 10;
  
  // 価格アクションスコア (0-30点)
  if (price_change_24h > 5) timing_score += 30;      // 強い上昇
  else if (price_change_24h > 2) timing_score += 25; // 穏やかな上昇
  else if (price_change_24h > -2) timing_score += 20; // レンジ
  else if (price_change_24h > -5) timing_score += 10; // 軽い下落
  else timing_score += 5;                             // 急落
  
  // タイミング判定
  if (timing_score >= 75) return { score: timing_score, status: "EXCELLENT", action: "ENTER_NOW" };
  else if (timing_score >= 60) return { score: timing_score, status: "GOOD", action: "CONSIDER_ENTRY" };
  else if (timing_score >= 40) return { score: timing_score, status: "FAIR", action: "WAIT_FOR_CONFIRMATION" };
  else return { score: timing_score, status: "POOR", action: "AVOID" };
}

OUTPUT: {
  btc_timing: {
    score: 82,
    status: "EXCELLENT",
    action: "ENTER_NOW",
    confidence: 0.91
  },
  sol_timing: { ... },
  eth_timing: { ... }
}
```

#### Block 11e: Signal Classification Engine ⭐

```javascript
// 目的: 最終的なトレードシグナルを分類
// 4つのシグナルタイプを出力

INPUT: 
- Block 6 (whale_score)
- Block 7 (fomo_score)
- Block 9 (timing_score)
- Block 8 (divergence_type)

CLASSIFICATION LOGIC:
function classifySignal(whale_score, fomo_score, timing_score, divergence_type) {
  
  // 🎯 Type 1: SMART_MONEY_FRONT_RUN
  if (whale_score >= 70 && fomo_score < 55 && timing_score >= 75) {
    return {
      signal_type: "SMART_MONEY_FRONT_RUN",
      emoji: "🎯",
      action: "BUY NOW",
      confidence: 0.90,
      reasoning: "Whales are accumulating BEFORE retail FOMO - ideal entry window",
      risk_level: "MEDIUM",
      position_size: "25-35% of portfolio",
      stop_loss: "-8%",
      take_profit_1: "+15%",
      take_profit_2: "+30%",
      time_horizon: "3-7 days"
    };
  }
  
  // ⚠️ Type 2: RETAIL_EXHAUSTION
  else if (fomo_score >= 75 && whale_score < 40 && timing_score < 40) {
    return {
      signal_type: "RETAIL_EXHAUSTION",
      emoji: "⚠️",
      action: "EXIT NOW",
      confidence: 0.85,
      reasoning: "Retail FOMO peaked while whales are exiting - distribution phase",
      risk_level: "HIGH",
      position_size: "CLOSE ALL POSITIONS",
      stop_loss: "IMMEDIATE",
      take_profit_1: "N/A",
      take_profit_2: "N/A",
      time_horizon: "EXIT WITHIN 24H"
    };
  }
  
  // 🚀 Type 3: EVENT_CASCADE
  else if (whale_score >= 65 && fomo_score >= 65 && timing_score >= 60) {
    return {
      signal_type: "EVENT_CASCADE",
      emoji: "🚀",
      action: "STRONG BUY",
      confidence: 0.92,
      reasoning: "Whales + Retail aligned - explosive upside potential",
      risk_level: "LOW",
      position_size: "40-50% of portfolio",
      stop_loss: "-5%",
      take_profit_1: "+25%",
      take_profit_2: "+50%",
      time_horizon: "1-3 days"
    };
  }
  
  // 🚫 Type 4: SOCIAL_TRAP
  else if (fomo_score >= 70 && whale_score < 50) {
    return {
      signal_type: "SOCIAL_TRAP",
      emoji: "🚫",
      action: "AVOID",
      confidence: 0.80,
      reasoning: "High social noise without whale support - likely fake pump",
      risk_level: "VERY HIGH",
      position_size: "0% (STAY OUT)",
      stop_loss: "N/A",
      take_profit_1: "N/A",
      take_profit_2: "N/A",
      time_horizon: "DO NOT ENTER"
    };
  }
  
  // ⏸️ Default: WAIT
  else {
    return {
      signal_type: "NO_SIGNAL",
      emoji: "⏸️",
      action: "WAIT",
      confidence: 0.50,
      reasoning: "Market conditions unclear - wait for better setup",
      risk_level: "NEUTRAL",
      position_size: "0%",
      stop_loss: "N/A",
      take_profit_1: "N/A",
      take_profit_2: "N/A",
      time_horizon: "MONITOR"
    };
  }
}

OUTPUT: {
  btc_signal: {
    signal_type: "SMART_MONEY_FRONT_RUN",
    emoji: "🎯",
    action: "BUY NOW",
    confidence: 0.90,
    whale_score: 87,
    fomo_score: 34,
    timing_score: 82,
    // ... (full signal object)
  },
  sol_signal: { ... },
  eth_signal: { ... },
  timestamp: "2025-11-01T02:15:00Z"
}
```

#### Block 12: Entry/Exit Calculator

```javascript
// 目的: 具体的なエントリー価格・ストップロス・利確目標を計算
// 手法: ATR-based position sizing + Risk:Reward ratio

INPUT: 
- Block 1 (current_price)
- Block 11e (signal, stop_loss_percent, take_profit_1_percent, take_profit_2_percent)

CALCULATION:
function calculateLevels(current_price, signal) {
  const entry_price = current_price;
  const stop_loss = entry_price * (1 + signal.stop_loss / 100);  // e.g. -8% → 0.92
  const tp1 = entry_price * (1 + signal.take_profit_1 / 100);
  const tp2 = entry_price * (1 + signal.take_profit_2 / 100);
  
  // Risk:Reward ratio
  const risk = Math.abs(entry_price - stop_loss);
  const reward_1 = tp1 - entry_price;
  const reward_2 = tp2 - entry_price;
  
  const rr_ratio_1 = reward_1 / risk;
  const rr_ratio_2 = reward_2 / risk;
  
  // Position size (Kelly Criterion adjusted)
  const win_rate = signal.confidence;
  const kelly = (win_rate * rr_ratio_1 - (1 - win_rate)) / rr_ratio_1;
  const conservative_kelly = kelly * 0.5;  // Half-Kelly for safety
  
  return {
    entry: entry_price.toFixed(2),
    stop_loss: stop_loss.toFixed(2),
    take_profit_1: tp1.toFixed(2),
    take_profit_2: tp2.toFixed(2),
    risk_amount: risk.toFixed(2),
    reward_1_amount: reward_1.toFixed(2),
    reward_2_amount: reward_2.toFixed(2),
    rr_ratio_1: rr_ratio_1.toFixed(2),
    rr_ratio_2: rr_ratio_2.toFixed(2),
    recommended_position_size: `${(conservative_kelly * 100).toFixed(1)}%`,
    max_loss_if_stopped: `${signal.stop_loss}%`
  };
}

OUTPUT: {
  btc: {
    entry: "67450.23",
    stop_loss: "62054.21",
    take_profit_1: "77567.76",
    take_profit_2: "87685.30",
    rr_ratio_1: "1.87",
    rr_ratio_2: "3.74",
    recommended_position_size: "28.5%"
  },
  sol: { ... },
  eth: { ... }
}
```

---

### 3.4 Output Layer

#### Block 13: Professional Alert Formatter

```javascript
// 目的: Telegram メッセージを4つのテンプレートでフォーマット
// テンプレート: BUY, SELL, STRONG_BUY, AVOID

INPUT: Block 11e (signal) + Block 12 (levels)

TEMPLATES:

// Template 1: SMART_MONEY_FRONT_RUN (BUY)
function formatBuySignal(asset, signal, levels) {
  return `
🎯 **SMART MONEY ALERT** 🎯

**Asset**: ${asset.toUpperCase()}
**Signal**: FRONT-RUN OPPORTUNITY
**Action**: 🟢 **BUY NOW**
**Confidence**: ${(signal.confidence * 100).toFixed(0)}%

━━━━━━━━━━━━━━━━━━━━
📊 **ANALYSIS**
━━━━━━━━━━━━━━━━━━━━

🐋 Whale Activity: ${signal.whale_score}/100 (${getWhaleStatus(signal.whale_score)})
😱 Retail FOMO: ${signal.fomo_score}/100 (${getFOMOStatus(signal.fomo_score)})
⏰ Timing: ${signal.timing_score}/100 (${getTimingStatus(signal.timing_score)})

💡 **Why This Works**:
${signal.reasoning}

━━━━━━━━━━━━━━━━━━━━
💰 **TRADE SETUP**
━━━━━━━━━━━━━━━━━━━━

📍 Entry: $${levels.entry}
🛑 Stop Loss: $${levels.stop_loss} (${signal.stop_loss})
🎯 Take Profit 1: $${levels.take_profit_1} (+${signal.take_profit_1})
🎯 Take Profit 2: $${levels.take_profit_2} (+${signal.take_profit_2})

📊 Risk:Reward: 1:${levels.rr_ratio_2}
💼 Position Size: ${levels.recommended_position_size} of portfolio
⏱️ Time Horizon: ${signal.time_horizon}

━━━━━━━━━━━━━━━━━━━━
⚠️ **RISK MANAGEMENT**
━━━━━━━━━━━━━━━━━━━━

• Max Loss: ${signal.stop_loss} (${levels.max_loss_if_stopped} of position)
• Risk Level: ${signal.risk_level}
• Exit 50% at TP1, let 50% run to TP2
• Move SL to breakeven after TP1 hit

━━━━━━━━━━━━━━━━━━━━
📈 **MARKET DATA**
━━━━━━━━━━━━━━━━━━━━

Current Price: $${asset.current_price}
24h Change: ${asset.change_24h > 0 ? '+' : ''}${asset.change_24h.toFixed(2)}%
24h Volume: $${(asset.volume_24h / 1000000000).toFixed(2)}B

🕐 Signal Generated: ${new Date().toISOString()}

━━━━━━━━━━━━━━━━━━━━

⚡ **ACT FAST** - Whales are moving NOW
  `;
}

// Template 2: RETAIL_EXHAUSTION (SELL)
function formatSellSignal(asset, signal, levels) {
  return `
