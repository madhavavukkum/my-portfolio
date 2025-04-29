import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import CustomCursor from './components/common/CustomCursor'
import Preloader from './components/common/Preloader'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { useCursor } from './context/CursorContext'

function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)
  const { showCustomCursor } = useCursor()
  
  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1200)
    
    return () => clearTimeout(timer)
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className={`App ${showCustomCursor ? 'has-custom-cursor' : ''}`}>
      {loading ? (
        <Preloader />
      ) : (
        <>
          {showCustomCursor && <CustomCursor />}
          <Navbar />
          <main>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App