// local-runner.js
// Vercel用の monitor.js をローカルで定期実行するためのラッパー

require('dotenv').config(); // .env を読み込む
const monitor = require('./monitor');

// 偽の req, res オブジェクトを作成して monitor を呼び出す
const run = async () => {
    const now = new Date().toISOString();
    console.log('[' + now + '] Running monitor check...');
    
    const req = {}; // 空のリクエスト
    const res = {
        status: (code) => ({
            send: (body) => console.log('Response:', code, body)
        })
    };

    try {
        await monitor(req, res);
    } catch (error) {
        console.error('Error executing monitor:', error);
    }
};

// 初回実行
run();

// 5分ごとに実行 (300000ms)
setInterval(run, 300000);
console.log('Local runner started. Press Ctrl+C to stop.');
