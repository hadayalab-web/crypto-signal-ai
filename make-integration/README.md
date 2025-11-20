# Make.com Webhook Integration

CryptoSignal AI MVP - Phase 3

## Overview

Make.com (旧Integromat) を使用してワークフロー自動化を実現します。

## Setup

### 1. Make.com アカウント作成
① https://www.make.com/
② Sign Up（無料アカウント）

### 2. Webhook URL 取得
① Make.com で新しいシナリオ作成
② Webhook モジュールを追加
③ Webhook URL をコピー
④ .env に MAKE_WEBHOOK_URL を設定

## Architecture

### Webhook フロー

\\\
CryptoSignal AI Core
    ↓
Make.com Webhook
    ↓
  ┌─┴─┐
  ↓   ↓
Canva HeyGen
  ↓   ↓
  └─┬─┘
    ↓
Social Media
\\\

## Integration Status

✓ Phase 1: Canva Connect API
✓ Phase 2: HeyGen API Key
⏳ Phase 3: Make.com Webhook (進行中)

## Timeline

- 11/7 14:45: Make.com 統合開始
- 11/7 16:00: Webhook テスト完了
- 11/10 10:00: MVP ローンチ
