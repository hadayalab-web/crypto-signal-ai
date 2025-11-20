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

  const res = await client.get("/v1/discovery/endpoints");
  const endpoints = res.data?.result?.data ?? [];

  // BTC 関連 + derivatives / exchange をざっくりフィルタ
  const filtered = endpoints.filter((e: any) => {
    const path: string = e.path ?? "";
    return (
      path.includes("/btc/") &&
      (path.includes("derivatives") || path.includes("exchange"))
    );
  });

  console.log("=== Filtered CryptoQuant endpoints (btc + derivatives/exchange) ===");
  for (const ep of filtered) {
    console.log(
      JSON.stringify(
        {
          path: ep.path,
          parameters: ep.parameters,
          required_parameters: ep.required_parameters,
        },
        null,
        2,
      ),
    );
  }
}

main().catch((err) => {
  console.error("[printCryptoQuantEndpoints] Error:", err.response?.status, err.response?.data ?? err);
  process.exit(1);
});
