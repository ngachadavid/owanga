import React from 'react';

export default function Hero() {
  return (
    <section className="max-w-[1286px] mx-auto flex items-center justify-between px-4 h-screen">
      {/* Left Side - Text */}
      <div className="max-w-lg">
        <h1 className="text-[100px] font-extrabold text-[#be3af2] leading-[0.85]">Creative Conscience</h1>
        <p className="text-base text-black font-bold mt-6">
          Design is more than aesthetics—it's a conversation, a statement, a movement.
          With a bold vision and an innovative approach, I craft visual experiences that
          engage, inspire, and leave a lasting impression.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="w-1/2">
        <img
          src="/homepage/hero.png"
          alt="Isaac Okoth"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
}
