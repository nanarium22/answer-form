import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function AnswerForm() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '答え') {
      navigate('/correct');
    } else {
      setError('間違いです');
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>解答送信</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ここに入力"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError('');
          }}
          style={{ marginRight: '1rem' }}
        />
        <button type="submit">解答</button>
      </form>
      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
    </div>
  );
}

function CorrectPage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>正解！🎉</h1>
      <p>おめでとうございます！</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnswerForm />} />
        <Route path="/correct" element={<CorrectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
