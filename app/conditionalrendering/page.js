"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        setData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPost();
  }, []);

  if (!data) return <p>Loading...</p>;
  return <div>{data.title}</div>;
}
