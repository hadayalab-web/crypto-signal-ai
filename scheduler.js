const signalGenerator = require('./logic/signalGenerator');
const grokService = require('./services/grokService');
const TelegramAdapter = require('./services/delivery/telegram');

// Mock Data Fetcher
const fetchData = async () => ({ fearIndex: 22, netInflow: 1200, priceChange15m: 0.1, price: 98000 });

module.exports = async (req, res) => {
    const telegram = new TelegramAdapter(process.env.TELEGRAM_BOT_TOKEN);
    try {
        const data = await fetchData();
        const analysis = { ...data, ...signalGenerator.analyzeMarket(data) };
        
        const lang = req.query.lang || 'en';
        const message = await grokService.generateMarketUpdate(analysis, lang);
        
        await telegram.send(message, process.env.TELEGRAM_CHANNEL_ID);
        res.status(200).send({ status: "Broadcast OK", lang });
    } catch (e) { res.status(500).send(e.message); }
};
