# Runbook (v1.0)

Setup:
1) Set Secrets: TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID / ADMIN_CHAT_ID / FORMAT_VARIANT / LAUNCH_DEADLINE_ISO
2) Ensure serial wiring: 8 → Summary → Formatter → Sender → Alert → Gate → Booster → Logger
3) Save and confirm toast before run

Manual smoke:
- Execute in order above
- Expect Sender ok:true + message_id, Gate log (score/shouldBoost), KPI_ROW in console

Cron:
- */5 * * * * (Asia/Tokyo), keep Manual trigger for tests
