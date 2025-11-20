
- 2025-11-05: src 汚染除去→最小スタブでCI復旧、docsを識別ヘッダーで統合。pre-commit導入で秘密情報/競合マーカーをブロック。

- 2025-11-05: v0.1.0 リリース完了。main保護（PR必須/Status checks/Linear history）適用。週次Evals開始。

### Weekly Evals ? 2025-11-05 (Week 1)
- 固定プロンプト集: 戦略/仕様/生成品質（各10ケース）
- 指標:
  - 成功率: 0.00% → 目標 95%+
  - 再実行率: 0.00% → 目標 <10%
  - 人手修正率: 0.00% → 目標 <20%
  - レイテンシ: 平均 0s → 目標 xx s
  - コスト: 平均 \0 → 目標 予算内
- 変更理由と施策:
  - RAG efficient を既定、必要時に performance へ昇格。
  - pre-commit で秘密/競合/レーン規律を自動ブロック。
  - Docs/Code レーン分離を維持し、PRを唯一の決定手段とする。

- 2025-11-05: main保護（PR必須/Status checks/Linear history）を適用・確認済み。

- 2025-11-05: Branch protection → build を必須チェックに設定。
