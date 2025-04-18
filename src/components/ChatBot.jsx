import React, { useState } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input) return;
    const newMsg = { from: 'user', text: input };
    setMessages([...messages, newMsg]);

    // Placeholder for future feature
    setMessages(prev => [...prev, { from: 'bot', text: '🤖 هذه الميزة سيتم تفعيلها قريبًا. شكراً لتجربتك!' }]);

    setInput('');
  };

  return (
    <div className="chatbot-container">
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>AI Assistant (Coming Soon)</h3>
      <div className="chat-window">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-bubble ${msg.from}`}>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="chat-input-area">
        <input
          type="text"
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button className="send-button" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
