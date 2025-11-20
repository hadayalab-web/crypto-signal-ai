<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# CryptoSignalAI プロジェクト・マスタードキュメント[1]

最終更新: 2025年11月19日 12:09 JST（決定版v1.5 - Perplexity統括・Grok感情詳細・ChatGPT実装）[^1]

***

## 今日のアジェンダ / 相談メモ[^1]

- 新規アカウント群から投稿を量産しても、ターゲットに十分リーチできるか[^1]
- Tier1 / Tier2 への到達経路を、アフィリエイト＋ショート動画＋広告でどう組み合わせるか[^1]
- 決済後のメッセージ配信・解約処理・権限剥奪を、Whop＋Make＋Telegram / Discord でどこまで自動化するか[^1]
- BTC 単体・Major Alt・Alt+Meme の三階建てプロダクト構成を、1 本のアルゴリズム基盤から実現できるか[^1]
- Amazing Diet 型のストーリー構成を、CryptoSignalAI の LP / VSL にどこまで移植するか[^1]
- HeyGen＋Envato＋ffmpeg＋CLI で「再現性の高い VSL / クリエイティブ自動生成パイプライン」を作れるか[^1]
- Product A を準リードマグネット化して、アフィリエイト主導で初週 5,000 USD を狙うファネルをどう設計するか[^1]

***

## 今日以降の優先方針（CLI ファースト）[^1]

- 運用・配信は CLI ファーストを絶対原則とし、Vercel / Doppler / Git / Make / Whop / HeyGen / YouTube / TikTok / Telegram / Discord / X は PowerShell → Node/TypeScript → 各 API という一元レールで操作する。[^1]
- 動画やサムネなどのクリエイティブは Envato 素材＋HeyGen mp4＋ffmpeg＋自作スクリプトで自動生成し、Canva や GUI ツールは例外対応と初期検証に限定する。[^1]
- トラフィック導線は「アフィリエイター / ショート動画 ⇒ 基幹 LP `/btc-bias` ⇒ Whop チェックアウト」を主軸とし、Whop 直リンクはクロスセル等の例外ケースを除き使わない。[^1]
- アフィリエイトは LP を挟んだ上で、aff パラメータと Whop の専用クーポンコードを組み合わせてトラッキングし、報酬計測は Whop＋Make＋スプレッドシートで一元管理する。[^2][^3]
- すべての新しいフローや決定事項は本 MasterDoc に反映し、Git でバージョン管理する。[^1]

***

## ROADMAP: アジェンダのファイナルアンサー[^1]

- ローンチ戦略は、Product A（BTC Bias Brief Signals）を 7 日トライアル 29 USD の準リードマグネットとして位置づけ、アフィリエイト＋コンテンツ＋後続広告でリストを獲得し、Product B/C と講座で LTV を伸ばす。[^1]
- 販売チャネルは v1.4 時点では Whop（サブスク）＋ Thinkific（CryptoTradeAcademy 講座）に集中し、Stripe Billing 単体と Shopify は当面使用しない。[^1]
- ターゲットは日本に限定せず、Tier1（US / UK / CA / AU / SG）と Tier2（IN / EU コア / UAE / BR）に段階展開するグローバル戦略とする。[^1]
- コンテンツ制作の軸は HeyGen（動画）＋ Envato 素材（LP テンプレ・ロゴ・フレーム）＋ ffmpeg（自動合成）とし、Notion は Affiliate Media Kit やナレッジ整理に限定する。[^1]
- 自動化は Vercel（LP / アプリ）＋ Make（Webhook / ワークフロー）＋ Git（コード・ドキュメント SSoT）＋ Doppler（シークレット）で構成する。[^1]
- AI チーム体制は「ユーザー＋ChatGPT 5.1 Thinking＋Grok 4」とし、戦略策定とセンチメント分析を分担する。[^1]

***

## ROADMAP: 要検討タスク（過去ログ参照）[^1]

- 旧チャットログに残っているタスク群は、必要に応じて `docs/1114Chat log_0x.md` から参照し、ここでは詳細を持たない。[^1]

***

## 1. 開発環境と CLI アーキテクチャ[^1]

- ホスティング: Vercel（Next.js ベースの LP / 管理 UI）＋ Vercel 環境 dev / prd。[^1]
- 言語・ランタイム: Node.js / TypeScript、ローカルは Windows + PowerShell + ts-node。[^1]
- 構成管理: GitHub リポジトリ `crypto-signal-ai` にコード・ドキュメント・設定を集約し、MasterDoc も同リポジトリで管理する。[^1]
- シークレット: Doppler で Whop / HeyGen / CryptoQuant / Telegram / Discord / YouTube / X の API キーと Webhook URL を一括管理し、`doppler run --` で注入する。[^1]
- メディア処理: ffmpeg を標準ツールとして導入し、HeyGen mp4 とロゴ・テロップ・Envato テンプレ動画を CLI で合成する。[^1]


### 1-1. 標準 PowerShell コマンド群（構想）[^1]

- `csa-deploy` → `doppler run -- vercel deploy` で LP / アプリをデプロイ。[^1]
- `csa-video-src` → HeyGen API を叩いて VSL / ショートのソース mp4 を生成。[^1]
- `csa-video-final` → ffmpeg でロゴオーバーレイ＋字幕焼き込み済みの最終版 mp4 を出力。[^1]
- `csa-discord` → Discord Webhook に動画やテキストシグナルを投稿。[^1]
- `csa-youtube` → YouTube Shorts へ CLI からアップロード。[^1]
- `csa-x` → X にシグナル概要やプロモツイートを投稿。[^1]

***

## 2. シグナル生成アルゴリズム（概要）[^1]

- 目的: CryptoQuant × Grok × 独自 News Risk フラグを統合し、セッション前 60 分以内に明確な Bias（BUY / SELL / STAND ASIDE）を提示して判断疲労を削減する。[^1]
- レジーム対応: ボラティリティ・流動性・市場構造に応じてモデルを切り替え、優位性が薄い局面は no-trade で回避する。[^1]
- 出力: エントリー帯・エグジット帯・リスクリミットを同梱した Bias Brief を生成し、Telegram / Discord へ配信する。[^1]


### 2-1. v1.3 開発ステータス（2025-11-14 時点）[^1]

- Grok API と連携し、SentimentBias v1.1 / NewsFlag v1.1 / Bias Brief v1.1.2 を実装済み。[^1]
- CryptoQuant Data API の日足 exchange netflow を HttpCryptoQuantClient v1.3 経由で取得し、オンチェーンバイアスに統合。[^1]
- デリバティブ指標は将来のアップグレード要素とし、現時点ではオンチェーン＋センチメント＋ニュースの三本柱でシグナルを生成。[^1]
- Telegram / Discord への配信は `sendTestSignal.ts` で検証済みで、Signal / Summary / Reasons / Risk Note / Suggested Plan を 1 メッセージに集約するフォーマットを採用。[^1]


### 2-2. 詳細ドキュメント[^1]

- スコアリング式やプロンプト、Bias Brief テンプレートの詳細は `docs/02_SignalGenerationAlgorithm.md` に記載し、MasterDoc では概要のみに留める。[^1]

***

## 3. ブランド構造と USP[^1]

### 3-1. ブランド構造[^1]

- CryptoSignalAI
    - 役割: AI ネイティブなシグナルエンジン＆サブスク（Product A/B/C）のコアブランド。[^1]
    - 販売場所: Whop 上のサブスクリプションプラン。[^1]
- CryptoTradeAcademy（`cryptotradeacademy.io`）
    - 役割: 教育・コンテンツ・権威づけを担うアカデミーブランド。[^1]
    - 基盤: Thinkific＋ブログ＋メール＋VSL。[^1]
    - CryptoSignalAI のプロダクトをフラッグシップツールとして紹介し、講座で Bias の読み方やリスク管理を教える。[^1]


### 3-2. USP（独自の強み）[^1]

- AI-native Bias Detection
    - CryptoQuant 指標＋Grok センチメント＋ News Risk フラグを組み合わせ、セッション開始前にバイアスを検知する。[^1]
- Clarity < 60m
    - セッション前 60 分で BUY / SELL / STAND ASIDE の判断を 1 本に集約し、「チャートとニュースを何時間も眺めて迷う」状況を減らす。[^1]
- Regime-aware / no-trade
    - 市場レジームに応じて no-trade を明示し、期待値の低いギャンブルトレードを抑制する。[^1]
- Risk-first Design
    - News Risk とリスクリミットをセットで提示し、「どこでやめるか」を先に決められる設計にする。[^1]

***

## 4. ターゲット市場（Tier 構造）[^1]

### 4-1. Tier1（初期フォーカス）[^1]

- US / UK / Canada / Australia / Singapore。[^1]
- 英語一本で展開でき、Whop＋Stripe 決済との相性がよく、高単価サブスクに慣れたトレーダーが多い。[^1]


### 4-2. Tier2（早期拡張）[^1]

- India / EU core / UAE / Brazil。[^1]
- Crypto ユーザー数とボラティリティが高く、多言語化と価格調整で LTV を伸ばしやすい。[^1]


### 4-3. ポジショニング[^1]

- 日本市場に限定せず、グローバルな裁量トレーダー全般を対象とする。[^1]
- 当面は英語のみで Tier1 に集中し、成果を見つつ Tier2 へのローカライズと価格最適化を行う。[^1]

***

## 5. 販売・配信フロー（SSoT 更新版）[^1]

- LP / アプリ: Vercel 上の Next.js サイト（基幹 LP `/btc-bias` を含む）。[^1]
- 決済・アクセス管理: Whop（Stripe 連携）で Product A/B/C のサブスクを管理。[^1]
- シグナル配信: Telegram ブロードキャストチャンネルをメインとし、将来 Discord コミュニティと二層構造にする。[^1]
- オートメーション: Make に Whop Webhook・Telegram・Discord・メール・カレンダー連携を集約する。[^1]
- 運用ログ / コード: GitHub リポジトリと MasterDoc を SSoT とし、Notion は Affiliate Media Kit のみに使用する。[^1]

***

## 6. メッセージ配信手段[^1]

- 配信チャネルは「シグナル配信（Telegram / Discord）」「マーケティング（X / YouTube / TikTok / メール）」に分けて設計する。[^1]
- Webhook / Bot / API 駆動で、CLI から一貫して投稿できるようにする方針とする。[^1]

***

## 7. 商品ラインナップ[^1]

### 7-1. 現行ラインナップ（MVP）[^1]

| プロダクト | プラン名 | 対象資産 | 月額価格 | 備考 |
| :-- | :-- | :-- | :-- | :-- |
| A | BTC Bias Brief Signals (Plan A) | BTC | 99 USD | 7日トライアル 29 USD → 自動で 99 USD/月移行、初回本サブスクに 30日成果満足保証 |

- 想定ユーザー: BTC 裁量トレーダーで、セッション前バイアスとリスク管理を効率化したい中級〜上級層。[^1]


### 7-2. 将来ラインナップ（Roadmap）[^1]

- Product B: Major Alt Bias Brief Signals（ETH / SOL / BNB / XRP / DOGE 等）。[^1]
- Product C: Alt \& Meme Event Radar（B 以外のアルト＋ミーム銘柄向けイベントレーダー）。[^1]
- BTC Plan A の MRR / 継続率 / LTV を見ながら 2025–2026 年の拡張候補として段階リリースする。[^1]

***

## 8. 価格戦略[^1]

### 8-1. Product A[^1]

- 標準価格: 99 USD / 月。[^1]
- 7 日トライアル: 29 USD（返金なし）で、7 日後に自動で 99 USD / 月へ移行。[^1]
- 30 日成果満足保証は本サブスク初回課金分にのみ適用し、トレード結果そのものではなく「判断の明瞭さ」など体験価値にフォーカスする。[^1]


### 8-2. Product B/C とアップセル[^1]

- B は月額 199 USD 前後を想定し、A ユーザー向け初回クロスオファーを 149 USD からテスト。[^1]
- C は当面 B への add-on (+99 USD/月) とし、市況次第で単独販売を検討する。[^1]
- A/B/C から Thinkific 講座へのアップセルは 97 USD 前後の単価で構築し、バンドル割引も視野に入れる。[^1]


### 8-3. アフィリエイト報酬方針[^1]

- トライアル 29 USD に対して 40%（約 11.6 USD）、本サブスクと B/C・講座に対して 30% のレカリングを基本線とする。[^1]
- 1,000 ユーザー到達後はトライアル報酬を 30% に調整し、長期的な LTV を守る。[^1]

***

## 9. 販売プラットフォーム[^1]

### 9-1. メイン[^1]

- Vercel: 基幹 LP `/btc-bias` とブランドサイト。[^1]
- Whop: サブスク決済・アクセス管理・アフィリエイト機能。[^1]
- Thinkific: CryptoTradeAcademy の講座販売・受講管理。[^1]


### 9-2. 当面使用しないもの[^1]

- Stripe Billing 単体（Whop が Stripe をラップしているため）。[^1]
- Shopify（物販や多数 SKU が出るまで保留）。[^1]

***

## 10. プロモーション \& 集客戦略[^1]

### 10-1. アフィリエイトファースト[^1]

- 当面の集客の軸はアフィリエイトに置き、Whop のアフィ機能と外部アフィネットワークを組み合わせてリーチを拡大する。[^4][^2]
- アフィリエイターには「専用 LP リンク＋専用クーポンコード＋推奨クリエイティブ」をセットで提供する。[^3][^1]


### 10-2. LP 中心の導線[^1]

- すべてのアフィリンク・YouTube/TikTok ショート・X 投稿からの主要導線は、基幹 LP `/btc-bias` に統一する。[^5][^1]
- LP のヒーローセクションに HeyGen VSL を埋め込み、その下にオファー・サービス内容・証拠・料金表・FAQ・ダブル CTA を配置する。[^1]


### 10-3. アフィリエイト計測設計[^1]

- LP 側で `aff` / `utm_*` パラメータを取得し、Cookie/LocalStorage に保存する。[^6][^1]
- CTA ボタンの Whop URL には、アフィリエイターごとのクーポンコードや aff パラメータを自動付与する。[^3][^1]
- Whop Webhook → Make → スプレッドシート / DB で「クーポンコード・aff・売上」を記録し、月次でアフィ報酬を計算する。[^4][^1]

***

## 11. CryptoTradeAcademy（Thinkific）講座戦略[^1]

- 役割は「Bias-free Trading」「News Risk Management」「AI Signal の使い方」などの教育と権威づけ。[^1]
- 代表講座案: Bias-Free BTC Day Trading Mastery（約 97 USD）を想定し、CryptoSignalAI の利用方法とリスク管理を体系的に教える。[^1]
- 販売経路は CryptoTradeAcademy サイトと既存ユーザーへのバンドルオファー。[^1]

***

## 12. Make とカレンダー／通知連携[^1]

- Whop のイベント（購読開始 / 解約 / 支払い失敗）を Make で受け取り、Welcome メール・解約確認メール・支払い失敗リマインドを自動送信する。[^1]
- キャンペーン開始終了や定例ミーティングなどを Make → Google カレンダー → Chatwork で自動登録・通知する。[^1]

***

## プラン体系（Plan A/B の役割整理）[^1]

- Plan A: Signal Only（Telegram ブロードキャスト）として、セッション前 Bias Brief の受信に特化。[^1]
- Plan B: Signal + Community（Discord）として、将来ローンチ時にコミュニティとアーカイブ機能を提供。[^1]
- Telegram は高速ブロードキャスト、Discord はコミュニティとナレッジ蓄積のハブという役割分担。[^1]

***

## 運用ルール（PowerShell 指示 / 検証サイクル）[^1]

1. AI から毎回 PowerShell の一括コマンドを提示する。[^1]
2. ユーザーがコマンドを実行し、ログを AI に返して検証する。[^1]
3. エラーがあれば AI が修正版コマンドを提示し、成功するまでループする。[^1]
4. 正常終了した工程は MasterDoc と Git に反映し、次工程へ進む。[^1]

***

## AI パートナーの役割分担（v1.5 - 2025-11-19決定版）

### 戦略・分析・企画層
- **Perplexity Deep Research（統括・プロジェクトマネージャー）**
  - あなたの過去ログ＆全体戦略を理解した上での戦略分析
  - Amazing Diet → CryptoSignal AI マッピング設計
  - LP＆VSL 統合設計＆整合性検証
  - 全LLMへの指示作成＆出力統合＆品質保証
  - 実装ガイド＆HeyGen/Make/PowerShellスペック作成

### コンテンツ・ペルソナ層
- **Grok 4.1（感情的リアリティ専門）**
  - ペルソナ詳細化（国籍・地域・職業・失敗体験）
  - 主人公＆証言者9人の背景ストーリー（感情的、詳細化）
  - 読者共感度最大化

### 実装・CLI層
- **ChatGPT 5.1 Thinking（技術実装・自動化）**
  - Vercel LP実装（Next.js テンプレート → CryptoSignal AI LP）
  - HeyGen APIプロンプト設計
  - Make.com ワークフロー構築
  - PowerShell CLIオペレーション完全版

### センチメント・市況分析層
- **Grok 4（X を中心とした市況分析）**
  - トレーダー心理分析
  - ニュースセンチメント
  - リアルタイム メッセージング最適化

---

### 実行フロー（一気通貫型 Perplexity統括）
1. Perplexity: 戦略分析＆Grok指示作成
2. Grok 4.1: ペルソナ詳細化実行
3. Perplexity: LP＆VSL統合＆ChatGPT指示作成
4. ChatGPT 5.1: 技術実装完全版生成
5. Perplexity: 全体統合＆最終品質保証

ユーザーは最終意思決定者として、Perplexity が提示した全体統合案の中から攻めと守りのバランスを選択する。[^1]

- ChatGPT 5.1 Thinking は戦略・アルゴリズム設計・コピーライティング・コード設計を担当する。[^1]
- Grok 4 は X を中心としたセンチメントとニュースの解析を担当し、市況に応じたフックやメッセージの微調整に寄与する。[^1]
- ユーザーは最終意思決定者として、AI が提示した案の中から攻めと守りのバランスを選択する。[^1]

***

## Git 運用テンプレ[^1]

- 毎日、「思考整理 → MasterDoc 更新 → `git add` → `git commit` → `git push`」をワンセットで回し、変更履歴を残す。[^1]

***

以上を最新版 MasterDoc v1.5 相当として全面貼り替え。[^1]

<div align="center">⁂</div>

[^1]: CryptoSignalAI_MasterDoc.md

[^2]: https://whop.com/blog/consumer-affiliates/

[^3]: https://whop.com/blog/whop-promo-codes/

[^4]: https://help.whop.com/en/articles/10382161-how-to-manage-affiliates

[^5]: https://whop.com/blog/market-digital-products/

[^6]: https://uchat.au/uchat-training/partner-setting-4-991-utm-and-affiliate-tracking



***

## 13. Amazing Diet 型マーケティングキャンペーン（LP＆VSL）

### 13-1. キャンペーン概要

- 目的: Amazing Diet スワイプファイルの構造を CryptoSignal AI に完全移植し、ペイン→希望→行動のストーリーアークで説得力を最大化。
- 成果目標: セールスレター完成度 92/100、感情的共鳴度 95/100 以上を実現し、推定CVR 5-8% 達成。

### 13-2. コンテンツ構成

- LP本体: Markdown形式で完全版を作成し、Vercel にて Next.js 実装。
- VSL台本: HeyGen API対応、7分完全版台本。
- ペルソナ: 主人公（藤田ハジミ）＋証言者9人、国籍・地域・職業・失敗体験を詳細化。

### 13-3. 開発プロセス（Perplexity統括型）

- Phase 1: Perplexity Deep Research で戦略分析＆マッピング
- Phase 2: Grok 4.1 でペルソナ感情的詳細化
- Phase 3: Perplexity で LP＆VSL統合＆整合性検証
- Phase 4: ChatGPT 5.1 で技術実装（Vercel/Make/HeyGen/PowerShell）

### 13-4. 成果物（Git 管理）

- docs/LP_CryptoSignalAI_Final.md - LP完全版
- docs/VSL_CryptoSignalAI_Final.md - VSL台本完全版
- docs/Personas_Detailed.md - ペルソナ詳細化ガイド
- scripts/deploy-lp.ps1 - Vercel デプロイスクリプト
- scripts/generate-vsl.ps1 - HeyGen APIコール＆動画生成
- scripts/setup-make-workflow.json - Make.com ワークフロー設定

***
