"use client";

export default function ReferrerDemo() {
  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h2>Referrer Policy Demo</h2>

      <p>
        These links go to a <strong>different origin</strong> so the referrer
        behavior will actually work.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <a 
          href="http://localhost:3000/referrer/target"
          referrerPolicy="no-referrer"
          target="_self"
        >
          🔴 no-referrer
        </a>

        <a
          href="http://localhost:3000/referrer/target"
          referrerPolicy="origin"
          target="_self"
        >
          🟡 origin
        </a>

        <a
          href="http://localhost:3000/referrer/target"
          referrerPolicy="no-referrer-when-downgrade"
          target="_self"
        >
          🟢 no-referrer-when-downgrade
        </a>

        <a
          href="http://localhost:3000/referrer/target"
          referrerPolicy="strict-origin-when-cross-origin"
          target="_self"
        >
          🔵 strict-origin-when-cross-origin
        </a>
      </div>
    </div>
  );
}
