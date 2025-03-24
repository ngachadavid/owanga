import React from 'react';
import Icons from '../icons/Icons';

export default function About() {
  return (
    <section className="bg-black text-white min-h-screen">
      <div className='flex items-center justify-between px-4 max-w-[1286px] mx-auto'>
        {/* Left Side - Geometric Design */}
        <div className="w-1/2 relative">
          {/* "About" Text */}
          <h2 className="absolute top-[-230px] left-0 text-white text-6xl mb-20">About</h2>

          {/* Circle on top */}
          <div className="absolute w-[120px] h-[120px] bg-gray-500 rounded-full top-[-240px] left-[200px]"></div>

          {/* First Square (Left) */}
          <div className="absolute w-[300px] h-[350px] bg-gray-500 top-[-100px] rounded-[30px]"></div>

          {/* Second Square (Right, overlapping) */}
          <div className="absolute w-[300px] h-[350px] bg-gray-500 top-[20px] left-[120px] rounded-[30px]"></div>

          {/* Circle on bottom */}
          <div className="absolute w-[60px] h-[60px] bg-gray-500 rounded-full top-[300px] left-[2px] z-10"></div>
        </div>

        {/* Right Side - Content (TBD) */}
        <div className="w-1/2 flex flex-col gap-6">
          {/* Top - Image */}
          <div className='mt-20'>
            <img 
              src="/homepage/isaac.png" 
              alt="About section image" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className='text-center text-sm'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorperLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat vo- lutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
          </div>
          <div className='flex flex-col items-center text-center mt-10'>
          <p className='font-extrabold text-lg tracking-[0.8em]'>PROFICIENCY</p>
          <div className="flex gap-4 mt-4">
              <Icons.Photoshop className="w-12 h-12" />
              <Icons.Illustrator className="w-12 h-12" />
              <Icons.Premiere className="w-12 h-12" />
              <Icons.Lightroom className="w-12 h-12" />
              <Icons.XD className="w-12 h-12" />
              <Icons.InDesign className="w-12 h-12" />
              <Icons.AfterEffects className="w-12 h-12" />
            </div>
          <p className='font-extrabold text-lg tracking-[0.8em] mt-4'>SKILLS</p>
          </div>
          </div>
      </div>
    </section>
  );
}