import React from 'react'

function Intro() {
  return (
  <>

    {/* Background */}
    <div className=" absolute inset-0 z-0">
      <img
        src="/images/scene1.jpeg"
        className=" fixed w-full h-full object-cover animate-zoomSlow"
        alt="bg"
      />
    </div>

    {/* DARK LAYER */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.65)",
        zIndex: 5,
      }}
    />

    {/* Fog Layer 1 */}
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

    {/* Fog Layer 2 */}
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

    {/* TEXT */}
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

  </>
);
}

export default Intro