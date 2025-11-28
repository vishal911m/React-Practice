// =============================
// Breakdown as .js Object
// =============================
export const tearingBreakdown = {
  question: "In concurrent mode, what is 'tearing'?",
  answer: "Reading inconsistent state between renders.",
  optionsExplained: {
    a: "Multiple root renders — not tearing.",
    b: "Correct. Happens when UI sees mixed state versions during concurrent rendering.",
    c: "Race conditions in Suspense — unrelated to tearing.",
    d: "Aborted hydration — SSR mismatch, not tearing.",
  },
  whatIsTearing:
    "Tearing occurs when a component reads stale state for part of a render and updated state for another part, causing an inconsistent UI snapshot.",
  whyItHappens:
    "Concurrent rendering allows pausing, resuming, and restarting work. State updates during this can cause inconsistent reads.",
  reactFixes:
    ["Snapshotting state", "Transitions", "Automatic batching in React 18"],
  summary:
    "Tearing = inconsistent UI reads when concurrent rendering mixes old and new state versions.",
};


// =============================
// Next.js Client Component Demo
// Simulating Tearing-like Behavior
// =============================
"use client";
import { useState, useTransition } from "react";

export default function TearingDemo() {
  const [count, setCount] = useState(0);
  const [isPending, startTransition] = useTransition();

  function handleSlowUpdate() {
    startTransition(() => {
      // Simulate slow render
      const start = performance.now();
      while (performance.now() - start < 1000) {}
      setCount((c) => c + 1);
    });
  }

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h2>🚧 Tearing Demo (Simulated)</h2>

      <p>
        <strong>Snapshot A (fast state):</strong> {count}
      </p>

      <p>
        <strong>Snapshot B (may show old value during transition):</strong> {count}
      </p>

      {isPending && <p style={{ color: "orange" }}>Rendering… (Possible tearing)</p>}

      <button
        onClick={handleSlowUpdate}
        style={{ padding: "10px 20px", marginTop: 10 }}
      >
        Trigger Slow Render
      </button>
    </div>
  );
}


