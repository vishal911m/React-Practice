// flatArrayDemoNotes.js

const flatArrayDemoNotes = {
  title: "Array.prototype.flat Demo Component Notes",
  description: "Breakdown of the Next.js client component demonstrating Array.prototype.flat",
  keyPoints: [
    "The component uses 'use client' because it manages state with useState and handles events.",
    "State 'log' stores an array of log messages to display the results of flattening the nested array.",
    "The nested array used is [1, [2, [3, [4, [5]]]], 6] to demonstrate multiple levels of nesting.",
    "Three buttons demonstrate different flattening levels:",
    "  1. flat(1) → flattens 1 level of the nested array.",
    "  2. flat(2) → flattens 2 levels of nesting.",
    "  3. flat(Infinity) → flattens all levels, producing a completely flat array.",
    "addLog function appends the results of each flatten operation to the log state for display.",
    "Original array is displayed at the bottom to show that flat does not mutate the original array.",
    "Interactive display of results lets users understand how depth affects the output of flat()."
  ],
  usageTips: [
    "Array.prototype.flat(depth) returns a new array; the original array remains unchanged.",
    "Using Infinity as depth flattens arrays to any depth, which is useful for deeply nested structures.",
    "You can use JSON.stringify to display arrays with multiple levels for logging.",
    "Be careful with very deeply nested arrays; extremely large depths may affect performance.",
    "This component is a good visual tool for learning how flat works with different depth values."
  ]
};

export default flatArrayDemoNotes;
