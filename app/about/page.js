import React from 'react';

function About() {
    return (
        <main className="bg-custom-linear-gradient text-customGray min-h-screen flex flex-col items-center justify-center p-4 md:p-24">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-center">Meet the Creator of Atlas</h1>
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl">
                <div className="w-full md:w-60 h-60 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4">
                    <img src="/profileImages/profile.jpg" alt="Creator" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="text-sm md:text-base max-w-md md:ml-4">
                    <p className="mb-4 md:mb-6">Hello, I am the creator behind the Atlas project. With years of experience in chatbot development and a passion for creating innovative solutions, I have designed Atlas to be a versatile platform that offers specialized tools for math, chatting, and writing. Stay tuned for future additions to the Atlas family.</p>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                        <a href="www.linkedin.com/in/john-naquin" target="_blank" rel="noopener noreferrer"
                           className="text-customGray text-xl cursor-pointer bg-transparent border-2 border-customGray py-2 px-4 md:px-8 rounded text-center hover:bg-customBlack hover:text-customGray hover:border-customBlack transition duration-300 ease-in-out">
                            LinkedIn
                        </a>
                        <a href="https://github.com/John-Naquin" target="_blank" rel="noopener noreferrer"
                           className="text-customGray text-xl cursor-pointer bg-transparent border-2 border-customGray py-2 px-4 md:px-8 rounded text-center hover:bg-customBlack hover:text-customGray hover:border-customBlack transition duration-300 ease-in-out">
                            GitHub
                        </a>
                        <a href="https://1drv.ms/b/c/24bcd1f502d345be/EXIzWIlpGlVNjIQ8brRrG6sBCKp4NAay7nWbrg45Bn8Baw?e=xl5IG0" target="_blank" rel="noopener noreferrer"
                           className="text-customGray text-xl cursor-pointer bg-transparent border-2 border-customGray py-2 px-4 md:px-8 rounded text-center hover:bg-customBlack hover:text-customGray hover:border-customBlack transition duration-300 ease-in-out">
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default About;
