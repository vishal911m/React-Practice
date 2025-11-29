"use client";

import { useState } from "react";

export default function SymbolDemo() {
  const [localA, setLocalA] = useState(Symbol("demo"));
  const [localB, setLocalB] = useState(Symbol("demo"));

  const [globalA, setGlobalA] = useState(Symbol.for("demo"));
  const [globalB, setGlobalB] = useState(Symbol.for("demo"));

  return (
    <div style={{ padding: 30, fontFamily: "sans-serif" }}>
      <h1>Symbol vs Symbol.for — Demo</h1>
      <p>
        This demo shows that <strong>Symbol("x")</strong> creates UNIQUE symbols
        every time, while <strong>Symbol.for("x")</strong> retrieves the SAME
        symbol from the global registry.
      </p>

      <hr />

      {/* LOCAL SYMBOL TEST */}
      <div style={{ marginTop: 30 }}>
        <h2>Symbol("demo")</h2>
        <p>Each button click regenerates a new symbol.</p>

        <button
          onClick={() => {
            setLocalA(Symbol("demo"));
            setLocalB(Symbol("demo"));
          }}
          style={{ padding: "8px 14px", cursor: "pointer" }}
        >
          Generate New Local Symbols
        </button>

        <pre
          style={{
            background: "#f0f0f0",
            padding: 15,
            marginTop: 15,
            borderRadius: 6,
          }}
        >
{`
localA === localB ?  ${localA === localB}
localA: ${localA.toString()}
localB: ${localB.toString()}
`}
        </pre>
      </div>

      <hr />

      {/* GLOBAL SYMBOL TEST */}
      <div style={{ marginTop: 30 }}>
        <h2>Symbol.for("demo")</h2>
        <p>Global registry: both values always refer to the SAME symbol.</p>

        <button
          onClick={() => {
            setGlobalA(Symbol.for("demo"));
            setGlobalB(Symbol.for("demo"));
          }}
          style={{ padding: "8px 14px", cursor: "pointer" }}
        >
          Retrieve Symbols from Global Registry
        </button>

        <pre
          style={{
            background: "#e8f7ff",
            padding: 15,
            marginTop: 15,
            borderRadius: 6,
          }}
        >
{`
globalA === globalB ?  ${globalA === globalB}
globalA: ${globalA.toString()}
globalB: ${globalB.toString()}
`}
        </pre>
      </div>

      <hr />

      {/* SUMMARY */}
      <div style={{ marginTop: 30, background: "#fffbe8", padding: 20, borderRadius: 6 }}>
        <h3>Summary</h3>
        <ul>
          <li><strong>Symbol("key")</strong>: always unique.</li>
          <li><strong>Symbol.for("key")</strong>: reused from global registry.</li>
          <li>Registry symbols can be looked up using <code>Symbol.keyFor()</code>.</li>
        </ul>
      </div>
    </div>
  );
}
