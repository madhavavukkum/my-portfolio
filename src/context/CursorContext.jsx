import { createContext, useContext, useState, useEffect } from 'react'

const CursorContext = createContext()

export const useCursor = () => useContext(CursorContext)

export const CursorProvider = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [showCustomCursor, setShowCustomCursor] = useState(false)
  
  useEffect(() => {
    // Only enable custom cursor on desktop devices
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches
    setShowCustomCursor(isDesktop)
    
    if (!isDesktop) return
    
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    
    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)
    
    const handleLinkHoverStart = () => setLinkHovered(true)
    const handleLinkHoverEnd = () => setLinkHovered(false)
    
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    
    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleLinkHoverStart)
      el.addEventListener('mouseleave', handleLinkHoverEnd)
    })
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHoverStart)
        el.removeEventListener('mouseleave', handleLinkHoverEnd)
      })
    }
  }, [])
  
  return (
    <CursorContext.Provider 
      value={{ 
        position, 
        clicked, 
        linkHovered, 
        showCustomCursor 
      }}
    >
      {children}
    </CursorContext.Provider>
  )
}