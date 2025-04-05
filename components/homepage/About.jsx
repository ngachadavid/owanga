import React from 'react';
import Icons from '../icons/Icons';

export default function About() {
  return (
    <section className="bg-black text-white min-h-screen pt-10 md:pt-0">
      <div className='flex flex-col md:flex-row items-center justify-between px-4 max-w-[1286px] mx-auto'>
        {/* Left Side */}
        <div className='mt-0 md:mt-20 -ml-4 md:-ml-30'>
        <img src="/homepage/IKE.png" alt="Footer Image" className="w-full h-[500px] md:h-[800px] rounded-lg mb-6" />
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