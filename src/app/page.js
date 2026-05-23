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

    return () => window.removeEventListener("click", playAudio);
  }, []);

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-black">

      {/* Background */}
      <img
        src="/images/scene1.jpeg"
        className="absolute inset-0 w-full h-full object-cover bg-zoom"
        alt="bg"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Fog */}
      <div className="absolute inset-0 fog-layer" />

      {/* Center Title */}
      {/* Center Title */}
<div className="relative z-10 flex items-center justify-center h-full flex-col text-center">
  <div> 
    <h1 className="text-white text-5xl md:text-7xl font-serif tracking-[10px]">
      MD. PARVEZ MANSION
    </h1>

    <h4 className="text-white text-2xl md:text-7xl font-serif tracking-[10px]">
      A personal portfolio guided by an AI Butler.
    </h4>
  </div>

</div>

    </main>
  );
}