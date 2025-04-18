import React, { useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);
    const res = await fetch('/mockApi/chat', { method: 'POST', body: JSON.stringify({ text: input }) });
    const data = await res.json();
    const botMessage = { sender: 'bot', text: data.reply };
    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className='container mt-5'>
      <h2>الدردشة مع الذكاء الاصطناعي</h2>
      <div className='border p-3 mb-3' style={{ height: '300px', overflowY: 'scroll' }}>
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.sender === 'user' ? 'text-end' : 'text-start'}>
            <p className={`alert ${msg.sender === 'user' ? 'alert-primary' : 'alert-secondary'}`}>{msg.text}</p>
          </div>
        ))}
      </div>
      <input type='text' className='form-control' value={input} onChange={(e) => setInput(e.target.value)} />
      <button className='btn btn-primary mt-2' onClick={sendMessage}>إرسال</button>
    </div>
  );
}

export default Chat;