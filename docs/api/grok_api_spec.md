# xAI Grok API Specification (Confirmed from Screenshots)

## Models
- Name: grok-4-1-fast-reasoning
- Aliases: grok-4-1-fast, grok-4-1-fast-reasoning-latest
- Context Window: 2,000,000 tokens
- Pricing: Input $0.20 / Output $0.50 per 1M tokens

## Capabilities
- Structured Outputs: Supported (strict JSON schema)
- Reasoning: Supported (The model thinks before responding)
- Function Calling: Supported

## Endpoints
- Base URL: https://api.x.ai/v1
- Chat Completions: /chat/completions

## Authentication
- Header: Authorization: Bearer $XAI_API_KEY
