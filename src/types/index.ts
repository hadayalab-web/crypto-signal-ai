// 暗号資産信号の型定義
export interface CryptoSignal {
  symbol: string;
  action: 'BUY' | 'SELL' | 'HOLD';
  price: number;
  timestamp: Date;
  confidence: number;
  reason: string;
}

// Telegram 通知の型
export interface TelegramMessage {
  chatId: string;
  text: string;
  parseMode?: 'Markdown' | 'HTML';
}

// API レスポンスの型
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// トレード結果の型
export interface TradeResult {
  symbol: string;
  entry_price: number;
  exit_price: number;
  profit_loss: number;
  roi: number;
  timestamp: Date;
}
