import React, { useState } from 'react';
import './TextAnalyzer.css';

function TextAnalyzer() {
  const [text, setText] = useState(''); // نص المستخدم
  const [result, setResult] = useState(null); // النتيجة بعد التحليل
  const [loading, setLoading] = useState(false); // حالة التحميل
  const [error, setError] = useState(''); // أي خطأ يحدث

  // دالة لتحليل النص
  const analyzeText = () => {
    if (!text.trim()) {
      setError("Please enter some text first.");
      setResult(null);
      return;
    }

    setLoading(true); // بدأ التحليل
    setError(''); // مسح الأخطاء
    setResult(null); // مسح النتيجة السابقة

    // إرسال النص إلى الـ API
    fetch('http://localhost:8000/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to analyze."); // إذا فشل الاتصال بالـ API
        return res.json();
      })
      .then(data => setResult(data)) // إذا نجح التحليل، عرض النتيجة
      .catch(() => setError("Something went wrong! Try again.")) // إذا حدث خطأ
      .finally(() => setLoading(false)); // إنهاء التحميل
  };

  // تحديد اللون بناءً على التصنيف
  const getLabelColor = (label) => {
    switch (label) {
      case 'POSITIVE': return 'text-success';
      case 'NEGATIVE': return 'text-danger';
      case 'NEUTRAL': return 'text-warning';
      default: return '';
    }
  };

  return (
    <div className="container mt-5 analyzer-container">
      <h2 className="mb-4 text-center">🧠 Text Sentiment Analyzer</h2>

      {/* حقل إدخال النص */}
      <textarea
        className="form-control mb-3 shadow-sm"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="6"
        placeholder="Type or paste your text here..."
      ></textarea>

      {/* زر التحليل */}
      <div className="text-center">
        <button
          className="btn btn-primary px-5 shadow"
          onClick={analyzeText}
          disabled={loading} // تعطيل الزر أثناء التحليل
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </div>

      {/* عرض الرسالة في حالة حدوث خطأ */}
      {error && <div className="alert alert-danger mt-4 text-center">{error}</div>}

      {/* عرض النتيجة بعد التحليل */}
      {result && (
        <div className="result-box shadow-sm mt-4 p-4 rounded bg-light">
          <h5 className={`text-center fw-bold ${getLabelColor(result.label)}`}>
            Sentiment: {result.label} 🎯
          </h5>
          <p className="text-center">Confidence Score: <strong>{result.score}</strong></p>
          <hr />
          <h6 className="text-center mb-3">All Scores:</h6>
          <ul className="list-group">
            {/* عرض جميع الدرجات */}
            {Object.entries(result.all_scores).map(([label, score]) => (
              <li
                key={label}
                className={`list-group-item d-flex justify-content-between align-items-center ${getLabelColor(label)}`}
              >
                {label}
                <span className="badge bg-secondary rounded-pill"> {score}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TextAnalyzer;
