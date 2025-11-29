// services/grok/client.js
// Client for grok-4-1-fast-reasoning
// Based on official documentation screenshots (2025-11-29)

const axios = require('axios');

async function analyzeMarket(prompt) {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
        console.warn("⚠️ XAI_API_KEY missing. Using fallback mock data.");
        return null;
    }

    try {
        // Using standard OpenAI-compatible endpoint as per documentation
        const response = await axios.post('https://api.x.ai/v1/chat/completions', {
            model: "grok-4-1-fast-reasoning", // CONFIRMED MODEL NAME
            messages: [
                { role: "system", content: "You are a structured data generator. Output JSON only." },
                { role: "user", content: prompt }
            ],
            temperature: 0.7,
            // Optional: Enable structured output enforcement if SDK supports it, 
            // but prompt engineering is safer for raw HTTP requests.
            stream: false
        }, {
            headers: { 
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        const content = response.data.choices[0].message.content;
        // Clean up potential markdown formatting
        const cleanJson = content.replace(/``````/g, '').trim();
        return JSON.parse(cleanJson);

    } catch (error) {
        console.error("❌ Grok API Error:", error.response ? error.response.data : error.message);
        
        // Detailed error logging to help debug if model name is still rejected (unlikely)
        if (error.response && error.response.data) {
            console.error("DEBUG Info:", JSON.stringify(error.response.data, null, 2));
        }
        return null;
    }
}

module.exports = { analyzeMarket };
