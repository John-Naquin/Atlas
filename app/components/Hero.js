import React from 'react';
import Link from 'next/link';

const Hero = () => {
  const bgImageUrl = "/images/hero.jpg";

  return (
    <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${bgImageUrl})` }}>
      <div className="flex flex-col justify-center items-center h-full bg-opacity-60 bg-black backdrop-blur-sm px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-center text-white">Welcome to Atlas: Your Ultimate Chatbot Solution</h1>
        <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-md md:max-w-lg text-center text-white">Experience the power of AI-driven chatbots for math, chatting, and writing. Explore the future of conversational technology.</p>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <Link href="/about">
            <span className="inline-block cursor-pointer bg-transparent border-2 border-white text-white py-2 px-6 md:px-8 rounded transition duration-300 ease-in-out shadow-lg hover:bg-customBlack hover:text-white hover:border-customBlack text-center w-48">Learn More</span>
          </Link>
          <Link href="/chat">
            <span className="inline-block cursor-pointer bg-transparent border-2 border-white text-white py-2 px-6 md:px-8 rounded transition duration-300 ease-in-out shadow-lg hover:bg-customBlack hover:text-white hover:border-customBlack text-center w-48">Chat Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
