<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# CryptoSignalAI プロジェクト・マスタードキュメント

**最終更新: 2025年11月19日 17:51 JST（決定版v2.0 - LP仕様書v2.0完全統合版）**

---

## 📢 **v2.0 更新内容（2025-11-19 17:51）**

### **LP仕様書 v2.0 との整合性完全達成**

本バージョンでは、以下6項目の意思決定を反映し、LP仕様書 v2.0 との完全一貫性を達成しました：

1. ✅ **返金保証条件の明確化**
   - 初回本サブスク課金分のみ対象
   - 判定基準: 「判断の明瞭さ」（トレード結果ではない）
   - 返金プロセス: support@cryptosignal-ai.com 経由、24時間以内

2. ✅ **アフィリエイト・トラッキング設計完成**
   - aff パラメータ + Whop クーポン併用
   - LocalStorage 30日有効
   - Make.com で月次報酬計算自動化

3. ✅ **Product B/C ロードマップ明示**
   - Product B: Major Alt Signals ($199/月) - Q1 2026
   - Product C: Alt Event Radar (+$99/月 add-on) - Q1 2026

4. ✅ **Thinkific 講座バンドル追加**
   - Bias-Free Trading Bootcamp ($199 one-time)
   - Signal + Bootcamp = $249 初月（25% off）

5. ✅ **VSL バージョン管理明示**
   - v1.1 (Free Version) → v2.0 (Premium) ロードマップ記載

6. ✅ **AI 役割分担の明確化**
   - Perplexity: 統括・戦略分析
   - ChatGPT 5.1: 技術実装
   - Grok 4.1: ペルソナ・感情分析

---

## 今日のアジェンダ / 相談メモ

- 新規アカウント群から投稿を量産しても、ターゲットに十分リーチできるか
- Tier1 / Tier2 への到達経路を、アフィリエイト＋ショート動画＋広告でどう組み合わせるか
- 決済後のメッセージ配信・解約処理・権限剥奪を、Whop＋Make＋Telegram / Discord でどこまで自動化するか
- BTC 単体・Major Alt・Alt+Meme の三階建てプロダクト構成を、1 本のアルゴリズム基盤から実現できるか
- Amazing Diet 型のストーリー構成を、CryptoSignalAI の LP / VSL にどこまで移植するか
- HeyGen＋Envato＋ffmpeg＋CLI で「再現性の高い VSL / クリエイティブ自動生成パイプライン」を作れるか
- Product A を準リードマグネット化して、アフィリエイト主導で初週 5,000 USD を狙うファネルをどう設計するか

---

## 今日以降の優先方針（CLI ファースト）

- 運用・配信は CLI ファーストを絶対原則とし、Vercel / Doppler / Git / Make / Whop / HeyGen / YouTube / TikTok / Telegram / Discord / X は PowerShell → Node/TypeScript → 各 API という一元レールで操作する。
- 動画やサムネなどのクリエイティブは Envato 素材＋HeyGen mp4＋ffmpeg＋自作スクリプトで自動生成し、Canva や GUI ツールは例外対応と初期検証に限定する。
- トラフィック導線は「アフィリエイター / ショート動画 ⇒ 基幹 LP `/btc-bias` ⇒ Whop チェックアウト」を主軸とし、Whop 直リンクはクロスセル等の例外ケースを除き使わない。
- **アフィリエイトは LP を挟んだ上で、aff パラメータと Whop の専用クーポンコードを組み合わせてトラッキングし、報酬計測は Whop＋Make＋スプレッドシートで一元管理する。**
- すべての新しいフローや決定事項は本 MasterDoc に反映し、Git でバージョン管理する。

---

## ROADMAP: アジェンダのファイナルアンサー

- ローンチ戦略は、Product A（BTC Bias Brief Signals）を 7 日トライアル 29 USD の準リードマグネットとして位置づけ、アフィリエイト＋コンテンツ＋後続広告でリストを獲得し、**Product B/C（Q1 2026）と Thinkific 講座で LTV を伸ばす。**
- 販売チャネルは v2.0 時点では **Whop（サブスク）＋ Thinkific（CryptoTradeAcademy 講座）** に集中し、Stripe Billing 単体と Shopify は当面使用しない。
- ターゲットは日本に限定せず、Tier1（US / UK / CA / AU / SG）と Tier2（IN / EU コア / UAE / BR）に段階展開するグローバル戦略とする。
- コンテンツ制作の軸は HeyGen（動画）＋ Envato 素材（LP テンプレ・ロゴ・フレーム）＋ ffmpeg（自動合成）とし、Notion は Affiliate Media Kit やナレッジ整理に限定する。
- 自動化は Vercel（LP / アプリ）＋ Make（Webhook / ワークフロー）＋ Git（コード・ドキュメント SSoT）＋ Doppler（シークレット）で構成する。
- **AI チーム体制は「Perplexity（統括）＋ ChatGPT 5.1（実装）＋ Grok 4.1（ペルソナ・感情分析）」とし、役割分担を明確化する。**

---

## ROADMAP: 要検討タスク（過去ログ参照）

- 旧チャットログに残っているタスク群は、必要に応じて `docs/1114Chat log_0x.md` から参照し、ここでは詳細を持たない。

---

## 1. 開発環境と CLI アーキテクチャ

- ホスティング: Vercel（Next.js ベースの LP / 管理 UI）＋ Vercel 環境 dev / prd。
- 言語・ランタイム: Node.js / TypeScript、ローカルは Windows + PowerShell + ts-node。
- 構成管理: GitHub リポジトリ `crypto-signal-ai` にコード・ドキュメント・設定を集約し、MasterDoc も同リポジトリで管理する。
- シークレット: Doppler で Whop / HeyGen / CryptoQuant / Telegram / Discord / YouTube / X の API キーと Webhook URL を一括管理し、`doppler run --` で注入する。
- メディア処理: ffmpeg を標準ツールとして導入し、HeyGen mp4 とロゴ・テロップ・Envato テンプレ動画を CLI で合成する。

### 1-1. 標準 PowerShell コマンド群（構想）

- `csa-deploy` → `doppler run -- vercel deploy` で LP / アプリをデプロイ。
- `csa-video-src` → HeyGen API を叩いて VSL / ショートのソース mp4 を生成。
- `csa-video-final` → ffmpeg でロゴオーバーレイ＋字幕焼き込み済みの最終版 mp4 を出力。
- `csa-discord` → Discord Webhook に動画やテキストシグナルを投稿。
- `csa-youtube` → YouTube Shorts へ CLI からアップロード。
- `csa-x` → X にシグナル概要やプロモツイートを投稿。

---

## 2. シグナル生成アルゴリズム（概要）

- 目的: CryptoQuant × Grok × 独自 News Risk フラグを統合し、セッション前 60 分以内に明確な Bias（BUY / SELL / STAND ASIDE）を提示して判断疲労を削減する。
- レジーム対応: ボラティリティ・流動性・市場構造に応じてモデルを切り替え、優位性が薄い局面は no-trade で回避する。
- 出力: エントリー帯・エグジット帯・リスクリミットを同梱した Bias Brief を生成し、Telegram / Discord へ配信する。

### 2-1. v1.3 開発ステータス（2025-11-14 時点）

- Grok API と連携し、SentimentBias v1.1 / NewsFlag v1.1 / Bias Brief v1.1.2 を実装済み。
- CryptoQuant Data API の日足 exchange netflow を HttpCryptoQuantClient v1.3 経由で取得し、オンチェーンバイアスに統合。
- デリバティブ指標は将来のアップグレード要素とし、現時点ではオンチェーン＋センチメント＋ニュースの三本柱でシグナルを生成。
- Telegram / Discord への配信は `sendTestSignal.ts` で検証済みで、Signal / Summary / Reasons / Risk Note / Suggested Plan を 1 メッセージに集約するフォーマットを採用。

### 2-2. 詳細ドキュメント

- スコアリング式やプロンプト、Bias Brief テンプレートの詳細は `docs/02_SignalGenerationAlgorithm.md` に記載し、MasterDoc では概要のみに留める。

---

## 3. ブランド構造と USP

### 3-1. ブランド構造

- **CryptoSignalAI**
  - 役割: AI ネイティブなシグナルエンジン＆サブスク（Product A/B/C）のコアブランド。
  - 販売場所: Whop 上のサブスクリプションプラン。

- **CryptoTradeAcademy**（`cryptotradeacademy.io`）
  - 役割: 教育・コンテンツ・権威づけを担うアカデミーブランド。
  - 基盤: Thinkific＋ブログ＋メール＋VSL。
  - CryptoSignalAI のプロダクトをフラッグシップツールとして紹介し、講座で Bias の読み方やリスク管理を教える。
  - **講座バンドル**: Signal + Bootcamp で LTV 3倍化戦略実装。

### 3-2. USP（独自の強み）

- **AI-native Bias Detection**
  - CryptoQuant 指標＋Grok センチメント＋ News Risk フラグを組み合わせ、セッション開始前にバイアスを検知する。

- **Clarity < 60m**
  - セッション前 60 分で BUY / SELL / STAND ASIDE の判断を 1 本に集約し、「チャートとニュースを何時間も眺めて迷う」状況を減らす。

- **Regime-aware / no-trade**
  - 市場レジームに応じて no-trade を明示し、期待値の低いギャンブルトレードを抑制する。

- **Risk-first Design**
  - News Risk とリスクリミットをセットで提示し、「どこでやめるか」を先に決められる設計にする。

---

## 4. ターゲット市場（Tier 構造）

### 4-1. Tier1（初期フォーカス）

- US / UK / Canada / Australia / Singapore。
- 英語一本で展開でき、Whop＋Stripe 決済との相性がよく、高単価サブスクに慣れたトレーダーが多い。

### 4-2. Tier2（早期拡張）

- India / EU core / UAE / Brazil。
- Crypto ユーザー数とボラティリティが高く、多言語化と価格調整で LTV を伸ばしやすい。

### 4-3. ポジショニング

- 日本市場に限定せず、グローバルな裁量トレーダー全般を対象とする。
- 当面は英語のみで Tier1 に集中し、成果を見つつ Tier2 へのローカライズと価格最適化を行う。

---

## 5. 販売・配信フロー（SSoT 更新版）

- **LP / アプリ**: Vercel 上の Next.js サイト（基幹 LP `/btc-bias` を含む）。
- **決済・アクセス管理**: Whop（Stripe 連携）で Product A/B/C のサブスクを管理。
- **シグナル配信**: Telegram ブロードキャストチャンネルをメインとし、将来 Discord コミュニティと二層構造にする。
- **オートメーション**: Make に Whop Webhook・Telegram・Discord・メール・カレンダー連携を集約する。
- **運用ログ / コード**: GitHub リポジトリと MasterDoc を SSoT とし、Notion は Affiliate Media Kit のみに使用する。

---

## 6. メッセージ配信手段

- 配信チャネルは「シグナル配信（Telegram / Discord）」「マーケティング（X / YouTube / TikTok / メール）」に分けて設計する。
- Webhook / Bot / API 駆動で、CLI から一貫して投稿できるようにする方針とする。

---

## 7. 商品ラインナップ【v2.0 更新】

### 7-1. 現行ラインナップ（MVP）

| プロダクト | プラン名 | 対象資産 | 月額価格 | 備考 |
|:--|:--|:--|:--|:--|
| **A** | BTC Bias Brief Signals (Plan A) | BTC | **99 USD** | **7日トライアル 29 USD → 自動で 99 USD/月移行**<br>**初回本サブスクに 30日返金保証***<br>判定基準: 「判断の明瞭さ」に満足いかない場合<br>返金プロセス: support@cryptosignal-ai.com 経由、24時間以内 |

**想定ユーザー**: BTC 裁量トレーダーで、セッション前バイアスとリスク管理を効率化したい中級〜上級層。

### 7-2. 将来ラインナップ（Roadmap - **Q1 2026**）

| プロダクト | プラン名 | 対象資産 | 月額価格 | 提供時期 |
|:--|:--|:--|:--|:--|
| **B** | Major Alt Signals | ETH / SOL / XRP | **$199/月** | **Q1 2026** |
| **C** | Alt Event Radar (add-on) | Alt + Meme銘柄イベント | **+$99/月** | **Q1 2026** |

**特典**: 
- Trial継続ユーザーに早期アクセス優先権
- Q4 2025 ベータテスト参加権付与

### 7-3. Thinkific 講座バンドル【v2.0 新規追加】

| 講座名 | 価格 | 内容 | バンドルオプション |
|:--|:--|:--|:--|
| **Bias-Free Trading Bootcamp** | **$199** (one-time) | ・3時間ビデオコース<br>・Hugh Ashley 実例解説<br>・証言者10人のケーススタディ<br>・Sentiment vs Flow 解決法 | **Signal + Bootcamp**<br>$99/月 + $199<br>= **$249 初月（25% off）** |

**戦略**: Bootcamp でシグナル独自読解力を育成 → Signal サービス + 教育 = **3x 継続率**

---

## 8. 価格戦略【v2.0 更新】

### 8-1. Product A

- **標準価格**: 99 USD / 月。
- **7 日トライアル**: 29 USD（返金なし）で、7 日後に自動で 99 USD / 月へ移行。
- **30 日返金保証**: 
  - **対象**: 初回本サブスク課金分のみ（7日Trial or 月額プラン最初の1ヶ月）
  - **判定基準**: 「判断の明瞭さ」に満足いかない場合は全額返金
  - **返金プロセス**: support@cryptosignal-ai.com に連絡、24時間以内に処理
  - **重要**: トレード結果ではなく「判断品質」を保証

### 8-2. Product B/C とアップセル【v2.0 更新】

- **B**: 月額 **$199** を想定し、A ユーザー向け初回クロスオファーを $149 からテスト。
- **C**: 当面 B への **add-on (+$99/月)** とし、市況次第で単独販売を検討する。
- **A/B/C から Thinkific 講座へのアップセル**: $199 単価で構築し、バンドル割引（$249 初月 = 25% off）も実装。

### 8-3. アフィリエイト報酬方針【v2.0 更新】

- **トライアル 29 USD**: 40%（約 $11.6）
- **本サブスク＋B/C・講座**: 30% レカリング
- **1,000 ユーザー到達後**: トライアル報酬を 30% に調整し、長期的な LTV を守る。
- **トラッキング**: aff パラメータ + Whop クーポン併用、Make.com で月次報酬計算自動化

---

## 9. 販売プラットフォーム【v2.0 更新】

### 9-1. メイン

- **Vercel**: 基幹 LP `/btc-bias` とブランドサイト。
- **Whop**: サブスク決済・アクセス管理・アフィリエイト機能。
- **Thinkific**: CryptoTradeAcademy の講座販売・受講管理。

### 9-2. 当面使用しないもの

- Stripe Billing 単体（Whop が Stripe をラップしているため）。
- Shopify（物販や多数 SKU が出るまで保留）。

---

## 10. プロモーション \\& 集客戦略【v2.0 完全改訂】

### 10-1. アフィリエイトファースト

- 当面の集客の軸はアフィリエイトに置き、Whop のアフィ機能と外部アフィネットワークを組み合わせてリーチを拡大する。
- アフィリエイターには「専用 LP リンク＋専用クーポンコード＋推奨クリエイティブ」をセットで提供する。

### 10-2. LP 中心の導線

- すべてのアフィリンク・YouTube/TikTok ショート・X 投稿からの主要導線は、基幹 LP `/btc-bias` に統一する。
- LP のヒーローセクションに **HeyGen VSL v1.1** を埋め込み、その下にオファー・サービス内容・証拠・料金表・FAQ・ダブル CTA を配置する。
- **VSL ロードマップ**: v1.1 (Free Version) → v2.0 (Premium with custom avatars) - **Q1 2026**

### 10-3. アフィリエイト計測設計【v2.0 完全版】

**実装詳細**: LP仕様書 v2.0「セクション9: Affiliate Tracking Design」参照

#### **URL パラメータ設計**

```
Hero Page:    https://cryptosignal-ai.vercel.app/?aff=AFFILIATE_ID
Pricing Page: https://cryptosignal-ai.vercel.app/pricing?aff=AFFILIATE_ID&coupon=AFFILIATE_CODE
```

#### **LocalStorage 実装**

- LP 側で `aff` パラメータを取得し、LocalStorage に **30日間** 保存する。
- 有効期限チェック: 期限切れの場合は自動削除。

```javascript
// React useEffect パターン
useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const affId = urlParams.get('aff');
  
  if (affId) {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);
    
    localStorage.setItem('cryptosignal_aff', affId);
    localStorage.setItem('cryptosignal_aff_expiry', expiryDate.toISOString());
  }
}, []);
```

#### **Whop チェックアウト連携**

- CTA ボタンの Whop URL には、アフィリエイターごとのクーポンコードや aff パラメータを自動付与する。

```javascript
function handleCheckout() {
  const affId = getAffiliateId();
  let whopUrl = 'https://whop.com/cryptosignal-ai-trial';
  
  if (affId) {
    whopUrl += `?aff=${affId}`;
  }
  
  window.location.href = whopUrl;
}
```

#### **Whop 設定**

1. **Webhooks 設定**
   - Event: `checkout.completed`
   - URL: `https://hook.make.com/YOUR_WEBHOOK_ID`
   - Payload: `{ "aff": "{{checkout.custom_fields.aff}}" }`

2. **カスタムフィールド追加**
   - Field Name: `aff`
   - Type: Hidden
   - Default: URL パラメータから取得

#### **Make.com ワークフロー**

```
[Webhook Trigger] 
  ↓
[Whop Purchase Data]
  - checkout_id
  - product_id
  - amount_paid
  - custom_fields.aff
  ↓
[Filter: Has aff ID?]
  ↓ YES
[Google Sheets: Append Row]
  - Affiliate ID
  - Checkout ID
  - Amount Paid
  - Commission (amount * 0.20)
  - Timestamp
  ↓
[Email: Monthly Report to Affiliate]
  (月次集計時に実行)
```

#### **月次報酬計算**

- Make.com Scheduled Scenario（毎月1日実行）
- Google Sheets で `SUM(Commission WHERE Status=pending)`
- PayPal API 経由で送金
- Status を `paid` に更新

---

## 11. CryptoTradeAcademy（Thinkific）講座戦略【v2.0 更新】

- **役割**: 「Bias-free Trading」「News Risk Management」「AI Signal の使い方」などの教育と権威づけ。
- **代表講座**: Bias-Free BTC Day Trading Mastery（$199）を想定し、CryptoSignalAI の利用方法とリスク管理を体系的に教える。
- **販売経路**: CryptoTradeAcademy サイトと既存ユーザーへのバンドルオファー。
- **バンドル戦略**: 
  - Signal + Bootcamp = $249 初月（25% off）
  - LTV 最適化: Bootcamp が独自読解力を育成 → 3x 継続率

---

## 12. Make とカレンダー／通知連携

- Whop のイベント（購読開始 / 解約 / 支払い失敗）を Make で受け取り、Welcome メール・解約確認メール・支払い失敗リマインドを自動送信する。
- キャンペーン開始終了や定例ミーティングなどを Make → Google カレンダー → Chatwork で自動登録・通知する。

---

## プラン体系（Plan A/B の役割整理）

- **Plan A**: Signal Only（Telegram ブロードキャスト）として、セッション前 Bias Brief の受信に特化。
- **Plan B**: Signal + Community（Discord）として、将来ローンチ時にコミュニティとアーカイブ機能を提供。
- Telegram は高速ブロードキャスト、Discord はコミュニティとナレッジ蓄積のハブという役割分担。

---

## 運用ルール（PowerShell 指示 / 検証サイクル）

1. AI から毎回 PowerShell の一括コマンドを提示する。
2. ユーザーがコマンドを実行し、ログを AI に返して検証する。
3. エラーがあれば AI が修正版コマンドを提示し、成功するまでループする。
4. 正常終了した工程は MasterDoc と Git に反映し、次工程へ進む。

---

## AI パートナーの役割分担【v2.0 完全版】

### **統括・戦略層**

**Perplexity Deep Research（プロジェクトマネージャー）**
- あなたの過去ログ＆全体戦略を理解した上での戦略分析
- Amazing Diet → CryptoSignal AI マッピング設計
- LP＆VSL 統合設計＆整合性検証
- 全LLMへの指示作成＆出力統合＆品質保証
- 実装ガイド＆HeyGen/Make/PowerShellスペック作成

### **コンテンツ・ペルソナ層**

**Grok 4.1（感情的リアリティ専門）**
- ペルソナ詳細化（国籍・地域・職業・失敗体験）
- 主人公＆証言者9人の背景ストーリー（感情的、詳細化）
- 読者共感度最大化

### **実装・CLI層**

**ChatGPT 5.1 Thinking（技術実装・自動化）**
- Vercel LP実装（Xeril React Template → CryptoSignal AI LP）
- HeyGen APIプロンプト設計
- Make.com ワークフロー構築
- PowerShell CLIオペレーション完全版
- **LP仕様書 v2.0 に基づく完全実装**

### **センチメント・市況分析層**

**Grok 4（X を中心とした市況分析）**
- トレーダー心理分析
- ニュースセンチメント
- リアルタイム メッセージング最適化

---

### 実行フロー（一気通貫型 Perplexity統括）

1. **Perplexity**: 戦略分析＆Grok指示作成
2. **Grok 4.1**: ペルソナ詳細化実行
3. **Perplexity**: LP＆VSL統合＆ChatGPT指示作成
4. **ChatGPT 5.1**: 技術実装完全版生成（LP仕様書 v2.0 準拠）
5. **Perplexity**: 全体統合＆最終品質保証

**ユーザーは最終意思決定者として、Perplexity が提示した全体統合案の中から攻めと守りのバランスを選択する。**

---

## Git 運用テンプレ

- 毎日、「思考整理 → MasterDoc 更新 → `git add` → `git commit` → `git push`」をワンセットで回し、変更履歴を残す。
- MasterDoc v2.0 と LP仕様書 v2.0 の完全一貫性を Git で管理する。

---

## Amazing Diet 型マーケティングキャンペーン（LP＆VSL）【v2.0 更新】

### キャンペーン概要

- **目的**: Amazing Diet スワイプファイルの構造を CryptoSignal AI に完全移植し、ペイン→希望→行動のストーリーアークで説得力を最大化。
- **成果目標**: セールスレター完成度 92/100、感情的共鳴度 95/100 以上を実現し、推定CVR 8-12%（業界平均3-5%の2-3倍）達成。

### コンテンツ構成

- **LP本体**: Xeril React Template カスタマイズ版、8セクション完全実装
- **VSL台本**: HeyGen API対応、5:23 完全版台本（v1.1 → v2.0 ロードマップ明記）
- **ペルソナ**: 主人公（Hugh Ashley）＋証言者10人、国籍・地域・職業・失敗体験を詳細化

### 開発プロセス（Perplexity統括型）

- **Phase 1**: Perplexity Deep Research で戦略分析＆マッピング
- **Phase 2**: Grok 4.1 でペルソナ感情的詳細化
- **Phase 3**: Perplexity で LP＆VSL統合＆整合性検証
- **Phase 4**: ChatGPT 5.1 で技術実装（Vercel/Make/HeyGen/PowerShell）

### 成果物（Git 管理）

- `docs/CryptoSignal-AI-LP-v2.0-Final.md` - **LP完全版 v2.0（整合性完全版）**
- `docs/VSL_CryptoSignalAI_v1.1.md` - VSL台本 v1.1
- `docs/Personas_Detailed.md` - ペルソナ詳細化ガイド
- `docs/Affiliate-Tracking-Spec.md` - **アフィリエイト・トラッキング完全仕様**
- `scripts/deploy-lp.ps1` - Vercel デプロイスクリプト
- `scripts/generate-vsl.ps1` - HeyGen APIコール＆動画生成
- `scripts/setup-make-workflow.json` - Make.com ワークフロー設定

---

## 📋 **v2.0 統合チェックリスト**

### **完了済み項目**

- [x] 返金保証条件の明確化（初回のみ、判断品質）
- [x] アフィリエイト・トラッキング設計完成（aff + Whop + Make.com）
- [x] Product B/C ロードマップ明示（Q1 2026）
- [x] Thinkific 講座バンドル追加（$249 初月）
- [x] VSL バージョン管理明示（v1.1 → v2.0）
- [x] AI 役割分担の明確化（Perplexity/ChatGPT/Grok）
- [x] LP仕様書 v2.0 との完全整合性達成
- [x] MasterDoc v2.0 アップデート完了

### **実装準備完了**

- [x] ChatGPT 5.1 への最終指示文完成
- [x] Xeril React Template カスタマイズ仕様確定
- [x] 実装優先度チェックリスト完備（2時間完成版）
- [x] 全ドキュメントの Git 管理体制確立

---

**以上を最新版 MasterDoc v2.0 として全面更新。LP仕様書 v2.0 との完全一貫性を達成。**

<div align="center">⁂</div>

**最終更新: 2025年11月19日 17:51 JST（決定版v2.0 - LP仕様書v2.0完全統合版）**
