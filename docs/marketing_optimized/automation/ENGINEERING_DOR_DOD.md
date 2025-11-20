# Engineering - Definition of Ready & Definition of Done

## Definition of Ready (DOR) - タスク着手条件

- [ ] sim.ai ワークフロー設計書完成
- [ ] Doppler 環境変数すべてセット
  - CRYPTOCOMPARE_API_KEY
  - MESSARI_API_KEY
  - SIM_AI_API_KEY
  - SIM_AI_WORKFLOW_ID
  - WHOP_API_KEY
  - WHOP_CHANNEL_ID
- [ ] API レート制限確認（CryptoCompare 12req/min, Messari 30req/min）
- [ ] Whop テスト環境アカウント作成

## Definition of Done (DOD) - タスク完了条件

### 全タスク共通
- [ ] TypeScript 100% 型安全性確認 (npm run build 成功)
- [ ] ユニットテストカバレッジ ≥ 80% (npm run test)
- [ ] GitHub Actions CI パス
- [ ] コードレビュー承認

### sim.ai ワークフロー統合
- [ ] CryptoCompare API 接続テスト成功
- [ ] Messari API 接続テスト成功
- [ ] Webhook JSON スキーマ検証
- [ ] ローカル環境で 10回実行テスト

### TypeScript 関数 (Whop 連携)
- [ ] POST /signal エンドポイント実装
- [ ] リクエスト検証ロジック (X-Webhook-Signature 確認)
- [ ] Whop API 呼び出し成功
- [ ] エラーハンドリング: リトライロジック 3回 (exponential backoff)
- [ ] ログ出力: 全トランザクション記録

### 統合テスト
- [ ] End-to-End: sim.ai → TypeScript → Whop 全フロー成功
- [ ] ライブディスコード配信テスト成功
- [ ] Webhook 遅延測定: < 5秒

## Gate 0 チェック（ローンチ前48時間）

✅ npm run build        # TypeScript コンパイル成功
✅ npm run test         # ユニットテスト 100% パス
✅ sim.ai Workflow      # 本番環境接続テスト成功
✅ Whop Webhook Test    # メッセージ配信確認
✅ Doppler Rotation     # API キーロテーション完了
✅ GitHub main merge    # cleanup/mvp-focused ブランチマージ完了

上記すべて ✅ → ゴー・ノーゴー: GO

## Incident Response (障害対応)

### CryptoCompare API 障害
- **検出**: 5分以上レスポンスなし
- **対応**: Messari フォールバック起動
- **ログ**: [FALLBACK] CryptoCompare timeout at ${timestamp}
- **復旧**: 手動確認後 sim.ai ワークフロー再実行

### Messari API 障害
- **検出**: 5分以上レスポンスなし
- **対応**: CryptoCompare データのみで継続
- **ログ**: [FALLBACK] Messari timeout at ${timestamp}
- **復旧**: 手動確認後復帰

### Whop Webhook 失敗
- **検出**: HTTP エラーコード
- **対応**: 再試行 3回
  - 1回目: 2秒待機
  - 2回目: 4秒待機
  - 3回目: 8秒待機
- **ログ**: [RETRY] Attempt ${n}/3 at ${timestamp}
- **最終失敗**: Slack アラート + メールログ

### 両方 API 障害
- **ログ**: [CRITICAL] Both APIs down at ${timestamp}
- **配信**: 本日シグナル配信スキップ + Discord メッセージ: "📴 信号取得エラー。明日をお楽しみに"

## リリース チェックリスト

- [ ] npm audit 0件 (セキュリティ脆弱性なし)
- [ ] GitHub branch protection: main ブランチプッシュ禁止
- [ ] Doppler: production 環境専用キー配置
- [ ] ログレベル: development = DEBUG / production = INFO
- [ ] タイムゾーン: Asia/Tokyo 固定

## ロールバック手順

git tag                    # 過去タグ確認
git checkout v0.1.0-mvp    # 前バージョン切り替え
npm run deploy             # 再デプロイ
