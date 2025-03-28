import React from 'react'

export default function Web() {
    return (
        <section>
            <div className='bg-white pt-10 md:pt-20 mx-auto text-center'>
                <h2 className='text-[#be3af2] text-4xl md:text-6xl font-bold'>
                    Web
                </h2>
                <div className="mt-10">
                    <img
                        src="/web/vivo.png"
                        alt="Vivo Campaign"
                        className="w-full h-auto"
                    />
                </div>
                <div className="mt-10">
                    <img
                        src="/web/soul.png"
                        alt="Vivo Campaign"
                        className="w-full h-auto"
                    />
                </div>
                <div className="mt-2">
                    <img
                        src="/web/souls.png"
                        alt="Vivo Campaign"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </section>
    )
}
