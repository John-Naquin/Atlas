import React from 'react';
import DescriptionCard from '../components/DescriptionCard';

function About() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-8">About</h1>
                <img 
                    src="/profileImages/profile.jpg" 
                    alt="About Us" 
                    className="w-40 h-40 mx-auto rounded-full shadow-lg mb-6 object-cover"
                />
                <DescriptionCard title="Me">
                    <p>Im a Full Stack Developer and Software Developer with a bachelors in Computer Science, passionate about both tech and space. 🌎</p>
                </DescriptionCard>
            </div>
        </main>
    );
}

export default About;
