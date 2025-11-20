# Workflow Contracts

Aggregator v2:
- out: { composite_score, final_signal, warnings[] }

Summary:
- out: { ready, signal, confidencePct, mempoolSignal, gasPressure, warnings[] }

Message Formatter:
- out: message with CTA links (cryptosignal-ai.com/*) + UTM + variant + ts + countdown + reply

Telegram Sender Final:
- HTTPS POST /sendMessage using env secrets; no early return

Alert Notifier:
- Notify ADMIN_CHAT_ID when !ok or warnings>0

Booster Gate:
- shouldBoost = composite_score >= 75

Booster Sender:
- Send “[Booster]\n” + message when shouldBoost

Run Logger:
- KPI_ROW: ts,message_id,chat_id,ready,warnings_count,signal,confidencePct
