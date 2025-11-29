// logic/trapDetector.js
// WhaleShield Trap Detection Logic with ETF Integration

module.exports = {
    detect: (marketData) => {
        let score = 50; // 中立
        const reasoning = [];

        // 1. Netflow判定
        if (marketData.netflow < -1000) {
            score += 15;
            reasoning.push(`Heavy Exchange Outflow (${marketData.netflow} BTC): Whales accumulating.`);
        } else if (marketData.netflow > 1000) {
            score -= 15;
            reasoning.push(`Heavy Exchange Inflow (+${marketData.netflow} BTC): Whales selling.`);
        }

        // 2. MVRV判定
        if (marketData.mvrv > 3.5) {
            score -= 10;
            reasoning.push(`MVRV very high (${marketData.mvrv}): Market overheated.`);
        } else if (marketData.mvrv < 1.0) {
            score += 10;
            reasoning.push(`MVRV low (${marketData.mvrv}): Market undervalued.`);
        }

        // 3. ETF Netflow判定 (NEW)
        if (marketData.etfNetflow > 500) {
            score += 12;
            reasoning.push(`Massive ETF inflow (+${marketData.etfNetflow} BTC): Institutional FOMO.`);
        } else if (marketData.etfNetflow < -300) {
            score -= 12;
            reasoning.push(`Heavy ETF outflow (${marketData.etfNetflow} BTC): Panic selling.`);
        }

        // 4. Fear&Greed判定
        if (marketData.sentiment < 25) {
            score += 8;
            reasoning.push(`Extreme Fear (${marketData.sentiment}): Contrarian opportunity.`);
        } else if (marketData.sentiment > 75) {
            score -= 8;
            reasoning.push(`Extreme Greed (${marketData.sentiment}): High risk zone.`);
        }

        // 5. 価格変動との乖離チェック
        if (marketData.price.change24h < -5 && marketData.netflow < 0 && marketData.etfNetflow > 0) {
            score += 20;
            reasoning.push(`🎯 BEAR TRAP DETECTED: Price down but whales + institutions buying!`);
        } else if (marketData.price.change24h > 5 && marketData.netflow > 0 && marketData.etfNetflow < 0) {
            score -= 20;
            reasoning.push(`🚨 BULL TRAP DETECTED: Price up but whales + institutions selling!`);
        }

        // シグナル判定
        let type = 'NEUTRAL';
        if (score >= 70) type = 'STRONG_BUY';
        else if (score >= 55) type = 'BUY';
        else if (score <= 30) type = 'STRONG_SELL';
        else if (score <= 45) type = 'SELL';

        return {
            type,
            score,
            reasoning,
            confidence: Math.abs(score - 50) * 2, // 0-100%
            timestamp: new Date().toISOString()
        };
    }
};
