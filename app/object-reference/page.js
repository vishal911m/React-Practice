"use client";

import { useState } from "react";

export default function ObjectReferenceDemo() {
  const [log, setLog] = useState([]);

  const addLog = (message) => {
    setLog((prev) => [...prev, message]);
  };

  const runExample1 = () => {
    let a = { x: 1 };
    let b = a;
    a = { x: 2 }; // reassign a to a new object
    addLog(`Example 1: a = {x:2}; console.log(b.x) → ${b.x}`);
  };

  const runExample2 = () => {
    let a = { x: 1 };
    let b = a;
    a.x = 2; // modify the original object
    addLog(`Example 2: a.x = 2; console.log(b.x) → ${b.x}`);
  };

  const runExample3 = () => {
    let obj1 = { name: "Alice" };
    let obj2 = obj1;
    obj2.name = "Bob";
    addLog(`Example 3: obj2.name = "Bob"; console.log(obj1.name) → ${obj1.name}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Object References Demo</h1>

      <div className="flex gap-2 mb-4 flex-wrap">
        <button
          onClick={runExample1}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Run Example 1 (Reassign)
        </button>
        <button
          onClick={runExample2}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Run Example 2 (Modify)
        </button>
        <button
          onClick={runExample3}
          className="px-4 py-2 bg-purple-500 text-white rounded"
        >
          Run Example 3 (Shared reference)
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
