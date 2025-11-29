// logic/autoTuner.js
// Signal Refinement Logic (The "Filter")

module.exports = {
    tune: async (signal, marketData) => {
        console.log(`🔧 Tuning Signal... (Current Score: ${signal.score})`);
        
        let tunedSignal = { ...signal };
        const rsi = marketData.rsi;

        // Rule 1: RSI Divergence Check (過熱感の逆張り防止)
        // 強気シグナルだが、RSIが既に高すぎる(>80)場合は「待ち」に下げる
        if (tunedSignal.type === 'STRONG_BUY' && rsi > 80) {
            tunedSignal.type = 'WAIT';
            tunedSignal.reasoning.push('⚠️ AutoTuner: RSI Overbought (80+). Downgraded to WAIT.');
            tunedSignal.score -= 20;
        }
        // 弱気シグナルだが、RSIが既に低すぎる(<20)場合は「待ち」に下げる
        if (tunedSignal.type === 'STRONG_SELL' && rsi < 20) {
            tunedSignal.type = 'WAIT';
            tunedSignal.reasoning.push('⚠️ AutoTuner: RSI Oversold (<20). Downgraded to WAIT.');
            tunedSignal.score += 20;
        }

        // Rule 2: Volatility Check (価格変動がない場合はスルー)
        if (Math.abs(marketData.price.change24h) < 0.5 && tunedSignal.type !== 'NEUTRAL') {
            tunedSignal.reasoning.push('ℹ️ AutoTuner: Low Volatility. Confidence reduced.');
            tunedSignal.confidence *= 0.8;
        }

        return tunedSignal;
    }
};
