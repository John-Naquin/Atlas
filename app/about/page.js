import React from 'react';
import DescriptionCard from '../components/DescriptionCard';

function About() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-8">About Us</h1>
                <img 
                    src="/profileImages/profile.jpg" 
                    alt="About Us" 
                    className="w-40 h-40 mx-auto rounded-full shadow-lg mb-6 object-cover"
                />
                <DescriptionCard title="Our Mission">
                    <p>Welcome to our company. We specialize in providing top-notch services and innovative solutions...</p>
                </DescriptionCard>
                <DescriptionCard title="Our History">
                    <p>Established in [Year], we have been committed to excellence in our field...</p>
                </DescriptionCard>
                <DescriptionCard title="Our Values">
                    <p>We believe in [Your Core Values or Mission Statement]...</p>
                </DescriptionCard>
            </div>
        </main>
    );
}

export default About;
