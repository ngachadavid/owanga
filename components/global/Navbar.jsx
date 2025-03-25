import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white mt-14 max-w-[1286px] mx-auto max-2xl:px-4 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Isaac Okoth</div>
        
        {/* Navigation Links */}
        <ul className="flex gap-x-16 font-bold text-xl text-black border-b border-purple-300 pb-2">
          <li><a href="#home" className="scroll-smooth">Home</a></li>
          <li><a href="#about" className="scroll-smooth">About</a></li>
          <li><a href="#portfolio" className="scroll-smooth">Portfolio</a></li>
          <li><a href="#contact" className="scroll-smooth">Contacts</a></li>
        </ul>
      </div>
    </nav>
  );
}