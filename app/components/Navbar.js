'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex justify-between items-center text-customGray p-4 transition-colors duration-300 ${
        isScrolled ? 'bg-customBlack' : 'bg-transparent'
      }`}
    >
      <span className="cursor-pointer text-xl font-bold text-customGray" onClick={() => setIsMenuOpen(false)}>
        <Link href="/">
          Atlas
        </Link>
      </span>
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span>{isMenuOpen ? 'Close' : 'Menu'}</span>
        </button>
      </div>
      <div className={`flex-grow justify-center items-center ${isMenuOpen ? '' : 'hidden'} md:flex md:justify-end`}>
        <div className="flex flex-col md:flex-row md:items-center">
          <span className="cursor-pointer mt-4 md:mt-0 ml-4 hover:underline transition text-white" onClick={() => setIsMenuOpen(false)}>
            <Link href="/about">
              <span className={`text-customGray hover:text-white ${isMenuOpen ? 'block' : 'hidden md:block'}`}>About</span>
            </Link>
          </span>
          <span className="cursor-pointer mt-4 md:mt-0 ml-4 hover:underline transition text-white" onClick={() => setIsMenuOpen(false)}>
            <Link href="/chat">
              <span className={`text-customGray hover:text-white ${isMenuOpen ? 'block' : 'hidden md:block'}`}>Chatbot</span>
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
