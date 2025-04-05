import React from 'react';

export default function Hero() {
  return (
    <section className="max-w-[1286px] mx-auto flex flex-col md:flex-row items-center justify-between py-10 md:py-0 px-4 h-auto md:h-scren">
      {/* Left Side - Text */}
      <div className="max-w-lg text-left">
        <h1 className="text-5xl md:text-[100px] font-bold md:font-extrabold text-[#be3af2] leading-[0.85]">
          Creative <span className='italic pl-8 md:pl-0'>Conscience </span>
        </h1>
        <p className="text-xs md:text-base text-black font-bold mt-4 md:mt-6 pl-20 md:pl-0">
          Design is more than aesthetics—it's a conversation, a statement, a movement.
          With a bold vision and an innovative approach, I craft visual experiences that
          engage, inspire, and leave a lasting impression.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <img
          src="/homepage/IKE.png"
          alt="Isaac Okoth"
          className="w-full h-auto md:h-[900px] rounded-lg"
        />
      </div>
    </section>
  );
}
