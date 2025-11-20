import Head from "next/head";

export default function BtcBiasLanding() {
  return (
    <>
      <Head>
        <title>CryptoSignal AI • BTC Bias</title>
      </Head>

      <main className="page">
        {/* HERO */}
        <section className="hero">
          <div className="hero__overlay" />

          <div className="hero__inner">
            {/* LEFT: COPY */}
            <div className="hero__left">
              <div className="hero__logo-row">
                <img
                  className="hero__logo"
                  src="/assets/brand/logo-main-dark-transparent.png"
                  alt="CryptoSignal AI"
                />
                <p className="hero__tagline">
                  AI‑Powered BTC Bias Signals
                </p>
              </div>

              <h1 className="hero__headline">
                Stop the 3‑Hour Analysis
                <br />
                Loop.
                <br />
                Get One Clear
                <br />
                BTC Bias in 5
                <br />
                Minutes.
              </h1>

              <p className="hero__lead">
                In two weeks, CryptoSignal AI can turn your three‑hour BTC analysis marathons
                into a calm, five‑minute pre‑session ritual – so you stop second‑guessing every
                decision and start each morning knowing exactly what to do.
              </p>

              <p className="hero__story">
                Hajime used to sit frozen at 6:47 a.m., staring at his charts and wondering
                if he should even trade BTC that day. Now he spends five minutes reading one
                clear bias and runs his own playbook with calm confidence.
              </p>

              <button
                className="hero__cta"
                onClick={() => {
                  const el = document.getElementById("plan");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Start 7‑Day Trial ($29)
              </button>

              <div className="hero__meta">
                <span className="hero__spots">
                  ● Only 47 spots left this week
                </span>
                <span className="hero__trust">
                  ✓ Trusted by 300+ BTC traders · Payments secured by Stripe
                </span>
              </div>
            </div>

            {/* RIGHT: VSL CARD */}
            <aside className="hero__right">
              <div className="vsl-card">
                <h2 className="vsl-card__title">
                  See CryptoSignal AI in Action (7 Minutes)
                </h2>
                <p className="vsl-card__text">
                  Watch one real BTC trader go from analysis paralysis to calm confidence as
                  CryptoSignal AI turns noisy on‑chain flows, sentiment and news into one
                  clear BUY, SELL or STAND ASIDE bias.
                </p>
                <div className="vsl-card__frame">
                  <iframe
                    src="https://app.heygen.com/embedded-player/25ef2a11e6274c6fa2525f79e12c4486"
                    title="CryptoSignal AI VSL"
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="vsl-card__note">
                  Actual length: 7 minutes. No fluff – one London session breakdown showing
                  exactly how the daily BTC Bias Brief works.
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* PLAN / PRICING */}
        <section className="plan" id="plan">
          <div className="plan__inner">
            <header className="plan__header">
              <h2 className="plan__title">Daily BTC Signal + Pre‑Session Blueprint</h2>
              <p className="plan__subtitle">
                One Clear BTC Bias • 5‑Minute Ritual • No Long‑Term Lock‑In
              </p>
            </header>

            <div className="plan__content">
              <div className="plan__pricing">
                <p className="plan__label">Founders‑Only Pricing</p>
                <p className="plan__price">
                  <span className="plan__price-main">$99</span>
                  <span className="plan__price-note"> / month</span>
                </p>
                <p className="plan__guarantee">
                  After your 7‑day $29 trial. Cancel any time in two clicks from your account.
                  30‑day, no‑questions‑asked guarantee on top.
                </p>
              </div>

              <ul className="plan__bullets">
                <li>
                  Daily pre‑session BTC Bias Brief (BUY / SELL / STAND ASIDE) delivered before
                  London open so you start each day with one clear plan, instead of spending
                  three hours scrolling.
                </li>
                <li>
                  On‑chain flows, funding, sentiment and news compressed into a simple narrative
                  you can read in under five minutes.
                </li>
                <li>
                  Exact key levels, invalidation zones and scenario branches so you know where
                  the bias breaks and when to stand aside.
                </li>
                <li>
                  Session prep checklist (what to confirm, what to ignore, which charts actually
                  matter for today&apos;s BTC plan).
                </li>
                <li>
                  Optional trade path examples showing how a disciplined BTC scalper could
                  express the bias, without relying on copy‑trading signals.
                </li>
                <li>
                  Risk templates and example position sizing frameworks so you stop improvising
                  leverage and start repeating one calm process.
                </li>
                <li>
                  Weekly recap email showing how the bias performed versus chop, so you build
                  trust in the process instead of re‑litigating every trade in your head.
                </li>
                <li>
                  &quot;Do not do this&quot; section highlighting the week&apos;s biggest traps
                  and FOMO moves most traders fell for – so you can sidestep them.
                </li>
                <li>
                  Morning reminder window tuned for BTC traders in London / New York / Asia
                  sessions, so the brief arrives before you open your charts.
                </li>
                <li>
                  Rolling 7‑day archive of past briefs so you can review how the bias adapted
                  through different market conditions.
                </li>
              </ul>

              <div className="plan__cta">
                <a href="#checkout" className="plan__button">
                  Start 7‑Day Trial ($29)
                </a>
                <p className="plan__mini-trust">
                  No credit card fees · Cancel anytime in two clicks
                </p>
                <p className="plan__cta-note">
                  Educational signals only. Not trading advice. If CryptoSignal AI does not
                  cut your pre‑session analysis time by at least 50% in the next 30 days,
                  reply to any email and you will get a full refund.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq">
          <div className="faq__inner">
            <h2 className="faq__title">Frequently Asked Questions</h2>

            <div className="faq__item">
              <h3>Is this a copy‑trading signal service?</h3>
              <p>
                No. We send you a clear BTC bias and narrative so you can run your own
                playbook with more confidence. Signals are delivered via email or chat
                only — no API connection, no account login, and we never touch your funds,
                keys or positions.
              </p>
            </div>

            <div className="faq__item">
              <h3>What if I cannot trade every day?</h3>
              <p>
                Many members use the Bias Brief just a few sessions per week. The goal is
                not to force more trades, but to make the sessions you do take calmer,
                faster and more decisive.
              </p>
            </div>

            <div className="faq__item">
              <h3>Can this guarantee I will be profitable?</h3>
              <p>
                No tool can guarantee profits. CryptoSignal AI cannot promise specific
                outcomes – profitability always depends on market conditions and how you
                execute your own strategy. Crypto trading carries a high risk, including
                the possible loss of all capital.
              </p>
            </div>

            <div className="faq__item">
              <h3>How hard is it to cancel?</h3>
              <p>
                You can cancel any time from your account dashboard in two clicks. There
                are no lock‑ins or hidden fees, and if you are not happy in the first
                30 days, you can request a full refund.
              </p>
            </div>
          </div>
        </section>

        {/* LEGAL */}
        <footer className="legal" id="checkout">
          <p>
            DISCLAIMER: CryptoSignal AI provides educational market signals and analysis,
            not personalized investment, tax or legal advice. Trading cryptocurrencies is
            highly speculative and involves significant risk, including the possible loss
            of your entire capital. Past performance does not guarantee future results.
            Always do your own research and consider consulting a licensed financial
            advisor before trading.
          </p>
        </footer>
      </main>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
            "Segoe UI", sans-serif;
          background-color: #020617;
          color: #e5e7eb;
        }

        .page {
          min-height: 100vh;
          background-color: #020617;
        }

        /* HERO */

        .hero {
          position: relative;
          padding: 72px 32px 80px;
          background-image: radial-gradient(circle at top left, #1f2937 0, #020617 55%);
          overflow: hidden;
        }

        .hero__overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 0%, rgba(96, 165, 250, 0.18), transparent 55%),
            radial-gradient(circle at 80% 0%, rgba(248, 113, 113, 0.2), transparent 55%);
          opacity: 0.9;
          pointer-events: none;
        }

        .hero__inner {
          position: relative;
          max-width: 1120px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 2fr) minmax(0, 1.6fr);
          gap: 48px;
          align-items: center;
        }

        .hero__left {
          z-index: 1;
        }

        .hero__logo-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .hero__logo {
          height: 40px;
          width: auto;
        }

        .hero__tagline {
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #a5b4fc;
        }

        .hero__headline {
          font-size: 40px;
          line-height: 1.1;
          font-weight: 800;
          color: #f9fafb;
          margin: 0 0 20px;
        }

        .hero__lead {
          font-size: 15px;
          line-height: 1.7;
          color: #e5e7eb;
          margin-bottom: 16px;
          max-width: 540px;
        }

        .hero__story {
          font-size: 14px;
          line-height: 1.7;
          color: #9ca3af;
          max-width: 520px;
          margin-bottom: 24px;
        }

        .hero__cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 28px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          background: linear-gradient(135deg, #fb923c, #f97316);
          color: #111827;
          font-weight: 600;
          font-size: 15px;
          box-shadow: 0 18px 40px rgba(248, 113, 22, 0.45);
          margin-bottom: 14px;
        }

        .hero__cta:hover {
          background: linear-gradient(135deg, #f97316, #ea580c);
          transform: translateY(-1px);
        }

        .hero__meta {
          font-size: 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          color: #9ca3af;
        }

        .hero__spots {
          color: #f97316;
          font-weight: 600;
        }

        .hero__trust {
          color: #9ca3af;
        }

        /* VSL CARD */

        .hero__right {
          z-index: 1;
          display: flex;
          justify-content: flex-end;
        }

        .vsl-card {
          width: 100%;
          max-width: 360px;
          background: radial-gradient(circle at 0 0, #1d293b, #020617);
          border-radius: 18px;
          padding: 18px 18px 20px;
          box-shadow: 0 28px 80px rgba(15, 23, 42, 0.9);
          border: 1px solid rgba(148, 163, 184, 0.35);
        }

        .vsl-card__title {
          font-size: 15px;
          font-weight: 700;
          color: #e5e7eb;
          margin: 0 0 6px;
        }

        .vsl-card__text {
          font-size: 12px;
          line-height: 1.6;
          color: #9ca3af;
          margin: 0 0 10px;
        }

        .vsl-card__frame {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 10px;
          overflow: hidden;
          background-color: #020617;
          margin-bottom: 8px;
          border: 1px solid rgba(148, 163, 184, 0.45);
        }

        .vsl-card__frame iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }

        .vsl-card__note {
          font-size: 11px;
          color: #6b7280;
          margin: 0;
        }

        /* PLAN */

        .plan {
          background-color: #020617;
          padding: 40px 32px 56px;
        }

        .plan__inner {
          max-width: 1120px;
          margin: 0 auto;
          background-color: #020617;
          border-radius: 18px;
          border: 1px solid rgba(148, 163, 184, 0.35);
          box-shadow: 0 22px 60px rgba(15, 23, 42, 0.9);
          padding: 28px 32px 30px;
        }

        .plan__header {
          margin-bottom: 20px;
        }

        .plan__title {
          font-size: 20px;
          color: #e5e7eb;
          margin: 0 0 4px;
        }

        .plan__subtitle {
          font-size: 13px;
          color: #9ca3af;
          margin: 0;
        }

        .plan__content {
          display: grid;
          grid-template-columns: 280px minmax(0, 1fr);
          gap: 24px;
          align-items: flex-start;
        }

        .plan__pricing {
          background: radial-gradient(circle at 0 0, #111827, #020617);
          border-radius: 16px;
          padding: 18px 18px 20px;
          box-shadow: 0 22px 40px rgba(15, 23, 42, 0.85);
          border: 1px solid rgba(148, 163, 184, 0.5);
        }

        .plan__label {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #a5b4fc;
          margin: 0 0 8px;
        }

        .plan__price {
          margin: 0 0 6px;
        }

        .plan__price-main {
          font-size: 32px;
          font-weight: 700;
          color: #f9fafb;
        }

        .plan__price-note {
          font-size: 14px;
          color: #9ca3af;
        }

        .plan__guarantee {
          font-size: 12px;
          color: #9ca3af;
          line-height: 1.6;
        }

        .plan__bullets {
          list-style: disc;
          margin: 0;
          padding-left: 20px;
          font-size: 13px;
          line-height: 1.7;
          color: #d1d5db;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .plan__cta {
          grid-column: 1 / -1;
          margin-top: 20px;
          text-align: left;
        }

        .plan__button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 26px;
          border-radius: 999px;
          background: linear-gradient(135deg, #fb923c, #f97316);
          color: #111827;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          box-shadow: 0 16px 32px rgba(248, 113, 22, 0.45);
          margin-bottom: 8px;
        }

        .plan__button:hover {
          background: linear-gradient(135deg, #f97316, #ea580c);
          transform: translateY(-1px);
        }

        .plan__mini-trust {
          font-size: 11px;
          color: #9ca3af;
          margin: 0 0 4px;
        }

        .plan__cta-note {
          font-size: 11px;
          color: #6b7280;
          max-width: 640px;
          margin: 0;
        }

        /* FAQ */

        .faq {
          padding: 40px 32px 48px;
          background-color: #020617;
        }

        .faq__inner {
          max-width: 1120px;
          margin: 0 auto;
        }

        .faq__title {
          font-size: 18px;
          color: #e5e7eb;
          margin: 0 0 16px;
        }

        .faq__item {
          padding: 14px 0;
          border-top: 1px solid rgba(55, 65, 81, 0.8);
        }

        .faq__item:last-child {
          border-bottom: 1px solid rgba(55, 65, 81, 0.8);
        }

        .faq__item h3 {
          font-size: 14px;
          color: #e5e7eb;
          margin: 0 0 4px;
        }

        .faq__item p {
          font-size: 13px;
          color: #9ca3af;
          margin: 0;
          line-height: 1.7;
        }

        /* LEGAL */

        .legal {
          padding: 24px 32px 40px;
          background-color: #020617;
        }

        .legal p {
          max-width: 1120px;
          margin: 0 auto;
          font-size: 11px;
          color: #6b7280;
          line-height: 1.7;
          border-top: 1px solid rgba(55, 65, 81, 0.8);
          padding-top: 16px;
        }

        /* RESPONSIVE */

        @media (max-width: 960px) {
          .hero__inner {
            grid-template-columns: minmax(0, 1fr);
            gap: 28px;
          }

          .hero {
            padding: 56px 20px 56px;
          }

          .plan {
            padding: 32px 20px 48px;
          }

          .plan__inner {
            padding: 24px 20px 26px;
          }

          .plan__content {
            grid-template-columns: minmax(0, 1fr);
          }

          .hero__headline {
            font-size: 32px;
          }
        }

        @media (max-width: 600px) {
          .hero {
            padding: 44px 16px 44px;
          }

          .plan,
          .faq,
          .legal {
            padding-left: 16px;
            padding-right: 16px;
          }
        }
      `}</style>
    </>
  );
}
