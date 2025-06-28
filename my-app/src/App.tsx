import React from 'react';
import Login from './Login.tsx';
import About from './About.tsx';
import Dashboard from './dashboard.tsx';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        padding: 50,
        textAlign: 'center',
        background: '#f5f5f5',
        minHeight: '100vh',
      }}
    >
      <h1 style={{ color: '#1976d2', marginBottom: 40 }}>Diamond Recovery</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
        <button
          style={{
            padding: '12px 32px',
            fontSize: 18,
            borderRadius: 8,
            border: 'none',
            background: '#1976d2',
            color: '#fff',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: 'background 0.2s',
          }}
          onClick={() => navigate('/login')}
        >
          Login
        </button>
        <button
          style={{
            padding: '12px 32px',
            fontSize: 18,
            borderRadius: 8,
            border: 'none',
            background: '#fff',
            color: '#1976d2',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            borderColor: '#1976d2',
            borderWidth: 2,
            borderStyle: 'solid',
            transition: 'background 0.2s',
          }}
          onClick={() => navigate('/about')}
        >
          About
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;