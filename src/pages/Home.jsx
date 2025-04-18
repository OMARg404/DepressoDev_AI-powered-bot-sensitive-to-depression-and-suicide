import React from 'react';
import '../App.css'; // استايل عام
import './Home.css'; // استايل خاص بالصفحة
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faChartLine, faRobot, faComments, faTextHeight } from '@fortawesome/free-solid-svg-icons';

function Home() {
    return ( <
        div className = "home-wrapper" >

        { /* Hero Section */ } <
        div className = "container py-5 text-center" >
        <
        h1 className = "display-4 fw-bold text-glow mb-3" > Welcome to DepressoDev < /h1> <
        p className = "lead text-muted mb-4" >
        Your AI - powered companion
        for real - time mental health analysis.Just express yourself, and we 'll do the rest. <
        /p>

        { /* CTA Buttons */ } <
        div className = "d-flex justify-content-center gap-4 mt-4" >
        <
        a href = "/chatbot"
        className = "link-btn" >
        <
        FontAwesomeIcon icon = { faComments }
        className = "me-2" / >
        Try ChatBot <
        /a> <
        a href = "/text-analyzer"
        className = "link-btn" >
        <
        FontAwesomeIcon icon = { faTextHeight }
        className = "me-2" / >
        Text Analyzer <
        /a> <
        /div> <
        /div>

        { /* Features Section */ } <
        section className = "features-section py-5 mt-5" >
        <
        div className = "container text-center" >
        <
        h2 className = "mb-4 text-glow" > Why DepressoDev ? < /h2> <
        div className = "row g-4" >

        { /* AI-Powered Analysis */ } <
        div className = "col-md-4" >
        <
        div className = "feature-card p-4 rounded shadow-sm" >
        <
        h5 > 💡AI - Powered Analysis < /h5> <
        p > Get instant psychological insights based on your writing using advanced AI models. < /p> <
        FontAwesomeIcon icon = { faBrain }
        size = "3x"
        className = "text-info" / >
        <
        /div> <
        /div>

        { /* Real-Time Dashboard */ } <
        div className = "col-md-4" >
        <
        div className = "feature-card p-4 rounded shadow-sm" >
        <
        h5 > 📈Real - Time Dashboard < /h5> <
        p > Track risk trends, top keywords, and overall sentiment through interactive visuals. < /p> <
        FontAwesomeIcon icon = { faChartLine }
        size = "3x"
        className = "text-success" / >
        <
        /div> <
        /div>

        { /* Smart Chat Support */ } <
        div className = "col-md-4" >
        <
        div className = "feature-card p-4 rounded shadow-sm" >
        <
        h5 > 🤖Smart Chat Support < /h5> <
        p > Talk with our virtual counselor to get support, feedback, and guidance anytime. < /p> <
        FontAwesomeIcon icon = { faRobot }
        size = "3x"
        className = "text-warning" / >
        <
        /div> <
        /div>

        <
        /div> <
        /div> <
        /section>

        { /* Floating Buttons */ } <
        div className = "floating-buttons" >
        <
        a href = "/chatbot"
        className = "floating-btn btn-chat"
        title = "ChatBot" >
        <
        FontAwesomeIcon icon = { faComments }
        /> <
        /a> <
        a href = "/text-analyzer"
        className = "floating-btn btn-analyzer"
        title = "Text Analyzer" >
        <
        FontAwesomeIcon icon = { faTextHeight }
        /> <
        /a> <
        /div>

        <
        /div>
    );
}

export default Home;