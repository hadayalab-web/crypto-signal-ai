import Head from "next/head";

export default function BtcBiasLanding() {
  return (
    <>
      <Head>
        <title>CryptoSignal AI – AI-Powered BTC Bias Signals</title>
        <meta
          name="description"
          content="AI-powered BTC bias briefs delivered before your session starts, so you can trade with clarity instead of decision fatigue."
        />
      </Head>
      <main style={{ minHeight: "100vh", backgroundColor: "#020617", color: "#F9FAFB" }}>
        {/* Hero */}
        <section
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            padding: "80px 24px 48px",
          }}
        >
          <img
            src="/assets/brand/logo-main-dark.png"
            alt="CryptoSignal AI"
            style={{ maxWidth: "520px", width: "100%", marginBottom: "32px" }}
          />
          <h1
            style={{
              fontSize: "2.75rem",
              lineHeight: 1.15,
              fontWeight: 700,
              marginBottom: "16px",
            }}
          >
            AI-Powered BTC Bias Signals,
            <br />
            Before Your Trading Session Starts.
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#9CA3AF",
              maxWidth: "720px",
              marginBottom: "24px",
            }}
          >
            CryptoSignal AI combines on-chain data, real-time sentiment, and news risk flags
            to deliver a single, clear BTC bias – BUY, SELL, or STAND ASIDE – so you can
            spend minutes preparing instead of hours over-analyzing charts.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "8px" }}>
            <a
              href="https://your-whop-checkout-url-here"
              style={{
                padding: "12px 28px",
                borderRadius: "999px",
                backgroundColor: "#22D3EE",
                color: "#020617",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Start 7-Day Trial – $29
            </a>
            <a
              href="#how-it-works"
              style={{
                padding: "12px 28px",
                borderRadius: "999px",
                border: "1px solid #4B5563",
                color: "#F9FAFB",
                textDecoration: "none",
              }}
            >
              See How It Works
            </a>
          </div>
          <p style={{ fontSize: "0.8rem", color: "#6B7280" }}>
            No refund on trial. 30-day satisfaction guarantee on the first full subscription month.
          </p>
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          style={{
            borderTop: "1px solid #111827",
            padding: "48px 24px 56px",
          }}
        >
          <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 600,
                marginBottom: "24px",
              }}
            >
              How CryptoSignal AI Works
            </h2>
            <div
              style={{
                display: "grid",
                gap: "24px",
              }}
            >
              <div>
                <h3 style={{ fontWeight: 600, marginBottom: "8px" }}>
                  On-chain + Sentiment + News
                </h3>
                <p style={{ color: "#9CA3AF" }}>
                  We combine CryptoQuant on-chain flows, Grok-powered X sentiment, and
                  a custom news risk flag to detect regime shifts before your session.
                </p>
              </div>
              <div>
                <h3 style={{ fontWeight: 600, marginBottom: "8px" }}>One Clear BTC Bias</h3>
                <p style={{ color: "#9CA3AF" }}>
                  Instead of a dozen conflicting indicators, you get one bias – BUY, SELL,
                  or STAND ASIDE – plus suggested entry/exit zones and risk limits.
                </p>
              </div>
              <div>
                <h3 style={{ fontWeight: 600, marginBottom: "8px" }}>
                  Delivered Where You Trade
                </h3>
                <p style={{ color: "#9CA3AF" }}>
                  Bias Briefs are delivered to your Telegram (and soon Discord) before each
                  active session, so you can review and prepare in minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing (MVP) */}
        <section
          style={{
            borderTop: "1px solid #111827",
            padding: "48px 24px 56px",
          }}
        >
          <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Plan A – BTC Bias Brief Signals
            </h2>
            <p style={{ color: "#9CA3AF", maxWidth: "720px", marginBottom: "24px" }}>
              Designed for BTC-focused discretionary traders who want a clear pre-session
              plan without giving up control of execution.
            </p>
            <div
              style={{
                border: "1px solid #111827",
                borderRadius: "16px",
                padding: "24px",
                display: "grid",
                gap: "16px",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#9CA3AF",
                    marginBottom: "4px",
                  }}
                >
                  Product A – BTC Only
                </p>
                <p style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "4px" }}>
                  $99<span style={{ fontSize: "1rem", fontWeight: 400 }}>/month</span>
                </p>
                <p style={{ color: "#9CA3AF" }}>
                  7-day trial at $29, then $99/month. 30-day satisfaction guarantee on
                  the first full month.
                </p>
              </div>
              <div style={{ color: "#9CA3AF" }}>
                <p>✔ Pre-session BTC bias (BUY / SELL / STAND ASIDE)</p>
                <p>✔ Entry / exit zones & suggested risk limits</p>
                <p>✔ Telegram Bias Brief delivery</p>
              </div>
              <a
                href="https://your-whop-checkout-url-here"
                style={{
                  justifySelf: "flex-start",
                  padding: "12px 28px",
                  borderRadius: "999px",
                  backgroundColor: "#22D3EE",
                  color: "#020617",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Start 7-Day Trial
              </a>
            </div>
          </div>
        </section>

        {/* FAQ プレースホルダ */}
        <section
          style={{
            borderTop: "1px solid #111827",
            padding: "48px 24px 56px",
          }}
        >
          <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Frequently Asked Questions
            </h2>
            <p style={{ color: "#9CA3AF" }}>
              FAQ セクションは、初期ユーザーとアフィリエイターからの質問をもとに
              後でブラッシュアップします（いまはプレースホルダです）。
            </p>
          </div>
        </section>

        <footer
          style={{
            borderTop: "1px solid #111827",
            padding: "16px 24px",
            textAlign: "center",
            fontSize: "0.75rem",
            color: "#4B5563",
          }}
        >
          © {new Date().getFullYear()} CryptoSignal AI. All rights reserved.
        </footer>
      </main>
    </>
  );
}
