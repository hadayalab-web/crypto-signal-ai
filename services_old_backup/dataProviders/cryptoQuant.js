// services/dataProviders/cryptoQuant.js
// CryptoQuant API (v1.3.0) - Full Implementation with ETF Data

const axios = require('axios');

const BASE_URL = 'https://api.cryptoquant.com/v1';

module.exports = {
    /**
     * 複数のオンチェーン指標を一括取得する
     * @returns {Promise<Object>} { netflow, mvrv, etfNetflow }
     */
    getOnChainMetrics: async () => {
        const apiKey = process.env.CRYPTOQUANT_API_KEY;
        const metrics = { netflow: 0, mvrv: 2.0, etfNetflow: 0 }; // デフォルト値

        if (!apiKey) {
            console.warn('⚠️ CRYPTOQUANT_API_KEY missing. Using safe defaults.');
            return metrics;
        }

        try {
            // 1. Netflow (取引所入出金)
            const netflowEndpoint = `${BASE_URL}/btc/exchange-flows/netflow`;
            console.log(`Fetching Netflow...`);
            const netflowRes = await axios.get(netflowEndpoint, {
                headers: { 'Authorization': `Bearer ${apiKey}` },
                params: { exchange: 'all_exchange', window: 'day', limit: 1 },
                timeout: 5000
            });

            if (netflowRes.data?.result?.data?.[0]) {
                metrics.netflow = parseFloat(netflowRes.data.result.data[0].netflow_total);
                console.log(`✅ Netflow: ${metrics.netflow} BTC`);
            }

            // 2. MVRV (市場過熱感)
            const mvrvEndpoint = `${BASE_URL}/btc/market-indicator/mvrv`;
            console.log(`Fetching MVRV...`);
            const mvrvRes = await axios.get(mvrvEndpoint, {
                headers: { 'Authorization': `Bearer ${apiKey}` },
                params: { window: 'day', limit: 1 },
                timeout: 5000
            });

            if (mvrvRes.data?.result?.data?.[0]) {
                metrics.mvrv = parseFloat(mvrvRes.data.result.data[0].mvrv);
                console.log(`✅ MVRV: ${metrics.mvrv}`);
            }

            // 3. ETF Netflow (機関投資家の動き)
            const etfEndpoint = `${BASE_URL}/btc/fund-data/etf-netflow`;
            console.log(`Fetching ETF Netflow...`);
            const etfRes = await axios.get(etfEndpoint, {
                headers: { 'Authorization': `Bearer ${apiKey}` },
                params: { window: 'day', limit: 1 },
                timeout: 5000
            });

            if (etfRes.data?.result?.data?.[0]) {
                // ドキュメントから netflow または total_netflow が正しいキー名と推測
                const etfData = etfRes.data.result.data[0];
                metrics.etfNetflow = parseFloat(etfData.netflow || etfData.total_netflow || 0);
                console.log(`✅ ETF Netflow: ${metrics.etfNetflow} BTC`);
            }

        } catch (error) {
            console.error('❌ CryptoQuant Fetch Error:', error.message);
        }

        return metrics;
    }
};
