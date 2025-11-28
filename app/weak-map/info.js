// weakmapNotes.js

const weakMapNotes = {
  title: "WeakMap Demo Notes",
  description: "Notes explaining the WeakMap Next.js component example",
  keyPoints: [
    "Fully plain JS — no TypeScript typings.",
    "WeakMap demonstrates metadata attached to objects.",
    "Removing objects from state simulates garbage collection; entries in WeakMap disappear automatically if object has no references.",
    "Works in Next.js app folder with 'use client' directive.",
    "WeakMap keys must be objects; primitive types like string or number cannot be keys.",
    "WeakMap is not iterable; you cannot loop over its keys or entries.",
    "WeakMap is memory-efficient for caching or storing metadata associated with objects.",
    "Best use cases: private data in classes, DOM element metadata, caching computations.",
    "WeakMap does not have size property and cannot be JSON.stringified."
  ],
  usageTips: [
    "Always use 'use client' if component uses useState or WeakMap in a client-side component.",
    "Store only object keys in WeakMap to avoid TypeError.",
    "Remove references to objects to let garbage collection automatically clean up WeakMap entries."
  ]
};

export default weakMapNotes;
