"use client"
import { useState } from "react";

export default function ContainDemo() {
  const [scale, setScale] = useState(false);

  return (
    <div className="p-10">
      <h1 className="text-xl font-bold mb-4">
        CSS <code>contain: layout paint</code> Demo
      </h1>

      <p className="mb-6">
        Click the blue box to animate it. Boxes with <code>contain: layout paint</code> will not affect others.
      </p>

      <div className="grid grid-cols-3 gap-4">
        {/* Box without containment */}
        <div
          onClick={() => setScale(!scale)}
          className={`bg-blue-500 text-white flex items-center justify-center h-24 transition-transform duration-500 cursor-pointer ${
            scale ? "scale-150" : "scale-100"
          }`}
        >
          No Contain
        </div>

        {/* Boxes with containment */}
        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            className="bg-green-500 text-white flex items-center justify-center h-24 contain-box"
          >
            Box {num}
          </div>
        ))}
      </div>

      <style jsx>{`
        .contain-box {
          contain: layout paint;
        }
      `}</style>
    </div>
  );
}
