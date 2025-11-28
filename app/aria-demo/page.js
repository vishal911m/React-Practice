"use client";

import React from "react";

export default function Page() {
  return (
    <div className="p-8 space-y-16 text-gray-900">

      {/* ================= LANDMARK ROLES ================= */}
      <section>
        <h2 className="text-2xl font-bold mb-4">1. Landmark Roles</h2>

        <header role="banner" className="p-4 bg-blue-100 rounded">
          <strong>role="banner"</strong> — Site Header
        </header>

        <nav role="navigation" className="p-4 bg-blue-200 rounded mt-4">
          <strong>role="navigation"</strong> — Navigation Menu
        </nav>

        <main role="main" className="p-4 bg-blue-300 rounded mt-4">
          <strong>role="main"</strong> — Main Content
        </main>

        <aside role="complementary" className="p-4 bg-blue-400 rounded mt-4">
          <strong>role="complementary"</strong> — Sidebar
        </aside>

        <section role="region" aria-label="Custom Region" className="p-4 bg-blue-500 rounded mt-4">
          <strong>role="region"</strong> — Labeled Region
        </section>

        <footer role="contentinfo" className="p-4 bg-blue-600 text-white rounded mt-4">
          <strong>role="contentinfo"</strong> — Footer
        </footer>
      </section>


      {/* ================= DOCUMENT STRUCTURE ROLES ================= */}
      <section>
        <h2 className="text-2xl font-bold mb-4">2. Document Structure Roles</h2>

        <article role="article" className="p-4 bg-green-100 rounded">
          <strong>role="article"</strong>
          <p>This is an article.</p>
        </article>

        <div role="note" className="p-4 bg-green-200 rounded mt-4">
          <strong>role="note"</strong> — Informational Note
        </div>

        <h3 role="heading" aria-level="3" className="p-4 bg-green-300 rounded mt-4">
          <strong>role="heading" aria-level="3"</strong>
        </h3>

        <ul role="list" className="p-4 bg-green-400 rounded mt-4">
          <li role="listitem">role="listitem" item 1</li>
          <li role="listitem">role="listitem" item 2</li>
        </ul>

        <div role="img" aria-label="decorative-image-demo" className="p-4 bg-green-500 rounded mt-4">
          <strong>role="img"</strong> — Represents an image
        </div>

        <div role="tooltip" className="p-4 bg-green-600 text-white rounded mt-4">
          <strong>role="tooltip"</strong> — Tooltip Example
        </div>
      </section>


      {/* ================= WIDGET ROLES ================= */}
      <section>
        <h2 className="text-2xl font-bold mb-4">3. Widget Roles (Interactive)</h2>

        <button role="button" className="p-3 bg-yellow-100 rounded">
          role="button"
        </button>

        <input role="textbox" className="p-3 bg-yellow-200 rounded block mt-4" placeholder='role="textbox"' />

        <div role="checkbox" aria-checked="false" className="p-3 bg-yellow-300 rounded mt-4">
          role="checkbox" (static example)
        </div>

        <div role="switch" aria-checked="true" className="p-3 bg-yellow-400 rounded mt-4">
          role="switch"
        </div>

        <div role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" className="p-3 bg-yellow-500 rounded mt-4">
          role="progressbar" — 50%
        </div>

        <ul role="listbox" className="p-3 bg-yellow-600 rounded mt-4 text-white">
          <li role="option">role="option"</li>
          <li role="option">role="option"</li>
        </ul>

        <div role="tablist" className="p-3 bg-yellow-700 rounded mt-4 text-white">
          <div role="tab">role="tab" 1</div>
          <div role="tab">role="tab" 2</div>
        </div>
      </section>


      {/* ================= LIVE REGION ROLES ================= */}
      <section>
        <h2 className="text-2xl font-bold mb-4">4. Live Region Roles</h2>

        <div role="alert" className="p-4 bg-red-200 rounded">
          <strong>role="alert"</strong> — Immediate announcement
        </div>

        <div role="status" className="p-4 bg-red-300 rounded mt-4">
          <strong>role="status"</strong> — Polite updates
        </div>

        <div role="log" className="p-4 bg-red-400 rounded mt-4">
          <strong>role="log"</strong> — Logs latest changes
        </div>

        <div role="marquee" className="p-4 bg-red-500 rounded mt-4">
          <strong>role="marquee"</strong> — Deprecated scrolling content
        </div>
      </section>


      {/* ================= WINDOW ROLES ================= */}
      <section>
        <h2 className="text-2xl font-bold mb-4">5. Window Roles</h2>

        <div role="dialog" className="p-4 bg-purple-200 rounded">
          <strong>role="dialog"</strong> — Dialog Window
        </div>

        <div role="alertdialog" className="p-4 bg-purple-400 rounded mt-4">
          <strong>role="alertdialog"</strong> — Alert Dialog
        </div>
      </section>

    </div>
  );
}
