import React from 'react';

export default function Skills() {
  return (
    <section className="bg-white flex items-center justify-between px-4 py-20 max-w-[1286px] mx-auto gap-6 space-x-16">
      {/* Left - Image */}
      <div className="w-1/2">
        <img 
          src="/homepage/skills.png" 
          alt="Skills section image" 
          className="w-full h-auto"
        />
      </div>

      {/* Right - Skills Content */}
      <div className="w-1/2 flex flex-col gap-2 text-black text-6xl font-[1000]">
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
