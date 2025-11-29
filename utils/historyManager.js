// utils/historyManager.js
// Manage Signal History (JSON persistence)
const fs = require('fs');
const path = require('path');

const HISTORY_FILE = path.join(__dirname, '../data/signal_history.json');

module.exports = {
    saveSignal: (signal, marketData) => {
        try {
            // Ensure directory exists
            const dir = path.dirname(HISTORY_FILE);
            if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

            let history = [];
            if (fs.existsSync(HISTORY_FILE)) {
                history = JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf8'));
            }

            // Create Record
            const record = {
                id: Date.now(),
                timestamp: new Date().toISOString(),
                signalType: signal.type,
                score: signal.score,
                price: marketData.price.current,
                reasoning: signal.reasoning.join(' | ')
            };

            // Add new record and keep last 50
            history.unshift(record);
            if (history.length > 50) history = history.slice(0, 50);

            fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2));
            console.log('💾 Signal saved to history.');
        } catch (error) {
            console.error('❌ History Save Error:', error.message);
        }
    }
};
