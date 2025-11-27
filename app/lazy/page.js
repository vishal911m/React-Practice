"use client";

import styled from "styled-components";
import { useState, useEffect } from "react";
import { OptimizedImage } from "./optimizedImage";

// ⭐ Put your unsplash URLs here
const UNSPLASH_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1764232342162-17d6ec15ee76?w=500&auto=format&fit=crop&q=60",
    blurhash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj" // dummy hash
  },
  {
    url: "https://images.unsplash.com/photo-1764219313660-6adc2e6d5ae4?w=500&auto=format&fit=crop&q=60",
    blurhash: "LKO2?U%2Tw=^}pRjRjRj%Mxut7t7"
  },
  {
    url: "https://images.unsplash.com/photo-1763760523160-4b6f9375ddc5?w=500&auto=format&fit=crop&q=60",
    blurhash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj"
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1763898064342-ccb29cbccb9c?w=500&auto=format&fit=crop&q=60",
    blurhash: "LKO2?U%2Tw=^}pRjRjRj%Mxut7t7"
  },
  {
    url: "https://images.unsplash.com/photo-1763906477938-53c45b7c530b?w=500&auto=format&fit=crop&q=60",
    blurhash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj"
  },
  {
    url: "https://images.unsplash.com/photo-1764111812995-b73ff58fc7d7?w=500&auto=format&fit=crop&q=60",
    blurhash: "LKO2?U%2Tw=^}pRjRjRj%Mxut7t7"
  },
  {
    url: "https://images.unsplash.com/photo-1764111812995-b73ff58fc7d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    blurhash: "LKO2?U%2Tw=^}pRjRjRj%Mxut7t7"
  },
  {
    url: "https://images.unsplash.com/photo-1763607058547-bbb9689bbb30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    blurhash: "LKO2?U%2Tw=^}pRjRjRj%Mxut7t7"
  }
];

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1024px;
`;

function BlurHashLazyLoading() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(UNSPLASH_IMAGES);
  }, []);

  return (
    <ImagesContainer>
      {images.map((img, index) => (
        <OptimizedImage key={index} image={img} />
      ))}
    </ImagesContainer>
  );
}

// Required by Next.js
export default function Page() {
  return <BlurHashLazyLoading />;
}
