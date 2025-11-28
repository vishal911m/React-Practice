"use client";

import { useState, useTransition } from "react";

// ❗ Slow component that simulates heavy concurrent work
function SlowViewer({ value }) {
  // Block JS thread for 1200ms
  const start = performance.now();
  while (performance.now() - start < 1200) {}

  return (
    <div
      style={{
        padding: 10,
        marginTop: 10,
        background: "#ffe3e3",
        border: "1px solid red",
      }}
    >
      <h3>🐌 Slow Viewer</h3>
      <p>Reads value: <strong>{value}</strong></p>
    </div>
  );
}

// ⚡ Fast component that immediately reads the newest state
function FastViewer({ value }) {
  return (
    <div
      style={{
        padding: 10,
        marginTop: 10,
        background: "#e3ffe3",
        border: "1px solid green",
      }}
    >
      <h3>⚡ Fast Viewer</h3>
      <p>Reads value: <strong>{value}</strong></p>
    </div>
  );
}

export default function StrongTearingDemo() {
  const [count, setCount] = useState(0);
  const [isPending, startTransition] = useTransition();

  function triggerSlow() {
    startTransition(() => {
      setCount((c) => c + 1);
    });
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>💥 Strong Tearing Demo (Visually Obvious)</h2>

      <p>
        Global state value:{" "}
        <strong style={{ color: "blue" }}>{count}</strong>
      </p>

      {isPending && (
        <p style={{ color: "orange" }}>
          ⏳ Concurrent update in progress… (Possible tearing)
        </p>
      )}

      {/* Fast snapshot (immediate UI) */}
      <FastViewer value={count} />

      {/* Slow snapshot (delayed UI) */}
      <SlowViewer value={count} />

      <button
        onClick={triggerSlow}
        style={{
          marginTop: 20,
          padding: "10px 20px",
          background: "black",
          color: "white",
          borderRadius: 6,
        }}
      >
        Trigger Slow Render
      </button>
    </div>
  );
}
