"use client"

import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white mt-14 max-w-[1286px] mx-auto px-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">Isaac Okoth</a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-x-16 font-bold text-xl text-black border-b border-purple-300 pb-2">
          <li><a href="#home" className="scroll-smooth">Home</a></li>
          <li><a href="#about" className="scroll-smooth">About</a></li>
          <li><a href="#portfolio" className="scroll-smooth">Portfolio</a></li>
          <li><a href="#contact" className="scroll-smooth">Contacts</a></li>
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <button 
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center text-2xl font-bold gap-8 z-50">
          {/* Close Button */}
          <button 
            className="absolute top-14 right-4 text-2xl"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>

          {/* Menu Links */}
          <a href="#home" className="scroll-smooth" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="scroll-smooth" onClick={() => setIsOpen(false)}>About</a>
          <a href="#portfolio" className="scroll-smooth" onClick={() => setIsOpen(false)}>Portfolio</a>
          <a href="#contact" className="scroll-smooth" onClick={() => setIsOpen(false)}>Contacts</a>
        </div>
      )}
    </nav>
  );
}
