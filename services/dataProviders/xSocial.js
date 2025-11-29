// services/dataProviders/xSocial.js
// Real Sentiment Provider using Fear & Greed Index API
const axios = require('axios');

module.exports = {
    getSentiment: async () => {
        try {
            // Alternative.me API (Free, No Key Required)
            const response = await axios.get('https://api.alternative.me/fng/?limit=1');
            if (response.data && response.data.data && response.data.data.length > 0) {
                const value = parseInt(response.data.data[0].value);
                const classification = response.data.data[0].value_classification;
                console.log(`🧠 Sentiment Fetched: ${value} (${classification})`);
                return value;
            }
        } catch (error) {
            console.error('❌ Sentiment API Error:', error.message);
        }
        return 50; // Fallback to Neutral
    }
};
