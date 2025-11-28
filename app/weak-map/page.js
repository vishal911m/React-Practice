"use client";

import { useState } from "react";

export default function WeakMapDemo() {
  // WeakMap to store metadata for objects
  const weakMap = new WeakMap();

  // State to track objects created
  const [objects, setObjects] = useState([]);
  const [log, setLog] = useState([]);

  // Add a new object and store metadata in WeakMap
  const addObject = () => {
    const obj = { id: objects.length + 1 };
    weakMap.set(obj, `Metadata for object ${obj.id}`);
    setObjects([...objects, obj]);
    setLog(prev => [...prev, `Added object ${obj.id}`]);
  };

  // Show metadata stored in WeakMap
  const showMetadata = () => {
    const metadata = objects.map(obj => weakMap.get(obj) || "No metadata");
    setLog(prev => [...prev, `Metadata: ${metadata.join(", ")}`]);
  };

  // Remove last object (simulate losing reference / GC)
  const removeLast = () => {
    const newObjects = objects.slice(0, -1);
    setObjects(newObjects);
    setLog(prev => [...prev, `Removed last object (simulating GC)`]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>WeakMap Demo</h1>

      <div style={{ margin: "10px 0" }}>
        <button onClick={addObject} style={{ marginRight: "10px" }}>
          Add Object
        </button>
        <button onClick={showMetadata} style={{ marginRight: "10px" }}>
          Show Metadata
        </button>
        <button onClick={removeLast}>
          Remove Last Object
        </button>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <strong>Objects in state:</strong> {objects.length}
      </div>

      <div style={{ background: "#f0f0f0", padding: "10px", height: "150px", overflowY: "auto" }}>
        {log.map((entry, index) => (
          <div key={index}>{entry}</div>
        ))}
      </div>
    </div>
  );
}
