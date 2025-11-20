# Major Incident Runbook

## 検知（アラート閾値）
- 5分間の失敗率 > 2% または 遅延p95 > 5s
- 重要指標: 配信遅延、RPC失敗、モデル応答

## 初動
1. フィーチャーフラグOFF（影響機能）
2. ジョブ再試行・キュー退避
3. ステータス掲示・ETA共有

## フェイルオーバー
- RPC: Alchemy → Infura → QuickNode
- 通知: Telegram → Email fallback

## 事後
- ポストモーテム（5 Whys、再発防止策）
- ISSUE作成（オーナー/期限/計測）
