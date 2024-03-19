'use client';
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

  const handleClick = (e, path) => {
    e.preventDefault(); // Prevent default link behavior
    setIsMenuOpen(false); // Close the menu
    window.location.href = path; // Navigate programmatically
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex justify-between items-center p-4 transition-colors duration-300 ${
        isScrolled || isMenuOpen ? 'bg-customBlack' : 'bg-transparent'
      }`}
    >
      <span className="cursor-pointer text-xl font-bold text-customGray" onClick={(e) => handleClick(e, '/')}>
        Atlas
      </span>
      {/* Toggle button for mobile view */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="text-customGray">{isMenuOpen ? 'Close' : 'Menu'}</span>
        </button>
      </div>
      {/* Navigation Links */}
      <div className={`flex-1 justify-center items-center hidden md:flex`}>
        <span className="cursor-pointer hover:underline transition text-customGray mx-4" onClick={(e) => handleClick(e, '/about')}>
          About
        </span>
        <span className="cursor-pointer hover:underline transition text-customGray mx-4" onClick={(e) => handleClick(e, '/chat')}>
          Chatbot
        </span>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-customBlack bg-opacity-75 backdrop-blur-md flex flex-col items-center justify-center py-4">
          <span className="cursor-pointer mt-4 text-customGray hover:underline transition" onClick={(e) => handleClick(e, '/about')}>
            About
          </span>
          <span className="cursor-pointer mt-4 text-customGray hover:underline transition" onClick={(e) => handleClick(e, '/chat')}>
            Chatbot
          </span>
          <button onClick={() => setIsMenuOpen(false)} className="mt-4 text-customGray">
            Close
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
