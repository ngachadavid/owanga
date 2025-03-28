import React from 'react'

export default function ThreeD() {
  return (
    <section>
      <div className='bg-white py-10 md:py-20 mx-auto text-center'>
        <h2 className='text-[#be3af2] text-4xl md:text-6xl font-extrabold'>
          3D<span className='font-light'>esign</span>
        </h2>
        <div className="mt-10">
          <img
            src="/web/3D.png"
            alt="Vivo Campaign"
            className="w-full h-auto"
          />
        </div>
        <div className="">
          <img
            src="/web/3D1.png"
            alt="Vivo Campaign"
            className="w-full h-auto"
          />
        </div>
        {/* 3d */}
        <div className="mt-2">
          <img
            src="/web/MN.png"
            alt="Vivo Campaign"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="mt- flex gap-">
          <img
            src="/web/MN1.png"
            alt="Left Image"
            className="w-1/2 h-auto object-cover"
          />
          <img
            src="/web/KICC.png"
            alt="Right Image"
            className="w-1/2 h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}
