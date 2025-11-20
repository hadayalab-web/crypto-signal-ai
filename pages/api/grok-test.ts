import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

const XAI_API_KEY = process.env.XAI_API_KEY || "";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const { prompt } = req.body;
    const grokRes = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${XAI_API_KEY}`
      },
      body: JSON.stringify({
        messages: [{ role: "user", content: prompt }],
        model: "grok-beta",
        temperature: 0
      })
    });
    if (!grokRes.ok) throw new Error("Grok 3 API error");
    const data = await grokRes.json();
    return res.status(200).json({ grok: data });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
