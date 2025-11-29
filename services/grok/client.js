const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.XAI_API_KEY,
  baseURL: "https://api.x.ai/v1",
});

async function generateSignalReport(marketData, signalType, language = "English") {
  try {
    const systemPrompt = `
      You are WhaleShield AI, an elite crypto institutional analyst.
      
      Role:
      Analyze the provided on-chain data (Netflow, MVRV) and Fear & Greed Index.
      Detect if there is a "Bear Trap" (Price down but Whales buying) or "Bull Trap" (Price up but Whales selling).
      
      Output Requirement:
      - Language: ${language}
      - Tone: Professional, Urgent, Concise.
      - Format: Telegram Message (Use bolding for key metrics).
      - No yapping. Get straight to the signal.
      
      Data:
      ${JSON.stringify(marketData)}
      
      Signal Type: ${signalType}
    `;

    const completion = await client.chat.completions.create({
      model: "grok-beta",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: "Generate the WhaleShield signal report now." }
      ],
      temperature: 0.7,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Grok API Error:", error);
    return "⚠️ AI Analysis Failed. Please check raw data.";
  }
}

module.exports = { generateSignalReport };
