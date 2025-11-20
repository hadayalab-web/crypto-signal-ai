# Troubleshooting Log - Phase 0 MVP Development

## Date: 2025-11-11

### Issue #1: CryptoQuant API - 400 Bad Request Error

- Problem: CryptoQuantのAPIエンドポイント/パラメータが変更となり400で失敗
- 対策: window/limitを削除、type: 'exchange'のみ指定に修正

### Issue #2: Grok API - 400 Bad Request Error

- Problem: モデル名grok-betaが廃止、環境変数名不統一
- 対策: model→grok-2-latest、GROK_API_KEY→XAI_API_KEYで統一

### Issue #3: Telegram API - Syntax Error (parse_mode)

- Problem: parse_modeパラメータのクォートもれによりシンタックスエラー
- 対策: parse_mode: 'Markdown'で必ず文字列リテラル

### 解決の流れ
- すべてPowerShellやVSCodeの直接編集で正しい要求形式・構文にもどし順次テスト
- 途中で正規表現置換ミスや環境変数二重管理も判明し整理済み

### 今後の注意
- APIのバージョンやパラメータ仕様は必ず公式サイト最新を精査
- .env／環境変数名ルールを厳守し、各種ドキュメント・環境間で名称ずれがないよう推進
- PowerShellでは複数行の正規表現置換やJSコード直接実行は不可、JSはVSCode手編集推奨
- 主要なAPI呼び出しはtry-catch & 詳細log記録、エラー時即時障害通知（Telegram DM/メール等）体制整備

## Status: All Core Functions Operational (2025-11-11)

- CryptoQuant取得→Grok AI解析→Telegram通知フルパイプライン実稼働
- API応答／Bot配信ともにエラー無く動作

---
