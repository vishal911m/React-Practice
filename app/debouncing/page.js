"use client";
import { useState, useEffect } from "react";

export default function DebounceSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    // Set a timer that updates the debounced value after 500ms
    const timer = setTimeout(() => {
      setDebouncedValue(searchTerm);
    }, 500);

    // Cleanup runs before next effect → clears old timer
    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <div className="p-6">
      <input
        className="border p-2 w-full"
        placeholder="Search something..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <p className="mt-4">
        <strong>Typed:</strong> {searchTerm}
      </p>
      <p>
        <strong>Debounced Output (after 500ms):</strong> {debouncedValue}
      </p>
    </div>
  );
}
