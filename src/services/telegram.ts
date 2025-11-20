import axios from 'axios';
import { TelegramMessage } from '../types';
import { logger } from '../utils/logger';
import { env } from '../utils/env';

class TelegramService {
  private botToken = env.telegramBotToken;
  private chatId = env.telegramChatId;
  private apiUrl = `https://api.telegram.org/bot${this.botToken}`;

  async sendMessage(message: TelegramMessage): Promise<boolean> {
    try {
      const response = await axios.post(
        `${this.apiUrl}/sendMessage`,
        {
          chat_id: message.chatId,
          text: message.text,
          parse_mode: message.parseMode || 'Markdown',
        }
      );

      if (response.data.ok) {
        logger.info(`Telegram message sent: ${message.text.substring(0, 50)}...`);
        return true;
      } else {
        logger.error('Telegram API error', response.data);
        return false;
      }
    } catch (error) {
      logger.error('Failed to send Telegram message', error);
      return false;
    }
  }

  async sendSignal(symbol: string, action: string, price: number, reason: string): Promise<boolean> {
    const text = `🚨 *Crypto Signal Alert*\n\n📊 *Symbol*: ${symbol}\n🎯 *Action*: ${action}\n💰 *Price*: $${price}\n💡 *Reason*: ${reason}\n\n🕐 *Time*: ${new Date().toISOString()}`;

    return this.sendMessage({
      chatId: this.chatId,
      text,
      parseMode: 'Markdown',
    });
  }

  async sendTradeResult(symbol: string, roi: number, profitLoss: number): Promise<boolean> {
    const emoji = roi > 0 ? '📈' : '📉';
    const text = `${emoji} *Trade Result*\n\n📊 *Symbol*: ${symbol}\n💹 *ROI*: ${roi.toFixed(2)}%\n💰 *P&L*: $${profitLoss.toFixed(2)}\n\n🕐 *Time*: ${new Date().toISOString()}`;

    return this.sendMessage({
      chatId: this.chatId,
      text,
      parseMode: 'Markdown',
    });
  }
}

export const telegramService = new TelegramService();
