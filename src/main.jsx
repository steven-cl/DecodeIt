import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import SplashCursor from '@/components/SplashCursor'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SplashCursor />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
