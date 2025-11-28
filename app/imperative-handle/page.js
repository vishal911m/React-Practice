"use client"
import { forwardRef, useImperativeHandle, useRef } from "react";

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  // Expose imperative method to parent
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
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
