"use client";

import { useSearchParams } from "next/navigation";

export default function WelcomePage() {
  const params = useSearchParams();
  const name = params.get("name") || "Guest";

  return (
    <h1>Hello, {name} 👋</h1>
  );
}
