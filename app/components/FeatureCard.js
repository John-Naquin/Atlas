import React from 'react';
import Link from 'next/link';

const FeatureCard = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen text-customGray">
      <div className="flex flex-col justify-center bg-customDarkBlue w-full md:w-1/2 p-10">
        <h1 className="text-5xl font-bold mb-8">Introducing Atlas: Your All-in-One Chatbot Solution</h1>
        <p className="text-lg">Atlas is a cutting-edge chatbot project that combines the power of math, chatting, and writing bots. Created with a vision to revolutionize communication, Atlas offers a seamless and efficient experience for users.</p>
      </div>
      <div className="flex justify-center items-center bg-customBlack w-full md:w-1/2"> 
      <img src="/gifImages/chatbot.gif" alt="Chatbot" className="w-full max-w-md h-auto" />

      </div>
    </div>
  );
};

export default FeatureCard;
