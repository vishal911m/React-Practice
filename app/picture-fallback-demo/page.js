"use client";

import { useState } from "react";

export default function PictureFallbackDemo() {
  const [loadedSrc, setLoadedSrc] = useState("");

  return (
    <div className="p-6 border rounded-lg max-w-xl mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">
        Picture Element Fallback Demo
      </h2>

      <p className="mb-3 text-gray-700">
        Resize the browser or disable WebP in DevTools → Network → "Disable cache" → 
        "Image" → Block WebP to see fallback in action.
      </p>

      <picture>
        {/* 1️⃣ Try WebP first */}
        <source
          type="image/webp"
          srcSet="/demo/demo-large.webp"
          media="(min-width: 600px)"
        />
        <source
          type="image/webp"
          srcSet="/demo/demo-small.webp"
          media="(max-width: 599px)"
        />

        {/* 2️⃣ PNG fallback (always works) */}
        <img
          src="/demo/demo-fallback.png"
          alt="fallback demo"
          className="rounded shadow"
          onLoad={(e) => setLoadedSrc(e.target.currentSrc)}
        />
      </picture>

      <div className="mt-4 p-3 bg-gray-100 rounded border text-sm">
        <strong>Loaded Source:</strong>
        <br />
        <code>{loadedSrc}</code>

        <p className="mt-2 text-gray-600">
          If this shows the PNG file → fallback occurred.
        </p>
      </div>
    </div>
  );
}
