import { useState, useEffect, useRef } from 'react'
import CustomCursor from './components/common/CustomCursor'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import { useCursor } from './context/CursorContext'
import Loader from './components/common/Loader'

function App() {
  const [loading, setLoading] = useState(true)
  const { showCustomCursor } = useCursor()
  const hasLoadedRef = useRef(false)

  useEffect(() => {
    if (!hasLoadedRef.current) {
      const timer = setTimeout(() => {
        setLoading(false)
        hasLoadedRef.current = true
      }, 1250)
      return () => clearTimeout(timer)
    } else {
      setLoading(false)
    }
  }, [])

  return (
    <div className={`App ${showCustomCursor ? 'has-custom-cursor' : ''}`}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {showCustomCursor && <CustomCursor />}
          <Navbar />
          <main>
            <Home />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App