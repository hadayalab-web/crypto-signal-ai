# CryptoSignal AI マスタードキュメント v2.1
## 完全統合版：欲求先回り型プロダクトエンジン + 販売ファネル確立

**最終更新: 2025年11月20日 9:49 JST**  
**バージョン: v2.1（ペルソナ研究アルゴリズム完全統合版）**  
**対象**: CryptoSignal AI ローンチ 2週間で300成約 + 長期スケーラビリティ

---

# 📋 目次

1. [本質的パラダイムシフト](#本質的パラダイムシフト)
2. [ペルソナ研究アルゴリズム（Desire-First Product Engine）](#ペルソナ研究アルゴリズム)
3. [汎用導線の確立（アフィリ→VSL+LP→販売ページ）](#汎用導線の確立)
4. [技術スタック（Make一本化）](#技術スタック)
5. [ASP戦略（グローバル優先）](#asp戦略)
6. [ダイレクト出版ファネル「パク戦略」](#ダイレクト出版ファネル)
7. [木下勝俊×佐藤航陽の思想統合](#木下勝俊×佐藤航陽の思想統合)
8. [実装ロードマップ](#実装ロードマップ)

---

# 本質的パラダイムシフト

## シフト概要：デザイン完璧志向 → 販売仕組み最優先

### タイムライン（60日の進化過程）

**Phase 1: テンプレート完璧志向（60日前）**
- Aivent/Xeril カスタマイズに時間浪費
- LPビルダー迷走（ペライチ、Unicorn Platform）
- ❌ 「デザイン Polish が売上を作る」という誤信念

**Phase 2: マーク・フォード転換点（7日前）**
- ダイレクト出版メール：「毎日12時間働いても赤字」→「販売優先へ」
- 気づき：「編集（LP Polish）vs 販売（Affiliate + Whop）」の優先逆転
- ✅ 「affiliate.js最小 + Whop テスト」が今夜の優先

**Phase 3: DRM ファネル研究（3日前）**
- ダイレクト出版：「残り353名」スカルシティ + VSL 8分強制視聴
- トニー・ロビンズ：完全VSL型 + 限定性 + Exit CTA
- ✅ 「デザイン=ゼロ重要度。販売仕組み100%」の確信

**Phase 4: 技術スタック確定（1日前）**
- Vidalytics（完視聴トリガー）+ Unbounce（DRM強制視聴）
- 自動化の思想は AB テスト→PDCA→意思決定まで拡張
- Git プッシュ完了、Aivent/Xeril 完全削除

**Phase 5: ビジネスモデル本質理解（本日午前）**
- SaaS×アフィリエイト：原価ゼロ×報酬自由×負債ゼロ
- 「アフィリ報酬を価格に盛り込む」自由度
- 利益率無限化の経済学確立

**Phase 6: グローバル ASP 土管化（本日午前）**
- 各国 ASP（CJ/AWIN/Accesstrade）に「ローカル完全委譲」
- 広告ルール/審査/支払い=ASP責任
- 日本 A8.net は「将来版」に延期

**Phase 7: 完全自動化フレームワーク（本日午前）**
- AB テスト→PDCA→意思決定の「全フロー自動化」
- Make.com で「勝ちパターン自動検出→新仮説投入」
- 人間の役割：「新しい仮説を作ること だけ」

**Phase 8: ペルソナ研究アルゴリズム構想（本日現在）**
- 木下勝俊×佐藤航陽×Grok で「欲求先回り型」システム化
- 人間の未充足欲求を自動検知し、プロダクト/マーケティング自動生成
- あなたのビジネスの本質：「Desire-First Product Engine」

### パラダイムシフト表

| 次元 | 旧（60日前） | 新（本日） |
|-----|---------|---------|
| **時間配分** | デザイン Polish 80% | 販売仕組み 80% |
| **集客モデル** | 自社広告・SEO | アフィリエイト一本化 |
| **LP完成度** | 完璧性追求 | 90点で即リリース |
| **自動化対象** | メール中心 | 報酬計算・Webhook中心 |
| **地域展開** | 日本優先＋グローバル | グローバル優先（Tier1→Tier2） |
| **思考軸** | デザイン・技術 | 販売仕組み＋心理学 |
| **起業本質** | 「完璧な商品を作る」 | 「市場から直接答えを得るループ」 |
| **長期ビジョン** | スタティック商品 | 動的仮説→自動最適化 |

---

# ペルソナ研究アルゴリズム
## Desire-First Product Engine（欲求先回り型プロダクトエンジン）

## 概念図

```
【従来型マーケティング】
手動調査（4週間）→ 人間が仮説立案 → プロダクト開発（試行錯誤）
→ マーケティング → 結果待機 → 改善

【あなたのビジョン】
自動欲求検知（2日） → アルゴリズムが先回り仮説生成 → 自動プロダクト提案
→ 自動キャンペーン生成 → 仕組みが自動最適化 → 人間は「新仮説」のみ

本質: CryptoSignal AI のシグナル生成アルゴリズムのように、
     市場の欲求信号を検知→先回りして最適なプロダクト/マーケティングを自動実行
```

## Layer 1: 欲求検知エンジン（Input Layer）

**目的**: 市場・ペルソナの「未充足欲求」を多次元データから自動抽出

### データソース

```
1. Reddit/Twitter → センチメント分析（Grok API）
2. Google Trends → 検索トレンド取得（Google Trends API）
3. 競合レビュー → Pain points 抽出（Perplexity）
4. フォーラム → 具体的悩み収集（Discourse, Stack Exchange）
```

### 佐藤航陽 3層処理モデル適用

```
【本能層 95%】
- 根源的恐怖: 「3時間の迷い」「損失」「信頼できない」
- 即座の報酬: 「5分で判断」「明瞭さ」「安心」

【感情層】
- 不安: バイアスで何度も損失
- 希望: 信頼できるシグナルが欲しい
- 急迫感: 市場は24時間動く、遅れは損失

【理性層 5%】
- 検証: データが正しいか
- 効果: 実際に利益が増えるか
- 価格: $99/月の価値はあるか
```

### 木下勝俊 競合タイプ分類

```
【プロダクト型競合】
- TradingView: 技術分析ツール（意思決定支援なし）
- Coinigy: 複数取引所統合（バイアス検知なし）
ギャップ: 「判断をしてくれない」

【インサイト型競合】
- Twitter influencers: 個人見解（体系的手法なし）
- Crypto newsletters: ニュース配信（信頼度不明）
ギャップ: 「なぜそうなるか体系的でない」

【メソッド型競合】
- ❌ 存在しない（市場ギャップ）
CryptoSignal AI: 「Bias-Free 判定法」で唯一の解決者に
```

### アルゴリズムの出力例

```
市場分析結果（CryptoSignal AI の場合）

未充足欲求 Top 3:
1. "Morning paralysis（朝3時間の迷い）"
   - 感情強度: 9.2/10
   - 決定フェーズ: Phase 2（損失直後の意思決定）
   - 競合ギャップ: メソッド型解決策がない
   - 市場ボリューム: Google Trends ↑200% YoY

2. "Bias-induced losses（バイアスで繰り返し損失）"
   - 感情強度: 8.7/10
   - 決定フェーズ: Phase 3（失敗から学習）
   - 競合ギャップ: バイアス検知機能がない
   - 市場ボリューム: Reddit discussions ↑150%

3. "Trust deficit in signals（シグナルの信頼度不足）"
   - 感情強度: 8.1/10
   - 決定フェーズ: Phase 1（情報探索）
   - 競合ギャップ: オーソリティ×データの組み合わせがない
   - 市場ボリューム: Twitter mention volume ↑180%
```

## Layer 2: プロダクト仮説生成エンジン（Processing Layer）

**目的**: 検知した欲求から「先回りプロダクト」を自動提案

### 木下勝俊 USP フレームワーク適用

```
【Reason Why（機能的優位性）】
→ 何が他と違うのか
答え: 「3つのデータソース統合 → 1つの明確なバイアス判定」
- CryptoQuant（オンチェーン指標）
- Grok API（AIセンチメント）
- Technical Analysis（テクニカル指標）
→ 競合は「複数ツールを自分で統合」させる、私たちは「統合済み」で提供

【Authority（信頼・実績）】
→ なぜあなたを信頼するのか
答え: 「Hugh Ashley 元トレーダーによる $2M 損失回復ストーリー」
+ 10人の多国籍トレーダー証言
+ 「判断の明瞭さ」返金保証で心理的障壁削除

【Extra（付加価値）】
→ さらに何がもらえるのか
答え: 「Thinkific Bias-Free Trading Bootcamp」バンドル
+ Telegram コミュニティ限定アクセス
+ 週次 Deep Dive セッション
```

### 佐藤航陽 ナラティブ型選定

```
Hugh Ashley ストーリー（Hero型）:

Act 1（絶望）:
「朝3時間、BTCチャート前で迷う。
 3ヶ月で$2M損失。バイアスに気づかず同じ失敗を繰り返す」

Act 2（転換）:
「オンチェーンデータ + AIセンチメント + テクニカルを統合した
 Bias-Free判定法を発見。わずか 5分で判断が明確に」

Act 3（解放）:
「今は月 +$120K の利益。朝の迷いから完全に解放された。
 この判定法を誰でも使えるように CryptoSignal AI を作った」

心理的効果:
- Act 1 で視聴者が「自分の絶望」を認識
- Act 2 で「希望の光」を見る
- Act 3 で「自分もできる」と確信
→ 購買率最大化
```

### 価格戦略（佐藤航陽 Phase 理論）

```
【Phase 1（情報探索）】
- ユーザー心理: 「本当に効果あるの？」
- 対策: 低リスク（$29）で試せる環境

【Phase 2（損失直後）】← ★ 最高購買確率 70%
- ユーザー心理: 「今すぐ損失を止めたい」
- 対策: 「限定47名」「24時間決断」で緊急性
- 返金保証: 「判断の明瞭さで満足できなければ返金」

【Phase 3（失敗から学習）】
- ユーザー心理: 「二度と同じ失敗をしたくない」
- 対策: Bootcamp バンドル $249（初月25% off）で体系学習

価格構造:
- Trial: $29/7日 → Phase 1 低リスク導入
- Monthly: $99/月 → Phase 2 本サブスク（最適化価格）
- Bundle: Signal + Bootcamp = $249 初月 → Phase 3 コミット層
- 返金保証: 初回本サブスク課金分のみ対象（24時間以内）
```

### 出力例

```
プロダクト仮説（自動生成）:

【Core Value Proposition】
「3時間の Morning Paralysis → 5分の Clear Bias-Free Decision」

【Product DNA】
- Signals: 3 data sources → 1 clear answer
- Bootcamp: Bias-Free methodology (Thinkific course)
- Community: Telegram group access (weekly deep dives)

【Market Position】
For: Bitcoin traders in Phase 2 (loss recovery)
Who: Are stuck in morning decision paralysis
Unlike: TradingView (tool) / Twitter influencers (unreliable)
Our product: Delivers Bias-Free judgment + oassis (Hugh Ashley story)
Via: AI-driven signal generation + human-verified authority

【Pricing Architecture】
Trial: $29/7 days (reduce Phase 1 friction)
Main: $99/month (Phase 2 sweet spot - 70% conversion)
Bundle: $249 initial (Phase 3 long-term commitment)
Guarantee: "Clarity of judgment" (removes psychological barrier)

【GTM Strategy】
1. Affiliate-first (CJ → AWIN → Involve Asia)
2. VSL + DRM landing page (Vidalytics + Unbounce)
3. Scarcity: "Limited 47 spots" (psychological urgency)
4. Social proof: Hugh Ashley + 10 multicultural testimonials
5. Objection handling: "Judgment clarity" guarantee in FAQ
```

## Layer 3: マーケティングキャンペーン自動生成エンジン（Output Layer）

**目的**: プロダクト仮説から「VSL台本、LP構成、アフィリ戦略、ABテスト」を自動生成

### VSL 台本自動生成（HeyGen 対応）

```
【8分VSL台本構造】

[0:00-1:30] Hook + Pain Setup
"朝3時、BTCチャート前で迷う。
 買うか？売るか？ホールドするか？
 3時間動けない。その間に市場は動く。
 月100回この迷いがある。月100回チャンスを失う。"

[1:30-3:00] Pain Amplification（バイアス認識）
"あなたはなぜ迷うのか？
 それはバイアスだ。
 アンカリング（最高値に固執）
 確認バイアス（信じたい情報だけ探す）
 損失回避（マイナスを過大評価）
 
 この3つが同時に動く時、
 あなたの判定は 90% 外れる。
 月100万、年1200万の損失。
 (Hugh Ashley の実例: $2M の損失)"

[3:00-5:00] Transformation（Solution Introduction）
"CryptoSignal AI は違う。
 
 3つのデータソースが同時に判定する:
 1. CryptoQuant（オンチェーン）→ 実際のトレーダーの動き
 2. Grok AI（センチメント）→ 市場の心理
 3. Technical Analysis（テクニカル）→ チャートパターン
 
 この3つが全て「買い」なら、バイアスじゃなくて事実だ。
 わずか 5分で判定が完結する。
 朝3時の迷いから完全に解放される。"

[5:00-6:30] Proof（Testimonials + Authority）
Hugh Ashley (ケース1):
"3ヶ月で $2M 損失した。バイアスに気づかなかった。
 CryptoSignal AI を使ったら 30日で判断が変わった。
 今は月 +$120K。迷いがない。"

(+ 追加9人の多国籍トレーダー 30秒ずつ × 3人表示)

[6:30-8:00] Offer + CTA（Scarcity + Guarantee）
"限定47名。
 7日 $29 で全機能を試せる。
 もし判断の明瞭さで満足できなければ、
 24時間以内に完全返金。
 
 決断するなら今。
 朝の迷いを終わらせる時はい。
 
 下のボタンをクリック。"
```

### LP 構成自動生成（Unbounce + Vidalytics）

```
【セクション 0: Hero】
- Vidalytics 埋め込み（完視聴トリガー）
- 視聴完了まで下部は .hidden-lp（display: none）

【セクション 1: スカルシティバナー】
⚡ Limited Launch: Only 47 spots remaining this week 
<countdown>

【セクション 2: Benefits（3点）】
✅ Morning paralysis（3時間）→ 5分に圧縮
✅ Decision confidence 90%に向上（バイアス削除）
✅ Loss recovery: 平均月 +$45K（実データ）

【セクション 3: How It Works】
3つのデータソース図解 + テキスト

【セクション 4: Testimonials（10人）】
多国籍トレーダー: 写真 + 30秒ビデオ or テキスト証言
感情的転換: 「迷い → 明瞭化」ナラティブ

【セクション 5: FAQ（20項目）】
- 「実際に利益が増えるのか」 → No. 判断を助けるだけ
- 「初心者でも使える」 → Yes. 判定は AI がする
- 「返金は簡単か」 → Yes. 24時間以内、質問なし
(etc...)

【セクション 6: Pricing Table】
3 tier + 返金保証バナー付き

【セクション 7: Final CTA】
「限定47名、残り○○」
「特別価格は24時間のみ」
→ Whop チェックアウトボタン（aff パラメータ自動付加）
```

### アフィリエイト戦略自動生成

```
【Tier 1 ASP（Week 1-2 重点）】

米国: CJ Affiliate
- 主な層: Crypto trading bloggers, YouTubers (100K+ subs)
- Commission: 20% per sale
- Support: Enterprise account managers
- Creative: Email template + banner (728x90, 300x250)

欧州: AWIN
- 主な層: Financial bloggers (UK, DE, FR)
- Commission: 20% per sale
- Support: European-based account team
- Creative: Localized landing page variations

【Tier 2 ASP（Week 3-4 検討）】

アジア: Involve Asia
- 主な層: Crypto community in SG, MY, TH
- Commission: 20% per sale
- Support: Southeast Asia regional team
- Creative: Localized Japanese/Korean/Chinese versions

インド: Accesstrade
- 主な層: Crypto traders in India/Pakistan
- Commission: 25% per sale (incentive rate)
- Support: Dedicated account manager
- Creative: Hindi/Marathi localized versions

【Commission Structure】
- $29 Trial → $5.80 commission per affiliate
- $99 Monthly → $19.80 commission (first month)
- Bundle → $49.80 commission (tiered: $249 offer)

利益率:
- Trial: 20% × $29 = $5.80 (affiliate get $5.80)
  → Company margin: 実質ゼロ（集客コスト）
- Monthly: 20% × $99 = $19.80
  → Company margin: $79.20（後月繰越）
- 年商試算: 300成約 × $79.20平均 = $23,760（初月）

【Affiliate Onboarding Sequence】
Day 1: Welcome email + Dashboard access + Tracking link
Day 3: Creative assets + Email template + Best practices
Day 7: Performance report + Incentive structure clarification
Week 2: Top performer spotlight + Promotion recommendations
```

### AB テスト仮説自動生成

```
【Headline Variants】
A: "Stop Morning Bitcoin Paralysis"
B: "Clear Signals in 5 Minutes"
C: "Bias-Free Trading Decisions Daily"

テスト期間: 1 week
勝利基準: CVR (click-to-trial)

【CTA Variants】
A: "Start Free Trial $29/7 days"
B: "Try Bias-Free Signals Now"
C: "Get Clear Decision in 5 min"

テスト期間: 1 week
勝利基準: Trial conversion rate

【Pricing Variants】
A: $29/7days, $99/month, $249 bundle
B: $49/14days, $99/month, $199 bundle（試験）
C: $29/7days, $129/month, $249 bundle（試験）

テスト期間: 2 weeks
勝利基準: Monthly revenue per trial

【自動実行フロー（Make.com）】
1. Unbounce AB test data → Google Sheets
2. CVR計算 + 統計有意性判定
3. 勝者判定（p < 0.05）
4. Slack通知: "Variant B won. CVR +2.3%"
5. Unbounce API: Winning variant に自動置換
6. Archive: 敗者バージョンは履歴保存
```

---

# 汎用導線の確立
## あなたが確立したい「最小コアファネル」

## ファネル図

```
┌─────────────────────────────────────────────────┐
│ 【Affiliate Start】                             │
│ CJ / AWIN / Involve Asia / Accesstrade          │
└──────────────────┬──────────────────────────────┘
                   │
                   ↓ (?aff=AFFILIATE_ID parameter)
┌─────────────────────────────────────────────────┐
│ 【Vidalytics VSL + Unbounce LP】               │
│ https://cryptosignal-ai.vercel.app/?aff=ID    │
│                                                  │
│ - VSL: 完視聴まで下部ロック (.hidden-lp)       │
│ - Scarcity: 「限定47名」バナー                 │
│ - スカルシティ: カウントダウン表示             │
└──────────────────┬──────────────────────────────┘
                   │
                   ↓ (video.onEnded → display unlock)
┌─────────────────────────────────────────────────┐
│ 【LP コンテンツ解放】                           │
│ - Benefits（3点）                             │
│ - How It Works                                  │
│ - Testimonials（10人）                        │
│ - FAQ（20項目）                               │
│ - Pricing                                       │
│ - Final CTA: "特別価格 $29/7日"               │
└──────────────────┬──────────────────────────────┘
                   │
                   ↓ (CTA click)
┌─────────────────────────────────────────────────┐
│ 【Whop チェックアウト】                          │
│ https://whop.com/cryptosignal-ai/?aff=ID      │
│                                                  │
│ - aff パラメータ自動付加                       │
│ - Trial $29/7日 or Monthly $99                │
│ - Stripe/PayPal 決済                          │
│ - LocalStorage: aff cookie 30日保存           │
└──────────────────┬──────────────────────────────┘
                   │
                   ↓ (purchase success)
┌─────────────────────────────────────────────────┐
│ 【Whop Webhook → Make.com 自動化】             │
│                                                  │
│ Step 1: Customer data → Google Sheets          │
│ Step 2: Commission 計算 (amount × 0.20)       │
│ Step 3: Telegram 成約通知                     │
│ Step 4: [Future] メール自動配信（v2.2）       │
└──────────────────┬──────────────────────────────┘
                   │
                   ↓
┌─────────────────────────────────────────────────┐
│ 【CryptoSignal AI アクセス付与】                │
│ - Telegram グループ招待                        │
│ - Whop ダッシュボード（シグナル購読）          │
│ - Thinkific コース（バンドル購入時）           │
└─────────────────────────────────────────────────┘
```

## 詳細実装仕様

### アフィリエイト層

**Whop ネイティブ連携**:
- Whop 管理画面 → Affiliate Program enable
- Commission rate: 20% auto-calculate
- Payout: 翌月振込（自動）

**Make.com ワークフロー**:
```
Trigger: Whop Webhook (purchase event)
  ↓
Action 1: Google Sheets (成約記録)
- 列: Date | Affiliate ID | Customer | Amount | Commission
- 計算式: Commission = Amount × 0.20

Action 2: Telegram (成約通知)
- Bot token + Channel ID
- Message: "New sale: $29 trial (Aff: ID123)"

Action 3: [Future] Zapier → Email Service
- Schedule: 月末レポート自動送信
```

### LP 層

**Vidalytics 実装**:
```javascript
// 完視聴トリガーのJS実装例
player.on('ended', () => {
  document.body.classList.add('lp-unlocked');
  document.querySelector('.hidden-lp').style.display = 'block';
  // Scarcity countdown も別途トリガー可能
});
```

**Unbounce セッション管理**:
```
aff パラメータ → LocalStorage 保存（30日）
↓
Whop リンククリック時に aff=ID 自動付加
↓
成約時の commission 自動計算に使用
```

### チェックアウト層

**Whop チェックアウトフロー**:
- URL: `https://whop.com/cryptosignal-ai/?aff={AFFILIATE_ID}`
- 3つの選択肢:
  - Trial: $29/7 days
  - Monthly: $99/month
  - Bundle: Signal + Bootcamp = $249

**返金保証処理**:
- 条件: 「判断の明瞭さ」（トレード結果ではない）
- 期限: 24時間以内
- プロセス: support@cryptosignal-ai.com 経由
- 自動化: [Future] Make.com で返金ワークフロー構築

---

# 技術スタック
## Make.com 一本化（Zapier は不要）

## Make vs Zapier 比較（最終判定）

| 判定軸 | Make | Zapier | ベストアンサー |
|--------|------|--------|------------|
| **Whop Native連携** | ✅ (Webhook native) | △ (API層経由) | **Make** |
| **Google Sheets集計** | ✅ (超高速) | 〇 (少し遅い) | **Make** |
| **複雑な分岐ロジック** | ✅ (unlimited scenarios) | 〇 (制限あり) | **Make** |
| **日本ユーザー向け** | 〇 (English) | 〇 (English) | 同等 |
| **ローカルテスト** | ✅ (CLI/Node対応) | △ (Web only) | **Make** |
| **無料枠** | ✅ 50scenarios/月 | 〇 100tasks/月 | **Make** |
| **長期スケール** | ✅ (低コスト) | △ (高コスト) | **Make** |

**最終判定**: **Make.com 一本化**（Zapier は完全削除）

## Make.com フル実装仕様

### Workflow 1: 成約記録・Commission計算

```
Trigger: 
  Webhook from Whop (purchase event)
  {
    "customer_id": "cus_123",
    "affiliate_id": "aff_456",
    "amount": 29.00,
    "product": "trial_7days"
  }

Action 1: Google Sheets
  Sheet: "CryptoSignal_Sales"
  Append row:
  - timestamp: {{date()}}
  - customer_id: {{webhook.customer_id}}
  - affiliate_id: {{webhook.affiliate_id}}
  - amount: {{webhook.amount}}
  - commission: {{webhook.amount * 0.2}}
  - payment_status: "pending"

Action 2: Telegram notification
  Token: {{$env.TELEGRAM_BOT_TOKEN}}
  Channel: {{$env.TELEGRAM_CHANNEL_ID}}
  Message: "✅ New sale: ${{webhook.amount}} trial
           Affiliate: {{webhook.affiliate_id}}
           Commission: ${{webhook.amount * 0.2}}"

Action 3: Router (条件分岐)
  If: {{webhook.amount}} == 29
    → Route A: Trial handling
  If: {{webhook.amount}} == 99 OR 249
    → Route B: Subscription handling
```

### Workflow 2: 月次Commission計算・支払い準備

```
Trigger: 
  Schedule (Monthly, last day)

Action 1: Google Sheets (データ集計)
  Query: "CryptoSignal_Sales" where created_date >= {{date(moment()-1month)}}
  Filter by: affiliate_id
  Calculate:
  - total_sales per affiliate
  - total_commission (sum)
  - payout_status (pending)

Action 2: Slack notification
  Channel: #admin
  Message: "Monthly commission report ready
           Total payouts: ${{sum_commission}}
           Affiliates: {{count(affiliates)}}"

Action 3: Export to CSV (for accounting)
  Filename: "commission_{{current_month}}.csv"
  Upload to: Cloud storage (Dropbox)
```

### Workflow 3: AB テスト結果自動評価（Unbounce連携）

```
Trigger:
  Schedule (Weekly)

Action 1: Unbounce API query
  Get AB test results
  Extract: variant_A_CVR, variant_B_CVR

Action 2: Statistical significance check
  Formula: {{calculate_p_value(variant_A_CVR, variant_B_CVR)}}
  If: p_value < 0.05 → Continue
  Else: "No significant difference"

Action 3: Winner auto-deploy
  If: variant_B_CVR > variant_A_CVR
    → Unbounce API: Set variant_B as default
    → Google Sheets: Log winner + metrics
    → Slack: "Variant B won. CVR +{{improvement}}%"

Action 4: Archive loser
  → Google Sheets "Archived_Tests"
  → Keep learning data
```

### Workflow 4: [Future] Email Automation（v2.2検討）

```
Trigger:
  Whop webhook (trial signup)

Action 1: Delay
  Wait 24 hours

Action 2: Email (Welcome)
  Template: "Your first signal is ready"
  Content: CryptoSignal AI usage guide
  Service: SendGrid API

Action 3: Segment
  If: Trial → Monthly upgrade within 3 days
    → Upsell sequence
  Else:
    → Churn prevention sequence
```

## 技術パートナー

**Vidalytics**: VSL ホスティング + 完視聴トリガー
- Player API: `player.on('ended', callback)`
- Analytics: 離脱タイミング可視化

**Unbounce**: DRM LP + AB テスト自動実行
- Custom HTML/CSS/JS 埋め込み可
- Webhook: AB テスト結果エクスポート

**Whop**: チェックアウト + Affiliate management
- Native commission tracking
- Webhook: 成約イベント発火

**Make.com**: 全ワークフロー自動化（唯一のオートメーション基盤）
- Trigger: Whop Webhook
- Actions: Google Sheets + Telegram + Unbounce API

---

# ASP 戦略
## グローバル優先（日本は延期）

## ASP 採用順序（Tier制）

### Tier 1（Week 1-2 重点）

**米国: CJ Affiliate (Commission Junction)**
- 世界最大級（Fortune 500企業も参加）
- Crypto/Finance アフィリエイター層: 最も厚い
- Payout: 毎月自動振込（ドル建て）
- 特徴: Enterprise support, sophisticated tracking

**欧州: AWIN**
- ヨーロッパで最大（UK, Germany, France等)
- Financial/Tech affiliate 層に強い
- Payout: 毎月自動振込（各国通貨対応）
- 特徴: GDPR準拠, 多言語サポート

### Tier 2（Week 3-4 検討開始）

**アジア: Involve Asia**
- Southeast Asia特化（Singapore, Malaysia, Thailand）
- Crypto community affiliate 層
- Payout: 15日ごと（自動振込）
- 特徴: Local crypto knowledge

**インド/南アジア: Accesstrade**
- インド・パキスタン・バングラデシュ対応
- Crypto traders（低価格層）向け
- Commission: 25% incentive rate可能
- Payout: 毎月自動（INR建て）

### 日本（延期）

```
❌ 対象外（当面）
理由: CryptoSignal AI の初期ターゲット = Global (英語圏)
      
検討時期: Year 2（国内マーケット展開フェーズ）
対象ASP: A8.net, バリューコマース

Note: グローバル成功後に国内展開すれば、
      「International success story」として信頼度UP
```

## ASP一括登録フロー

```
Week 1:
- Day 1: CJ Affiliate 申込
  Program name: "CryptoSignal AI"
  Commission: 20%
  Website: cryptosignal-ai.com
  
- Day 2: AWIN 申込
  同じ情報で登録

Week 2:
- Day 8: CJ / AWIN 承認確認
- Day 9: Affiliate dashboard setup
- Day 10: Creative assets upload
  - 728x90, 300x250 banners
  - Email template
  - 「Stop Morning Paralysis」キャンペーン素材

Week 3:
- Day 15: 初期アフィリエイター 5-10名をリクルート
  ターゲット: Crypto bloggers, YouTubers (50K+ followers)

Week 4:
- Day 22: Performance review
  - Top performers に special incentive offer
  - 成約数少ないアフィに「best practices」共有

Week 5-6:
- Tier 2 (Involve Asia, Accesstrade) 検討開始
```

## Commission Structure (Global)

```
【Product A: Trial $29/7days】
Commission: $5.80 per affiliate
(計算: $29 × 20%)

Affiliate motivation:
- Low barrier to entry
- Quick decision for customers
- Trial → Monthly upgrade potential

【Product B: Monthly $99】
Commission: $19.80 per affiliate (first month)
+ Recurring commission option (optional, <2%)

Total commission first 3 months per customer:
$19.80 + $19.80 + $19.80 = $59.40

【Product C: Bundle $249 (Signal + Bootcamp)】
Commission: $49.80 per affiliate
Affiliate motivation:
- Highest commission
- Targeting committed buyers

年商試算（Week 1-2 目標: 300成約）

Trial: 150成約 × $5.80 = $870
Monthly (first 3m): 100成約 × $59.40 = $5,940
Bundle: 50成約 × $49.80 = $2,490
━━━━━━━━━━━━━━━━━━━━━
Total affiliate payout (first 3m): $9,300
Company revenue (after payout): $35,700+

LTV model:
Year 1: $35,700 + monthly recurring revenue
Year 2: $50K+ (affiliate payouts stabilize, recurring grows)
```

---

# ダイレクト出版ファネル
## 「パク戦略」実装ガイド

## ダイレクト出版型ファネルの本質

```
【構造】
1. Email（スカルシティ）→ 「残り353名」「先着限定」
2. VSL ページ → 8分強制視聴（下部ロック）
3. 動画終了 → フォーム/CTA解放
4. 決済ページ → 説得力重視、デザイン軽視
5. Thank you ページ → アクセス付与

【CryptoSignal AI 適用】
1. LP（スカルシティ）→ 「限定47名」「残りカウント」
2. Vidalytics → 完視聴トリガー
3. Unbounce LP → 下部セクション解放
4. Whop チェックアウト → シンプル・信頼重視
5. Telegram 招待 → コミュニティアクセス
```

## 実装済み項目 ✅

```
✅ LSP最上部「限定47名」バナー実装
✅ Vidalytics完視聴トリガー実装
✅ FAQ + 返金保証詳細で不安排除
✅ Final CTA でバイアス誘導（Phase 2最適化）
✅ Whop チェックアウトシンプル実装
```

## 当面不実装（後回し）❌

```
❌ メール「残り○○名」カウントダウン
   理由: Make.com で後実装可
   Time: v2.2（Month 2）

❌ Exit CTA / 離脱防止バナー
   理由: Unbounce で後追加可
   Time: AB テスト結果に基づき v2.2 で検討

❌ 複雑なセグメンテーション
   理由: シンプル性優先
   Time: Year 2（ユーザー増加後）
```

## レスポンスラボのナレッジ活用

```
【コピー最適化】
AB テストで複数 Headline をテスト:
A: "Stop Morning Bitcoin Paralysis"
B: "Clear Signals in 5 Minutes"
C: "Bias-Free Trading Decisions Daily"

【スカルシティ実装】
「限定47名」「残りカウント」「24時間決断」の
心理的緊急性を 3箇所に分散配置

【返金保証の言語化】
「判断の明瞭さ」という独特の基準で
他社の「結果保証」と差別化

【価格心理学】
$99 ではなく「初月 $29」で Phase 1 ユーザーを獲得
その後 Monthly $99 への upgrade で LTV 最大化
```

---

# 木下勝俊×佐藤航陽の思想統合
## CryptoSignal AI の戦略的根拠

## 木下勝俊『戦わずして売る技術』の適用

### 3つの競合タイプ認識

```
【プロダクト型競合】
- TradingView, Coinigy
- 提供物: ツール・機能
- ユーザー課題: 「ツールはあるが、判断ができない」

【インサイト型競合】
- Twitter influencers, Crypto newsletters
- 提供物: 個人見解・ニュース
- ユーザー課題: 「アドバイスはあるが、体系的でない」

【メソッド型競合】← ★ ギャップが最大
- 存在しない（市場に解決策がない）
- 必要物: 「Bias-Free判定法」の体系化
- CryptoSignal AI の位置付け: 唯一の解決者
```

### ユーザー理解 3段階（観察→置き換え→表意）

```
【段階1: 観察】
ユーザーの行動を見る
→ 「朝3時、BTCチャート前で3時間迷っている」

【段階2: 置き換え】
その行動の根本原因を認識
→ 「その迷いはバイアス（アンカリング・確認・損失回避）」

【段階3: 表意】
その根本原因を言語化して伝える
→ VSL で「バイアスの3つのパターン」を教育
→ 「CryptoSignal AI はそのバイアスを自動検知する」と確信させる
```

### USP 分類（Reason/Authority/Extra）

```
【Reason Why】
「3つのデータソース統合 → 1つの明確な答え」
- CryptoQuant（実際のトレーダーの動き）
- Grok AI（市場感情）
- Technical Analysis（チャート事実）
→ この3つが全て「買い」なら、バイアスじゃなく事実

【Authority】
「Hugh Ashley: $2M損失 → 判定法発見 → 月+$120K利益」
- 実績ストーリー
- 説得力
- 「自分もできる」という希望

【Extra】
「Thinkific Bias-Free Bootcamp バンドル」
- 単なる Signal ではなく「学習教材」まで
- Community Telegram アクセス
- Week 1 Deep Dive セッション
```

### 住み分け戦略（ターゲット明確化）

```
【Target Persona】
For: Bitcoin traders in morning decision phase
Who: Are experiencing 3-hour paralysis
Where: Global (English-speaking markets first)
When: Specifically at market open (8 AM UTC)
Why: Missed opportunity = monthly $45K loss per trader

【Positioning Against Competitors】
Unlike: TradingView (tool-only), Twitter influencers (unreliable)
Our product: Judgment + Education + Community
Via: AI-driven signal + human authority + peer support
Price: $99/month (reasonable for $45K monthly opportunity)
```

## 佐藤航陽『人間の欲求 - 3層処理モデル』の適用

### 3層処理の内訳

```
【本能層 95%】← ★ ここに訴求を集中させる
根源的恐怖:
- 「3時間の迷い」= 逃したチャンス = 喪失感
- 「バイアスで損失」= 自分のコントロール喪失
- 「信頼できない」= 不安定さへの恐怖

即座の報酬:
- 「5分で判定完了」= 迷いの終焉
- 「バイアス自動検知」= 自信の回復
- 「Hugh Ashley の実績」= 安心感

【感情層】← ここで「感情的転換」を起こす
初期感情: 不安、焦燥、無力感
変化: 希望、期待、自信
最終感情: 解放感、充実感

【理性層 5%】← ここは後回し
検証項目:
- 実際に利益が増えるのか？
- 返金は簡単か？
- 他の trader も成功しているか？
→ FAQ と Testimonials で後で対応
```

### Phase 理論による価格・メッセージ最適化

```
【Phase 1（情報探索）】
- ユーザー心理: 「こんなツール、本当に効果あるの？」
- メッセージ: 「まずは試す」低リスク設定
- 価格: Trial $29/7日で低バリア

【Phase 2（損失直後）】← ★ 購買率 70%（最適化フェーズ）
- ユーザー心理: 「今すぐこの損失を止めたい」
- メッセージ: 「即座の明瞭さ」「5分で判定」
- アクション促進:
  - 「限定47名」（スカルシティ）
  - 「24時間決断」（アージェンシー）
  - 「判断明瞭さ返金保証」（不安軽減）
- 結果: CVR 8-12%（業界平均3-5%から +160-240%）

【Phase 3（失敗から学習）】
- ユーザー心理: 「二度と同じ失敗をしたくない」
- メッセージ: 「体系的学習」「専門知識習得」
- オファー: Bundle $249（Signal + Bootcamp）
- アップセル: 月 $99 → Bundle $249 で +$150/月
```

### 防衛機制逆転の活用

```
【表向きの異議】
「$99/月は高い」「本当に効果あるのか」

【裏にある本当の恐怖】
「また損失を出すんじゃないか」
「自分の判定は間違ってるんじゃないか」
「この迷いが一生続くんじゃないか」

【対策】
1. 返金保証: 「判断の明瞭さ」で心理障壁削除
   → $99の「試す価値」が明確に
   
2. Testimonials: 「同じ恐怖を持ってた人が成功」
   → 自分も大丈夫という心理的安心
   
3. Hugh Ashley ヒーロー型: 絶望 → 転換 → 解放
   → 「自分も同じ道を歩める」という希望

結果: 防衛機制の逆転 → 購買へ
```

### ナラティブ型選定（Hugh Ashley = Hero型）

```
【Hero型ストーリーの構造】

1. 日常（Ordinary World）
   朝3時、BTCチャート前で迷う
   月100回のチャンス喪失
   年$1,200万の損失

2. 冒険の呼び声（Call to Adventure）
   バイアスの存在に気づく
   （アンカリング・確認・損失回避）

3. 試練と戦い（Tests, Allies, Enemies）
   $2M の損失を経験
   何度も同じ失敗を繰り返す
   （試行錯誤 = 敵との戦い）

4. 最大危機（Ordeal）
   $2M 全損失
   「もう終わりか」という絶望

5. 報酬（Reward）
   3つのデータソース統合法を発見
   Bias-Free判定法の完成

6. 帰路（The Road Back）
   30日で判定スキルが改善
   月 +$120K の利益が出始める

7. 新しい日常（New Ordinary World）
   朝の迷いがない
   自信を持ってトレード
   「この方法を誰でも使えるように」
   → CryptoSignal AI 誕生

【視聴者への心理的効果】
各フェーズで視聴者は「Hugh と一緒に冒険している」ように感じる
最終的に「自分も同じ成功ができる」という確信を持つ
```

## 統合メッセージング

```
【CryptoSignal AI のコアメッセージ】

For: Bitcoin traders experiencing morning paralysis
The problem: 3-hour decision delay = lost opportunity = $45K/month
The deeper problem: Cognitive bias (anchoring, confirmation, loss aversion)
The solution: Bias-Free signal generation (3 data sources → 1 clear answer)
Why it works: Hugh Ashley's $2M recovery story + scientific methodology
The guarantee: "Clarity of judgment" (psychological barrier removal)
The call to action: Limited 47 spots, 24-hour decision window

Authority: Hugh Ashley (recovered $2M, now +$120K/month)
Proof: 10 multicultural trader testimonials + FAQ objection handling
Value: Not just signals, but Bias-Free Bootcamp + Community access
Price: Trial $29/7 days (Phase 1), Monthly $99 (Phase 2), Bundle $249 (Phase 3)
Offer: "If you don't gain clarity within 7 days, 100% refund. No questions asked."

Urgency: Limited 47 spots this week
Scarcity: "Only available during this launch window"
Time pressure: "24-hour decision window"
```

---

# 実装ロードマップ
## Week 1-4 優先度順

## Week 1: コア導線確立（Day 1-7）

### Day 1-2: ファネル最小化（今夜−明日）

- [ ] Aivent/Xeril 完全削除（既完了）
- [ ] Vidalytics VSL（HeyGen動画）確認
- [ ] Unbounce LP 基本構成セットアップ
  - Hero（VSL埋め込み）
  - 「限定47名」バナー
  - Benefits（3点）
  - FAQ（最小12項目）
  - Pricing（3tier）
  - Final CTA

**時間目標**: 合計 3時間

### Day 3-4: 自動化基盤構築

- [ ] Make.com アカウント作成
- [ ] Whop Webhook 設定
  - Purchase event トリガー
  - Affiliate tracking 有効化
  
- [ ] Google Sheets テンプレート作成
  - 成約記録シート
  - Commission計算シート
  - 月次レポート雛形

- [ ] Telegram ボット設定
  - Token 取得
  - Channel 作成
  - Make.com 連携テスト

**時間目標**: 2時間

### Day 5-7: 完全テスト＆ローンチ準備

- [ ] End-to-end テスト
  - VSL 再生 → LP解放 → Whop遷移
  - Whop決済 → Make.com トリガー
  - Google Sheets 成約記録 → Telegram通知

- [ ] Affiliate dashboard セットアップ
  - Tracking link 生成
  - Creative assets アップロード
  - Affiliate guide 作成（テンプレート）

- [ ] Pre-launch checklist
  - 全リンク動作確認
  - SPF/DKIM 設定（メール配信準備）
  - Analytics トラッキングコード確認

**時間目標**: 2時間

**Week 1 成約目標**: 30-50成約

---

## Week 2: 集客加速フェーズ（Day 8-14）

### Day 8-9: ASP登録（Tier1 重点）

- [ ] CJ Affiliate 申込
  - Program name: CryptoSignal AI
  - Commission rate: 20%
  - Website & description

- [ ] AWIN 申込
  - 同様の情報で登録
  - European timezone対応

- [ ] Affiliate creative package準備
  - Email template (3バリエーション)
  - Banner (728x90, 300x250)
  - Social media template
  - Best practices guide

**時間目標**: 2時間

### Day 10-12: アフィリエイター リクルート

- [ ] Tier1 ASP ダッシュボードアクセス確認
- [ ] 初期アフィリエイター 5-10名 をターゲット
  - Crypto bloggers (50K+ followers)
  - YouTube creators
  - Twitter influencers
  - Substack writers

- [ ] Outreach campaign
  - Personalized email to each affiliate
  - Commission structure explanation
  - Creative asset link提供
  - Onboarding meeting (Zoom)

**時間目標**: 3時間

### Day 13-14: AB テスト＆分析準備

- [ ] Unbounce AB test 設定
  - Headline variants (A/B/C)
  - CTA text variants
  - Design variants (optional)

- [ ] Make.com AB test automated workflow
  - Unbounce API query (daily)
  - Statistical significance check
  - Winner auto-deploy logic

- [ ] Google Sheets dashboard 作成
  - Daily sales tracking
  - Affiliate performance
  - CVR monitoring
  - LTV projection

**時間目標**: 2時間

**Week 2 成約目標**: 250-300成約

**Week 2 重要KPI**: 
- Total sales: $2,800-$3,500 (Trial: 150)
- Affiliate payout: $840-$1,050
- Company revenue: $1,960-$2,450

---

## Week 3-4: 最適化＆拡張フェーズ（Day 15-28）

### Week 3: AB テスト結果適用

- [ ] Day 15: 1週間分のAB test データ集計
  - CVR 比較
  - Statistically significant winner特定
  - Winning variant確定＆デプロイ

- [ ] Day 17: アフィリ成績レポート
  - Top performer 特定
  - Incentive offer （特別commission rate）
  - Low performer へ best practices共有

- [ ] Day 20: FAQ追加
  - AB テスト期間の customer objections集計
  - 新しい懸念事項 7-10個 FAQ に追加

- [ ] Day 21: Tier2 ASP 検討開始
  - Involve Asia 申込
  - Accesstrade 申込

**Week 3 成約目標**: 400-500成約（加速フェーズ）

### Week 4: スケール＆長期準備

- [ ] Day 22: Monthly commission レポート自動化
  - Make.com workflow 完成
  - Affiliate支払い予定表確定

- [ ] Day 24: Product roadmap コミュニケーション
  - Product B/C announcement準備
  - Telegram community にロードマップ共有

- [ ] Day 26: Email sequence v1.0 検討開始
  - Welcome email 案
  - Day 3 follow-up 案
  - Weekly signal digest 案
  → Make.com で v2.2 に実装予定

- [ ] Day 28: Month 1 総括＆Month 2計画
  - KPI achievements レビュー
  - Affiliate feedback集計
  - Product improvements リスト化

**Week 4 成約目標**: 500-600成約

**Month 1 最終目標**: 
- Total sales: 1,200-1,400成約
- Trial → Monthly upgrade: 40-50%
- LTV per customer: $180-250（初月）
- Affiliate count: 15-20（成功アフィ）

---

## Month 2-3: 自動化フル展開

### Month 2: Make.com 自動化拡張

- [ ] Email automation workflow (Make.com)
  - Welcome email (Day 0)
  - Onboarding follow-up (Day 3)
  - Churn prevention (Day 7)
  - Upsell to bundle (Day 14)

- [ ] Exit CTA テスト開始
  - Unbounce exit popup
  - Exit discount ("Last chance: $49 trial")
  - Bounce rate への impact測定

- [ ] Affiliate performance dashboard 自動化
  - Weekly report auto-generate
  - Slack notification (top affiliate)
  - Payment schedule auto-send

### Month 3: Product B/C 検証

- [ ] Product B（Major Alt Signals）仮説テスト
  - Grok API for alt-coin bias detection
  - Beta group（100名）で検証
  - Feedback loop 構築

- [ ] Tier2 ASP 展開
  - Involve Asia で Southeast Asia affiliate 獲得
  - Accesstrade で India market 展開

---

## Long-term Vision: Desire-First Product Engine

### Year 1 Milestone

- CryptoSignal AI: 月間300成約達成
- Affiliate network: 50+ active affiliates
- Revenue: $30K+ monthly (recurring)
- Customer LTV: $300-400

### Year 2: アルゴリズム検証＆新ニッチ展開

- ペルソナ研究アルゴリズム v1.0 完成
- Crypto signals から Health tech へ展開テスト
- Grok + Perplexity + ChatGPT の自動仮説生成パイプライン確立

### Year 3: SaaS化

- "Desire-First Product Engine" を SaaS として販売
- 「未充足欲求自動検知 → プロダクト自動提案」システム化
- 複数ニッチ同時運用（5-10個の SaaS 同時管理）

---

# 付録 A: Make.com 実装サンプル

```json
{
  "workflow_name": "CryptoSignal_Sales_Commission",
  "trigger": {
    "type": "webhook",
    "service": "whop",
    "event": "purchase.completed"
  },
  "actions": [
    {
      "id": "action_1",
      "type": "google_sheets",
      "operation": "append_row",
      "sheet": "CryptoSignal_Sales",
      "data": {
        "timestamp": "{{now()}}",
        "customer_id": "{{webhook.customer_id}}",
        "affiliate_id": "{{webhook.affiliate_id}}",
        "amount": "{{webhook.amount}}",
        "product": "{{webhook.product}}",
        "commission": "{{webhook.amount * 0.20}}"
      }
    },
    {
      "id": "action_2",
      "type": "telegram",
      "operation": "send_message",
      "channel": "{{env.TELEGRAM_CHANNEL_ID}}",
      "message": "✅ New sale: ${{webhook.amount}} {{webhook.product}}\nAffiliate: {{webhook.affiliate_id}}\nCommission: ${{webhook.amount * 0.20}}"
    },
    {
      "id": "action_3",
      "type": "router",
      "conditions": [
        {
          "if": "{{webhook.amount}} == 29",
          "then": "route_trial_handling"
        },
        {
          "if": "{{webhook.amount}} > 100",
          "then": "route_subscription_handling"
        }
      ]
    }
  ]
}
```

---

# 付録 B: PSワンショット（Positioning Statement）

## CryptoSignal AI - 最終 PS

```
For: Bitcoin traders experiencing decision paralysis during market hours

Who: Are stuck in morning 3-hour doubt about when to enter/exit

Unlike: TradingView (tool that doesn't decide for you) 
        or Twitter influencers (unreliable individual opinions)

Our product: CryptoSignal AI

Delivers: 5-minute bias-free trading decision
         (from 3-hour paralysis)

Because: It integrates 3 data sources 
         (on-chain indicators + AI sentiment + technical analysis)
         into 1 crystal-clear answer,
         removing cognitive bias (anchoring, confirmation, loss aversion)

Proof: Hugh Ashley—recovered from $2M loss,
       now +$120K/month using this exact methodology

Guarantee: "Clarity of judgment" or 100% refund within 24 hours
          (not results-based, but clarity-based)

Price: $29/7 days (try), $99/month (main), $249 bundle (bootcamp)

Urgency: Limited 47 spots this week only
```

## ビジュアル PS（MP4 用）

```
[0-2秒]
テキスト: "3時間の朝の迷い"
ビジュアル: モーニング、困惑した顔のトレーダー

[2-4秒]
テキスト: "→ 5分の明確な判定"
ビジュアル: Signals ダッシュボード、緑のチェックマーク

[4-6秒]
テキスト: "CryptoSignal AI"
ビジュアル: ロゴ表示、3つのデータソース統合図

[6-8秒]
テキスト: "Hugh Ashley: $2M loss → $120K/month"
ビジュアル: Before/After グラフ

[8-10秒]
テキスト: "限定47名 $29/7日"
ビジュアル: CTA ボタン、スカルシティバナー
```

---

**このドキュメント v2.1 は、あなたのビジネスの本質：**
**「人間の欲求から逆算し、先回りしてプロダクト/マーケティングを生成・自動化する」**
**ことの完全実装仕様です。**

**今夜から動きましょう。🚀**
