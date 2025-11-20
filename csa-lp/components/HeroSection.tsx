import React from 'react';

type Badge = { label: string };

export type HeroSectionProps = {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta?: string;
  badges?: Badge[];
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  eyebrow,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  badges = [],
}) => {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />
      
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:px-12 md:py-32">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {eyebrow}
          </p>
        )}

        <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
          {headline}
        </h1>

        <p className="max-w-3xl text-lg text-gray-300 md:text-xl">
          {subheadline}
        </p>

        {badges.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {badges.map((badge, idx) => (
              <span
                key={idx}
                className="rounded-full border border-emerald-500/30 bg-emerald-950/30 px-4 py-2 text-sm font-medium text-emerald-300"
              >
                ✓ {badge.label}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-4">
          <button
            type="button"
            className="transform rounded-lg bg-primary px-8 py-4 text-base font-bold text-black shadow-lg transition hover:scale-105 hover:bg-emerald-400"
          >
            {primaryCta}
          </button>

          {secondaryCta && (
            <button
              type="button"
              className="rounded-lg border-2 border-gray-600 px-8 py-4 text-base font-semibold text-gray-100 transition hover:border-primary hover:bg-gray-800"
            >
              {secondaryCta}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
