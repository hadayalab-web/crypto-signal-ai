import { appendFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

export type GrokScoreLog = {
  timestamp: string;
  source: string;
  snapshot: unknown;
  scores: unknown;
  decision: unknown;
  briefInput: unknown;
};

const LOG_DIR = join(process.cwd(), "logs");
const LOG_FILE = join(LOG_DIR, "grok_scores.jsonl");

export function logGrokScore(entry: GrokScoreLog) {
  if (!existsSync(LOG_DIR)) {
    mkdirSync(LOG_DIR, { recursive: true });
  }
  appendFileSync(LOG_FILE, JSON.stringify(entry) + "\n", {
    encoding: "utf8",
  });
}
