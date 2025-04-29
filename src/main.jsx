import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { CursorProvider } from './context/CursorContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <CursorProvider>
          <App />
        </CursorProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)