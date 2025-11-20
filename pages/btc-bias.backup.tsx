import Head from "next/head";

export default function BtcBiasLanding() {
  return (
    <>
      <Head>
        <title>CryptoSignal AI – 5-Minute BTC Bias, Not 3-Hour Doubt</title>
        <meta
          name="description"
          content="CryptoSignal AI frees BTC traders from 3-hour morning analysis by delivering a single, AI-powered BUY/SELL/STAND ASIDE bias before each session."
        />
      </Head>

      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "#020617",
          color: "#F9FAFB",
        }}
      >
        {/* HERO */}
        <section
          style={{
            maxWidth: "1040px",
            margin: "0 auto",
            padding: "80px 24px 32px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.25,
              zIndex: 0,
            }}
          >
            <source
              src="/assets/video/hero-crypto-trading.mp4"
              type="video/mp4"
            />
          </video>

          {/* ここからテキスト用オーバーレイ */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
            }}
          >
            <img
              src="/assets/brand/logo-main-dark-transparent.png"
              alt="CryptoSignal AI"
              style={{ maxWidth: "500px", width: "100%", marginBottom: "32px" }}
            />

            <h1
              style={{
                fontSize: "2.9rem",
                lineHeight: 1.15,
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              5-Minute Decision.
              <br />
              Not 3-Hour Doubt.
            </h1>

            <p
              style={{
                fontSize: "1.1rem",
                color: "#E5E7EB",
                maxWidth: "720px",
                marginBottom: "16px",
              }}
            >
              Every morning, CryptoSignal AI gives BTC traders one clear bias –
              BUY, SELL or STAND ASIDE – so you can stop drowning in charts,
              news and Discord takes and start each session with calm, confident
              direction.
            </p>

            <p
              style={{
                fontSize: "0.98rem",
                color: "#9CA3AF",
                maxWidth: "720px",
                marginBottom: "24px",
              }}
            >
              In less than two weeks, one ordinary BTC trader went from
              panic-stricken analysis marathons to a confident five-minute
              pre-session ritual – this page shows how you can follow the same
              path.
            </p>

            {/* CTA ボタンや「Are you in this window?」ボックスも
                すべてこの div の中にそのまま残してOK */}
            {/* 既存の CTA / カード部分は、この div の内側にコピーしておく */}
          </div>
        </section>

        {/* VSL SECTION */}
        <section
          id="vsl"
          style={{
            borderTop: "1px solid #111827",
            padding: "32px 24px 40px",
          }}
        >
          <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 600,
                marginBottom: "12px",
              }}
            >
              See CryptoSignal AI in Action (7 Minutes)
            </h2>
            <p
              style={{
                fontSize: "0.96rem",
                color: "#D1D5DB",
                maxWidth: "760px",
                marginBottom: "18px",
              }}
            >
              This short VSL walks you through a real BTC session, showing how
              the Bias Brief is generated from on-chain flows, sentiment and
              news – and how a confused morning turns into a five-minute ritual.
            </p>

            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "900px",
                paddingBottom: "56.25%",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #111827",
                backgroundColor: "#020617",
              }}
            >
              <iframe
                src="https://app.heygen.com/embedded-player/25ef2a11e6274c6fa2525f79e12c4486"
                title="CryptoSignal AI VSL"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <p
              style={{
                fontSize: "0.8rem",
                color: "#6B7280",
                marginTop: "8px",
              }}
            >
              Replace this embed URL with your final HeyGen/YouTube VSL link
              once it is uploaded.
            </p>
          </div>
        </section>

        {/* STORY – PROBLEM & DISCOVERY */}
        <section
          id="story"
          style={{
            borderTop: "1px solid #111827",
            padding: "40px 24px 40px",
          }}
        >
          <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "2.1rem",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              The Real Enemy Is Not Your Strategy. It&apos;s Decision Fatigue.
            </h2>

            <p
              style={{
                fontSize: "0.98rem",
                color: "#D1D5DB",
                maxWidth: "760px",
                marginBottom: "16px",
              }}
            >
              For years, traders have tried to fix losses by adding more tools –
              extra indicators, more Discord groups, more AI opinions – but the
              result is the same: three hours of scrolling and second-guessing
              before every session.
            </p>

            <p
              style={{
                fontSize: "0.98rem",
                color: "#D1D5DB",
                maxWidth: "760px",
                marginBottom: "16px",
              }}
            >
              CryptoSignal AI was built after watching traders spend entire
              mornings bouncing between TradingView, X, Discord and ChatGPT only
              to end up asking the same paralyzing question – buy, sell or stand
              aside – with no real confidence.
            </p>

            <p
              style={{
                fontSize: "0.98rem",
                color: "#D1D5DB",
                maxWidth: "760px",
                marginBottom: "20px",
              }}
            >
              The breakthrough came from reframing the problem: the main
              competitor is not other signal services, it is the three hours of
              indecision that quietly kills your edge and your mental capital
              every week.
            </p>

            <div
              style={{
                display: "grid",
                gap: "18px",
                marginTop: "8px",
              }}
            >
              <div
                style={{
                  borderRadius: "12px",
                  border: "1px solid #111827",
                  padding: "16px 18px",
                  backgroundColor: "#020617",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    marginBottom: "6px",
                  }}
                >
                  Before CryptoSignal AI
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#9CA3AF" }}>
                  A typical morning meant 4–5 tools, conflicting signals,
                  constant fear of missing out and no clear bias even with the
                  session one hour away.
                </p>
              </div>

              <div
                style={{
                  borderRadius: "12px",
                  border: "1px solid #0f172a",
                  padding: "16px 18px",
                  background:
                    "linear-gradient(135deg, rgba(15,23,42,1) 0%, rgba(56,189,248,0.22) 100%)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    marginBottom: "6px",
                  }}
                >
                  After CryptoSignal AI
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#E5E7EB" }}>
                  Thirty minutes before the session, you receive one concise
                  Bias Brief: BUY, SELL or STAND ASIDE, with entry zone, stop
                  level and a short note on on-chain flows, sentiment and news
                  risk.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          style={{
            borderTop: "1px solid #111827",
            padding: "40px 24px 40px",
          }}
        >
          <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              How CryptoSignal AI Turns Chaos Into One Clear Bias
            </h2>

            <p
              style={{
                fontSize: "0.98rem",
                color: "#D1D5DB",
                maxWidth: "760px",
                marginBottom: "20px",
              }}
            >
              Under the hood, CryptoSignal AI watches three independent data
              streams and only speaks when all three agree on the same direction
              – everything else becomes a &quot;stand aside&quot; day.
            </p>

            <div
              style={{
                display: "grid",
                gap: "18px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  borderRadius: "12px",
                  border: "1px solid #111827",
                  padding: "16px 18px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    marginBottom: "6px",
                  }}
                >
                  1. On-chain Whale Flows
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#9CA3AF" }}>
                  CryptoQuant exchange netflows reveal when large players move
                  real capital on-chain – behavior that cannot be faked by
                  opinions or screenshots.
                </p>
              </div>

              <div
                style={{
                  borderRadius: "12px",
                  border: "1px solid #111827",
                  padding: "16px 18px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    marginBottom: "6px",
                  }}
                >
                  2. Real-Time X Sentiment via Grok
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#9CA3AF" }}>
                  Grok reads thousands of BTC posts and compresses them into a
                  single sentiment bias, so you capture the crowd&apos;s
                  emotional shift without doom-scrolling the feed yourself.
                </p>
              </div>

              <div
                style={{
                  borderRadius: "12px",
                  border: "1px solid #111827",
                  padding: "16px 18px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    marginBottom: "6px",
                  }}
                >
                  3. News Impact Filter
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#9CA3AF" }}>
                  A custom news risk model classifies headlines as bullish,
                  bearish or noise based on how similar events moved BTC in the
                  past, then tags your Bias Brief with a risk note.
                </p>
              </div>
            </div>

            <div
              style={{
                borderRadius: "12px",
                border: "1px solid #111827",
                padding: "18px 20px",
                backgroundColor: "#020617",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  marginBottom: "6px",
                }}
              >
                3-Layer Consensus Filter
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#D1D5DB",
                  marginBottom: "6px",
                }}
              >
                When flows, sentiment and news all vote in the same direction
                and the regime is favorable, the system issues a strong BUY or
                SELL bias; when they conflict, it explicitly tells you to stand
                aside.
              </p>
              <p style={{ fontSize: "0.9rem", color: "#9CA3AF" }}>
                That is why CryptoSignal AI focuses less on predicting every
                move and more on keeping you out of low-quality trades that
                drain your account and your energy.
              </p>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section
          style={{
            borderTop: "1px solid #111827",
            padding: "40px 24px 40px",
          }}
        >
          <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              What Changes in Your Next 7 Days
            </h2>
            <p
              style={{
                fontSize: "0.98rem",
                color: "#D1D5DB",
                maxWidth: "760px",
                marginBottom: "20px",
              }}
            >
              The 7-day trial is designed to give you a before-and-after
              contrast you can feel in your routine, not just in your P&amp;L.
            </p>

            <ul
              style={{
                listStyle: "disc",
                paddingLeft: "20px",
                fontSize: "0.9rem",
                color: "#D1D5DB",
                display: "grid",
                gap: "8px",
                maxWidth: "820px",
              }}
            >
              <li>
                5 minutes of pre-session prep instead of 3 hours of open-ended
                analysis.
              </li>
              <li>
                Noticeable drop in decision paralysis because each session
                starts with one clear bias or an explicit stand-aside.
              </li>
              <li>
                Fewer forced trades on days when the brief tells you to wait for
                better conditions.
              </li>
              <li>
                Simpler workflow – signals arrive via Telegram, so you keep
                using your current exchange and tools.
              </li>
              <li>
                Lower mental load and more confidence in each trade you actually
                take.
              </li>
            </ul>
          </div>
        </section>

        {/* PRICING */}
        <section
          style={{
            borderTop: "1px solid #111827",
            padding: "40px 24px 40px",
          }}
        >
          <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 600,
                marginBottom: "12px",
              }}
            >
              Plan A – BTC Bias Brief Signals
            </h2>
            <p
              style={{
                fontSize: "0.98rem",
                color: "#D1D5DB",
                maxWidth: "720px",
                marginBottom: "24px",
              }}
            >
              Built for BTC-focused discretionary traders who want a clear
              pre-session plan and risk framing while keeping full control over
              execution.
            </p>

            <div
              style={{
                borderRadius: "18px",
                border: "1px solid #111827",
                padding: "24px 24px 22px",
                display: "grid",
                gap: "16px",
                backgroundColor: "#020617",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "0.8rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#9CA3AF",
                    marginBottom: "4px",
                  }}
                >
                  Product A – BTC Only
                </p>
                <p
                  style={{
                    fontSize: "2.6rem",
                    fontWeight: 700,
                    marginBottom: "4px",
                  }}
                >
                  $99{" "}
                  <span
                    style={{
                      fontSize: "1rem",
                      fontWeight: 400,
                    }}
                  >
                    / month
                  </span>
                </p>
                <p style={{ fontSize: "0.9rem", color: "#9CA3AF" }}>
                  Start with a 7-day test drive at $29. If, after your first
                  full subscription month, your pre-session clarity has not
                  improved, you can request a full refund of that month.
                </p>
              </div>

              <ul
                style={{
                  listStyle: "disc",
                  paddingLeft: "20px",
                  fontSize: "0.9rem",
                  color: "#D1D5DB",
                }}
              >
                <li>Daily BTC Bias Brief before each active session.</li>
                <li>
                  One clear call: BUY, SELL or STAND ASIDE – no multi-page
                  reports.
                </li>
                <li>
                  Suggested entry zone, stop level and brief risk note included.
                </li>
                <li>Signals delivered via private Telegram channel.</li>
              </ul>

              <a
                href="https://your-whop-checkout-url-here"
                style={{
                  justifySelf: "flex-start",
                  padding: "12px 28px",
                  borderRadius: "999px",
                  backgroundColor: "#f97316",
                  color: "#020617",
                  fontWeight: 600,
                  textDecoration: "none",
                  marginTop: "4px",
                }}
              >
                Start 7-Day Trial – $29
              </a>

              <p style={{ fontSize: "0.8rem", color: "#6B7280" }}>
                Trial fee is non-refundable. First $99 subscription month is
                covered by a 30-day satisfaction guarantee on clarity and
                decision quality, not on absolute profit.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          style={{
            borderTop: "1px solid #111827",
            padding: "40px 24px 48px",
          }}
        >
          <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Frequently Asked Questions
            </h2>

            <details
              style={{
                borderRadius: "10px",
                border: "1px solid #111827",
                padding: "12px 14px",
                marginBottom: "10px",
                backgroundColor: "#020617",
              }}
            >
              <summary
                style={{
                  cursor: "pointer",
                  fontSize: "0.96rem",
                  fontWeight: 600,
                  outline: "none",
                }}
              >
                Will this AI actually make me profitable?
              </summary>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#9CA3AF",
                  marginTop: "8px",
                }}
              >
                CryptoSignal AI is built to remove the three hours of hesitation
                before each session, not to guarantee profits. Most test users
                report less decision paralysis, cleaner entries and fewer forced
                trades; your results will still depend on how you size risk and
                manage exits.
              </p>
            </details>

            <details
              style={{
                borderRadius: "10px",
                border: "1px solid #111827",
                padding: "12px 14px",
                marginBottom: "10px",
                backgroundColor: "#020617",
              }}
            >
              <summary
                style={{
                  cursor: "pointer",
                  fontSize: "0.96rem",
                  fontWeight: 600,
                  outline: "none",
                }}
              >
                Is this a fully automated trading bot?
              </summary>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#9CA3AF",
                  marginTop: "8px",
                }}
              >
                No. CryptoSignal AI does not execute trades for you. It sends
                one clear bias and a suggested plan; you remain in full control
                of entries, size and exits, so you keep your edge while
                off-loading the heavy data processing.
              </p>
            </details>

            <details
              style={{
                borderRadius: "10px",
                border: "1px solid #111827",
                padding: "12px 14px",
                marginBottom: "10px",
                backgroundColor: "#020617",
              }}
            >
              <summary
                style={{
                  cursor: "pointer",
                  fontSize: "0.96rem",
                  fontWeight: 600,
                  outline: "none",
                }}
              >
                How is this different from other signal groups or AI tools?
              </summary>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#9CA3AF",
                  marginTop: "8px",
                }}
              >
                Most tools add more indicators and more opinions on top of what
                you already watch, which increases noise. CryptoSignal AI
                aggregates on-chain flows, sentiment and news into a single
                consensus and only speaks when there is a strong, aligned bias –
                everything else becomes a stand-aside day.
              </p>
            </details>

            <details
              style={{
                borderRadius: "10px",
                border: "1px solid #111827",
                padding: "12px 14px",
                marginBottom: "10px",
                backgroundColor: "#020617",
              }}
            >
              <summary
                style={{
                  cursor: "pointer",
                  fontSize: "0.96rem",
                  fontWeight: 600,
                  outline: "none",
                }}
              >
                What if I realise this is not for me?
              </summary>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#9CA3AF",
                  marginTop: "8px",
                }}
              >
                If, after your first full $99 month, you do not feel a clear
                improvement in pre-session clarity and decision quality, you can
                request a full refund for that month within 30 days. You keep
                any experience and notes you gained from the signals.
              </p>
            </details>

            <details
              style={{
                borderRadius: "10px",
                border: "1px solid #111827",
                padding: "12px 14px",
                marginBottom: "10px",
                backgroundColor: "#020617",
              }}
            >
              <summary
                style={{
                  cursor: "pointer",
                  fontSize: "0.96rem",
                  fontWeight: 600,
                  outline: "none",
                }}
              >
                Do I need advanced technical skills to use this?
              </summary>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#9CA3AF",
                  marginTop: "8px",
                }}
              >
                No. If you can open Telegram and place a BTC trade on your
                existing exchange, you can use CryptoSignal AI. The system
                handles the complex part – collecting and filtering data – and
                you focus on executing a simple, high-confidence plan.
              </p>
            </details>
          </div>
        </section>

        <footer
          style={{
            borderTop: "1px solid #111827",
            padding: "16px 24px",
            textAlign: "center",
            fontSize: "0.76rem",
            color: "#6B7280",
          }}
        >
          <p style={{ marginBottom: "4px" }}>
            © {new Date().getFullYear()} CryptoSignal AI. All rights reserved.
          </p>
          <p style={{ marginBottom: "4px" }}>
            Crypto trading involves substantial risk of loss. Never invest more
            than you can afford to lose, and always consider your own financial
            situation and risk tolerance.
          </p>
          <p>
            CryptoSignal AI provides educational opinions only and does not
            constitute investment, tax or legal advice.
          </p>
        </footer>
      </main>
    </>
  );
}
