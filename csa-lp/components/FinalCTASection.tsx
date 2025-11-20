import React from 'react';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-emerald-900/20 via-black to-black px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
          Ready to Reclaim Your Time and Trade with Confidence?
        </h2>
        <p className="mb-8 text-lg text-gray-300 md:text-xl">
          Join 300+ BTC traders who start their day with a 5-minute bias check instead of a 3-hour research marathon.
        </p>
        
        <button
          type="button"
          className="transform rounded-lg bg-primary px-10 py-5 text-lg font-bold text-black shadow-2xl transition hover:scale-105 hover:bg-emerald-400"
        >
          Start 7-Day Trial for $29
        </button>
        
        <p className="mt-6 text-sm text-gray-500">
          47 spots left this week • Cancel anytime • No API keys required
        </p>
      </div>
    </section>
  );
};
