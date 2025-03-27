import React from 'react';
import { FaPhone, FaBehance, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-white text-black py-10 md:py-20">
            <div className="max-w-[1286px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Left - Contact Form */}
                <div className="w-full md:w-1/2 bg-white py-6 md:py-10">
                    <h2 className="text-sm md:text-base bg-[#be3af2] text-white font-bold py-3 px-4 rounded-full inline-block mb-10">
                        Get in Touch
                    </h2>
                    <form className="pl-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {["Full Name", "Company", "Email", "Contact"].map((field) => (
                                <div key={field} className="flex items-end">
                                    <label className="text-xs text-[#be3af2]">
                                        {field}:
                                    </label>
                                    <div className="flex-1 relative">
                                        <input
                                            type={field === "Email" ? "email" : "text"}
                                            className="w-full bg-transparent border-none outline-none pl-2"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#be3af2]"></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col mt-10">
                            <textarea rows="4" placeholder="Your message here..."
                                className="bg-gray-100 text-xs p-3 rounded-lg focus:outline-none"></textarea>
                        </div>
                        <div className="flex justify-end mt-6">
                            <button className="bg-[#be3af2] text-white text-xs py-1 px-2 rounded-full hover:bg-[#a82ad9] transition-colors">
                                Send
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right - Image */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                    <img src="/homepage/footer.png" alt="Footer Image" className="w-full md:w-[80%] h-auto rounded-lg mb-6" />
                    
                    {/* Contact Links */}
                    <div className="grid grid-cols-2 gap-4 w-full md:w-auto text-xs md:text-sm">
                        {/* Phone */}
                        <div className="flex items-center space-x-2">
                            <FaPhone className="text-[#be3af2]" />
                            <a href="tel:+254 793 855 918" className="text-black hover:text-[#be3af2]">+254 793 855 918</a>
                        </div>

                        {/* Behance */}
                        <div className="flex items-center space-x-2">
                            <FaBehance className="text-[#be3af2]" />
                            <a href="http://www.behance.net/isaacokoth" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#be3af2]">
                            behance.net/isaacokoth
                            </a>
                        </div>

                        {/* WhatsApp */}
                        <div className="flex items-center space-x-2">
                            <FaWhatsapp className="text-[#be3af2]" />
                            <a href="https://wa.me/+254793855918" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#be3af2]">
                            +254 793 855 918
                            </a>
                        </div>

                        {/* LinkedIn */}
                        <div className="flex items-center space-x-2">
                            <FaLinkedin className="text-[#be3af2]" />
                            <a href="http://www.linkedin.com/in/isaacowanga" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#be3af2]">
                            linkedin.com/in/isaacowanga
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
