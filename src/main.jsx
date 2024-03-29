import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// REACT ROUTER PROVIDER
import { BrowserRouter } from 'react-router-dom'
import './global.css'

// CONTEXT PROVIDER
import ThemeProviderContext from './context/Theme/ThemeProvider.jsx'

import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
      fontFamily: [
          'Poppins',
          'Stretch Pro, Arial, sans-serif',
      ].join(','),
  },
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ThemeProviderContext>
          <App />      
        </ThemeProviderContext>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
