"use client";

import { useEffect, useState } from "react";

export default function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <p>Loading...</p>;
  return <div>{data.title}</div>;
}
