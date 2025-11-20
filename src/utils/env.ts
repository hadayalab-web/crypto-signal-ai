import * as dotenv from 'dotenv';

dotenv.config();

export const env = {
  // Telegram
  telegramBotToken: process.env.TELEGRAM_BOT_TOKEN || '',
  telegramChatId: process.env.TELEGRAM_CHAT_ID || '',

  // YouTube
  youtubeApiKey: process.env.YOUTUBE_API_KEY || '',

  // CryptoCompare
  cryptocompareApiKey: process.env.CRYPTOCOMPARE_API_KEY || '',

  // Messari
  messariApiKey: process.env.MESSARI_API_KEY || '',

  // Binance
  binanceApiKey: process.env.BINANCE_API_KEY || '',
  binanceSecretKey: process.env.BINANCE_SECRET_KEY || '',

  // アプリケーション設定
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '3000'),
};

// 必須の環境変数をチェック
export function validateEnv(): boolean {
  const required = ['TELEGRAM_BOT_TOKEN', 'TELEGRAM_CHAT_ID', 'CRYPTOCOMPARE_API_KEY'];
  const missing = required.filter(key => !process.env[key]);

  if (missing.length > 0) {
    console.error(`❌ 不足している環境変数: ${missing.join(', ')}`);
    return false;
  }

  return true;
}
