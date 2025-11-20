import axios from 'axios';
console.log("API generate-signal called");

export default async function handler(req, res) {
  try {
    console.log('🚀 Starting signal generation...');

    // 1. CryptoQuant API でオンチェーンデータ取得
    const cryptoQuantResponse = await axios.get(
      'https://api.cryptoquant.com/v1/btc/status/entity-list',
      {
        headers: {
          'Authorization': `Bearer ${process.env.CRYPTOQUANT_API_KEY}`
        },
        params: {
          type: 'exchange'
        }
      }
    );

    const onChainData = cryptoQuantResponse.data;
    console.log('✅ CryptoQuant data fetched');

    // 2. Grok 3 API で分析
    const grokResponse = await axios.post(
      'https://api.x.ai/v1/chat/completions',
      {
        model: 'grok-2-latest',
        messages: [
          {
            role: 'system',
            content: 'You are a professional cryptocurrency analyst specializing in on-chain data analysis and Bitcoin market signals.'
          },
          {
            role: 'user',
            content: `Analyze this Bitcoin on-chain data and provide a trading signal (BUY/SELL/HOLD) with confidence percentage (0-100%) and detailed reasoning:\n\n${JSON.stringify(onChainData, null, 2)}`
          }
        ],
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.XAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const analysis = grokResponse.data.choices[0].message.content;
    console.log('✅ Grok analysis completed');

    // 3. シグナル生成（簡易パース）
    const signal = {
      timestamp: new Date().toISOString(),
      analysis: analysis,
      action: analysis.includes('BUY') ? 'BUY' : analysis.includes('SELL') ? 'SELL' : 'HOLD',
      dataSource: 'CryptoQuant + Grok 3'
    };

    // 4. Telegram Bot で配信
    const telegramMessage = `
🚨 *CryptoSignal AI - Phase 0 MVP*

📊 *Signal*: ${signal.action}
⏰ *Time*: ${signal.timestamp}
🔗 *Source*: ${signal.dataSource}

📈 *Analysis*:
${analysis}

---
Powered by CryptoQuant Professional + Grok 3
    `.trim();

    await axios.post(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'Markdown'
      }
    );

    console.log('✅ Telegram notification sent');

    // 5. レスポンス返却
    res.status(200).json({
      success: true,
      signal: signal,
      message: 'Signal generated and sent to Telegram'
    });

  } catch (error) {
    console.error('❌ Error in signal generation:', error.message);

    // エラー通知もTelegramに送信
    try {
      await axios.post(
        `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: 'Error occurred in signal generation'
        }
      );
    } catch (telegramError) {
      console.error('Failed to send error notification to Telegram');
    }

    res.status(500).json({
      success: false,
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
