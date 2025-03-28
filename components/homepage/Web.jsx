import React from 'react'

export default function Web() {
    return (
        <section className="bg-white py-10 md:py-20">
            <div className='bg-white py-10 md:py-20 mx-auto text-center'>
                <h2 className='text-purple-500 text-4xl md:text-6xl font-bold'>
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
