import React from 'react';

const FeatureCard = ({ title, description }) => (
    <div className="p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-lg">{description}</p>
    </div>
);

const Features = () => {
    return (
        <div className="relative text-center font-source-code-pro flex flex-col justify-center items-center h-screen p-10 text-black space-y-8">
            <FeatureCard 
                title="Feature 1" 
                description="Description of Feature 1." 
            />
            <FeatureCard 
                title="Feature 2" 
                description="Description of Feature 2." 
            />
            <FeatureCard 
                title="Feature 3" 
                description="Description of Feature 3." 
            />
        </div>
    );
};

export default Features;
