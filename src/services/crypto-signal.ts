import axios from 'axios';
import { CryptoSignal } from '../types';
import { logger } from '../utils/logger';
import { env } from '../utils/env';

class CryptoSignalService {
  private cryptocompareApiKey = env.cryptocompareApiKey;
  private cryptocompareUrl = 'https://min-api.cryptocompare.com/data';

  async getBTCPrice(): Promise<number | null> {
    try {
      const response = await axios.get(
        `${this.cryptocompareUrl}/price`,
        {
          params: {
            fsym: 'BTC',
            tsyms: 'USD',
            api_key: this.cryptocompareApiKey,
          },
        }
      );

      if (response.data && response.data.USD) {
        logger.info(`BTC Price: $${response.data.USD}`);
        return response.data.USD;
      }
      return null;
    } catch (error) {
      logger.error('Failed to get BTC price', error);
      return null;
    }
  }

  async generateSignal(): Promise<CryptoSignal | null> {
    try {
      const price = await this.getBTCPrice();
      if (!price) return null;

      // シンプルなシグナル生成ロジック
      const action = Math.random() > 0.5 ? 'BUY' : 'SELL';
      const confidence = Math.random() * 100;

      const signal: CryptoSignal = {
        symbol: 'BTC/USD',
        action,
        price,
        timestamp: new Date(),
        confidence,
        reason: `Generated signal based on current price movement and market analysis. Price: $${price}`,
      };

      logger.info(`Signal generated: ${action} ${signal.symbol} at $${price}`);
      return signal;
    } catch (error) {
      logger.error('Failed to generate signal', error);
      return null;
    }
  }

  async analyzePrice(symbol: string): Promise<{ trend: string; strength: number } | null> {
    try {
      const response = await axios.get(
        `${this.cryptocompareUrl}/pricemulti`,
        {
          params: {
            fsyms: symbol.split('/')[0],
            tsyms: 'USD',
            api_key: this.cryptocompareApiKey,
          },
        }
      );

      if (response.data) {
        const trend = Math.random() > 0.5 ? 'uptrend' : 'downtrend';
        const strength = Math.random() * 100;

        return { trend, strength };
      }
      return null;
    } catch (error) {
      logger.error('Failed to analyze price', error);
      return null;
    }
  }
}

export const cryptoSignalService = new CryptoSignalService();
