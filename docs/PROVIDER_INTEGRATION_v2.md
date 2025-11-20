# Provider Strategy - sim.ai + TypeScript

## API統合アーキテクチャ

| コンポーネント | 役割 | Doppler キー | 用途 |
|--|--|--|--|
| **CryptoCompare** | BTC/ETH 価格 + RSI/MACD | CRYPTOCOMPARE_API_KEY | 技術指標 |
| **Messari** | オンチェーン指標 | MESSARI_API_KEY | 流動性・ホルダー分析 |
| **sim.ai Copilot** | ワークフロー編成 | SIM_AI_API_KEY | 自動化エンジン |
| **Whop** | 配信 + 決済 | WHOP_API_KEY | 購読者管理・メッセージ配信 |

## sim.ai ワークフロー フロー

毎時間スケジュール
  ↓
[1] CryptoCompare: BTC/ETH 24h 価格データ取得
  ↓
[2] Messari: ホルダー集中度・流動性スコア取得
  ↓
[3] JavaScript ロジック:
    - RSI > 70 → 売却シグナル
    - RSI < 30 → 買買いシグナル
    - MACD クロス → トレンド確認
  ↓
[4] Webhook トリガー → TypeScript 関数へ POST
  ↓
[5] Whop Discord チャネルに配信

## TypeScript 実装スタック

- **言語**: TypeScript 5.x + Node.js 20.x
- **ランタイム**: Vercel Edge Functions (推奨) / AWS Lambda
- **キー管理**: Doppler CLI
- **テスト**: Jest
- **ビルド**: tsc + esbuild
- **CI/CD**: GitHub Actions

## API レート制限

| API | 無料層制限 | 対応策 |
|--|--|--|
| CryptoCompare | 12req/min | キャッシング (Redis 検討) |
| Messari | 30req/min | キャッシング |
| Whop Webhook | 無制限 | 再試行ロジック: 3回 (exponential backoff) |

## 本番環境構成

CryptoCompare (Primary)
           ↓
    sim.ai Copilot ────→ TypeScript Function ────→ Whop API
           ↓
Messari (Fallback)

- **プライマリ**: CryptoCompare + Messari 両方取得
- **フェイルオーバー**: どちらか片方失敗時は補充データで継続
- **アラート**: 両方障害時のみ Slack 通知

## リソース制限

- CryptoSignal AI ワークフロー実行時間: 30秒以内
- TypeScript 関数レスポンス: 5秒以内
- Doppler secret rotation: 毎月 1日
