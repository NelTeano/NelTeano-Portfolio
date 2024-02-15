import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// REACT ROUTER PROVIDER
import { BrowserRouter } from 'react-router-dom'
import './global.css'

// CONTEXT PROVIDER
import ThemeProvider from './context/Theme/ThemeProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />      
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
