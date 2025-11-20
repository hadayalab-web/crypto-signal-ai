import "dotenv/config";

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
    console.log("[debugSignalPipeline] Using DummyCryptoQuantClient");
    return new DummyCryptoQuantClient();
  }

  console.log("[debugSignalPipeline] Using HttpCryptoQuantClient");
  return new HttpCryptoQuantClient(process.env.CRYPTOQUANT_API_KEY!);
}

function createGrokClient(): GrokClient {
  const useDummy =
    process.env.GROK_USE_DUMMY === "1" || !process.env.XAI_API_KEY;

  if (useDummy) {
    console.log("[debugSignalPipeline] Using DummyGrokClient");
    return new DummyGrokClient();
  }

  console.log("[debugSignalPipeline] Using HttpGrokClient");
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

  logGrokScore({
    timestamp: new Date().toISOString(),
    source: "debugSignalPipeline",
    snapshot,
    scores,
    decision,
    briefInput,
  });

  console.log("=== debugSignalPipeline completed ===");
}

main().catch((err) => {
  console.error("Error in debugSignalPipeline:", err);
  process.exit(1);
});
