import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { VSLSection } from '@/components/VSLSection';
import { BeforeAfterSection } from '@/components/BeforeAfterSection';
import { FAQSection } from '@/components/FAQSection';
import { FinalCTASection } from '@/components/FinalCTASection';
import { Footer } from '@/components/Footer';

export default function BtcBiasPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection
        eyebrow="AI-POWERED BTC BIAS SIGNAL"
        headline="Stop wasting 3 hours gathering information. Get today BTC bias in 5 minutes."
        subheadline="CryptoSignal AI integrates on-chain data, news, and X sentiment to give you a clear buy/sell/hold bias before you even look at the charts."
        primaryCta="Start 7-Day Trial ($29)"
        secondaryCta="Watch 7-Min VSL"
        badges={[
          { label: '47 Spots Left This Week' },
          { label: 'Used by 300+ BTC Traders' },
          { label: 'No API Keys Required' },
        ]}
      />

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-28">
        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
          What Changes in Your First 7 Days
        </h2>
        
        <div className="space-y-6 text-base text-gray-300 md:text-lg">
          <p className="leading-relaxed">
            <strong className="text-primary">Day 1-3:</strong> Your morning analysis time drops from ~3 hours to ~1.5 hours. The confusion fades significantly.
          </p>
          <p className="leading-relaxed">
            <strong className="text-primary">Day 4-5:</strong> The 5-minute pre-check ritual becomes automatic. You open your charts already knowing today bias.
          </p>
          <p className="leading-relaxed">
            <strong className="text-primary">Day 6-7:</strong> Your stress score drops from 8/10 to 3/10. You execute at least one AI-backed entry with full confidence.
          </p>
        </div>
      </section>

      <VSLSection />
      <BeforeAfterSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
