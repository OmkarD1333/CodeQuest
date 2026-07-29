import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Roadmap from './pages/Roadmap';
import Learning from './pages/Learning';
import PracticeSelection from './pages/PracticeSelection';
import Practice from './pages/Practice';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/roadmap/:lang" element={<Roadmap />} />
        <Route path="/learning/:lang/:level" element={<Learning />} />
        <Route path="/practice-selection" element={<PracticeSelection />} />
        <Route path="/practice/:lang" element={<Practice />} />
      </Routes>
    </Router>
  );
}

export default App;
