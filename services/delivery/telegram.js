// services/delivery/telegram.js
// Telegram Delivery Service (Fixed for PowerShell compatibility)

const axios = require('axios');

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

async function sendAlert(signal) {
    if (!BOT_TOKEN || !CHAT_ID) {
        console.warn('WARN: Telegram credentials missing.');
        return;
    }

    const emoji = {
        'STRONG_BUY': '🚀',
        'BUY': '📈',
        'STRONG_SELL': '🔻',
        'SELL': '📉',
        'NEUTRAL': '⚖️'
    };

    // Build message using simple string concatenation to satisfy PowerShell writing
    let icon = emoji[signal.type] || '⚠️';
    let text = icon + ' WhaleShield Alert\n\n';
    text = text + 'Signal: ' + signal.type + '\n';
    text = text + 'Score: ' + signal.score + '/100 (' + signal.confidence + '% confidence)\n\n';
    
    text = text + 'Reasoning:\n';
    if (signal.reasoning && Array.isArray(signal.reasoning)) {
        for (let i = 0; i < signal.reasoning.length; i++) {
            text = text + '• ' + signal.reasoning[i] + '\n';
        }
    }

    if (signal.grok) {
        text = text + '\n🧠 Prof. Grok Analysis (' + signal.grok.state + '):\n';
        if (signal.grok.bullets && Array.isArray(signal.grok.bullets)) {
             for (let i = 0; i < signal.grok.bullets.length; i++) {
                text = text + '• ' + signal.grok.bullets[i] + '\n';
            }
        }
    }

    text = text + '\nGenerated at ' + new Date().toISOString();

    try {
        await axios.post('https://api.telegram.org/bot' + BOT_TOKEN + '/sendMessage', {
            chat_id: CHAT_ID,
            text: text
        });
        console.log('✅ Telegram message sent successfully.');
    } catch (error) {
        const errMsg = error.response ? JSON.stringify(error.response.data) : error.message;
        console.error('❌ Telegram send failed:', errMsg);
    }
}

module.exports = { sendAlert };
