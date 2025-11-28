// promiseRaceDemoNotes.js

const promiseRaceDemoNotes = {
  title: "Promise.race Client Component Notes",
  description: "Breakdown of the Promise.race Next.js client component example",
  keyPoints: [
    "The component uses 'use client' directive because it manages state with useState and handles events.",
    "State 'log' stores an array of log messages to display the results of each Promise.race example.",
    "The 'addLog' function appends messages to the log array.",
    "Four examples demonstrate different behaviors of Promise.race:",
    "  Example 1: Promise.resolve(1) vs Promise.reject(2) – resolves with 1.",
    "  Example 2: Promise.reject('Error!') vs Promise.resolve('Success') – rejects immediately.",
    "  Example 3: Delayed resolve promises – resolves with the first to settle (Second).",
    "  Example 4: Mixed delayed resolve/reject – rejects or resolves depending on which settles first.",
    "Each example uses .then() to handle resolution and .catch() to handle rejection.",
    "Buttons trigger each example function to run Promise.race scenarios.",
    "Logs are displayed in a scrollable div for live feedback.",
    "Demonstrates that Promise.race settles with the first promise to resolve or reject."
  ],
  usageTips: [
    "Promise.race returns a promise that settles as soon as the first input promise settles.",
    "Order of promises in the array matters for already-resolved or already-rejected promises.",
    "Use Promise.race for timeout operations, caching, or choosing the fastest promise from multiple async operations.",
    "For delayed promises, the one that settles first (resolve or reject) determines the outcome of the race."
  ]
};

export default promiseRaceDemoNotes;
