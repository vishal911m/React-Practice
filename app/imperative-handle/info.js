// q39-useImperativeHandle-breakdown.js

const q39Breakdown = {
  question: "Which of these is not a valid reason to use useImperativeHandle?",
  correctAnswer: "c) Replace context API",

  options: {
    a: "Expose imperative methods to parent",
    b: "Modify DOM layout directly",
    c: "Replace context API",
    d: "Forward refs with custom API",
  },

  explanation: `
useImperativeHandle is a React hook used with forwardRef to expose custom imperative methods 
from a child component to its parent. It allows controlled access to the child instance. 
It is NOT meant for replacing state management or the Context API.
  `,

  optionAnalysis: {
    a: "✅ Correct use case: Exposes methods to parent via ref.",
    b: "⚠ Acceptable: Can modify DOM imperatively (e.g., focus).",
    c: "❌ Incorrect: Cannot replace Context API; context is for state/data sharing.",
    d: "✅ Correct: Always used with forwardRef to customize ref API.",
  },

  codeExample: `
import { forwardRef, useImperativeHandle, useRef } from "react";

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
  }));

  return <input ref={inputRef} />;
});

export default function App() {
  const ref = useRef();

  return (
    <div>
      <FancyInput ref={ref} />
      <button onClick={() => ref.current.focus()}>Focus Input</button>
    </div>
  );
}
  `,

  interviewSummary:
    "useImperativeHandle exposes imperative methods to parent components. It should NOT be used to replace the Context API or for state management."
};

export default q39Breakdown;
