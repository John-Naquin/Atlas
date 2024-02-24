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
                title="Personalized Interactions" 
                description="Our AI chatbot adapts to your individual preferences and learning style, offering a uniquely personalized conversational experience." 
            />
            <FeatureCard 
                title="24/7 Availability" 
                description="Get assistance any time of the day! Our AI chatbot is available 24/7 to answer your queries, ensuring that help is always at your fingertips." 
            />
            <FeatureCard 
                title="Multilingual Support" 
                description="Communicate comfortably in your preferred language. Our AI chatbot supports multiple languages, making it accessible to a diverse range of users." 
            />
            <FeatureCard 
                title="Instant Information Retrieval" 
                description="Need information fast? Our chatbot swiftly navigates through vast data to provide you with accurate answers in seconds." 
            />
            <FeatureCard 
                title="User-Friendly Interface" 
                description="Enjoy an easy-to-use interface with intuitive navigation, making your interactions with our AI chatbot a breeze." 
            />
            <FeatureCard 
                title="Secure and Private Conversations" 
                description="Your privacy matters. Conversations with our AI chatbot are encrypted and secure, ensuring your data and personal information are always protected." 
            />
        </div>
    );
};


export default Features;
