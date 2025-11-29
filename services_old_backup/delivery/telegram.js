// services/delivery/telegram.js
// Telegram Delivery Service with Prof. Grok Commentary

const axios = require('axios');

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

async function sendAlert(signal) {
    if (!BOT_TOKEN || !CHAT_ID) {
        console.warn('⚠️ Telegram credentials missing. Skipping alert.');
        return;
    }

    const emoji = {
        'STRONG_BUY': '🚀',
        'BUY': '📈',
        'STRONG_SELL': '🔻',
        'SELL': '📉',
        'NEUTRAL': '⚖️'
    };

    let text = `${emoji[signal.type] || '⚠️'} **WhaleShield Alert**\n\n`;
    text += `**Signal:** ${signal.type}\n`;
    text += `**Score:** ${signal.score}/100 (${signal.confidence}% confidence)\n\n`;
    text += `**Reasoning:**\n`;
    for (const r of signal.reasoning) {
        text += `• ${r}\n`;
    }

    // Prof. Grok解説を追加
    if (signal.grok) {
        text += `\n🧠 **Prof. Grok Analysis** (${signal.grok.state}):\n`;
        for (const bullet of signal.grok.bullets) {
            text += `• ${bullet}\n`;
        }
    }

    text += `\n_Generated at ${new Date().toISOString()}_`;

    try {
        await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            text: text,
            parse_mode: 'Markdown'
        });
        console.log('✅ Telegram message sent with Grok commentary.');
    } catch (error) {
        console.error('❌ Telegram send failed:', error.message);
    }
}

module.exports = { sendAlert };
