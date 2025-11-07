"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-6">
      <h2 className="text-3xl font-bold text-gray-800">Count: {count}</h2>

      <div className="flex gap-6">
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-600 text-white text-2xl font-bold w-14 h-14 rounded-full shadow-md hover:shadow-lg transition-transform active:scale-90"
        >
          –
        </button>

        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 hover:bg-green-600 text-white text-2xl font-bold w-14 h-14 rounded-full shadow-md hover:shadow-lg transition-transform active:scale-90"
        >
          +
        </button>
      </div>

      <button
        onClick={() => setCount(0)}
        className="mt-6 px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg shadow-md hover:shadow-lg transition-transform active:scale-95"
      >
        Reset
      </button>
    </div>
  );
}
