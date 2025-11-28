// hydration-vs-csr-breakdown.js

const hydrationVsCSR = {
  title: "Hydration vs CSR (Client-Side Rendering)",

  csr: {
    definition:
      "CSR means the browser downloads an empty HTML shell + JavaScript bundle. React then generates the entire UI on the client.",
    processSteps: [
      "1. Browser receives blank HTML shell",
      "2. JS loads React bundle",
      "3. React builds the DOM on the client",
      "4. UI appears only after JS execution",
    ],
    pros: [
      "Full control on client",
      "Good for dashboards",
      "Great when SSR is not needed",
    ],
    cons: [
      "Slower first paint",
      "Blank screen until JS loads",
      "SEO is worse (unless prerendered)",
    ],
    visualExampleExplanation:
      "The HTML initially contains no real UI, only a root <div>. React creates everything after JS loads.",
  },

  hydration: {
    definition:
      "Hydration starts with the server sending fully rendered HTML. React attaches event listeners and makes UI interactive on the client.",
    processSteps: [
      "1. Server renders HTML",
      "2. Browser shows UI immediately",
      "3. React hydrates the static HTML",
      "4. UI becomes interactive",
    ],
    pros: [
      "Instant content (fast FCP)",
      "SEO-friendly",
      "Great for blogs, ecommerce, landing pages",
    ],
    cons: [
      "Hydration cost is high on large pages",
      "HTML + JS duplication",
      "Potential hydration mismatch errors",
    ],
    visualExampleExplanation:
      "The user sees a fully rendered UI immediately, but React has not yet attached event handlers.",
  },

  comparison: {
    csrVsHydration: [
      {
        topic: "Content availability",
        csr: "Blank until JS loads",
        hydration: "Visible immediately (SSR)",
      },
      {
        topic: "SEO",
        csr: "Weak",
        hydration: "Strong",
      },
      {
        topic: "Interactivity start",
        csr: "After full JS execution",
        hydration: "HTML first, then interactivity",
      },
      {
        topic: "Performance",
        csr: "Slower initial load",
        hydration: "Faster FCP but hydration cost",
      },
    ],
  },

  interviewSummary: `
Hydration = SSR HTML + React attaching events on client.
CSR = Browser renders nothing until JS builds the UI.

Hydration improves SEO and first paint, CSR is fully client-driven.
Both still require JavaScript, but hydration has content ready immediately.
`,

  oneLineAnswer:
    "Hydration attaches React to already-rendered HTML, while CSR builds everything on the client.",
};

export default hydrationVsCSR;
