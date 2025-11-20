// ===== Telegram Bot 統合 =====
// ファイル: src/services/telegram-bot-integration.ts

import { TelegramFormatter, SignalAlert } from './telegram-formatter';

export interface BotConfig {
  botToken: string;
  chatId: string;
  testMode?: boolean;
}

export interface IntegrationMetrics {
  formattingTime: number;
  sendTime: number;
  totalTime: number;
  success: boolean;
  errorMessage?: string;
}

export class TelegramBotIntegration {
  private formatter: TelegramFormatter;
  private config: BotConfig;
  private metricsLog: IntegrationMetrics[] = [];

  constructor(config: BotConfig) {
    this.formatter = new TelegramFormatter();
    this.config = config;
  }

  async sendSignalAlert(signal: SignalAlert): Promise<IntegrationMetrics> {
    const startTime = Date.now();
    const metric: IntegrationMetrics = {
      formattingTime: 0,
      sendTime: 0,
      totalTime: 0,
      success: false,
    };

    try {
      const formattingStart = Date.now();
      const message = this.formatter.formatMessage(signal);
      metric.formattingTime = Date.now() - formattingStart;

      const sendStart = Date.now();

      if (this.config.testMode) {
        console.log('[TEST MODE]', message);
      } else {
        await this.sendToTelegram(message);
      }

      metric.sendTime = Date.now() - sendStart;
      metric.success = true;

    } catch (error) {
      metric.success = false;
      metric.errorMessage = error instanceof Error ? error.message : String(error);
    }

    metric.totalTime = Date.now() - startTime;
    this.metricsLog.push(metric);

    return metric;
  }

  private async sendToTelegram(message: string): Promise<void> {
    const url = `https://api.telegram.org/bot${this.config.botToken}/sendMessage`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: this.config.chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Telegram API error: ${response.status} ${response.statusText}`
      );
    }
  }

  getMetricsReport(): {
    totalRequests: number;
    successCount: number;
    failureCount: number;
    avgFormattingTime: number;
    avgSendTime: number;
    avgTotalTime: number;
  } {
    const logs = this.metricsLog;
    const successLogs = logs.filter(m => m.success);

    return {
      totalRequests: logs.length,
      successCount: successLogs.length,
      failureCount: logs.length - successLogs.length,
      avgFormattingTime:
        successLogs.reduce((sum, m) => sum + m.formattingTime, 0) /
        successLogs.length || 0,
      avgSendTime:
        successLogs.reduce((sum, m) => sum + m.sendTime, 0) /
        successLogs.length || 0,
      avgTotalTime:
        successLogs.reduce((sum, m) => sum + m.totalTime, 0) /
        successLogs.length || 0,
    };
  }

  clearMetrics(): void {
    this.metricsLog = [];
  }
}
