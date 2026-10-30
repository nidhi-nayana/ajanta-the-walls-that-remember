"use client";

import React, { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Cave3DScene } from "./Cave3DScene";

// Check if WebGL is supported
function isWebGLAvailable() {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
}

// Dynamically import Canvas from @react-three/fiber with ssr: false
const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
);

interface Cave3DCanvasProps {
  activeChapter: number;
  isIntroDolly: boolean;
  mousePos: { x: number; y: number };
  readingMode?: boolean;
}

export function Cave3DCanvas({
  activeChapter,
  isIntroDolly,
  mousePos,
  readingMode = false,
}: Cave3DCanvasProps) {
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setMounted(true);
    setHasWebGL(isWebGLAvailable());
  }, []);

  if (!mounted || readingMode) {
    return null;
  }

  // Graceful WebGL Fallback (Stylized atmospheric gradient + silhouette)
  if (!hasWebGL) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-obsidian">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3A2C21]/20 via-[#191410] to-[#100D0B]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C5A15A_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-opacity duration-1000"
      aria-hidden="true"
    >
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 1.2, 5.5], fov: 48, near: 0.1, far: 50 }}
          dpr={[1, 1.5]} // Performance optimized for high-DPI screens
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
        >
          <Cave3DScene
            activeChapter={activeChapter}
            isIntroDolly={isIntroDolly}
            mousePos={mousePos}
          />
        </Canvas>
      </Suspense>

      {/* Atmospheric vignette & color wash overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,transparent_35%,rgba(16,13,11,0.85)_85%)]" />
    </div>
  );
}

