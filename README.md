# CryptoSignal AI - Phase 0 MVP

**AI-Powered Crypto Trading Signal Detection System**

## 📊 Current Status (2025-11-08)

- ✅ Phase 0 MVP Development
- ✅ CryptoQuant Professional Integration
- ✅ API Configuration Complete
- ⏳ sim.ai Workflow Implementation
- 🚀 Launch: 2025-11-10 10:00 JST

---

## 🎯 Tech Stack (Phase 0)

### Data Providers
- **CryptoQuant Professional** (/月) - On-Chain Data (PRIMARY)
- **CryptoCompare** (Free) - Price Data
- **OpenAI GPT-4o** (~/月) - AI Analysis

### Infrastructure
- **sim.ai** - Workflow Automation
- **Telegram** - Notifications
- **YouTube Data API** - Social Monitoring

### Monetization (Multi-Platform Strategy)
- **Whop** (PRIMARY) - -Raw50/month, 2.9% fee
- **Gumroad** (SECONDARY) - -Raw55/month, 10% fee
- **Patreon** (TIER-BASED) - -Raw25--Raw100/month, 8-12% fee
- **sim.ai** - Workflow Automation
- **Telegram** - Notifications
- **YouTube Data API** - Social Monitoring
- **Whop** - Payment & Subscription

### Total Cost: /月
**ROI Target: <2日で回収**

---

## 📁 Project Structure

\\\
crypto-signal-ai/
├── .env                    # Environment Variables (gitignored)
├── .gitignore             # Git ignore configuration
├── README.md              # This file
├── docs/
│   ├── API.md            # API Documentation
│   ├── ARCHITECTURE.md   # System Architecture
│   └── DEPLOYMENT.md     # Deployment Guide
├── src/
│   ├── blocks/           # sim.ai Block implementations
│   ├── utils/            # Utility functions
│   └── config/           # Configuration files
└── tests/
    └── integration/      # Integration tests
\\\

---

## 🔑 Environment Variables

\\\ash
# On-Chain Data (PRIMARY)
CRYPTOQUANT_API_KEY=your_cryptoquant_professional_key

# Price Data
CRYPTOCOMPARE_API_KEY=your_cryptocompare_key

# AI Analysis
OPENAI_API_KEY=your_openai_key

# Workflow Engine
SIM_AI_API_KEY=your_sim_ai_key
SIM_AI_WORKFLOW_ID=your_workflow_id

# Notifications
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_chat_id

# Social Monitoring
YOUTUBE_API_KEY=your_youtube_api_key

# Payment (Phase 1)
WHOP_API_KEY=your_whop_key
WHOP_CHANNEL_ID=your_channel_id
\\\

---

## 🚀 Quick Start

### 1. Clone Repository
\\\ash
git clone https://github.com/hadayalab-web/crypto-signal-ai.git
cd crypto-signal-ai
\\\

### 2. Setup Environment
\\\ash
cp .env.example .env
# Edit .env with your API keys
\\\

### 3. Configure sim.ai
1. Import workflow from \sim-ai-workflow.json\
2. Set environment variables in sim.ai Settings
3. Test Block 1 (CryptoQuant Integration)

### 4. Run Tests
\\\ash
# Run integration tests
npm test
\\\

---

## 📈 Development Timeline

| Date | Phase | Status |
|------|-------|--------|
| 2025-11-07 | Phase 0 Setup | ✅ Complete |
| 2025-11-08 | API Integration | ✅ Complete |
| 2025-11-08 | sim.ai Implementation | ⏳ In Progress |
| 2025-11-09 | Testing & QA | ⏳ Scheduled |
| 2025-11-10 | MVP Launch | 🚀 Scheduled |

---

## 🎯 Phase 0 Goals

- ✅ CryptoQuant Professional integration
- ✅ Environment setup & API configuration
- ⏳ Smart Money Flow detection
- ⏳ Signal generation & Telegram alerts
- ⏳ 5回 integration tests

---

## 📝 Recent Updates

### 2025-11-08 11:14 JST
- ✅ Migrated from Messari to CryptoQuant Professional
- ✅ Removed unused API keys (Alchemy, Etherscan, Nansen, FRED, Messari)
- ✅ Optimized to 10 essential API keys
- ✅ Environment variables cleaned up
- ⏳ Next: sim.ai Block 1 implementation

---

## 📞 Support

- GitHub Issues: [crypto-signal-ai/issues](https://github.com/hadayalab-web/crypto-signal-ai/issues)
- Documentation: \/docs\

---

## 📄 License

Proprietary - All Rights Reserved

---

**Built with ❤️ by HadayaLab**

# CryptoSignal AI Phase 1 MVP Launch Checklist (2025/11/11)

## 進捗・現状サマリー
- Phase 0 MVPはVercel本番/Telegram正常連携でエンドツーエンド検証済み
- Phase 1：「自動化Cron＋UX改善＋バックアップ＋安定化」11/11中に完了予定
- ローカル/クラウド両方でAPI/環境変数正常同期・バックアップ体制整備

## 現状問題・注意点・Known Issues
- Doppler→Vercel同期で一部環境変数が空になる現象あり（本番はVercelへ手動投入中）
- node-fetch等の依存性ズレやCronバッチ時のリクエスト数制限に注意
- ローカルとクラウドでIP/API上限エラー差分あり（本番公開に影響なし）
- PowerShellでLF/CRLF警告多発：将来的なコード整理時に注意
- 一時/テストファイルやログは.gitignore徹底

## 追加チェックリスト・運用ドキュメント

### セキュリティ・運用
- [ ] APIキー有効期限・権限確認済み
- [ ] .envバックアップ完了（.env.doppler_backupに保存）
- [ ] 環境変数はGit管理外徹底

### 自動化・監視
- [ ] Cron Job稼働・初回配信ログ確認
- [ ] エラー通知・リトライロジック実装
- [ ] Vercel/ログ監視設定済み

### ドキュメント・連絡
- [ ] ローカル復元手順README記載
- [ ] ユーザー告知メッセージ案の作成
- [ ] Phase 2ロードマップ明記
- [ ] 緊急時連絡先・手動切替手順整備

### コード品質
- [ ] 重要ファイルバックアップ
- [ ] テストコード/CI検討開始
- [ ] コメント・設計意図明示化

### ローンチ直前デプロイ
- [ ] 最終コミット＆本番デプロイ
- [ ] ロールバック手順確認
- [ ] ステージング再テスト済み

# CryptoSignal AI Phase 1 MVP Launch Checklist (2025/11/11)

## 進捗・現状サマリー
- Phase 0 MVPはVercel本番/Telegram正常連携でエンドツーエンド検証済み
- Phase 1：「自動化Cron＋UX改善＋バックアップ＋安定化」11/11中に完了予定
- ローカル/クラウド両方でAPI/環境変数正常同期・バックアップ体制整備

## 現状問題・注意点・Known Issues
- Doppler→Vercel同期で一部環境変数が空になる現象あり（本番はVercelへ手動投入中）
- node-fetch等の依存性ズレやCronバッチ時のリクエスト数制限に注意
- ローカルとクラウドでIP/API上限エラー差分あり（本番公開に影響なし）
- PowerShellでLF/CRLF警告多発：将来的なコード整理時に注意
- 一時/テストファイルやログは.gitignore徹底

## 追加チェックリスト・運用ドキュメント

### セキュリティ・運用
- [ ] APIキー有効期限・権限確認済み
- [ ] .envバックアップ完了（.env.doppler_backupに保存）
- [ ] 環境変数はGit管理外徹底

### 自動化・監視
- [ ] Cron Job稼働・初回配信ログ確認
- [ ] エラー通知・リトライロジック実装
- [ ] Vercel/ログ監視設定済み

### ドキュメント・連絡
- [ ] ローカル復元手順README記載
- [ ] ユーザー告知メッセージ案の作成
- [ ] Phase 2ロードマップ明記
- [ ] 緊急時連絡先・手動切替手順整備

### コード品質
- [ ] 重要ファイルバックアップ
- [ ] テストコード/CI検討開始
- [ ] コメント・設計意図明示化

### ローンチ直前デプロイ
- [ ] 最終コミット＆本番デプロイ
- [ ] ロールバック手順確認
- [ ] ステージング再テスト済み

# CryptoSignal AI Phase 1 MVP Launch Checklist (2025/11/11)

## 進捗・現状サマリー
- Phase 0 MVPはVercel本番/Telegram正常連携でエンドツーエンド検証済み
- Phase 1：「自動化Cron＋UX改善＋バックアップ＋安定化」11/11中に完了予定
- ローカル/クラウド両方でAPI/環境変数正常同期・バックアップ体制整備

## 現状問題・注意点・Known Issues
- Doppler→Vercel同期で一部環境変数が空になる現象あり（本番はVercelへ手動投入中）
- node-fetch等の依存性ズレやCronバッチ時のリクエスト数制限に注意
- ローカルとクラウドでIP/API上限エラー差分あり（本番公開に影響なし）
- PowerShellでLF/CRLF警告多発：将来的なコード整理時に注意
- 一時/テストファイルやログは.gitignore徹底
## Recent Updates (2025-11-11)
- Phase 0 MVPトラブルシュート履歴[TROUBLESHOOTING.md]追記
- CryptoQuant/Grok/Telegram各API最新仕様に対応
- フルパイプライン完全復旧・テスト通過

