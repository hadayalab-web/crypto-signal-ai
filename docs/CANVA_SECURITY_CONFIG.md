# Canva API Security Configuration - CryptoSignal AI

## MFA Setup Status
✅ Multi-Factor Authentication: ENABLED
✅ Authenticator App: Google Authenticator (iOS/Android/Chrome)
✅ Backup Codes: 10 codes saved locally

## File Structure
\\\
crypto-signal-ai/
├── .canva_mfa_backup_codes (ローカルのみ、Git除外)
├── .env (ローカルのみ、Git除外)
├── canva-integration/
│   └── .env (ローカルのみ、Git除外)
└── .gitignore (バックアップコード & 環境変数を除外)
\\\

## Security Best Practices

### ✅ 推奨
- バックアップコードは別の安全な場所にもコピー保管
- 本番環境では AWS Secrets Manager / Azure Key Vault を使用
- API Keys は .env ファイルで環境変数化
- 定期的に API Keys をローテーション

### ❌ 避けるべき
- バックアップコード / API Keys を GitHub にコミット
- 共有フォルダに秘密情報を保存
- 公開ネットワークで秘密情報を送信

## Recovery Steps (MFA Device Lost)

1. Canva.com に別のデバイスでログイン
2. セキュリティ設定 → MFA を一時的に無効化
3. バックアップコードを使用してログイン
4. 新しい Authenticator App で MFA を再設定

---

**最終更新**: 2025-11-07 13:06 JST
**作成者**: CryptoSignal AI MVP
**対象**: Canva Connect API Integration
