"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const audioStarted = useRef(false);

  useEffect(() => {
    const wind = new Audio("/sounds/wind.mp3");
    const birds = new Audio("/sounds/birds.mp3");
    const ambience = new Audio("/sounds/ambience.mp3");

    wind.volume = 0.4;
    birds.volume = 0.2;
    ambience.volume = 0.3;

    wind.loop = true;
    birds.loop = true;
    ambience.loop = true;

    const playAudio = () => {
      if (audioStarted.current) return;
      audioStarted.current = true;

      wind.play().catch(() => {});
      birds.play().catch(() => {});
      ambience.play().catch(() => {});
    };

    window.addEventListener("click", playAudio);

    // ✅ cleanup (important)
    return () => {
      window.removeEventListener("click", playAudio);
      wind.pause();
      birds.pause();
      ambience.pause();
    };
  }, []);

  return (
  <main className="relative w-screen h-screen overflow-hidden">

    {/* Background */}
    <div className="absolute inset-0 z-0 animate-zoomSlow">
      <img
        src="/images/scene1.jpeg"
        className="w-full h-full object-cover"
        alt="bg"
      />
    </div>

    {/* DARK LAYER (RESTORED PROPERLY) */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.65)",
        zIndex: 5,
      }}
    />

    {/* Fog Layer 1 (slow) */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 6,
        pointerEvents: "none",
        background:
          "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.10), transparent 60%)",
        filter: "blur(80px)",
        animation: "fogSlow 25s ease-in-out infinite alternate",
      }}
    />

    {/* Fog Layer 2 (faster drift) */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 7,
        pointerEvents: "none",
        background:
          "radial-gradient(circle at 70% 60%, rgba(255,255,255,0.08), transparent 65%)",
        filter: "blur(100px)",
        animation: "fogFast 15s ease-in-out infinite alternate",
      }}
    />

    {/* TEXT (TOP LAYER ALWAYS) */}
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 10,
        textAlign: "center",
        color: "white",
      }}
    >
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif tracking-[10px] animate-glow text-white">
        MD. PARVEZ MANSION
      </h1>

      <h4 className="mt-4 text-gray-300 text-sm sm:text-xl md:text-3xl font-serif tracking-[3px]">
        A personal portfolio guided by an AI Butler.
      </h4>
    </div>

  </main>
);
}