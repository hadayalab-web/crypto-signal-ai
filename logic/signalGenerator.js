/**
 * WhaleShield 3.0 - Tier 1 Signal Generator (BTC)
 */
const analyzeMarket = (marketData) => {
    const { fearIndex, netInflow, priceChange15m } = marketData;
    let signal = "WAIT";
    let trapLevel = "NONE";
    let reason = "";
    let isEmergency = false;

    // 1. Bear Trap (Buy)
    if (fearIndex < 25 && netInflow > 1000) {
        signal = "LONG";
        trapLevel = "BEAR_TRAP_GOLDMINE";
        reason = `Extreme Fear (${fearIndex}) + Whale Accumulation (+${netInflow} BTC)`;
    }
    // 2. Bull Trap (Sell)
    else if (fearIndex > 75 && netInflow < -1000) {
        signal = "SHORT";
        trapLevel = "BULL_TRAP_DEATH";
        reason = `Extreme Greed (${fearIndex}) + Whale Dumping (${netInflow} BTC)`;
    }
    // 3. Wait
    else {
        signal = "WAIT";
        reason = "No strong divergence detected.";
    }

    // Emergency Check
    if (trapLevel !== "NONE" || Math.abs(priceChange15m) >= 3.0) {
        isEmergency = true;
    }

    return { signal, trapLevel, isEmergency, reason, timestamp: new Date().toISOString() };
};
module.exports = { analyzeMarket };
