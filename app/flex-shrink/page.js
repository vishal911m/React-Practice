// flex-shrink-visual-demo.js
// Next.js Client Component demonstrating default min-width:auto causing overflow
// and fixed min-width:0 allowing shrink.

"use client";

import { useState } from "react";

export default function FlexShrinkDemo() {
  const [useMinWidthZero, setUseMinWidthZero] = useState(false);

  const longText = "This is a very long piece of text that normally causes overflow inside a flex container unless min-width is set to 0.";

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Flex Shrink / min-width Demo</h2>
      <button
        onClick={() => setUseMinWidthZero(!useMinWidthZero)}
        style={{ padding: "8px 12px", marginBottom: "20px", cursor: "pointer" }}
      >
        Toggle min-width: {useMinWidthZero ? "auto (default)" : "0 (shrink allowed)"}
      </button>

      <div
        style={{
          display: "flex",
          gap: "10px",
          border: "2px solid #000",
          padding: "10px",
          width: "350px",
        }}
      >
        <div
          style={{
            background: "#cce5ff",
            padding: "10px",
            flex: "0 0 80px",
            textAlign: "center",
          }}
        >
          BOX 1
        </div>

        <div
          style={{
            background: "#d4edda",
            padding: "10px",
            flex: 1,
            minWidth: useMinWidthZero ? 0 : "auto", // the visual magic
            whiteSpace: useMinWidthZero ? "normal" : "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {longText}
        </div>
      </div>
    </div>
  );
}

