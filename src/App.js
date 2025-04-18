import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Analysis from './pages/Analysis';
import Chat from './pages/Chat';
import Dashboard from './pages/Dashboard';
import ChatBot from './components/ChatBot';
import TextAnalyzer from './components/TextAnalyzer';
import Navbar from './components/Navbar';
import './App.css';

function App() {
    return ( <
        div > { /* إضافة Navbar في أعلى الصفحة */ } <
        Navbar / >

        { /* تعريف الـ Routes الخاصة بالصفحات */ } <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/analyze"
        element = { < Analysis / > }
        /> <
        Route path = "/chat"
        element = { < Chat / > }
        /> <
        Route path = "/dashboard"
        element = { < Dashboard / > }
        />

        { /* Routes داخلية يمكن استخدامها إذا رغبت */ } <
        Route path = "/chatbot"
        element = { < ChatBot / > }
        /> <
        Route path = "/text-analyzer"
        element = { < TextAnalyzer / > }
        />

        { /* صفحة الخطأ */ } <
        Route path = "*"
        element = { <
            div className = "text-center p-5 text-white" >
            <
            h1 > 404 - Page Not Found < /h1> <
            p > The page you 're looking for doesn'
            t exist. < /p> <
            /div>
        }
        /> <
        /Routes> <
        /div>
    );
}

export default App;