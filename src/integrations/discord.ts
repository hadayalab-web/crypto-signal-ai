import axios from "axios";

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

if (!DISCORD_WEBHOOK_URL) {
  throw new Error("Missing DISCORD_WEBHOOK_URL in env");
}

// ここで string 型として確定させる
const webhookUrl: string = DISCORD_WEBHOOK_URL;

export async function sendDiscordMessage(message: string): Promise<void> {
  try {
    await axios.post(
      webhookUrl,
      {
        username: "CryptoSignal AI",
        content: message,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error sending Discord message:", error);
    throw error;
  }
}
