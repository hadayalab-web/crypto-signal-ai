import axios from "axios";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

if (!BOT_TOKEN || !CHAT_ID) {
  throw new Error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID in env");
}

const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}`;

export async function sendTelegramMessage(message: string): Promise<void> {
  try {
    await axios.post(`${TELEGRAM_API_URL}/sendMessage`, {
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "HTML",
    });
  } catch (error) {
    console.error("Error sending Telegram message:", error);
    throw error;
  }
}
