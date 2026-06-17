//code is from citiustech interview - additional questions: understanding closures 

"use client";

import { useState, useEffect, useRef } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  countRef.current = count; // Always updates

  useEffect(() => {
    setTimeout(() => {
      console.log(`Count is: ${countRef.current}`);
    }, 3000);
  }, [count]); // Runs only once when component mounts

  return (
    <div>
      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

/* 
What happens when you run this:
Initial render (count = 0)

React creates a "snapshot" of render #1

count is 0 in this snapshot

useEffect runs after render and schedules a setTimeout

You click the button (count becomes 1, then 2, then 3...)

Component re-renders with new count values

But the useEffect does NOT re-run (empty dependency array)

After 3 seconds, the setTimeout callback runs

It logs "Count is: 0"

NOT the current count (3)

Because it "closed over" the count from render #1
*/


// here's what javascript is doing under the hood

/* 
// Render #1 (count = 0)
function Counter_Render1() {
  const count = 0;  // This variable exists ONLY in this render
  
  const effectFunction = () => {  // This is your useEffect callback
    setTimeout(() => {
      console.log(`Count is: ${count}`);  // This `count` refers to the variable above
    }, 3000);
  };
  
  // React stores effectFunction and runs it after render
}

// Render #2 (count = 1)
function Counter_Render2() {
  const count = 1;  // This is a DIFFERENT variable, in a different function call
  
  // The old effectFunction still exists in memory, still pointing to the old count variable
}
*/

/* 
Key insight: The count inside your useEffect callback is not a reference to the current state. It's a captured variable from 
the specific render when that effect was created.
*/

/* 
The Fix: If You Want Latest Value
Option 1: Put count in dependencies array
jsx
useEffect(() => {
  setTimeout(() => {
    console.log(`Count is: ${count}`);
  }, 3000);
}, [count]); // Re-runs every time count changes
Now each render creates a NEW effect with its own count value.

Option 2: Use useRef (if you need latest without re-running)
jsx
const countRef = useRef(count);
countRef.current = count; // Always updates

useEffect(() => {
  setTimeout(() => {
    console.log(`Count is: ${countRef.current}`); // Always current
  }, 3000);
}, []); // Still runs once, but accesses latest through ref
Option 3: Use setState functional update
jsx
setTimeout(() => {
  setCount(prevCount => prevCount + 1); // Gets latest via callback
}, 3000);
*/