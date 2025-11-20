import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

const CRYPTOQUANT_API_KEY = process.env.CRYPTOQUANT_API_KEY || "";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const cqUrl = "https://api.cryptoquant.com/v1/btc/exchange-flows/inflow?window=day&limit=1";
    const cqRes = await fetch(cqUrl, {
      headers: { Authorization: `Bearer ${CRYPTOQUANT_API_KEY}` }
    });

    // レスポンスが不正時の詳細取得
    if (!cqRes.ok) {
      const text = await cqRes.text();
      throw new Error(`CryptoQuant API error: ${text}`);
    }

    const data = await cqRes.json();
    return res.status(200).json({ cq: data });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
