"use client";

import React, { useState } from "react";

const Child = React.memo(({ value }) => {
  console.log("Child rendered");
  return <p>{value}</p>;
});

export default function Parent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Child value="Static content" />
      <button onClick={() => setCount(count + 1)}>Increment {count}</button>
    </div>
  );
}
