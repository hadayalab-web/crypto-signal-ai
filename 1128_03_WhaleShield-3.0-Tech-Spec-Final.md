# WhaleShield v1.3.1 - Operational Specification

## 1. Monitoring & Alerting Logic
- **Monitoring Interval:** Every 5 minutes (via Vercel Cron `*/5 * * * *`).
- **Data Check:** CryptoQuant (Netflow, MVRV) + Fear&Greed Index.

## 2. Delivery Schedule
### A. Scheduled Reports (Periodic)
- Frequency: Every 4 hours.
- Target Times (UTC): 00:00, 04:00, 08:00, 12:00, 16:00, 20:00
- Target Times (JST): 09:00, 13:00, 17:00, 21:00, 01:00, 05:00
- Rationale: Aligns with major market opens (NY, London, Tokyo) and 4H candle closes.

### B. Emergency Alerts (Real-time)
- Trigger: 
  1. **Trend Reversal:** Signal flips (e.g., BUY -> SELL) with high conviction.
  2. **Trap Detection:** `BEAR_TRAP_GOLDMINE` or `BULL_TRAP_WARNING` detected.
- Suppression: To avoid spam, emergency alerts for the *same* signal are capped (implementation dependent).

## 3. System Architecture
- **Cron Job:** Triggers `monitor.js`.
- **Logic:** 
  - If `CurrentTime` matches Schedule -> Send Report.
  - If `Signal` is `CRITICAL` -> Send Alert (regardless of time).
  - Else -> Log data only.
