# 02_SignalGenerationAlgorithm - v1.1 Update (2025-11-14)

## 1. 全体像（今回のアップデート範囲）

- 対象: SentimentBias / NewsFlag / Bias Brief テンプレ（Summary / Risk Note）。
- 目的:
  - Grok (xAI) の実APIを用いて、センチメントとニュースリスクを定量化。
  - Score / Confidence / NewsFlag に基づく一貫した文章テンプレを整備し、UXを安定させる。
  - CryptoQuant 側は一時的にダミーとしつつ、将来の実データ切り替えに備えた構造を確立。

## 2. Grok 連携と SentimentBias v1.1

### 2-1. GrokSentimentMetrics

Grok 側は /chat/completions 互換のエンドポイントに対して以下のプロンプトを送り、JSONのみを返すよう指示する。

- 入力シンボル: 例) BTCUSDT
- 分析対象: 直近 windowMinutes 分の X(Twitter) 上のセンチメント。
- 出力 JSON スキーマ:

{
"sentimentScore": -1.0 〜 +1.0, // -1.0 (very bearish) to +1.0 (very bullish)
"mentionVolumeScore": 0.0 〜 1.0, // 0.0 (silent) to 1.0 (extremely active)
"narrativeRiskScore": 0.0 〜 1.0 // 0.0 (no FUD / hype) to 1.0 (extreme FUD or hype)
}

text

HttpGrokClient では、レスポンスの `choices[0].message.content` を JSON.parse し、上記3つの値を GrokSentimentMetrics として受け取る。

### 2-2. SentimentBias v1.1 の計算式

記号定義:

- \( s = \) sentimentScore \(\in [-1, 1]\)
- \( v = \) mentionVolumeScore \(\in [0, 1]\)
- \( r = \) narrativeRiskScore \(\in [0, 1]\)

スコア計算:

\[
\text{volumeBoost} = 3 \cdot \max(0, v - 0.6)
\]

\[
\text{score}_\text{raw} = 3.5 \cdot s + \text{volumeBoost} - 4 \cdot r
\]

\[
\text{SentimentBias} = \text{clamp}(\text{score}_\text{raw}, -5, +5)
\]

意図:

- sentimentScore が強いほど SentimentBias に直接寄与するが、単独で ±5 を容易に振り切らないよう係数を 3.5 に設定。
- mentionVolumeScore が 0.6 を超える領域のみ「情報量が多い」とみなし、上振れ時に追加ボーナスを付与。
- narrativeRiskScore は FUD や過度なポジキャンの強さを表し、4倍で強めに減点することで、「ニュースリスクの高いトレンド」を積極的に抑制。

## 3. NewsFlag v1.1

narrativeRiskScore r に基づき、以下の3段階で判定する。

- r ≥ 0.75 → Red
  - 強いFUD/イベントドリブンな相場。原則として directional ポジションは highly speculative。
- 0.4 ≤ r < 0.75 → Yellow
  - ヘッドラインリスクが有意。タクティカルトレード（短期・軽サイズ）を想定。
- r < 0.4 → Green
  - ニュースリスクは低く、通常のリスク管理の範囲内。

NewsFlag は Bias Brief の Risk Note および将来の position sizing ロジックに影響する。

## 4. Bias Brief テンプレ v1.0

### 4-1. Summary テンプレ

Summary は signal × confidence を軸に決まる。

- BUY:
  - High:   "Buyers are firmly in control — upside has a clear edge this session."
  - Medium: "Buyers are stepping in — upside has the edge this session."
  - Low:    "Buyers have a slight edge, but the setup remains fragile."
- SELL:
  - High:   "Sellers are firmly in control — downside has a clear edge this session."
  - Medium: "Sellers are pressing — downside has the edge this session."
  - Low:    "Sellers have a slight edge, but the setup remains fragile."
- NO-TRADE:
  - any:    "No clear edge this session — capital is better preserved on the sidelines."

### 4-2. Risk Note テンプレ

Risk Note は NewsFlag / normalizedScore / confidence を組み合わせて決定する。

1. NewsFlag = Red（最優先）
   - signal = NO-TRADE:
     - "Major narrative risk with no clear edge — standing aside is the default choice."
   - その他:
     - "Major narrative risk is in play; treat all directional setups as highly speculative and consider standing aside."

2. NewsFlag = Green
   - highScore (score ≥ 4 かつ confidence = High):
     - "Trend conditions are favorable; still size positions within your standard risk limits."
   - midScore (score ≥ 3):
     - "Mixed signals remain; treat this setup as opportunistic, not must-trade."
   - lowScore (score ≤ 2):
     - "Edge is thin; keep size small and be quick to cut if conditions change."

3. NewsFlag = Yellow
   - highScore:
     - "Event risk is elevated; even with a clear bias, avoid oversized positions and tighten stops."
   - midScore:
     - "Headline risk is present; treat this as a tactical trade only and be prepared for abrupt swings."
   - lowScore:
     - "Headline noise is high relative to edge; participation should be minimal or skipped."

## 5. 今後のTODO（このセクション）

- 実際の相場が大きく異なる局面（強トレンド/レンジ/急落など）でログサンプルを収集し、係数およびテンプレ文面の微調整を行う。
- NewsFlag = Red が発生したケースで、実際のトレード回避にどの程度寄与するかをレビュー。
- CryptoQuant Data API 側のサポート対応完了後、オンチェーン/デリバ指標についても実データに切り替え、全体のBiasバランスを再調整する。
### v1.1.2 – NewsFlag & Bias Brief behaviour (2025-11-14)

- NewsFlag is computed upstream (Green / Yellow / Red) and passed into the scoring layer as scores.newsFlag.
- Signal decision logic (v1.1.1):
  - Base raw score = onChainScore + derivativesScore + sentimentScore, clamped to [-5, +5].
  - If NewsFlag=Red: override final signal to STAND_ASIDE, set normalizedScore=3 and confidence=Medium, regardless of raw score.
  - Otherwise: BUY / SELL / STAND_ASIDE is chosen from raw score thresholds, with normalizedScore mapped to a 1–5 scale and confidence inferred from |raw|.
- Bias Brief generator (v1.1.2):
  - For Green: tone is determined only by normalizedScore and confidence (from cautious to strong conviction).
  - For Yellow: keep directional bias but explicitly recommend smaller-than-usual position size and fast exit if volatility or news risk increases.
  - For Red: summary, risk note, and suggested plan all strongly recommend staying flat or significantly reducing exposure until the news event is resolved.
- Operational note:
  - v1.1.2 keeps CryptoQuant inputs optional (dummy fallback is allowed); Grok-based sentiment and NewsFlag logic are fully functional even while CryptoQuant Data API endpoints are being finalized.

