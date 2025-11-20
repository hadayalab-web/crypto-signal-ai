import "dotenv/config";

import { sendTelegramMessage } from "../integrations/telegram";
import { sendDiscordMessage } from "../integrations/discord";

import { mapSignalDecisionToBiasBrief } from "../services/biasBriefBuilder";
import { buildSignalDecisionFromScores } from "../services/signalDecisionBuilder";
import { buildScoresFromMarketData } from "../services/scoreFromData";
import { buildMarketDataSnapshot } from "../services/marketDataBuilder";

import {
  DummyCryptoQuantClient,
  HttpCryptoQuantClient,
  CryptoQuantClient,
} from "../services/providers/cryptoquantClient";

import {
  DummyGrokClient,
  HttpGrokClient,
  GrokClient,
} from "../services/providers/grokClient";

import { logGrokScore } from "../utils/logGrokScore";

function createCryptoQuantClient(): CryptoQuantClient {
  const useDummy =
    process.env.CQ_USE_DUMMY === "1" || !process.env.CRYPTOQUANT_API_KEY;

  if (useDummy) {
    console.log("[createCryptoQuantClient] Using DummyCryptoQuantClient");
    return new DummyCryptoQuantClient();
  }

  console.log("[createCryptoQuantClient] Using HttpCryptoQuantClient");
  return new HttpCryptoQuantClient(process.env.CRYPTOQUANT_API_KEY!);
}

function createGrokClient(): GrokClient {
  const useDummy =
    process.env.GROK_USE_DUMMY === "1" || !process.env.XAI_API_KEY;

  if (useDummy) {
    console.log("[createGrokClient] Using DummyGrokClient");
    return new DummyGrokClient();
  }

  console.log("[createGrokClient] Using HttpGrokClient");
  return new HttpGrokClient(process.env.XAI_API_KEY!);
}

async function main() {
  const cqClient = createCryptoQuantClient();
  const grokClient = createGrokClient();

  const snapshot = await buildMarketDataSnapshot(
    { cqClient, grokClient },
    { symbol: "BTCUSDT", session: "NY Open", windowMinutes: 60 },
  );

  const scores = buildScoresFromMarketData(snapshot);
  const decision = buildSignalDecisionFromScores(scores);
  const briefInput = mapSignalDecisionToBiasBrief(decision);

  // Grok スコアおよびパイプライン結果を JSONL にログ出力
  logGrokScore({
    timestamp: new Date().toISOString(),
    source: "sendTestSignal",
    snapshot,
    scores,
    decision,
    briefInput,
  });

  const messageLines = [
    `Signal: ${briefInput.signal} (Score ${briefInput.score}/5, Confidence: ${briefInput.confidence})`,
    `Session: ${briefInput.session} | Window: last ${briefInput.windowMinutes}m`,
    `Summary: ${briefInput.summary}`,
    `Reasons: ${briefInput.reasons.join(", ")}`,
    `Risk Note: ${briefInput.riskNote}`,
    `Suggested plan: ${briefInput.suggestedPlan}`,
  ];

  const message = messageLines.join("\n");

  console.log("=== Test Bias Brief ===");
  console.log(message);

  await sendTelegramMessage(message);
  console.log("Sent to Telegram");

  await sendDiscordMessage(message);
  console.log("Sent to Discord");
}

main().catch((err) => {
  console.error("Error in sendTestSignal:", err);
  process.exit(1);
});
