import React from 'react';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className="relative text-center font-source-code-pro flex flex-col justify-center items-center h-screen pt-0 px-4">
            <img src="/gifImages/chatbot.gif" alt="Chatbot" className="mb-6 max-w-xs mx-auto w-full" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6">Welcome to Atlas!</h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 px-2">Explore the future with our AI bot: Unveiling cutting-edge solutions and services designed to revolutionize your experience.</p>
            <Link href="/about" passHref>
                <span className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">Learn More</span>
            </Link>
        </div>
    );
};

export default Hero;
