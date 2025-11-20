import React from 'react';

const faqs = [
  {
    q: 'Do I need to connect my exchange account or provide API keys?',
    a: 'No. CryptoSignal AI is a signal-only service. We never touch your funds or require exchange access.',
  },
  {
    q: 'Is this suitable for beginners or only experienced traders?',
    a: 'This is designed for traders who already understand BTC chart analysis but want to save time on information gathering. If you are new to trading, start with education first.',
  },
  {
    q: 'How often are signals updated?',
    a: 'Daily bias signals are published every morning before US market open. Intraday updates are sent if major on-chain or sentiment shifts occur.',
  },
  {
    q: 'What if I disagree with the AI bias?',
    a: 'The signal is a starting bias, not a mandate. Many traders use it as a filter, then apply their own analysis. You always have final discretion.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Cancel anytime from your account dashboard. No long-term contracts or commitments.',
  },
];

export const FAQSection: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-black via-gray-900 to-black px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-gray-800 bg-gray-950/50 p-6 transition hover:border-primary/30"
            >
              <h3 className="mb-3 text-lg font-semibold text-white">{faq.q}</h3>
              <p className="text-gray-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
