# CSAI_MessageUI_Examples_v1

CryptoSignal AI のメッセージUI用コピーライブラリ v1.0。  
本ファイルは `CSAI_MessageUI_v1` の仕様に基づき、Claude Sonnet 4.5 Thinking が提案した Bias Brief テンプレート、UIテキスト、通知メッセージ案を整理した「実例集」として管理する。  

参照:  
- `docs/specs/CSAI_SignalSpec_v1.md`  
- `docs/specs/CSAI_MessageUI_v1.md`  

---

## 1. 高レベル改善ポイント（Claude 要約）

- トーンは calm / confident / clear（静かだが自信を持って明確に伝える）を基調とする。  
- FOMO を煽る表現を避け、「冷静な実行」と「不要なトレードを減らす」ことを支援する。  
- BUY/SELL/NO-TRADE それぞれに、ペルソナ（25–44歳の忙しいトレーダー）に刺さる一言サマリを用意する。  
- メインカードには「結論＋一言要約＋ざっくりしたスコア／Confidence」を載せ、残りは Details に隠して認知負荷を下げる。  

---

## 2. Bias Brief テンプレ候補（BUY/SELL/NO-TRADE）

この節では、CSAI_MessageUI_v1 の Line 3 / Line 5 / Line 6 で使える英文フレーズ案を整理する。  

### 2.1 BUY 用サマリ候補 (Line 3)

- Summary: Buyers are stepping in — upside has the edge this session.  
- Summary: Smart money is rotating in; staying sidelined risks missing the move.  
- Summary: Buying pressure is building; momentum is quietly shifting in your favor.  
- Summary: Trend structure is improving — bulls are back in control for now.  

### 2.2 SELL 用サマリ候補 (Line 3)

- Summary: Leverage is stacked on longs — downside risk dominates if momentum flips.  
- Summary: Market looks top-heavy; patience on the short side may be rewarded.  
- Summary: Rallies are being sold into — strength is more likely a fade than a breakout.  
- Summary: Upside looks tired; risk is skewed to the downside this session.  

### 2.3 NO-TRADE 用サマリ候補 (Line 3)

- Summary: Market is noisy and directionless — sitting out protects your edge today.  
- Summary: No clear edge right now; capital is better preserved than deployed.  
- Summary: Signals conflict across data — best move is to watch, not chase.  
- Summary: Conditions are messy; waiting for cleaner setups will pay off over time.  

---

## 3. Risk Note / Suggested Plan 候補

### 3.1 Risk Note 例 (Line 5)

- Risk Note: 24h range is still tight — expect slower follow-through and avoid overleveraging.  
- Risk Note: Volatility is elevated; size down if you’ve had recent losses.  
- Risk Note: Liquidity pockets may cause sharp wicks — keep stops realistic, not emotional.  
- Risk Note: Mixed signals remain; treat this setup as opportunistic, not must-trade.  

### 3.2 Suggested Plan 例 (Line 6)

BUY シナリオ向け:

- Suggested plan: Enter near support, risk ~1.5%, scale out at +1.5% and +3.0%.  
- Suggested plan: Start with smaller size, add only if price confirms in your favor.  
- Suggested plan: Define your invalidation level before entering; avoid chasing green candles.  

SELL シナリオ向け:

- Suggested plan: Look to fade strength into resistance, keep risk tight above recent highs.  
- Suggested plan: Use modest size; volatility can squeeze shorts before breaking lower.  

NO-TRADE 向け:

- Suggested plan: No new trades; use this session to review past setups instead.  
- Suggested plan: Stay flat; journal what would tempt you to overtrade in this environment.  
- Suggested plan: Focus on preparation — refine your levels for the next clear edge.  

---

## 4. ケース別 完成形サンプル（A/B/C）

CSAI_MessageUI_v1 の Line 1〜6 をすべて埋めたサンプル。  

### 4.1 ケースA: 強いBUYバイアス  
Score +4/5, High confidence

- Line 1: `Signal: BUY (Score +4/5, Confidence: High)`  
- Line 2: `Session: NY Open | Window: last 60m`  
- Line 3: `Summary: Buyers are stepping in — upside has the edge this session.`  
- Line 4: `Reasons: Consistent exchange outflows, strong stablecoin inflows, negative funding, and clearly bullish tone on X.`  
- Line 5: `Risk Note: Volatility is elevated; avoid oversized positions and respect your predefined stop.`  
- Line 6: `Suggested plan: Enter near identified support, risk ~1.5%, scale out at +1.5% and +3.0%, then reassess.`  

### 4.2 ケースB: 弱いSELLバイアス（高ボラ）

Score -2/5, Medium confidence, 高ボラ環境

- Line 1: `Signal: SELL (Score -2/5, Confidence: Medium)`  
- Line 2: `Session: London Open | Window: last 60m`  
- Line 3: `Summary: Leverage is stacked on longs — downside risk dominates if momentum flips.`  
- Line 4: `Reasons: Heavy BTC inflows to exchanges, rising OI with rich positive funding, and cautious sentiment creeping into X.`  
- Line 5: `Risk Note: Volatility is high; expect sharp squeezes before any sustained move lower.`  
- Line 6: `Suggested plan: Consider fading strength into resistance with reduced size, keep stops above recent swing highs.`  

### 4.3 ケースC: NO-TRADE（news Redフラグ）

Score +1/5, News Red フラグ

- Line 1: `Signal: NO-TRADE (Score +1/5, no clear edge)`  
- Line 2: `Session: NY Open | Window: last 60m`  
- Line 3: `Summary: Market is noisy and event-driven — standing aside protects your capital today.`  
- Line 4: `Reasons: On-chain and derivatives data are mixed, while a major news event is driving unpredictable flows.`  
- Line 5: `Risk Note: News-driven volatility can ignore technicals; taking fresh positions here is closer to gambling than trading.`  
- Line 6: `Suggested plan: Stay flat; observe how price digests the news and prepare levels for the next, cleaner session.`  

---

## 5. UIテキスト / ラベル / ボタン文言候補

### 5.1 メインカードヘッダ・ラベル

- Header: `Session Outlook (Next 60 min)`  
- Subheader: `Bias Brief`  
- Signal badge: `BUY` / `SELL` / `NO-TRADE`  
- Score label: `Signal Score`  
- Confidence label: `Confidence`  

例:

- `Signal Score: +4/5`  
- `Confidence: High`  

CTA ボタン:

- `View details`  
- `Open full brief`  

フッターテキスト:

- `Powered by institutional-grade data and AI research.`  

### 5.2 詳細ドロワー内セクションタイトル

- `Backdrop` – セッションや市場環境の簡易説明  
- `Analysis` – テクニカル根拠の要約  
- `Alerts` – ニュースフラグや注意点  
- `Action Framework` – 推奨アクション方針  
- `Advisory Note` – メンタル・リスクに関する一言アドバイス  

各セクションに1〜2行の短い説明文を添える想定。  

---

## 6. Push通知メッセージ案

### 6.1 BUY 通知（例）

- `NY Open: BUY bias detected (Score +4/5). Check the brief before entering.`  
- `Session alert: Bullish setup forming. Review today’s plan before you trade.`  
- `Heads up: Trend signals align on the long side. See the BUY brief for details.`  

### 6.2 SELL 通知（例）

- `London Open: SELL bias (Score -3/5). Consider tightening your risk.`  
- `Session alert: Market looks top-heavy. Check the SELL brief before acting.`  
- `Heads up: Downside risk is elevated. Review today’s short-side outlook.`  

### 6.3 NO-TRADE 通知（例）

- `Session update: NO-TRADE — no clear edge this hour.`  
- `No clear opportunity: Today’s pre-session brief suggests staying flat.`  
- `Heads up: Mixed signals and news noise. Best move may be to observe, not trade.`  

---

## 7. 運用メモ

- 本ファイルはコピー候補集であり、実装時には UI コンテキストに応じて軽微な調整（句読点や長さ調整）を行ってよい。  
- 新しいフレーズを本番でテストして定着させる場合は、ここに追記し、バージョン管理すること。  
