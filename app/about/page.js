import React from 'react';

function About() {
    return (
        <main className="bg-customDarkBlue text-customBlack min-h-screen flex flex-col items-center justify-center p-24">
            <h1 className="text-4xl font-bold mb-8 text-center">Meet the Creator of Atlas</h1>
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl">
                <div className="w-60 h-60 rounded-lg shadow-lg mb-6 md:mb-0 md:mr-2">
                    <img src="/profileImages/profile.jpg" alt="Creator" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="max-w-md md:ml-2">
                    <p className="mb-6">Hello, I'm the creator behind the Atlas project. With years of experience in chatbot development and a passion for creating innovative solutions, I have designed Atlas to be a versatile platform that offers specialized tools for math, chatting, and writing. Stay tuned for future additions to the Atlas family.</p>
                    <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/john-naquin/" target="_blank" rel="noopener noreferrer"
                           className="text-customGray cursor-pointer bg-transparent border border-customGray py-2 px-8 rounded hover:bg-customBlack hover:text-customGray hover:border-customBlack transition duration-300 ease-in-out">
                            LinkedIn
                        </a>
                        <a href="https://github.com/Rookie1829" target="_blank" rel="noopener noreferrer"
                           className="text-customGray cursor-pointer bg-transparent border border-customGray py-2 px-8 rounded hover:bg-customBlack hover:text-customGray hover:border-customBlack transition duration-300 ease-in-out">
                            GitHub
                        </a>
                        <a href="https://onedrive.live.com/?authkey=%21AHUoACmzIzQUuc0&cid=24BCD1F502D345BE&id=24BCD1F502D345BE%2110484&parId=24BCD1F502D345BE%2110393&o=OneUp" target="_blank" rel="noopener noreferrer"
                           className="text-customGray cursor-pointer bg-transparent border border-customGray py-2 px-8 rounded hover:bg-customBlack hover:text-customGray hover:border-customBlack transition duration-300 ease-in-out">
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default About;
