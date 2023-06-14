import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../styles/GlobalStyles.js'
import { UserProvider } from './hooks/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
    <UserProvider>
    <App />
    </UserProvider>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
