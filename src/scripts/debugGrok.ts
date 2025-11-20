import "dotenv/config";
import axios from "axios";

/**
 * Grok / xAI API デバッグ用スクリプト
 * - 実際に /chat/completions (または相当) を叩き、モデルと認証が正しく動くか確認する
 * - 本番では HttpGrokClient 内から同等のリクエストを行う想定
 */

const API_KEY = process.env.XAI_API_KEY;
const BASE_URL = process.env.XAI_API_BASE_URL ?? "https://api.x.ai/v1";
const MODEL = process.env.XAI_MODEL ?? "grok-3-latest";

async function main() {
  if (!API_KEY) {
    throw new Error("XAI_API_KEY is not set");
  }

  const client = axios.create({
    baseURL: BASE_URL,
    timeout: 20000,
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  console.log("=== Grok Debug ===");
  console.log("BASE_URL:", BASE_URL);
  console.log("MODEL:", MODEL);

  const prompt = [
    "Return ONLY the following JSON (no extra text):",
    "",
    "{",
    '  "sentimentScore": 0.25,',
    '  "mentionVolumeScore": 0.7,',
    '  "narrativeRiskScore": 0.1',
    "}",
  ].join("\n");

  try {
    const res = await client.post("/chat/completions", {
      model: MODEL,
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that strictly returns JSON when asked. Do not add explanations.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    console.log("Status:", res.status, res.statusText);
    console.log("Body:", JSON.stringify(res.data, null, 2));
  } catch (err: any) {
    console.error("Request failed");
    if (err.response) {
      console.error("Status:", err.response.status, err.response.statusText);
      console.error("Headers:", JSON.stringify(err.response.headers, null, 2));
      console.error("Body:", JSON.stringify(err.response.data, null, 2));
    } else {
      console.error(err);
    }
    process.exit(1);
  }
}

main();
