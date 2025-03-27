import React from 'react';

export default function Works() {
  return (
    <section className="bg-black py-10 md:py-20">
    
    <div className='bg-white py-10 md:py-20 mx-auto text-center'>
        <h2 className='text-purple-500 text-4xl md:text-6xl font-bold'>
        Branding
        </h2>

    </div>
      <div className="">
        <img 
          src="/works/citrica.png" 
          alt="Branding showcase" 
          className="w-full h-[300px] md:h-screen"
        />
      </div>
      <div className="mt-10">
        <img 
          src="/works/dante.png" 
          alt="Branding showcase" 
          className="w-full h-[300px] md:h-auto"
        />
      </div>
      <div className="mt-10">
        <img 
          src="/works/tilapia.png" 
          alt="Branding showcase" 
          className="w-full h-[300px] md:h-screen"
        />
      </div>
      <div className="mt-10">
        <img 
          src="/works/nivea.jpg" 
          alt="Branding showcase" 
          className="w-full h-[300px] md:h-auto"
        />
      </div>
    </section>
  );
}
