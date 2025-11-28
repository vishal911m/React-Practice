"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // --- Different function types ---
    function normalFn() {}
    async function asyncFn() {}
    function* generatorFn() {}
    async function* asyncGeneratorFn() {}
    const arrowFn = () => {};
    const asyncArrowFn = async () => {};

    // Helper to extract constructor name
    const getType = (fn) =>
      Object.getPrototypeOf(fn).constructor.name;

    const output = [
      {
        label: "Normal Function",
        code: "function normalFn() {}",
        type: getType(normalFn),
      },
      {
        label: "Async Function",
        code: "async function asyncFn() {}",
        type: getType(asyncFn),
      },
      {
        label: "Generator Function",
        code: "function* generatorFn() {}",
        type: getType(generatorFn),
      },
      {
        label: "Async Generator Function",
        code: "async function* asyncGeneratorFn() {}",
        type: getType(asyncGeneratorFn),
      },
      {
        label: "Arrow Function",
        code: "const arrowFn = () => {}",
        type: getType(arrowFn),
      },
      {
        label: "Async Arrow Function",
        code: "const asyncArrowFn = async () => {}",
        type: getType(asyncArrowFn),
      },
    ];

    setResults(output);
  }, []);

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">JavaScript Function Type Inspector</h1>
      <p className="text-gray-700">
        This page shows what constructor type each JavaScript function belongs to.
      </p>

      <div className="space-y-4">
        {results.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 bg-white shadow-md"
          >
            <div className="font-semibold text-blue-600">
              {item.label}
            </div>

            <pre className="bg-gray-100 p-2 rounded text-sm mt-2">
              {item.code}
            </pre>

            <div className="mt-2">
              <span className="font-semibold">Constructor Type:</span>{" "}
              <span className="text-green-600">{item.type}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
