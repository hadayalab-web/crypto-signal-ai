# Environment Variables for Implementation

## Required (Doppler prd)
Claude must access these via \doppler run -- node script.js\:

- \DISCORD_WEBHOOK_URL\ — Make→Discord notification endpoint
- \GLASSNODE_API_KEY\ — On-chain analytics (BTC/ETH flow)
- \SANTIMENT_API_KEY\ — Sentiment signals
- \COINGECKO_API_KEY\ — Price/market cap
- \WHOP_API_KEY\ — Subscription/payment state
- \HEYGEN_API_KEY\ — Video template generation
- \CANVA_ACCESS_TOKEN\ — Brand assets (read-only)
- \MAKE_API_TOKEN\ — Scenario execution auth
- \MAKE_SCENARIO_ID_SIGNAL\ — Signal distribution workflow

## Optional (local dev)
- \DISCORD_WEBHOOK_URL_DEV\ — Test channel (Doppler dev)
- \NODE_ENV=development\ — Skip rate limits

## Not Accessible
- \DOPPLER_TOKEN\ — CI/CD only, never in code
- \STRIPE_SECRET_KEY\ — Handled by Whop backend

## Usage
\\\ash
# Fetch all prd secrets
doppler run --project crypto-signal-ai --config prd -- npm start

# Override single var for testing
DISCORD_WEBHOOK_URL=\ doppler run --config dev -- node test.js
\\\

## Validation
Run \
pm run check:secrets\ to verify all required vars are present.
