import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-20">
            <div className="max-w-[1286px] mx-auto px-4 flex items-center justify-between">

                {/* Left - Text */}
                <div>
                    <h2 className="text-8xl font-extrabold leading-[0.85]">Have a cool project?</h2>
                    <p className="text-4xl mt-10 bg-white text-black font-bold px-6 py-3 rounded-full inline-block">
                        Contact Us
                    </p>
                </div>

                {/* Right - Image */}
                <div>
                    <img
                        src="/homepage/footer.png"
                        alt="Footer Image"
                        className="w-[600px] h-auto"
                    />
                </div>

            </div>
        </footer>
    );
}
