"use client";

import { useEffect, useRef, useState } from "react";
import Intro from "@/scenes/Intro.js";
import Gate from "@/scenes/Gate.js";
import Hall from "@/scenes/Hall.js"

export default function Home() {
  const audioStarted = useRef(false);
  const audioRef = useRef(null);

  const [scene, setScene] = useState("intro");

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

    // store all audio in ref so we can stop later
    audioRef.current = [wind, birds, ambience];

    const startExperience = () => {
      if (audioStarted.current) return;
      audioStarted.current = true;

      wind.play().catch(() => {});
      birds.play().catch(() => {});
      ambience.play().catch(() => {});

      // ⏳ 5 sec delay → switch to gate
      setTimeout(() => {
        setScene("gate");

        // 🔇 STOP AUDIO ON SCENE CHANGE
        audioRef.current?.forEach((audio) => {
          audio.pause();
          audio.currentTime = 0;
        });

      }, 5000);
    };

    window.addEventListener("click", startExperience);

    return () => window.removeEventListener("click", startExperience);
  }, []);

  return (
    <main className="w-screen h-screen overflow-hidden">
      {scene === "intro" && <Intro />}
      {scene === "gate" && <Gate />}
      {scene === "hall" && <Hall/>}
    </main>
  );
}
