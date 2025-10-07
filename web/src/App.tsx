import './App.css'
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Lesson from './pages/Lesson'
import ExercisePage from './pages/Exercise'

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header style={{ display: 'flex', gap: 12, padding: '8px 12px', borderBottom: '1px solid #333' }}>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </header>
      {children}
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/learn/:track/:slug" element={<Lesson />} />
          <Route path="/exercise/:track/:slug" element={<ExercisePage />} />
          <Route path="*" element={<div style={{ padding: 24 }}>Not Found</div>} />
        </Routes>
      </Shell>
    </BrowserRouter>
  )
}
