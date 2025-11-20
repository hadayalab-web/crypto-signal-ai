import "dotenv/config";
import axios from "axios";

const BASE_URL = "https://api.cryptoquant.com";

async function main() {
  const apiKey = process.env.CRYPTOQUANT_API_KEY;
  if (!apiKey) {
    throw new Error("Missing CRYPTOQUANT_API_KEY in env");
  }

  const client = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  });

  console.log("[debugCryptoQuant] GET /v1/btc/exchange-flows/netflow");

  const res = await client.get("/v1/btc/exchange-flows/netflow", {
    params: {
      window: "day",
      exchange: "all_exchange",
    },
  });

  console.log("[debugCryptoQuant] Status:", res.status);
  console.log("[debugCryptoQuant] Body:", JSON.stringify(res.data, null, 2));
}

main().catch((err) => {
  console.error("[debugCryptoQuant] Error:", err.response?.status, err.response?.data ?? err);
  process.exit(1);
});
