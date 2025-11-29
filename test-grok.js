import { enrichSignal } from "./services/grokService.js";

(async () => {
  const dummySignal = {
    type: "BUY",
    score: 65,
    confidence: 70,
    reasoning: ["Dummy reason 1", "Dummy reason 2"]
  };

  const dummyMarket = {
    price: { current: 95000, change24h: -1.2 },
    sentiment: 40,
    netflow: -1200,
    mvrv: 1.8,
    etfNetflow: 600
  };

  const enriched = await enrichSignal(dummySignal, dummyMarket);
  console.log(JSON.stringify(enriched, null, 2));
})();
