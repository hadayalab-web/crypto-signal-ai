const signalGenerator = require('./logic/signalGenerator');
const telegramService = require('./services/delivery/telegram');
const grokClient = require('./services/grok/client');
const renderCard = require('./services/delivery/templates/telegram_card');
const generatePrompt = require('./logic/prompts/market_analysis');
const hallOfFameData = require('./data/hall_of_fame_complete.json');

// --- Telegram Adapter (Raw) ---
class TelegramAdapter {
    async send(message) {
        const axios = require('axios');
        const token = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;
        try {
            await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
                chat_id: chatId, text: message, parse_mode: 'MarkdownV2', disable_web_page_preview: true
            });
            console.log('✅ Telegram message sent.');
        } catch (error) {
            console.error('❌ Telegram Send Error:', error.response ? error.response.data : error.message);
        }
    }
}

// --- Mock Data (Replace with Real API) ---
const fetchData = async () => ({ 
    fearIndex: 22, netInflow: 1200, priceChange15m: 0.1, price: 98000 
});

// --- Scheduling Logic ---
function isScheduledTime() {
    const now = new Date();
    const hours = now.getUTCHours();
    const minutes = now.getUTCMinutes();
    
    // Target UTC Hours: 0, 4, 8, 12, 16, 20
    const isTargetHour = (hours % 4 === 0);
    // Allow execution within the first 10 minutes of the hour
    const isTimeWindow = (minutes < 10);
    
    return isTargetHour && isTimeWindow;
}

module.exports = async (req, res) => {
    console.log(`[${new Date().toISOString()}] Monitor Tick...`);
    const telegram = new TelegramAdapter();

    try {
        // 1. Analyze
        const data = await fetchData();
        const analysis = signalGenerator.analyzeMarket(data);
        const signalData = {
            signal: analysis.signal,
            trapLevel: analysis.trapLevel,
            fearScore: data.fearIndex,
            netflow: data.netInflow,
            reason: analysis.reason
        };

        // 2. Decision Gate: Should we send?
        const isEmergency = (analysis.trapLevel === 'BEAR_TRAP_GOLDMINE' || analysis.trapLevel === 'BULL_TRAP_WARNING');
        const isSchedule = isScheduledTime();
        
        // Force send if running locally (no req object or manual override)
        const isManualRun = !req || req.query?.force === 'true'; 

        if (!isEmergency && !isSchedule && !isManualRun) {
            console.log('Skipping delivery: Not scheduled time and no emergency.');
            return res ? res.status(200).send("Skipped") : "Skipped";
        }

        console.log(`🚀 Triggering Delivery. (Emergency: ${isEmergency}, Schedule: ${isSchedule}, Manual: ${isManualRun})`);

        // 3. AI Analysis
        const prompt = generatePrompt(signalData, hallOfFameData.hall_of_fame);
        let grokResult = await grokClient.analyzeMarket(prompt);
        
        if (!grokResult) {
            grokResult = { 
                headline: "Market Update", prof_comment: "Data is speaking.", 
                bullets: ["Check the charts"], action_verdict: { scalp: "WAIT", swing: "WAIT" } 
            };
        }

        // 4. Find Similar Case
        const similarCase = grokResult.similar_case_id ? hallOfFameData.hall_of_fame.find(c => c.case_id === grokResult.similar_case_id) : null;

        // 5. Render & Send
        const message = renderCard(signalData, grokResult, similarCase);
        
        // Add "Emergency" or "Scheduled" tag to headline context if needed
        // (Template handles pure content, but we could prepend logic here)
        
        await telegram.send(message);

        if (res) res.status(200).send({ status: "Sent", type: isEmergency ? "EMERGENCY" : "SCHEDULED" });

    } catch (e) {
        console.error(e);
        if (res) res.status(500).send(e.message);
    }
};
