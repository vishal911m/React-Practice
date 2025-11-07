"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 gap-4">
      <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
      <p className="text-gray-600">
        You can reach us at:{" "}
        <a
          href="mailto:support@example.com"
          className="text-blue-600 hover:underline"
        >
          support@example.com
        </a>
      </p>
      <Link
        href="/"
        className="text-blue-600 hover:underline font-medium mt-4"
      >
        ← Back to Home
      </Link>
    </main>
  );
}
