export const useLayoutEffectBreakdown = {
  question: "What does useLayoutEffect guarantee that useEffect does not?",
  answer: "Runs after DOM mutation but BEFORE the browser paints.",
  explanation: {
    a: "server-side rendering — Incorrect, neither hook runs on the server.",
    b: "Correct — useLayoutEffect runs synchronously after DOM updates but before paint.",
    c: "Runs before DOM mutations — Incorrect.",
    d: "Runs only on mount — Incorrect.",
  },
  visualDifference: {
    useEffect:
      "Runs AFTER paint. Any DOM measurement or style change may cause visible flicker.",
    useLayoutEffect:
      "Runs BEFORE paint. Style changes happen before screen update → no visual flicker.",
  },
  summary:
    "useLayoutEffect is ideal for DOM measurements, preventing layout jank, and synchronizing visual changes before the browser paints.",
};
