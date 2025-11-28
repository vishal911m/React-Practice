// objectReferenceDemoNotes.js

const objectReferenceDemoNotes = {
  title: "Object References Demo Component Notes",
  description: "Breakdown of the Next.js client component demonstrating object references and reassignment",
  keyPoints: [
    "The component uses 'use client' because it manages state with useState and handles button events.",
    "State 'log' stores an array of log messages displaying results of object reference experiments.",
    "Example 1 (Reassign): Reassigning variable 'a' to a new object does not affect 'b', which still points to the original object.",
    "Example 2 (Modify): Modifying a property of the object via 'a' affects 'b' because both reference the same object.",
    "Example 3 (Shared reference): Changing a property via 'obj2' updates 'obj1' as well since they reference the same object.",
    "addLog function appends messages to the log for live display.",
    "Interactive buttons allow testing different behaviors of object references and assignment.",
    "Logs are displayed in a scrollable div, making it easy to see results of multiple experiments.",
    "Demonstrates key concept: objects in JavaScript are reference types, while reassigning a variable creates a new reference."
  ],
  usageTips: [
    "Use this component to visualize how object references work in JavaScript.",
    "Reassigning a variable to a new object does not change other variables pointing to the original object.",
    "Modifying the properties of an object affects all variables referencing that object.",
    "This is useful for understanding state updates in React, shallow copies, and object mutation.",
    "Can be extended to arrays and nested objects to see how references behave in more complex structures."
  ]
};

export default objectReferenceDemoNotes;
