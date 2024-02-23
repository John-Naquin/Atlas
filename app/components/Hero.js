import React from 'react';
import Link from 'next/link';

const Hero = () => {
    return (
        
        <div className="relative text-center font-source-code-pro flex flex-col justify-center items-center h-screen p-10">
            <h1 className="text-5xl font-bold mb-6">Welcome to Our Website!</h1>
            <p className="text-xl mb-8">Discover our innovative solutions and services.</p>
            <Link className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700" href="/about">
          <span className="cursor-pointer">Learn More</span>
        </Link>
        </div>
    );
};

export default Hero;
