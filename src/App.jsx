import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextAnalyzer from './components/TextAnalyzer';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">DepressoDev - تحليل نفسي ذكي</h1>
      <TextAnalyzer />
      <hr />
      <ChatBot />
    </div>
  );
}

export default App;
