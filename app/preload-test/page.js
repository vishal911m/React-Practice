// app/preload-test/page.js
// "use client"; 
export const metadata = {
  title: "Preload Demo",
};

// ⛔ Next.js removes custom <head> inside `page.js`,
// so we use a Client Component with <head> via <Head>

import Head from "next/head";

export default function PreloadTestPage() {
  return (
    <>
      <Head>
        {/* Duplicate preload entries for the same file */}
        <link rel="preload" href="/demo-large.js" as="script" />
        <link rel="preload" href="/demo-large.js" as="script" />
      </Head>

      <div style={{ padding: 40, fontFamily: "Arial" }}>
        <h1>🔍 Preload Behavior Demo</h1>
        <p>
          Open <strong>Chrome DevTools → Network</strong>.  
          Reload this page and watch:
        </p>

        <ul>
          <li>Two <code>&lt;link rel="preload"&gt;</code> entries exist</li>
          <li>But only <b>ONE</b> network request is made</li>
        </ul>

        <p style={{ marginTop: 30 }}>
          This demonstrates that <b>browsers coalesce duplicate preload requests</b>.
        </p>
      </div>

      {/* Load the JS file so it appears in Network */}
      <script src="/demo-large.js"></script>
    </>
  );
}
