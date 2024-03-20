'use client';
import React, { useState, useEffect, useRef } from 'react';

function ChatComponent() {
    const [userInput, setUserInput] = useState('');
    const [conversation, setConversation] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentBot, setCurrentBot] = useState('chat');
    const [selectedBotLabel, setSelectedBotLabel] = useState('Chat Bot'); 
    const endOfMessagesRef = useRef(null);

    const scrollToBottom = () => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [conversation]);

    const switchBot = (botType) => {
        setCurrentBot(botType);
        setConversation([]);
        switch (botType) {
            case 'math':
                setSelectedBotLabel('Math Bot');
                break;
            case 'writing':
                setSelectedBotLabel('Writing Bot');
                break;
            default:
                setSelectedBotLabel('Chat Bot');
        }
    };

    const sendMessage = async () => {
        if (!userInput.trim()) return;
    
        setIsLoading(true);
    
        const userMessage = { role: 'User', text: userInput };
    
        let botUrl;
        switch (currentBot) {
            case 'math':
                botUrl = 'https://atlas-backend-1eds.onrender.com/chatmath';
                break;
            case 'writing':
                botUrl = 'https://atlas-backend-1eds.onrender.com/chatwriting';
                break;
            default:
                botUrl = 'https://atlas-backend-1eds.onrender.com/chat';
        }
    
        const botResponse = await fetch(botUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: userInput }),
        });
        const data = await botResponse.json();
    
        const botMessage = { role: 'Bot', text: data.response };

        setConversation(prevConversation => [...prevConversation, userMessage, botMessage]);
    
        setIsLoading(false);
        setUserInput('');
    };
    

    const getBotMessageStyle = () => {
        switch (currentBot) {
            case 'math':
                return 'bg-customDarkBlue text-white';
            case 'writing':
                return 'bg-customDarkBlue text-white';
            default:
                return 'bg-customDarkBlue text-white';
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-custom-linear-gradient p-4 pt-20 md:p-24">
            <div className="text-customGray font-bold mb-4">Selected Bot: {selectedBotLabel}</div>
            <div className="flex justify-center mb-4 space-x-2">
                <button onClick={() => switchBot('chat')} className={`px-4 py-2 text-sm font-medium ${currentBot === 'chat' ? 'bg-customDarkBlue text-white' : 'bg-customGray text-customBlack'} rounded-lg shadow-md hover:bg-customBlack hover:text-customGray hover:shadow-lg transition duration-300 ease-in-out`}>Chat Bot</button>
                <button onClick={() => switchBot('math')} className={`px-4 py-2 text-sm font-medium ${currentBot === 'math' ? 'bg-customDarkBlue text-white' : 'bg-customGray text-customBlack'} rounded-lg shadow-md hover:bg-customBlack hover:text-customGray hover:shadow-lg transition duration-300 ease-in-out`}>Math Bot</button>
                <button onClick={() => switchBot('writing')} className={`px-4 py-2 text-sm font-medium ${currentBot === 'writing' ? 'bg-customDarkBlue text-white' : 'bg-customGray text-customBlack'} rounded-lg shadow-md hover:bg-customBlack hover:text-customGray hover:shadow-lg transition duration-300 ease-in-out`}>Writing Bot</button>
            </div>
            <div className="flex flex-col w-full max-w-md mx-auto p-4 bg-customGray rounded-lg shadow-lg" style={{ height: '75vh' }}>
                <div className="flex-grow overflow-y-auto p-3 space-y-4">
                    {conversation.map((exchange, index) => (
                        <div key={index} className={`w-full md:w-3/4 p-3 rounded-lg shadow ${
                            exchange.role === 'User' ? 'bg-gray-200 text-customBlack ml-auto' : getBotMessageStyle() + ' mr-auto'
                        }`}>
                            <p className="text-xs font-bold">{exchange.role}</p>
                            <p>{exchange.text}</p>
                        </div>
                    ))}
                    <div ref={endOfMessagesRef} />
                    {isLoading && <div className="animate-bounce text-customBlack self-center">Loading...</div>}
                </div>
                <div className="flex p-3 bg-gray-50 rounded-b-lg">
                    <input 
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                        className="flex-1 p-2 border-2 border-customBlack rounded-full mr-2 text-customBlack"
                        placeholder="Type your message here..."
                    />
                    <button 
                        onClick={sendMessage}
                        className="px-4 py-2 bg-customDarkBlue text-white rounded-full hover:bg-blue-600"
                        disabled={isLoading}
                    >
                        Send
                    </button>
                </div>
            </div>
        </main>
    );
}

export default ChatComponent;
