"use client";

import { useEffect, useState } from "react";

export default function HydrationSim() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [count, setCount] = useState(0);

  // Simulate hydration delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHydrated(true);
    }, 1500); // 1.5 seconds to mimic hydration phase

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>🧪 Client-Side Hydration Simulation Demo</h2>

      {!isHydrated && (
        <div
          style={{
            padding: 20,
            border: "2px dashed gray",
            background: "#f9f9f9",
          }}
        >
          <h3>⛔ Not Hydrated Yet (Simulated SSR Output)</h3>
          <p>Count: <strong>0</strong></p>
          <p style={{ color: "gray" }}>Button disabled until hydration…</p>

          <button disabled style={{ padding: 10 }}>
            Increase
          </button>
        </div>
      )}

      {isHydrated && (
        <div
          style={{
            padding: 20,
            border: "2px solid green",
            background: "#e8ffe8",
            transition: "0.3s",
          }}
        >
          <h3>✅ Hydrated (React is now controlling the UI)</h3>
          <p>Count: <strong>{count}</strong></p>

          <button
            onClick={() => setCount(count + 1)}
            style={{
              padding: 10,
              background: "black",
              color: "white",
              borderRadius: 5,
            }}
          >
            Increase
          </button>
        </div>
      )}
    </div>
  );
}
