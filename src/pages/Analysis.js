import React, { useState } from 'react';

function Analysis() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);

  const analyze = async () => {
    const res = await fetch('/mockApi/analyze', { method: 'POST', body: JSON.stringify({ text }) });
    const data = await res.json();
    setResult(data);
  };

  return (
    <div className='container mt-5'>
      <h2>اكتب مشاعرك:</h2>
      <textarea className='form-control' rows='6' value={text} onChange={(e) => setText(e.target.value)}></textarea>
      <button className='btn btn-success mt-3' onClick={analyze}>حلل الآن</button>
      {result && (
        <div className='mt-4'>
          <h5>النتيجة:</h5>
          <p><strong>درجة الخطورة:</strong> {result.risk}</p>
          <p><strong>المشاعر:</strong> {result.sentiment}</p>
        </div>
      )}
    </div>
  );
}

export default Analysis;