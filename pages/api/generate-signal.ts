import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

type SignalResponse = {
  signal: "Buy" | "Sell" | "Hold";
  confidence: number;
  reason: string;
  detail?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SignalResponse | { error: string }>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const signal = "Sell";
    const confidence = 0.65;
    const reason = "Whale inflow detected on Binance. Top 10 wallet accounts for 50%. AI suggests selling.";
    const detail = {
      inflow_total: 3495,
      top10_inflow: 1745,
      mean_inflow: 8.89,
      ma7: 13.82
    };

    return res.status(200).json({ signal, confidence, reason, detail });
  } catch (e) {
    return res.status(500).json({ error: "Signal generation failed" });
  }
}
