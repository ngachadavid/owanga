import React from 'react';

export default function About() {
  return (
    <section className="bg-black text-white min-h-screen">
      <div className='flex items-center justify-between px-4 max-w-[1286px] mx-auto'>
        {/* Left Side - Geometric Design */}
        <div className="w-1/2 relative mt-20">
          {/* "About" Text */}
          <h2 className="absolute top-[-100px] left-0 text-white text-6xl mb-20">About</h2>

          {/* Circle on top */}
          <div className="absolute w-[120px] h-[120px] bg-gray-500 rounded-full top-[-140px] left-[200px]"></div>

          {/* First Square (Left) */}
          <div className="absolute w-[300px] h-[350px] bg-gray-500 rounded-[30px]"></div>

          {/* Second Square (Right, overlapping) */}
          <div className="absolute w-[300px] h-[350px] bg-gray-500 top-[80px] left-[120px] rounded-[30px]"></div>

          {/* Circle on bottom */}
          <div className="absolute w-[60px] h-[60px] bg-gray-500 rounded-full top-[400px] left-[2px] z-10"></div>
        </div>

        {/* Right Side - Content (TBD) */}
        <div className="w-1/2 flex flex-col gap-6 mt-20">
          {/* Top - Image */}
          <div>
            <img 
              src="/homepage/isaac.png" 
              alt="About section image" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorperLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat vo- lutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
          </div>
          <div>
          <p>PROFICIENCY</p>
          <PhotoshopIcon />
          <p>SKILLS</p>
          </div>
          </div>
      </div>
    </section>
  );
}