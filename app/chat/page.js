'use client';

import React, { useState, useEffect, useRef } from 'react';

function ChatComponent() {
    const [userInput, setUserInput] = useState('');
    const [conversation, setConversation] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const endOfMessagesRef = useRef(null);

    const scrollToBottom = () => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [conversation]);

    const sendMessage = async () => {
        if (!userInput.trim()) return;

        const userMessage = { role: 'User', text: userInput };
        setConversation([...conversation, userMessage]);
        setIsLoading(true);

        const botResponse = await fetch('https://atlas-backend-1eds.onrender.com/chat', {
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

    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-black p-4 md:p-24">
            <div className="flex flex-col w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg" style={{ height: '75vh' }}>
                <div className="flex-grow overflow-y-auto p-3 space-y-4">
                    {conversation.map((exchange, index) => (
                        <div key={index} className={`w-full md:w-3/4 p-3 rounded-lg shadow ${
                            exchange.role === 'User' ? 'bg-blue-500 text-white ml-auto' : 'bg-gray-100 text-black mr-auto'
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
