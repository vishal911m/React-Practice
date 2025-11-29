"use client";

import { useRef } from "react";

export default function FullscreenDemo() {
  const boxRef = useRef(null);

  const enterFullscreen = async () => {
    if (boxRef.current.requestFullscreen) {
      await boxRef.current.requestFullscreen();
    }
  };

  const exitFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    }
  };

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
      }}
    >
      <h1>🖥️ Fullscreen API Demo</h1>
      <p>
        Click the button below to toggle fullscreen on the blue box.  
        The box will change styles when it is in fullscreen because of the
        <code> :fullscreen </code> CSS pseudo-class.
      </p>

      <div
        ref={boxRef}
        style={{
          width: "300px",
          height: "200px",
          background: "#007bff",
          marginTop: "30px",
          borderRadius: "10px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      >
        <span>Click buttons below</span>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={enterFullscreen}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Enter Fullscreen
        </button>

        <button
          onClick={exitFullscreen}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Exit Fullscreen
        </button>
      </div>

      <style jsx>{`
        div:fullscreen {
          background: #28a745 !important; /* green when fullscreen */
          border-radius: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
        }
      `}</style>
    </div>
  );
}
