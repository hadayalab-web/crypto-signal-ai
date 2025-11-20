# CSAI_MessageUI_v1

CryptoSignal AI のメッセージUI仕様 v1.0。  
本仕様は `CSAI_SignalSpec_v1` で定義されたシグナル生成ロジックを、ユーザーにとって分かりやすく・判断疲労を減らす形で表示するためのUI/文言ルールを定義する。  

参照: `docs/specs/CSAI_SignalSpec_v1.md`  

---

## 1. ゴールと前提

- ゴール: セッション前60分で「何をすべきか」を一目で理解できる Bias Brief を提示し、迷いと過剰な情報量を減らす。  
- 前提ペルソナ:
  - 英語圏を中心とした暗号資産トレーダー（US/IN/UK/CA/AU などを初期ターゲット）。  
  - 年齢レンジは統計的にボリュームが大きい 25–44歳をコア想定（ミドルレンジのリテラシー＋忙しいライフスタイル）。  
  - 裁量トレード経験あり、オンチェーンやデリバティブ指標の「大雑把な意味」は理解しているが、毎回自分で全部見る時間はない。  

- 行動科学的前提:
  - 決定疲労と情報過多を避けるため、毎回同じ構造・短いテキストで提示する（Hickの法則）。  
  - フレーミング効果を利用し、「今はどちら側にエッジがあるか」を先に明示する。  
  - アラート疲労を避けるため、通知頻度と情報量を絞る。  

---

## 2. Bias Brief テキスト構造

Bias Brief は最大 6 行構成とし、毎回同じ順番で表示する。  

1. Line 1: 結論  
2. Line 2: コンテキスト  
3. Line 3: ペルソナ向け一言要約  
4. Line 4: テクニカル根拠サマリ  
5. Line 5: レジーム／リスク注意書き  
6. Line 6: 推奨アクション（任意だが推奨）  

### 2.1 Line 1: 結論

フォーマット例:

- `Signal: BUY (Score +3/5, Confidence: Medium)`  
- `Signal: SELL (Score -2/5, Confidence: Low)`  
- `Signal: NO-TRADE (Score +1/5, no clear edge)`  

ルール:

- シグナル種別（BUY / SELL / NO-TRADE）は必ず先頭に置く。  
- Score は `CSAI_SignalSpec_v1` の合計スコア S を 5 段階に正規化した表示。  
- Confidence は `Low / Medium / High` の3段階。  

### 2.2 Line 2: コンテキスト

フォーマット例:

- `Session: London Open | Window: last 60m`  
- `Session: NY Open | Window: last 60m`  

ルール:

- セッション名は `London Open / NY Open` に限定（v1.0）。  
- Window は `last 60m` 固定（Clarity <60m を明示）。  

### 2.3 Line 3: ペルソナ向け一言要約

フォーマット例:

- BUY の例:  
  - `Summary: Buyers are stepping in — upside has the edge this session.`  
  - `Summary: Smart money is rotating in; staying sidelined risks missing the move.`  
- SELL の例:  
  - `Summary: Leverage is stacked on longs — downside risk dominates if momentum flips.`  
- NO-TRADE の例:  
  - `Summary: Market is noisy and directionless — sitting out protects your edge today.`  

ルール:

- 1 行 1 文（セミコロンや接続詞はあってよいが、2文にはしない）。  
- ペルソナの「自分の状況を分かってくれている感」を狙い、感情と行動を同時に示す。  
- 極端な煽り（guaranteed, sure win など）は禁止。  

### 2.4 Line 4: テクニカル根拠サマリ

フォーマット例:

- `Reasons: Exchange outflows, fresh stablecoin inflows, negative funding, sentiment leaning bullish on X.`  
- `Reasons: Heavy exchange inflows, rising OI with positive funding, risk-off tone on X.`  

ルール:

- 最大 3–4 要因まで。  
- 要因カテゴリは `on-chain / derivatives / sentiment / news` に自然と分類される表現を使う。  
- 詳細な数値（% や絶対値）はUI側の詳細ビューで扱い、ここでは方向性のみを書く。  

### 2.5 Line 5: レジーム／リスク注意書き

フォーマット例:

- `Risk Note: 24h range is still tight — expect slower follow-through and avoid overleveraging.`  
- `Risk Note: Volatility is elevated; size down if you've had recent losses.`  

ルール:

- レジーム（低ボラ / 高ボラ）やニュース不確実性など、シグナルの「前提条件」を一言で伝える。  
- 損失回避・過剰レバレッジ抑制を促すニュアンスを含める。  

### 2.6 Line 6: 推奨アクション（任意）

フォーマット例:

- `Suggested plan: Enter near support, risk ~1.5%, scale out at +1.5% and +3.0%.`  
- `Suggested plan: No new trades; use this session to review past setups instead.`  

ルール:

- v1.0 では `CSAI_SignalSpec_v1` のリスクパラメータ（SL -1.5%, TP +1.5% / +3.0%）をデフォルト文言として使う。  
- NO-TRADE の場合は「何もしない」以外の建設的行動（復習、記録など）を提案する。  

---

## 3. UI コンポーネント仕様（メッセージビュー）

### 3.1 メインカード（サマリビュー）

要素:

- Signal badge: BUY / SELL / NO-TRADE（色付きラベル）。  
- Score & Confidence: `+3/5 | Medium` など。  
- Line 3 の一言要約。  
- Entry/Stop/TP の % または価格帯（シンプル表示）。  

ルール:

- メインカードでは「シグナル種別」「一言要約」「ざっくりRR」が一目で分かる状態にする。  
- 詳細要因（Reasons）やリスクノートは折りたたみ（Details）内に隠す。  

### 3.2 詳細ドロワー（Details）

開いたときに表示する内容:

- Line 1〜6 すべて。  
- on-chain / derivatives / sentiment の内訳（+1/0/−1 をシンプルなバーやアイコンで）。  
- ニュースフラグ（Red/Yellow/Green）の状態と簡単な説明。  

ルール:

- 初期表示は閉じた状態とし、ユーザーが必要に応じて開くスタイル（情報過多の回避）。  
- PCでは右側ペイン表示、モバイルでは全画面モーダルなどプラットフォームに応じて最適化。  

### 3.3 カラーとアイコン

- BUY: 落ち着いたグリーン系。  
- SELL: 落ち着いたレッド系。  
- NO-TRADE: ニュートラルグレー。  

ルール:

- 色は過度に派手にせず、「危険／安心」を直感的に区別できる程度に抑える。  
- アイコン（上向き矢印、下向き矢印、一時停止マークなど）は1画面1つ程度に抑え、視覚ノイズを減らす。  

---

## 4. 通知・更新 UX

### 4.1 通知対象イベント

- 通知を出すイベント（デフォルトON）:
  - セッション開始前60分の確定シグナル生成。  
  - シグナル種別の変更（BUY⇄SELL / トレード⇄NO-TRADE）。  

- 通知を出さないイベント:
  - スコアの軽微な変動（例: +3→+2）。  
  - Confidence の微調整のみ。  

### 4.2 通知メッセージ例

- `NY Open: BUY signal (Score +3/5, Confidence Medium). Tap to view plan.`  
- `London Open: NO-TRADE — no clear edge this session.`  

ルール:

- 通知メッセージも「結論＋一言理由」スタイルを守る。  
- 深夜帯などユーザー指定のクワイエットタイムには通知を抑制できる設定を用意。  

---

## 5. Powered by 表記ポリシー

- v1.0 では UI 上の表記は抽象化し、次のような文言に統一する:  
  - `Powered by institutional-grade data and AI research.`  

- CryptoQuant / Grok など具体的なデータソース名は、ユーザー向けUIからは出さず、必要に応じてドキュメント（ホワイトペーパー、FAQ等）で説明する。  

---

## 6. 今後の拡張（CSAI_MessageUI_v2 以降）

- ユーザーごとの行動履歴やトレード結果をもとにしたパーソナライズ一言要約（例: 直近のドローダウンを踏まえたリスク提案）。  
- 過去シグナルと結果の簡易統計（勝率・平均RRなど）を Bias Brief 下部に表示。  
- ライトモード（最低限情報）とディープモード（詳細情報）の2レイヤーUI。  
- 多言語対応（アップセル版で検討）。  
