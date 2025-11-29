"use client";

import { useState } from "react";

export default function BrowserEventLoopDemo() {
  const [logs, setLogs] = useState([]);

  function fakeNextTick(cb) {
    // Runs earlier than Promise but still in microtask queue
    queueMicrotask(cb);
  }

  function runDemo() {
    const output = [];
    output.push("A: Start");

    fakeNextTick(() => {
      output.push("B: fakeNextTick() (queueMicrotask)");
    });

    Promise.resolve().then(() => {
      output.push("C: Promise microtask");
    });

    setTimeout(() => {
      output.push("D: setTimeout macrotask");
      setLogs([...output]);
    }, 0);

    output.push("E: End");

    // show state before macrotasks execute
    setLogs([...output]);
  }

  return (
    <div style={{ padding: 30, fontFamily: "monospace" }}>
      <h2>Browser Event Loop Demo (No Node.js)</h2>
      <p>
        Simulates event-loop behaviour <strong>without process.nextTick()</strong>.
      </p>

      <button
        onClick={runDemo}
        style={{
          padding: "10px 20px",
          background: "black",
          color: "white",
          borderRadius: 6,
        }}
      >
        Run Demo
      </button>

      <pre
        style={{
          marginTop: 20,
          background: "#f5f5f5",
          padding: 20,
          borderRadius: 6,
          minHeight: 150,
        }}
      >
{logs.join("\n")}
      </pre>
    </div>
  );
}
