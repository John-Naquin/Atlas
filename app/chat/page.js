'use client';
import React, { useState, useEffect, useRef } from 'react';

function ChatComponent() {
    const [userInput, setUserInput] = useState('');
    const [conversation, setConversation] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentBot, setCurrentBot] = useState('chat');
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
    };

    const sendMessage = async () => {
        if (!userInput.trim()) return;

        const userMessage = { role: 'User', text: userInput };
        setConversation([...conversation, userMessage]);
        setIsLoading(true);

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
        setConversation([...conversation, userMessage, botMessage]);
        setIsLoading(false);

        setUserInput('');
    };

    const getBotMessageStyle = () => {
        switch (currentBot) {
            case 'math':
                return 'bg-lime-500 text-white';
            case 'writing':
                return 'bg-orange-500 text-white';
            default:
                return 'bg-purple-500 text-white';
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-black p-4 md:p-24">
            <div className="flex justify-center mb-4">
                <button onClick={() => switchBot('chat')} className={`px-4 py-2 m-1 ${currentBot === 'chat' ? 'bg-purple-600 text-white' : 'bg-gray-300 text-black'} rounded`}>Chat Bot</button>
                <button onClick={() => switchBot('math')} className={`px-4 py-2 m-1 ${currentBot === 'math' ? 'bg-lime-600 text-white' : 'bg-gray-300 text-black'} rounded`}>Math Bot</button>
                <button onClick={() => switchBot('writing')} className={`px-4 py-2 m-1 ${currentBot === 'writing' ? 'bg-orange-600 text-white' : 'bg-gray-300 text-black'} rounded`}>Writing Bot</button>
            </div>
            <div className="flex flex-col w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg" style={{ height: '75vh' }}>
                <div className="flex-grow overflow-y-auto p-3 space-y-4">
                    {conversation.map((exchange, index) => (
                        <div key={index} className={`w-full md:w-3/4 p-3 rounded-lg shadow ${
                            exchange.role === 'User' ? 'bg-gray-200 text-black ml-auto' : getBotMessageStyle() + ' mr-auto'
                        }`}>
                            <p className="text-xs font-bold">{exchange.role}</p>
                            <p>{exchange.text}</p>
                        </div>
                    ))}
                    <div ref={endOfMessagesRef} />
                    {isLoading && <div className="animate-bounce text-gray-500 self-center">Loading...</div>}
                </div>
                <div className="flex p-3 bg-gray-50 rounded-b-lg">
                    <input 
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                        className="flex-1 p-2 border-2 border-gray-300 rounded-full mr-2 text-black"
                        placeholder="Type your message here..."
                    />
                    <button 
                        onClick={sendMessage}
                        className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
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
