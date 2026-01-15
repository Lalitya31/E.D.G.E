import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ArchitecturePage from './pages/ArchitecturePage'
import IntelligencePage from './pages/IntelligencePage'
import DashboardPage from './pages/DashboardPage'
import TeamPage from './pages/TeamPage'

function AnimatedRoutes() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/architecture" element={<ArchitecturePage />} />
        <Route path="/intelligence" element={<IntelligencePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <div className="relative overflow-x-hidden noise-texture">
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  )
}

export default App
