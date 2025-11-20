import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "";
const CHAT_ID = process.env.TELEGRAM_CHAT_ID || "";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const { signal, confidence, reason } = req.body;
    const msg =
      `?? *CryptoSignal AI Trade Signal*\n\n` +
      `*Signal:* ${signal}\n*Confidence:* ${Math.round(confidence * 100)}%\n*Reason:* ${reason}\n\n?? Powered by CryptoQuant + Grok 3 AI`;

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: msg,
        parse_mode: "Markdown"
      })
    });
    return res.status(200).json({ sent: true });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
