import React from 'react';

export default function Skills() {
  return (
    <section className="bg-white flex flex-col md:flex-row items-center justify-between px-4 py-10 md:py-20 max-w-[1286px] mx-auto gap-6 md:gap-16">
      {/* Left - Image - 60% width on mobile, full width on desktop */}
      <div className="w-[60%] md:w-full order-2 md:order-1 mx-auto md:mx-0">
        <img 
          src="/homepage/skills.png" 
          alt="Skills section image" 
          className="w-full h-auto"
        />
      </div>

      {/* Right - Skills Content - Full width on mobile, half on desktop */}
      <div className="w-full md:w-1/2 flex flex-col gap-2 md:gap-4 text-black text-3xl sm:text-4xl md:text-6xl font-[1000] order-1 md:order-2">
        <p>BRANDING</p>
        <p>GRAPHIC DESIGN</p>
        <p>UI/UX</p>
        <p>VIDEO EDITING</p>
        <p>MOTION GRAPHICS</p>
        <p>3D DESIGN</p>
        <p>SMM</p>
      </div>
    </section>
  );
}