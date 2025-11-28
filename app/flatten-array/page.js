"use client";

import { useState } from "react";

export default function FlatArrayDemo() {
  const [log, setLog] = useState([]);

  const nestedArray = [1, [2, [3, [4, [5]]]], 6];

  const addLog = (message) => {
    setLog((prev) => [...prev, message]);
  };

  const flatten1 = () => {
    const result = nestedArray.flat(1);
    addLog(`flat(1) → ${JSON.stringify(result)}`);
  };

  const flatten2 = () => {
    const result = nestedArray.flat(2);
    addLog(`flat(2) → ${JSON.stringify(result)}`);
  };

  const flattenInfinity = () => {
    const result = nestedArray.flat(Infinity);
    addLog(`flat(Infinity) → ${JSON.stringify(result)}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Array.prototype.flat Demo</h1>

      <div className="flex gap-2 mb-4">
        <button
          onClick={flatten1}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Flatten 1 level
        </button>
        <button
          onClick={flatten2}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Flatten 2 levels
        </button>
        <button
          onClick={flattenInfinity}
          className="px-4 py-2 bg-purple-500 text-white rounded"
        >
          Flatten Infinity
        </button>
      </div>

      <div className="bg-gray-100 p-4 rounded h-48 overflow-y-auto">
        {log.map((entry, index) => (
          <div key={index} className="text-gray-800">
            {entry}
          </div>
        ))}
      </div>

      <div className="mt-4">
        <strong>Original nested array:</strong> {JSON.stringify(nestedArray)}
      </div>
    </div>
  );
}
