import React from 'react';

function Dashboard() {
    return ( <
        div className = "container mt-5 text-center text-light" >
        <
        div style = {
            {
                background: '#1e1e1e',
                padding: '40px',
                borderRadius: '16px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
            }
        } >
        <
        h2 style = {
            { fontWeight: 'bold', marginBottom: '20px' } } > لوحة التحكم < /h2> <
        p style = {
            { fontSize: '18px', color: '#aaa' } } > 🛠️هذه الميزة قيد التطوير وسيتم إطلاقها قريبً ا. <
        /p> <
        /div> <
        /div>
    );
}

export default Dashboard;