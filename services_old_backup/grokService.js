// services/grokService.js
// XAI API (Grok 4.1 Fast Reasoning) Integration Layer

import axios from 'axios';

const XAI_BASE = 'https://api.x.ai/v1';

/**
 * Grokにシグナルの解釈と状態分類を依頼
 * @param {Object} signal - trapDetectorとautoTunerを通過したシグナル
 * @param {Object} marketData - オンチェーン指標と価格データ
 * @returns {Object} Grok解説を追加したシグナル
 */
export async function enrichSignal(signal, marketData) {
    const apiKey = process.env.XAI_API_KEY;
    
    if (!apiKey) {
        console.warn('⚠️ XAI_API_KEY missing. Skipping Grok enrichment.');
        return signal;
    }

    const prompt = `
You are Prof. Grok, a brutally honest crypto market critic.
Given this Bitcoin signal and on-chain data, perform two tasks:

1) Classify the current market state with ONE of these labels:
["bull_trap","bear_trap","accumulation","distribution","normal_chop","etf_driven_pump","etf_driven_dump","whale_accumulation","panic_selling"]

2) Write 2-3 sharp, actionable bullet points explaining WHY this classification makes sense.
Focus on the key data points (Netflow, MVRV, ETF flows) and price action divergence.

Return ONLY valid JSON in this exact format:
{"state":"your_classification","bullets":["point 1","point 2","point 3"]}
    `.trim();

    const dataContext = `
Signal Type: ${signal.type}
Score: ${signal.score}
Confidence: ${signal.confidence}%
Reasoning: ${signal.reasoning.join(' | ')}

Market Data:
- Price: $${marketData.price.current} (24h change: ${marketData.price.change24h}%)
- Sentiment (Fear&Greed): ${marketData.sentiment}
- Exchange Netflow: ${marketData.netflow} BTC
- MVRV Ratio: ${marketData.mvrv}
- ETF Netflow: ${marketData.etfNetflow} BTC
    `.trim();

    try {
        const response = await axios.post(
            `${XAI_BASE}/chat/completions`,
            {
                model: 'grok-4-1-fast-reasoning',
                response_format: { type: 'json_object' },
                messages: [
                    { 
                        role: 'system', 
                        content: 'You are Prof. Grok, a cynical but highly accurate crypto market analyst. Always respond with valid JSON only.' 
                    },
                    { role: 'user', content: prompt },
                    { role: 'user', content: dataContext }
                ],
                temperature: 0.3
            },
            {
                headers: { 
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                timeout: 30000
            }
        );

        const content = response.data.choices[0].message.content;
        const parsed = JSON.parse(content);

        console.log(`🧠 Prof. Grok Analysis: ${parsed.state}`);
        
        return {
            ...signal,
            grok: {
                state: parsed.state || 'unknown',
                bullets: parsed.bullets || ['Analysis unavailable'],
                timestamp: new Date().toISOString()
            }
        };

    } catch (error) {
        console.error('❌ Grok API Error:', error.response?.data || error.message);
        return signal;
    }
}

