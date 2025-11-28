"use client"
import { useEffect, useLayoutEffect, useState } from "react";

export default function LayoutVsEffectDemo() {
  const [width, setWidth] = useState(0);
  const [color, setColor] = useState("lightgray");

  // useEffect runs AFTER paint → flicker will be visible
  useEffect(() => {
    const box = document.getElementById("effect-box");
    const rect = box.getBoundingClientRect();
    setWidth(rect.width);
    setColor("lightgreen"); // visible color change after paint
  }, []);

  // useLayoutEffect runs BEFORE paint → no flicker
  useLayoutEffect(() => {
    const box = document.getElementById("layout-box");
    const rect = box.getBoundingClientRect();
    setWidth(rect.width);
    setColor("lightblue"); // applied before paint
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-bold">useEffect vs useLayoutEffect Demo</h1>

      <div>
        <p className="mb-2 font-semibold">useEffect Box (may flicker)</p>
        <div
          id="effect-box"
          className="h-16 w-full transition-colors duration-300"
          style={{ backgroundColor: color }}
        ></div>
      </div>

      <div>
        <p className="mb-2 font-semibold">useLayoutEffect Box (no flicker)</p>
        <div
          id="layout-box"
          className="h-16 w-full"
          style={{ backgroundColor: color }}
        ></div>
      </div>

      <p className="mt-4 text-sm">Measured width: {width}px</p>
    </div>
  );
}