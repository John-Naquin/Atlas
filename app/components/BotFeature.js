import React from 'react';
import Mathbot from '../../public/images/mathbot.png'; 
import Grammarbot from '../../public/images/grammerbot.png'; 
import Essaybot from '../../public/images/Essaybot.png'; 

const BotFeature = ({ title, description, image }) => (
    <div className="flex flex-col items-center p-6 bg-customGray rounded-lg shadow-md text-customBlack h-full">
      <div className="flex-grow-0 mb-4">
        <span className="inline-block p-4 bg-gray-200 rounded-full">
          <img src={image.src} alt={`${title} icon`} className="w-150 h-140" />
        </span>
      </div>
      <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
  

const BotsSection = () => {
  return (
    <div className="bg-customGray py-20 px-4">
      <div className="mx-auto">
        <h2 className="text-3xl font-bold text-customBlack text-center mb-16">Unlock the Power of Atlas and Its Specialized Bots</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <BotFeature
            image={Mathbot}
            title="Enhance Your Math Skills"
            description="Utilize our math bot to solve complex equations, practice formulas, and sharpen your problem-solving abilities."
          />
          <BotFeature
            image={Grammarbot}
            title="Engage in Meaningful Conversations"
            description="Chat with our intelligent bot to engage in thought-provoking discussions and expand your knowledge."
          />
          <BotFeature
            image={Essaybot}
            title="Improve Your Writing Abilities"
            description="Leverage our writing bot to enhance your grammar, vocabulary, and overall writing skills."
          />
        </div>
      </div>
    </div>
  );
};

export default BotsSection;
