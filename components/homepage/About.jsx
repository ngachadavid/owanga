import React from 'react';
import Icons from '../icons/Icons';

export default function About() {
  return (
    <section className="bg-black text-white min-h-screen pt-20 md:pt-0">
      <div className='flex flex-col md:flex-row items-center justify-between px-4 max-w-[1286px] mx-auto'>
        {/* Left Side - Geometric Design */}
        <div className="w-full md:w-1/2 relative h-[300px] md:h-auto">
          {/* "About" Text - Fixed positioning for mobile */}
          <h2 className="absolute top-0 md:top-[-260px] left-0 text-white text-3xl md:text-6xl mb-20 z-10">About</h2>

          {/* Circle on top */}
          <div className="absolute w-[60px] h-[60px] md:w-[120px] md:h-[120px] bg-gray-500 rounded-full top-[-10px] md:top-[-270px] left-[100px] md:left-[200px]"></div>

          {/* First Square (Left) */}
          <div className="absolute w-[130px] h-[150px] md:w-[300px] md:h-[350px] bg-gray-500 top-[60px] md:top-[-130px] rounded-[30px]"></div>

          {/* Second Square (Right, overlapping) */}
          <div className="absolute w-[130px] h-[150px] md:w-[300px] md:h-[350px] bg-gray-500 top-[120px] md:top-[-10px] left-[100px] md:left-[120px] rounded-[30px]"></div>

          {/* Circle on bottom */}
          <div className="absolute w-[30px] h-[30px] bg-gray-500 rounded-full bottm-10 top-[230px] md:top-[270px] left-[40px] md:left-[2px] z-10"></div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 px-4 md:px-0 mt-10 md:mt-20">
          {/* Top - Image */}
          <div>
            <img
              src="/homepage/isaac.png"
              alt="About section image"
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          <div className='text-center text-sm md:text-base'>
            Every pixel, every stroke, every detail tells a story. With a passion for
            branding, UI/UX, and digital design, I transform ideas into visual narratives
            that resonate. Whether crafting a sleek interface or building a compelling
            brand identity, my goal remains the same—creating design that speaks.
          </div>
          
          <div className='flex flex-col items-center text-center mt-10 mb-10'>
            <p className='font-extrabold text-base md:text-lg tracking-[0.5em] md:tracking-[0.8em]'>PROFICIENCY</p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-4">
              <Icons.Photoshop className="w-10 h-10 md:w-12 md:h-12" />
              <Icons.Illustrator className="w-10 h-10 md:w-12 md:h-12" />
              <Icons.Premiere className="w-10 h-10 md:w-12 md:h-12" />
              <Icons.Lightroom className="w-10 h-10 md:w-12 md:h-12" />
              <Icons.XD className="w-10 h-10 md:w-12 md:h-12" />
              <Icons.InDesign className="w-10 h-10 md:w-12 md:h-12" />
              <Icons.AfterEffects className="w-10 h-10 md:w-12 md:h-12" />
            </div>
            <p className='font-extrabold text-base md:text-lg tracking-[0.5em] md:tracking-[0.8em] mt-4'>SKILLS</p>
          </div>
        </div>
      </div>
    </section>
  );
}