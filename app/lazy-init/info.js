// lazyInitNotes.js

const lazyInitNotes = {
  title: "Lazy Initialization with useState - Breakdown Notes",
  description:
    "Explains how useState lazy initializer works in the demo component and why it runs only once.",
  keyPoints: [
    "The demo uses a function initializer inside useState: useState(() => {...}).",
    "React calls this initializer function ONLY on the initial render.",
    "Updating the state (setValue) does NOT re-run the initializer — it only updates the stored value.",
    "Lazy initialization improves performance when the initial state requires heavy computation.",
    "The console.log inside the initializer proves it executes only once.",
    "Each button click triggers setValue, which re-renders the component, but skip the initializer.",
    "The 'log' state records all updates so the user can see changes visually.",
    "This behavior is different from effects, memo, and reducer — only useState uses this technique by default."
  ],
  comparisons: {
    useEffect: "Runs after render; not related to lazy initialization.",
    useMemo:
      "Caches computed values but re-runs when its dependencies change; not guaranteed once.",
    useReducer:
      "Supports lazy initialization using the third argument (init function), but not through state initializer.",
  },
  usageTips: [
    "Use lazy initialization when the initial value is expensive to calculate.",
    "Avoid computing state directly inside render when it can be lazily initialized.",
    "Good for parsing large data, reading from localStorage, or running heavy math during initial load."
  ],
};

export default lazyInitNotes;
