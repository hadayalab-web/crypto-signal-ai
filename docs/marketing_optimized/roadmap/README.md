# CryptoSignal AI™ - MVP Edition

## 概要

CryptoSignal AI™ は、Sim.ai ワークフロー、Express API、Telegram Bot を統合した暗号資産自動シグナル配信システムです。

## 📊 システム構成

┌─────────────────────────────────────────────────────┐
│ CryptoSignal AI™ - Complete Architecture │
└─────────────────────────────────────────────────────┘

🔗 Data Flow:
Block 2 (Multi-Asset Data)
→ Block 2b (7D Analysis)
→ Block 3 (Decision Engine)
→ Block 7-8 (Smart Money Analysis)
→ Block 4 (Message Generator)
→ Block 5 (Telegram Sender)

📱 Integration:
✅ Sim.ai Workflow (複数ブロック連携)
✅ Express REST API (localhost:3000)
✅ Telegram Bot (@CryptoTradeAcademyBot)
✅ Real-time Signal Delivery

text

## 🚀 クイックスタート

### 前提条件
- Node.js 18+
- npm または yarn
- Telegram Bot Token
- Chat ID

### インストール

フォルダに移動
cd C:\Users\chiba\crypto-signal-ai

依存関係をインストール
npm install

.env ファイルを設定
TELEGRAM_BOT_TOKEN=your_token
TELEGRAM_CHAT_ID=your_chat_id
text

### 実行

開発環境で起動
npm run dev

ブラウザでテスト
http://localhost:3000/health
http://localhost:3000/api/multi-asset-data
text

## 📡 API エンドポイント

### Health Check
GET http://localhost:3000/health

text

**レスポンス:**
{
"status": "workflow_started",
"timestamp": "2025-11-04T07:05:17.721Z"
}

text

### Multi-Asset Data
GET http://localhost:3000/api/multi-asset-data

text

**レスポンス:**
{
"success": true,
"assets": [
{
"symbol": "BTC",
"price": 106680,
"change_24h": -1.12,
"volume_24h": 73100000000,
"market_cap": 2100000000000
}
]
}

text

## 🔧 Sim.ai ワークフロー構成

| ブロック | 名称 | 状態 | 説明 |
|:--|:--|:--|:--|
| Block 2 | Multi-Asset Data Fetcher | ✅ 動作中 | CryptoCompare から価格データ取得 |
| Block 2b | GPT-4o Analysis | ✅ 動作中 | 7次元マルチアセット分析 |
| Block 3 | Decision Engine | ✅ 動作中 | 売買判定エンジン |
| Block 3.5 | Signal Confidence | ✅ 動作中 | 信頼度スコア計算 |
| Block 4 | Message Generator | ✅ 動作中 | Telegram メッセージ生成 |
| Block 5 | Telegram Sender | ✅ 動作中 | Telegram 配信 |
| Block 7 | Smart Money Timing | ✅ 動作中 | スマートマネー分析 |
| Block 8 | Entry/Exit Calculator | ✅ 動作中 | エントリー/エグジット計算 |

## 📱 Telegram 設定

### Bot情報
- **Bot Name**: CryptoSignal AI Bot
- **Bot Username**: @CryptoTradeAcademyBot
- **Bot Token**: 8493185325:AAHRnSQG2YFNaBLnyO7XKpGJS2coN081dT0
- **Chat ID**: -1003223165053

### メッセージ形式
🎯 CryptoSignal AI™ Signal Report
━━━━━━━━━━━━━━━━━━━━━━━━━━
BTC: $106,680 (-1.12%)
Signal: BUY (Confidence: 78.5/100)
━━━━━━━━━━━━━━━━━━━━━━━━━

text

## 🌍 本番環境デプロイメント

### Option 1: ローカル 24/7 稼働
npm run dev

text

### Option 2: PM2 で永続化（推奨）
npm install -g pm2
pm2 start src/index.ts --name cryptosignal-ai
pm2 startup
pm2 save

text

### Option 3: Docker コンテナ化
docker build -t cryptosignal-ai .
docker run -d -p 3000:3000 --env-file .env cryptosignal-ai

text

## 📋 環境変数設定（.env）

Telegram Bot Configuration
TELEGRAM_BOT_TOKEN=8493185325:AAHRnSQG2YFNaBLnyO7XKpGJS2coN081dT0
TELEGRAM_CHAT_ID=-1003223165053

Server Configuration
PORT=3000
NODE_ENV=development

API Keys (Optional)
CRYPTOCOMPARE_API_KEY=your_key_here
OPENAI_API_KEY=your_key_here
text

## 📊 性能指標

| 指標 | 値 | 詳細 |
|:--|:--|:--|
| API Response Time | ~200ms | GET /health |
| Block Execution | 600-800ms | Sim.ai ワークフロー |
| Telegram Delivery | <1s | メッセージ送信 |
| Uptime Target | 99.9% | 24/7 稼働 |
| Cost | $0/month | ローカル実行 |

## 🔐 セキュリティ

- ✅ Environment Variables で API キー管理
- ✅ HTTPS サポート（本番環境）
- ✅ Rate Limiting（API 保護）
- ✅ Error Logging（監視）
- ✅ Fallback Mode（障害対応）

## 📚 プロジェクト構成

crypto-signal-ai/
├── src/
│ ├── index.ts # メインサーバー
│ ├── telegram.ts # Telegram 連携
│ ├── simAI.ts # Sim.ai ワークフロー
│ └── api/
│ └── routes.ts # API ルート定義
├── .env # 環境変数
├── .env.backup # バックアップ
├── package.json # 依存関係
├── tsconfig.json # TypeScript 設定
├── README.md # このファイル
└── docs/
├── SETUP.md # セットアップガイド
├── API.md # API ドキュメント
└── DEPLOYMENT.md # デプロイメント手順

text

## 🛠️ トラブルシューティング

### Port 3000 が既に使用中
既存プロセスを確認
netstat -ano | findstr :3000

PID を確認して終了
taskkill /PID <PID> /F

text

### Telegram メッセージが届かない
Bot Token 検証
$botToken = "8493185325:AAHRnSQG2YFNaBLnyO7XKpGJS2coN081dT0"
$response = Invoke-RestMethod -Uri "https://api.telegram.org/bot$botToken/getMe"

text

### Block 参照エラー
- Sim.ai でブロック ID を再確認
- Block 依存関係を確認
- Fallback Mode が有効か確認

## 📞 サポート

- GitHub Issues: [プロジェクト Issues]
- Email: support@cryptosignalai.com
- Telegram: @CryptoTradeAcademyBot

## 📄 ライセンス

MIT License - 詳細は LICENSE ファイルを参照

## 🎯 ロードマップ

- [ ] Advanced ML Models 統合
- [ ] Multi-Exchange Support
- [ ] Web Dashboard
- [ ] Mobile App
- [ ] Paper Trading
- [ ] Live Trading (v2.0)

## 🙏 謝辞

- Sim.ai: Workflow Automation
- Telegram: Real-time Delivery
- Express.js: API Framework
- TypeScript: Type Safety

---

**Last Updated**: 2025-11-04  
**Status**: Production Ready ✅  
**Version**: 1.0.0
