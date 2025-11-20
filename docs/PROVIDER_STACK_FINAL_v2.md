# Provider Stack - CryptoSignal AI (FINAL v2.0)

**Updated:** 2025-11-08 10:38 JST
**Status:** CONFIRMED
**Decision:** CryptoQuant Pro (Smart Money Flow)

---

## 🎯 Final Provider Configuration

### Phase 0 MVP (11/10 Launch): /月

| Component | Provider | Role | Status |
|-----------|----------|------|--------|
| **Market Data** | CryptoCompare | BTC/ETH 価格 + RSI/MACD | ✅ Active |
| **On-Chain Data** | CryptoQuant Pro | Smart Money Flow + Exchange Flow | ✅ Acquiring |
| **Workflow Engine** | sim.ai Copilot | Signal Detection + Processing | ✅ Active |
| **Notifications** | Telegram Bot API | Alert Distribution | ✅ Active |
| **AI Analysis** | OpenAI GPT-4o | Divergence Analysis | ✅ Active |
| **Social Monitoring** | YouTube Data API | Retail FOMO Detection | ✅ Active |

**Total Cost:** /月 (GPT-4o のみ)

---

### Phase 1 (11/11): +/月

- Twitter API v2 (Social Sentiment)
- **Total:** /月

---

### Phase 2 (12/1): +/月

- Messari Pro (Advanced On-Chain)
- Reddit API (Community Analysis)
- **Total:** /月

---

## 🔄 Decision Rationale

### Why CryptoQuant Pro?

✅ **Smart Money Flow Detection** (STRATEGY 記載)
✅ **Exchange Flow Data** (Messari にない)
✅ **Signal Detection 精度向上**
✅ **ドキュメント準拠**
✅ **無料 Free tier 利用可能**

### ❌ Why Not Messari?

- Whale Flow のみ (スコープ狭い)
- Smart Money Flow なし
- Signal Detection 精度劣る

---

## 📋 Implementation Checklist

- [ ] CryptoQuant Free Tier 登録
- [ ] API Key 取得
- [ ] .env 設定
- [ ] sim.ai Block 1 修正 (Messari → CryptoQuant)
- [ ] Signal Detection テスト
- [ ] ドキュメント更新完了
- [ ] Git commit + push

---

*Decision made: 2025-11-08 10:38 JST*
*By: User decision (品質 vs 確実性: 品質優先)*
