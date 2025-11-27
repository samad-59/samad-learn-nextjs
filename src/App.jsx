import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'

function NavBar() {
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path) => location.pathname === path

  return (
    <header className="topbar">
      <nav className="nav">
        <button 
          className={`nav-btn ${isActive('/') ? 'active' : ''}`}
          onClick={() => navigate('/')}
        >
          Home
        </button>
        <button 
          className={`nav-btn ${isActive('/about') ? 'active' : ''}`}
          onClick={() => navigate('/about')}
        >
          About
        </button>
        <button 
          className={`nav-btn ${isActive('/services') ? 'active' : ''}`}
          onClick={() => navigate('/services')}
        >
          Services
        </button>
      </nav>
    </header>
  )
}

function AppLayout() {
  return (
    <div className="app-root">
      <NavBar />
      <main className="hero">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  )
}

export default App
 