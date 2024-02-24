import React from 'react';

const FeatureCard = ({ title, description }) => (
    <div className="p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-lg">{description}</p>
    </div>
);


const Features = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen p-4 md:p-10 text-black space-y-4 md:space-y-8">
            <FeatureCard 
                title="Personalized Interactions" 
                description="Our AI chatbot adapts to your individual preferences, offering a uniquely personalized experience." 
            />
            <FeatureCard 
                title="24/7 Availability" 
                description="Get assistance any time! Our AI chatbot is always available to answer your queries." 
            />
            <FeatureCard 
                title="User-Friendly Interface" 
                description="Enjoy an intuitive and easy-to-use interface for seamless interactions." 
            />
        </div>
    );
};


export default Features;
