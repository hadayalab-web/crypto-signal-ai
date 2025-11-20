import express, { Router, Request, Response } from 'express';
import { cryptoSignalService } from '../services/crypto-signal';
import { logger } from '../utils/logger';

const router: Router = express.Router();

router.get('/multi-asset-data', async (req: Request, res: Response): Promise<void> => {
  try {
    logger.info('📥 Fetching multi-asset data for sim.ai...');

    const btcPrice = await cryptoSignalService.getBTCPrice();
    const signal = await cryptoSignalService.generateSignal();
    const analysis = await cryptoSignalService.analyzePrice('BTC/USD');

    const response = {
      success: true,
      timestamp: new Date().toISOString(),
      data: {
        btc: {
          price: btcPrice,
          change_24h: 2.34,
          volume_24h: 28500000000,
          market_cap: 1320000000000
        },
        signal: {
          symbol: signal?.symbol || 'BTC/USD',
          action: signal?.action || 'BUY',
          price: signal?.price || btcPrice,
          confidence: signal?.confidence || 0,
          reason: signal?.reason || 'Market analysis ongoing'
        },
        analysis: {
          trend: analysis?.trend || 'uptrend',
          strength: analysis?.strength || 0
        }
      }
    };

    logger.info(`✅ Data prepared for sim.ai:`, response.data);
    res.json(response);
  } catch (error: any) {
    logger.error('❌ Error in multi-asset-data', error);
    res.status(500).json({
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

router.get('/test', (req: Request, res: Response): void => {
  res.json({
    status: 'ok',
    message: 'CryptoSignal AI API is working',
    endpoints: {
      multiAssetData: '/api/multi-asset-data',
      test: '/api/test'
    }
  });
});

export default router;
