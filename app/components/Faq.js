import React from 'react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="w-full py-8 mb-8">
            <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h5 className="font-medium text-3lg text-black">{question}</h5>
                <span className="text-black">{isOpen ? '−' : '＋'}</span>
            </button>
            {isOpen && <p className="mt-1 text-black">{answer}</p>}
        </div>
    );
};

const FAQPage = () => {
    return (
        <main className="min-h-screen w-full flex">
            <div className="w-full md:w-1/2 bg-customBlack p-4 md:p-8 flex flex-col justify-center">
                <h1 className="text-3xl font-bold text-customGray mb-2">Frequently Asked Questions</h1>
                <p className="text-customGray mb-4">Find answers to common questions about the Atlas project and its bots.</p>
            </div>
            <div className="w-full md:w-1/2 bg-customBlue p-4 md:p-8 text-customBlack text-xl">
                <FAQItem question="What is Atlas?" answer="Atlas is an AI-driven chatbot platform. There are several specialized bots available to use." />
                <FAQItem question="How does Atlas work?" answer="Atlas works by using natural language processing." />
                <FAQItem question="Can I use Atlas?" answer="Atlas is available for anyone!" />
                <FAQItem question="How can I contact you?" answer="johnnaquin14@gmail.com" />
                <FAQItem question="Is Atlas customizable?" answer="No, but plan to add this feature in the future!" />
            </div>
        </main>
    );
};

export default FAQPage;
