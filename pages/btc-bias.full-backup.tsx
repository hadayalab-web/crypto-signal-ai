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

      <main style={{ minHeight: "100vh", backgroundColor: "#020617", color: "#F9FAFB" }}>
        {/* HERO */}
        <section
          style={{
            maxWidth: "1040px",
            margin: "0 auto",
            padding: "80px 24px 48px",
          }}
        >
          <img
            src="/assets/brand/logo-main-dark.png"
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
            Every morning, CryptoSignal AI gives BTC traders one clear bias – BUY, SELL
            or STAND ASIDE – so you can stop drowning in charts, news and Discord takes
            and start each session with calm, confident direction.
          </p>

          <p
            style={{
              fontSize: "0.98rem",
              color: "#9CA3AF",
              maxWidth: "720px",
              marginBottom: "24px",
            }}
          >
            In less than two weeks, one ordinary trader went from panic-stricken
            analysis marathons to a confident five-minute pre-session ritual – this
            page shows how you can follow the same path.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginBottom: "8px",
            }}
          >
            <a
              href="https://your-whop-checkout-url-here"
              style={{
                padding: "12px 28px",
                borderRadius: "999px",
                backgroundColor: "#f97316",
                color: "#020617",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Start 7-Day Trial – $29
            </a>
            <a
              href="#story"
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

          <p style={{ fontSize: "0.8rem", color: "#9CA3AF" }}>
            7-day trial $29 (non-refundable). First full subscription month covered by a
            30-day satisfaction guarantee – if your pre-session clarity does not improve,
            request a full refund.
          </p>

          <div
            style={{
              marginTop: "32px",
              borderRadius: "16px",
              border: "1px solid #111827",
              background:
                "linear-gradient(135deg, rgba(15,23,42,1) 0%, rgba(30,64,175,0.45) 100%)",
              padding: "18px 20px",
              maxWidth: "720px",
            }}
          >
            <p
              style={{
                fontSize: "0.9rem",
                fontWeight: 600,
                marginBottom: "8px",
              }}
            >
              Are you in this window?
            </p>
            <p
              style={{
                fontSize: "0.88rem",
                color: "#E5E7EB",
                marginBottom: "8px",
              }}
            >
              In the last 30 days, did you:
            </p>
            <ul
              style={{
                listStyle: "disc",
                paddingLeft: "20px",
                fontSize: "0.86rem",
                color: "#D1D5DB",
                marginBottom: "8px",
              }}
            >
              <li>Miss a major BTC move because you hesitated too long.</li>
              <li>Watch indicators and opinions conflict until the session already moved.</li>
              <li>Enter late after scrolling Discord and X, then regret the entry.</li>
            </ul>
            <p style={{ fontSize: "0.86rem", color: "#E5E7EB" }}>
              If even one of these feels familiar, your current system is in debug mode –
              these 7 trial days are where you test a new one.
            </p>
          </div>
        </section>

        {/* ここから下は、まだ元のセクションを仮で残しておく */}
        {/* How it Works / Pricing / FAQ は次のターンで順番に差し替え */}
      </main>
    </>
  );
}
