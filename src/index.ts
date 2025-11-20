import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { env } from './utils/env';
import { logger } from './utils/logger';
import cryptoRoutes from './api/providers';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', cryptoRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  logger.error('Server error', err);
  res.status(500).json({ 
    success: false, 
    error: err.message,
    timestamp: new Date() 
  });
});

app.listen(PORT, () => {
  logger.info(`🚀 CryptoSignal AI Server running on http://localhost:${PORT}`);
  logger.info(`📡 API endpoint: http://localhost:${PORT}/api/multi-asset-data`);
  logger.info(`🏥 Health check: http://localhost:${PORT}/health`);
});
