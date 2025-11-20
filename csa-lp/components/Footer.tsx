import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-gray-800 bg-black px-6 py-10 text-xs text-gray-400 md:px-12">
      <div className="mx-auto max-w-6xl space-y-3">
        <p className="text-sm font-semibold text-gray-300">Disclaimer</p>
        <p>
          This service is for educational purposes only and does not constitute investment advice.
        </p>
        <p>
          Cryptocurrency trading involves substantial risk of loss. Always conduct your own due diligence.
        </p>
        <p className="mt-4 text-gray-500">
          © {new Date().getFullYear()} CryptoSignal AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
