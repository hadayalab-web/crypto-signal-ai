const grok = require("../services/grok/client");
const telegram = require("../services/delivery/telegram");
// 簡易データプロバイダー (本来は外部APIから取得)
const getData = () => ({
  timestamp: new Date().toISOString(),
  bitcoin: { price: 98500, change24h: "+2.1%" },
  netflow: -1500, // Negative = Outflow (Bullish)
  mvrv: 2.1,
  fearGreed: 78, // Extreme Greed
});

module.exports = async (req, res) => {
  try {
    // 1. 実行時間の判定 (4時間おきかチェック)
    const now = new Date();
    const hour = now.getUTCHours(); // UTC
    // 4時間ごと (0, 4, 8, 12...) または 緊急時のみ実行
    const isScheduled = hour % 4 === 0 && now.getMinutes() < 10; 
    
    // ※デモ用に常に実行するようにコメントアウト解除も可能
    // if (!isScheduled) return res.status(200).send("Skipped: Not scheduled time.");

    // 2. データ取得 & シグナル判定
    const data = getData();
    
    // 簡易シグナル判定ロジック
    let signalType = "NEUTRAL";
    if (data.netflow < -1000 && data.fearGreed < 40) signalType = "BEAR_TRAP_GOLDMINE";
    else if (data.netflow > 1000 && data.fearGreed > 80) signalType = "BULL_TRAP_WARNING";
    else if (isScheduled) signalType = "REGULAR_REPORT";

    // 配信対象でなければ終了
    if (signalType === "NEUTRAL") {
      return res.status(200).json({ status: "Skipped", reason: "No Signal" });
    }

    // 3. AIレポート生成 (英語 & 日本語 並行処理)
    // Promise.all で時間を節約
    const [reportEn, reportJp] = await Promise.all([
      grok.generateSignalReport(data, signalType, "English"),
      process.env.TELEGRAM_ADMIN_ID ? grok.generateSignalReport(data, signalType, "Japanese") : Promise.resolve(null)
    ]);

    // 4. 配信実行
    const deliveryPromises = [];

    // 公開チャンネルへ (英語)
    if (process.env.TELEGRAM_CHAT_ID) {
      deliveryPromises.push(telegram.sendMessage(process.env.TELEGRAM_CHAT_ID, reportEn));
    }

    // 管理者へ (日本語)
    if (process.env.TELEGRAM_ADMIN_ID && reportJp) {
      deliveryPromises.push(telegram.sendMessage(process.env.TELEGRAM_ADMIN_ID, `🇯🇵 [ADMIN COPY]\n\n${reportJp}`));
    }

    await Promise.all(deliveryPromises);

    res.status(200).json({ 
      status: "Sent", 
      signal: signalType, 
      languages: { en: !!reportEn, jp: !!reportJp } 
    });

  } catch (error) {
    console.error("Monitor Error:", error);
    res.status(500).json({ error: error.message });
  }
};
