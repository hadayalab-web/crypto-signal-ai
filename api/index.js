// monitor.js
// WhaleShield 3.0 PRODUCTION Monitor Loop
// Integrates: CoinGecko, CryptoQuant, Fear&Greed, AutoTuner, History

const axios = require('axios');
const cryptoQuant = require('./services/dataProviders/cryptoQuant');
const xSocial = require('./services/dataProviders/xSocial');
const trapDetector = require('./logic/trapDetector');
const autoTuner = require('./logic/autoTuner');
const historyManager = require('./utils/historyManager');
const telegram = require('./services/delivery/telegram');

console.log('🐋 WhaleShield 3.0 PRO Monitor Started');

// Helper: Fetch Real Price from CoinGecko
async function getMarketPrice() {
    try {
        const res = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true');
        if (res.data && res.data.bitcoin) {
            return {
                current: res.data.bitcoin.usd,
                change24h: res.data.bitcoin.usd_24h_change
            };
        }
    } catch (e) {
        console.error('⚠️ Price Fetch Error (using fallback):', e.message);
    }
    return { current: 95000, change24h: 0 }; // Fallback
}

async function runAnalysis() {
    console.log(`\n--- Analysis Started at ${new Date().toISOString()} ---`);

    try {
        // 1. データ収集 (Parallel Fetch for speed)
        console.log('📥 Fetching Data Sources...');
        const [onChainData, sentimentScore, priceData] = await Promise.all([
            cryptoQuant.getOnChainMetrics(),
            xSocial.getSentiment(),
            getMarketPrice()
        ]);

        // RSIの簡易計算 (前回の価格履歴がないため、今回は変動率から推定するロジックのみ渡す)
        // ※実運用では過去データを蓄積して計算するが、ここでは即時性重視で代用
        let estimatedRSI = 50; 
        if (priceData.change24h > 5) estimatedRSI = 75;
        if (priceData.change24h < -5) estimatedRSI = 25;

        const marketData = {
            price: priceData,
            sentiment: sentimentScore,
            netflow: onChainData.netflow,
            mvrv: onChainData.mvrv,
            etfNetflow: onChainData.etfNetflow,
            rsi: estimatedRSI
        };

        console.log('📊 Aggregated Data:', JSON.stringify(marketData, null, 2));

        // 2. シグナル判定 (Trap Detection)
        let signal = trapDetector.detect(marketData);

        // 3. 自動チューニング (Filter)
        signal = await autoTuner.tune(signal, marketData);

        console.log(`🎯 Final Signal: ${signal.type} (Score: ${signal.score})`);

        // 4. 履歴保存
        historyManager.saveSignal(signal, marketData);

        // 5. 通知配信
        if (signal.type !== 'NEUTRAL' && signal.type !== 'WAIT') {
            await telegram.sendAlert(signal);
            console.log('✅ Alert Sent to Telegram');
        } else {
            console.log('ℹ️ Signal is weak. No alert sent.');
        }

    } catch (error) {
        console.error('❌ Analysis Failed:', error);
    }
}

module.exports = async (req, res) => {
    await runAnalysis();
    if (res) res.status(200).send('Analysis Completed');
};

if (require.main === module) {
    runAnalysis();
}
