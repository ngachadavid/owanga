import React from 'react';

export default function Logos() {
  return (
    <section className="bg-black text-white py-10 md:py-20 ">
      <div className="max-w-[1286px] mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-white text-4xl md:text-6xl font-bold">Logofolio</h2>

        {/* Line under the title */}
        <div className="h-[2px] bg-white/50 mx-auto mt-10 mb-10 md:mb-32"></div>

        {/* Logos Grid */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-32">
          <img src="/logos/barfy.png" alt="Logo 1" className="h-16 md:h-24 w-auto" />
          <img src="/logos/logo2.png" alt="Logo 2" className="h-16 md:h-26 w-auto" />
          <img src="/logos/logo3.png" alt="Logo 3" className="h-16 md:h-30 w-auto" />
          <img src="/logos/logo4.png" alt="Logo 4" className="h-16 md:h-16 w-auto" />
          <img src="/logos/logo5.png" alt="Logo 5" className="h-16 md:h-20 w-auto" />
          <img src="/logos/logo6.png" alt="Logo 5" className="h-16 md:h-20 w-auto" />
          <img src="/logos/logo8.png" alt="Logo 5" className="h-16 md:h-20 w-auto" />
          <img src="/logos/logo7.png" alt="Logo 5" className="h-16 md:h-20 w-auto" />
          <img src="/logos/logo9.png" alt="Logo 5" className="h-16 md:h-20 w-auto" />
          <img src="/logos/logo10.png" alt="Logo 5" className="h-16 md:h-20 w-auto" />
          <img src="/logos/logo11.png" alt="Logo 5" className="h-16 md:h-20 w-auto" />
        </div>
      </div>
    </section>
  );
}
