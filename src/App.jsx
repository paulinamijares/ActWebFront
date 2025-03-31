import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage.jsx';
import Dashboard from './components/Dashboard.jsx';
import StandardImageList from './components/Contacto.jsx';
import './App.css';
import Footer from './components/Footer.jsx';
function App() {
  return (
    <div className="App">
      <Footer />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contacto" element={<StandardImageList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
