import React from 'react';

export const VSLSection: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-black via-gray-900 to-black px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Watch: How BTC Traders Cut Their Analysis Time by 50%
        </h2>
        <p className="mb-8 text-lg text-gray-400">
          7-minute walkthrough of the system (no opt-in required)
        </p>
        
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-800 shadow-2xl">
          <div className="flex h-full items-center justify-center">
            <p className="text-gray-500">[YouTube/Vimeo Embed Here]</p>
          </div>
        </div>
      </div>
    </section>
  );
};
