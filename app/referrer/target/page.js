"use client";

import { useEffect, useState } from "react";

export default function Target() {
  const [referrer, setReferrer] = useState("");

  useEffect(() => {
    // Runs only in browser → safe
    setReferrer(document.referrer);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Target Page</h2>

      <p>Referrer received by this page:</p>

      <pre style={{ background: "#eee", padding: 20 }}>
{`document.referrer: "${referrer}"`}
      </pre>

      <a href="/referrer">⬅ Back</a>
    </div>
  );
}
