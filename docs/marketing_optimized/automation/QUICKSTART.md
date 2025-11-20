# CryptoSignal AI - MVP QUICKSTART (2025-11-15 Launch)

ローンチまで残り12日。以下のステップで本番準備完了。

## Phase 1️⃣: 環境構築 (11月3-4日)

### 1.1 リポジトリ & 依存関係

git clone https://github.com/hadayalab-web/crypto-signal-ai.git
cd crypto-signal-ai
npm install
npm run build  # TypeScript コンパイル確認
npm run test   # ユニットテスト実行

### 1.2 Doppler 設定

doppler login
doppler secrets get CRYPTOCOMPARE_API_KEY
doppler secrets get MESSARI_API_KEY
doppler secrets get SIM_AI_API_KEY
doppler secrets get SIM_AI_WORKFLOW_ID
doppler secrets get WHOP_API_KEY
doppler secrets get WHOP_CHANNEL_ID

## Phase 2️⃣: sim.ai ワークフロー実装 (11月5-7日)

sim.ai コンソール → 新規 Copilot 作成

トリガー: 毎時間 (0分)

ステップ1: CryptoCompare 価格取得
URL: https://api.cryptocompare.com/data/price

ステップ2: Messari オンチェーン データ
URL: https://data.messari.io/api/v1/assets/bitcoin/metrics

ステップ3: ロジック判定 (JavaScript)

ステップ4: Webhook POST → TypeScript 関数へ

## Phase 3️⃣: TypeScript 関数実装 (11月8-10日)

npm run build
npm run deploy

## Phase 4️⃣: Whop 設定 & 統合テスト (11月11-13日)

Whop → Products 新規作成
Discord チャネル連携
Webhook URL 設定

## Phase 5️⃣: Gate 0 ゴー・ノーゴー判定 (11月14日)

✅ npm run build
✅ npm run test
✅ sim.ai Workflow
✅ Whop Webhook
✅ E2E Test
✅ Doppler Rotation
✅ GitHub Branch

## Phase 6️⃣: ローンチ本番切り替え (11月15日)

npm run test
git tag -a v1.0.0 -m "CryptoSignal AI MVP Launch"
git push origin v1.0.0

Good luck! 🚀
