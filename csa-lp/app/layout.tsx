import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CryptoSignal AI - BTC Bias Signal',
  description: 'Get today BTC bias in 5 minutes. Stop wasting 3 hours on information gathering.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
