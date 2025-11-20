import Head from "next/head";

export default function TestPage() {
  return (
    <>
      <Head>
        <title>Test Page</title>
      </Head>
      <main style={{ minHeight: "100vh", padding: "40px", backgroundColor: "#020617", color: "#F9FAFB" }}>
        <h1>Test Page</h1>
        <p>If you can see this page without errors, Next.js is compiling correctly.</p>
      </main>
    </>
  );
}
