import { useState, useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import CustomCursor from './components/common/CustomCursor'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { useCursor } from './context/CursorContext'
import Loader from './components/common/Loader'

function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)
  const { showCustomCursor } = useCursor()
  const hasLoadedRef = useRef(false)

  // useEffect(() => {
  //   // Simulate content loading
  //   const timer = setTimeout(() => {
  //     setLoading(false)
  //   }, 1250)
    
  //   return () => clearTimeout(timer)
  // }, [])

  // // Scroll to top on route change
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [location.pathname])
  
  useEffect(() => {
    // Show loader only on first load (not on route change)
    if (!hasLoadedRef.current) {
      const timer = setTimeout(() => {
        setLoading(false)
        hasLoadedRef.current = true
      }, 1250) // You can fine-tune this timing
      return () => clearTimeout(timer)
    } else {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])


  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className={`App ${showCustomCursor ? 'has-custom-cursor' : ''}`}>
      {loading ? (
        <Loader />
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