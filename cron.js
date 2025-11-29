const { detectMarketTrap } = require('./logic/trapDetector');
const { generateGrokRoast } = require('./services/grokService');
const { getOnChainData } = require('./services/cryptoQuant');
const { getSocialSentiment } = require('./services/xSocial');
const { sendTelegramMessage } = require('./services/telegramService');

export default async function handler(req, res) {
    console.log(`[${new Date().toISOString()}] 噫 Vercel Cron Triggered`);
    try {
        const [onChain, social] = await Promise.all([getOnChainData(), getSocialSentiment()]);
        
        // Check Schedule (UTC Hours: 0,4,8,12,16,20 correspond to JST 9,13,17,21,1,5)
        const h = new Date().getUTCHours();
        const isReportTime = [0,4,8,12,16,20].includes(h);

        const trapResult = detectMarketTrap(
            { greedIndex: social.greedIndex },
            { exchangeNetFlow: onChain.exchangeNetFlow },
            { currentPrice: onChain.price, price15mAgo: onChain.price } // No volatility check on stateless vercel
        );

        let mode = null;
        if (trapResult.status === "CRITICAL") mode = "EMERGENCY";
        else if (isReportTime) mode = "REGULAR";

        if (mode) {
            console.log(`笞｡ Generating ${mode} Alert...`);
            const grok = await generateGrokRoast({
                sentiment: social.greedIndex,
                whaleFlow: onChain.exchangeNetFlow,
                trapStatus: mode === "EMERGENCY" ? trapResult.type : "MARKET_UPDATE"
            });
            if (grok) await sendTelegramMessage(grok.verdict);
            return res.status(200).json({ success: true, type: mode });
        }
        return res.status(200).json({ status: "Silent", data: onChain });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
}
