"use client";
import React, { useState } from "react";

// Child with custom props comparison
const Child = React.memo(
  function Child({ count, label }) {
    console.log("🎨 Child Rendered");
    return (
      <div style={{ padding: "20px", border: "2px solid #444", marginTop: "10px" }}>
        <h2>Child Component</h2>
        <p><b>Label:</b> {label}</p>
        <p><b>Count:</b> {count}</p>
      </div>
    );
  },
  function areEqual(prev, next) {
    // Only re-render if count changes
    return prev.count === next.count;
  }
);

export default function MemoDemo() {
  const [count, setCount] = useState(0);
  const [label, setLabel] = useState("Initial Label");

  return (
    <div style={{ padding: "20px" }}>
      <h1>React.memo Custom Compare Demo</h1>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px 20px",
          background: "black",
          color: "white",
          marginRight: "10px"
        }}
      >
        Increase Count
      </button>

      <button
        onClick={() => setLabel("Label Updated " + Math.random().toFixed(2))}
        style={{ padding: "10px 20px", background: "gray", color: "white" }}
      >
        Update Label
      </button>

      <Child count={count} label={label} />
    </div>
  );
}
