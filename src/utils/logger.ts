import * as fs from 'fs';
import * as path from 'path';

class Logger {
  private logDir = path.join(__dirname, '../../logs');

  constructor() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(level: 'INFO' | 'ERROR' | 'WARN', message: string, data?: any) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    const fullMessage = data ? `${logMessage}\n${JSON.stringify(data, null, 2)}` : logMessage;

    console.log(fullMessage);

    const logFile = path.join(this.logDir, `${level.toLowerCase()}.log`);
    fs.appendFileSync(logFile, fullMessage + '\n');
  }

  info(message: string, data?: any) {
    this.log('INFO', message, data);
  }

  error(message: string, error?: any) {
    this.log('ERROR', message, error);
  }

  warn(message: string, data?: any) {
    this.log('WARN', message, data);
  }
}

export const logger = new Logger();
