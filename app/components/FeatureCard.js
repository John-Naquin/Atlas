import React from 'react';

const FeatureCard = ({ title, description }) => (
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out h-full">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-lg flex-grow">{description}</p>
    </div>
);

const Features = () => {
    return (
        <div className="flex flex-col space-y-4 md:space-y-8 items-stretch min-h-screen p-4 md:p-10 text-black">
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
            <FeatureCard 
                title="Specialized Bots" 
                description="Experience the versatility of our AI platform with specialized bots tailored for diverse tasks and industries, ensuring expert assistance in every interaction." 
            />
            <FeatureCard 
                title="Efficient Problem Solving" 
                description="Our AI chatbot is designed to provide quick and effective solutions to a wide range of queries, streamlining your user experience." 
            />
            <FeatureCard 
                title="Continuous Learning" 
                description="Our AI continually learns and evolves, ensuring up-to-date information and responses that improve with every interaction." 
            />
        </div>
    );
};

export default Features;
