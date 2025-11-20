import React from 'react';

export const BeforeAfterSection: React.FC = () => {
  return (
    <section className="w-full bg-black px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
          Before vs. After CryptoSignal AI
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-red-900/30 bg-gradient-to-br from-red-950/20 to-black p-8">
            <h3 className="mb-6 text-2xl font-bold text-red-400">❌ Before</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="mr-3 text-red-500">•</span>
                <span>3+ hours daily analyzing on-chain data, news, and social sentiment</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-500">•</span>
                <span>Constantly second-guessing bias before opening a position</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-500">•</span>
                <span>Missing key signals buried in X noise and clickbait headlines</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-500">•</span>
                <span>High stress, decision fatigue, and FOMO-driven entries</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 to-black p-8">
            <h3 className="mb-6 text-2xl font-bold text-emerald-400">✓ After</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="mr-3 text-emerald-500">•</span>
                <span>5-minute morning ritual: check bias, open charts, trade with conviction</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-emerald-500">•</span>
                <span>Clear buy/sell/hold signal before chart analysis even begins</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-emerald-500">•</span>
                <span>AI filters out noise and surfaces only high-conviction signals</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-emerald-500">•</span>
                <span>Low stress, confident execution, reclaimed 15+ hours per week</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
