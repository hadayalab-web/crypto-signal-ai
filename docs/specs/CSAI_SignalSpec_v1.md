# CSAI_SignalSpec_v1

シグナル生成アルゴリズム v1.0 の仕様書です。  
本仕様は CryptoSignal AI Phase 0 MVP の「セッション前 Clarity <60m」を実現するための最小実装版として定義します。

## 1. スコープとタイムフレーム

- 対象銘柄: BTC（BTCUSD/BTCUSDT を想定）
- 対象セッション:
  - ロンドンオープン（EU セッション）
  - NY オープン（US セッション）
- シグナル生成タイミング:
  - 各セッション開始直前の 60 分間（T−60〜T）を集約し、1 シグナルを生成
  - 原則として「1 セッション 1 本」のシグナル（例外はニュースによる強制 NO-TRADE）

## 2. 入力データ概要

### 2.1 CryptoQuant

v1 では以下の 4 系統に絞る。

1. Exchange Netflow（BTC 全取引所 純フロー・24h）
2. Futures Open Interest（BTC 先物 OI・24h 変化）
3. Funding Rate（BTC パーペチュアル資金調達率）
4. Stablecoin Exchange Netflow（USDT 等ステーブルコイン 取引所純フロー・24h）

### 2.2 Grok

1. X（旧Twitter）センチメントスコア（BTC 関連ポスト）
2. ニュースイベントフラグ（Regulation / Hack / ETF / 取引所リスク等）

## 3. 各指標のスコアリング

すべての指標を -1, 0, +1 の 3 値にマッピングし、合計スコア S を用いる。

### 3.1 Exchange Netflow（BTC）

- 大きな純流出（リザーブ減少）: +1（強気）
- 大きな純流入（リザーブ増加）: -1（弱気）
- 中間レンジ: 0（ニュートラル）

※「大きな」の閾値は v1.0 では経験則＋分位点で決め、v1.1 以降で最適化する。

### 3.2 Futures Open Interest（OI）

- OI 上昇 ＋ 価格上昇 ＋ 上昇幅が有意: -1（レバレッジロング過熱）
- OI 大幅減少 ＋ 価格下落: 0（レバレッジ解消フェーズとして中立扱い）
- 変化小: 0

### 3.3 Funding Rate

- 明確なプラス高水準（例: +0.05%以上かつ上昇傾向）: -1（ロング過多）
- 明確なマイナス（例: -0.05%以下）: +1（ショート過多）
- それ以外: 0

### 3.4 Stablecoin Exchange Netflow

- 顕著なステーブルコイン流入（買付余力の流入）: +1
- 顕著なステーブルコイン流出: -1
- 中間: 0

### 3.5 Grok センチメント（X）

- Bullish: +1
- Neutral: 0
- Bearish: -1

※センチメントの極端な偏り（FOMO / Panic）は v1 では ±1 の範囲に抑え、v1.1 以降で重み調整を検討。

## 4. ニュースイベントフラグ（Grok）

Grok に対して「Red / Yellow / Green」程度のイベントレベル判定をさせる。

- Red イベント例:
  - 大規模ハッキング
  - 重大な規制リスク（禁止・摘発レベル）
  - 大手取引所の破綻・停止
- v1.0 のルール:
  - Red フラグが立ったセッションは **無条件 NO-TRADE**
  - Yellow/Green は情報として Bias Brief に記載するが、スコアリングには直結させない

## 5. 合計スコアとシグナル判定

合計スコア S を以下で定義する。

S = S_netflow + S_OI + S_funding + S_stable + S_sentiment

- 最大値: +5
- 最小値: -5

シグナル判定:

- S >= +2: BUY バイアス
- S <= -2: SELL バイアス
- -1 <= S <= +1: NO-TRADE

ただし、ニュース Red フラグがある場合は、上記に関係なく NO-TRADE を優先する。

## 6. レジーム・フィルタ（ボラティリティ）

直近 24h の高値・安値からレンジ率を算出する。

Range24h = (High24h - Low24h) / Close24h

- Range24h < 2% かつ |S| = 2 程度の弱いバイアス:
  - そのセッションは NO-TRADE に格下げ（狭いレンジでブレイク期待値が低いと判断）
- Range24h >= 4% など十分なボラがある場合:
  - 通常通り S の閾値で判定

※ 2% / 4% の閾値は v1.1 でチューニング対象。

## 7. リスク管理と価格帯

v1.0 では、ユーザーごとの口座サイズではなく「%ベース」の推奨リスクを提示する。

- 推奨ストップロス:
  - エントリー価格から -1.5%
- 利確ゾーン:
  - TP1: +1.5%
  - TP2: +3.0%

Bias Brief では「Stop -1.5%, TP +1.5% / +3.0%」のようにパーセンテージで提示し、具体的な価格はフロントエンドで換算する。

## 8. Bias Brief 出力仕様

Bias Brief は常に以下の構造で出力する。

1. 結論:
   - 例: `Signal: BUY (Score +3/5, Confidence: Medium)`
2. コンテキスト:
   - 例: `Session: NY Open | Window: last 60m`
3. 根拠の要約:
   - 例: `Reasons: Exchange outflows, Stablecoin inflows, Negative funding (short crowding), X sentiment mildly bullish.`
4. レジーム／リスク注意書き:
   - 例: `Risk Note: Low 24h range – expect slower follow-through.`

NO-TRADE の場合:

- 例: `Signal: NO-TRADE (Score +1/5, no clear edge)`
- 「期待値の低さ」や「ニュース不確実性」を一言で明示し、見送りを正当化するメッセージを添える。

## 9. バージョン管理

- 本仕様は **CSAI_SignalSpec_v1** として管理する。
- v1.1 以降で見直す論点:
  - 各指標の閾値・重み
  - Range24h 閾値
  - センチメントのスコアレンジ拡張（±2 など）
- 改定時は CHANGELOG と MasterDoc の「2. シグナル生成アルゴリズム」から参照するバージョンを更新する。
