import React from 'react';

export default function Works() {
  return (
    <section className="bg-black py-20">
    
    <div className='bg-white py-20 mx-auto text-center'>
        <h2 className='text-purple-500 text-6xl font-extrabold'>
        Branding
        </h2>

    </div>
      <div className="">
        <img 
          src="/works/citrica.png" 
          alt="Branding showcase" 
          className="w-full h-screen"
        />
      </div>
      <div className="mt-40">
        <img 
          src="/works/dante.png" 
          alt="Branding showcase" 
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
