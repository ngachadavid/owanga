import React from 'react';

export default function Explore() {
    return (
        <section className="bg-black py-10 text-white text-center">
            <div className="max-w-[1286px] mx-auto px-4">
                {/* Title */}
                <h2 className="text-6xl md:text-8xl font-[1000]">
                    EXPLORA <br /> TORIUM
                </h2>

                {/* Underline */}
                <div className="h-[2px] bg-white/50 mt-10 md:mt-20 mb-16 md:mb-32"></div>

                <div className="grid grid-cols-[1.2fr_0.8fr_1.2fr] md:gap-2 justify-center items-center">
                    <div className="text-xs md:text-sm text-start">
                        Step into a curated collection of works that blend creativity, strategy,
                        and storytelling. Each project is an exploration of form, function,
                        and impact—designed to engage, inspire, and leave a lasting impression.
                        From brand identities to digital experiences, every piece reflects a
                        dedication to innovation and detail.
                    </div>
                    <div className="p-2 md:p-4 text-lg md:text-2xl font-bold">
                        EXPLORA <br /> TORIUM
                    </div>
                    <div className="text-xs md:text-sm text-end">
                        Whether it's branding, UI/UX, motion graphics, or digital art, this is
                        where ideas come to life. Dive in, explore the creative process, and
                        discover the thought and craftsmanship behind every design.
                        Welcome to the visual journey of Isaac Okoth.
                    </div>
                </div>
            </div>


        </section>
    );
}
