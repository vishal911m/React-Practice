"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 gap-4">
      <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
      <p className="text-gray-600 max-w-md text-center">
        This is the About page. Our mission is to build efficient, scalable, and
        user-friendly web applications using modern technologies like React and
        Next.js.
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
