# CryptoSignal AI™ - Deployment Guide

## 本番環境デプロイメント手順

### 前提条件
- Windows Server 2019+
- Node.js 18.x LTS
- npm 9.x+
- Git

### Step 1: リポジトリをクローン

git clone https://github.com/your-username/crypto-signal-ai.git
cd crypto-signal-ai

text

### Step 2: 依存関係をインストール

npm install
npm install -g pm2

text

### Step 3: 環境変数を設定

.env ファイルを作成
cp .env.example .env

以下の値を設定:
TELEGRAM_BOT_TOKEN=8493185325:AAHRnSQG2YFNaBLnyO7XKpGJS2coN081dT0
TELEGRAM_CHAT_ID=-1003223165053
PORT=3000
NODE_ENV=production
text

### Step 4: PM2 で起動

サーバーを起動
pm2 start src/index.ts --name cryptosignal-ai --env production

自動起動を設定
pm2 startup
pm2 save

ステータス確認
pm2 status

text

### Step 5: ログを確認

リアルタイムログ
pm2 logs cryptosignal-ai

ログファイル
pm2 logs cryptosignal-ai > logs.txt

text

### ヘルスチェック

curl http://localhost:3000/health

text

### トラブルシューティング

#### プロセスが起動しない
pm2 delete cryptosignal-ai
pm2 start src/index.ts --name cryptosignal-ai

text

#### ポートエラー
netstat -ano | findstr :3000

text

---

**Version**: 1.0.0  
**Updated**: 2025-11-04
