"use client"
import { useState, useEffect } from "react";

export default function CLSImageDemo() {
  const [showImages, setShowImages] = useState(false);

  // Simulate image loading delay
  useEffect(() => {
    const timer = setTimeout(() => setShowImages(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-2xl font-bold">CLS Demo: aspect-ratio vs no aspect-ratio</h1>

      {/* Without aspect-ratio */}
      <div className="border p-4 rounded bg-white shadow">
        <h2 className="font-semibold mb-2">❌ Without aspect-ratio (Causes CLS)</h2>
        <p className="text-sm text-gray-600 mb-4">
          Notice the text jumps down when the image loads.
        </p>

        <div className="mb-4">
          {!showImages ? (
            <div className="w-full bg-gray-200 h-4 animate-pulse rounded"></div>
          ) : (
            <img
              src="https://picsum.photos/600/400"
              alt="random"
              className="w-full"
            />
          )}
        </div>

        <p className="text-gray-600">
          This text will shift when the image above loads, creating CLS.
        </p>
      </div>

      {/* With aspect-ratio */}
      <div className="border p-4 rounded bg-white shadow">
        <h2 className="font-semibold mb-2">✅ With aspect-ratio (Prevents CLS)</h2>
        <p className="text-sm text-gray-600 mb-4">
          Space is reserved before the image loads—no layout shift.
        </p>

        <div
          className="mb-4 bg-gray-200 rounded overflow-hidden aspect-[3/2]"
        >
          {showImages ? (
            <img
              src="https://picsum.photos/600/400"
              alt="random"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full animate-pulse bg-gray-300" />
          )}
        </div>

        <p className="text-gray-600">
          Layout remains stable because aspect-ratio reserves space.
        </p>
      </div>
    </div>
  );
}
