"use client";

import { useState } from "react";

export default function LazyInitDemo() {
  const [log, setLog] = useState([]);

  // Lazy initializer function (runs ONLY on first render)
  const [value, setValue] = useState(() => {
    console.log("🔥 Lazy initializer executed!");
    return 100; // pretend this is expensive to compute
  });

  const handleUpdate = () => {
    setValue((prev) => prev + 1);
    setLog((prev) => [...prev, `Updated value → ${value + 1}`]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">useState Lazy Initialization Demo</h1>

      <p className="mb-2">
        <strong>Current Value:</strong> {value}
      </p>

      <button
        onClick={handleUpdate}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Update Value
      </button>

      <div className="mt-4 bg-gray-100 rounded p-3 h-48 overflow-y-auto">
        {log.map((entry, i) => (
          <p key={i}>{entry}</p>
        ))}
      </div>

      <div className="mt-4 text-gray-700">
        <p>
          ✔ The initializer function ran only once — check your console for:
        </p>
        <p className="font-mono bg-white p-2 mt-1 rounded">
          "🔥 Lazy initializer executed!"
        </p>
      </div>
    </div>
  );
}
