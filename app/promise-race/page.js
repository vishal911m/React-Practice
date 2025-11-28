"use client";

import { useState } from "react";

export default function PromiseRaceDemo() {
  const [log, setLog] = useState([]);

  const addLog = (message) => {
    setLog((prev) => [...prev, message]);
  };

  // Example 1: Resolve comes first
  const runExample1 = () => {
    Promise.race([Promise.resolve(1), Promise.reject(2)])
      .then((res) => addLog(`Example 1 - Resolved with: ${res}`))
      .catch((err) => addLog(`Example 1 - Rejected with: ${err}`));
  };

  // Example 2: Reject comes first
  const runExample2 = () => {
    Promise.race([Promise.reject("Error!"), Promise.resolve("Success")])
      .then((res) => addLog(`Example 2 - Resolved with: ${res}`))
      .catch((err) => addLog(`Example 2 - Rejected with: ${err}`));
  };

  // Example 3: Delayed resolves
  const runExample3 = () => {
    const p1 = new Promise((resolve) => setTimeout(() => resolve("First"), 100));
    const p2 = new Promise((resolve) => setTimeout(() => resolve("Second"), 50));

    Promise.race([p1, p2])
      .then((res) => addLog(`Example 3 - Resolved with: ${res}`))
      .catch((err) => addLog(`Example 3 - Rejected with: ${err}`));
  };

  // Example 4: Mixed resolve/reject with delays
  const runExample4 = () => {
    const p3 = new Promise((_, reject) => setTimeout(() => reject("Failed!"), 30));
    const p4 = new Promise((resolve) => setTimeout(() => resolve("Won!"), 50));

    Promise.race([p3, p4])
      .then((res) => addLog(`Example 4 - Resolved with: ${res}`))
      .catch((err) => addLog(`Example 4 - Rejected with: ${err}`));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Promise.race Demo</h1>

      <div className="flex gap-2 mb-4">
        <button
          onClick={runExample1}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Run Example 1
        </button>
        <button
          onClick={runExample2}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Run Example 2
        </button>
        <button
          onClick={runExample3}
          className="px-4 py-2 bg-purple-500 text-white rounded"
        >
          Run Example 3
        </button>
        <button
          onClick={runExample4}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Run Example 4
        </button>
      </div>

      <div className="bg-gray-100 p-4 rounded h-48 overflow-y-auto">
        {log.map((entry, index) => (
          <div key={index} className="text-gray-800">
            {entry}
          </div>
        ))}
      </div>
    </div>
  );
}
