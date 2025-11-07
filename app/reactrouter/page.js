// "use client";

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// function Home() { return <h2>Home Page</h2>; }
// function About() { return <h2>About Page</h2>; }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/">Home</Link> | <Link to="/about">About</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

"use client";

import Link from "next/link";

export default function ReactRouterDemo() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">Next.js Routing Example</h1>

      <nav className="flex gap-4">
        <Link href="/" className="text-blue-600 hover:underline">
          Home
        </Link>
        <Link href="/about" className="text-blue-600 hover:underline">
          About
        </Link>
        <Link href="/contact" className="text-blue-600 hover:underline">
          Contact
        </Link>
      </nav>
    </main>
  );
}

