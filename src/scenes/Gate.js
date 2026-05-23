"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect, useState, Suspense } from "react";
import { useGLTF, Center } from "@react-three/drei";
import { useRouter } from "next/navigation";
import Hall from "@/scenes/Hall.js";
import Intro from "@/scenes/Intro.js";

/* -----------------------------
   GATE MODEL
------------------------------*/
function GateModel() {
  const { scene } = useGLTF("/models/mansion-gate.glb");

  const [scale, setScale] = useState(1);

  /* responsive scale */
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 600) setScale(0.6);
      else setScale(0.85);
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <Center>
      <primitive object={scene} scale={scale} />
    </Center>
  );
}

/* -----------------------------
   MAIN COMPONENT
------------------------------*/
export default function Gate() {
  const router = useRouter();

  const [playTeleport, setPlayTeleport] = useState(false);
  const [enterMansion, setEnterMansion] = useState(false);

  const handleBellClick = () => {
    const bellsound = new Audio("/sounds/bell.mp3");
    bellsound.volume = 0.8;
    bellsound.play();
    setTimeout(()=>{
      setPlayTeleport(true);
    }, 3000)
     
  };

  if (enterMansion) {
  return <Hall />;
}


  return (
    <div className="gateScene">

      <div className="mansionBg" />
      <div className="darkOverlay" />
      <div className="bottomWall" />

      <div className="threeLayer">
        <Suspense fallback={<Intro/>}></Suspense>
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1} />

          <GateModel />
        </Canvas>
      </div>

      <img
        src="/images/signboard.png"
        alt="signboard"
        className="signBoard"
      />

      
         {/* 🔔 Bell */}
          <div className="bellContainer">
            <img
              src="/images/bell.png"
              alt="bell"
              className="bellImage"
              onClick={handleBellClick}
            />

            <p className="bellText">Ring Bell</p>
          </div>

          {/* 🚀 TELEPORT VIDEO */}
          {playTeleport && (
            <div className="teleportOverlay">
              <video
                autoPlay
                playsInline
                className="teleportVideo"
                onEnded={() => setEnterMansion(true)}
              >
                <source src="/videos/teleport.mp4" type="video/mp4" />
              </video>
            </div>
          )}

    
    </div>
  );
}