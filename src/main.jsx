import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Hero from "./Components/Hero/index.jsx";
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <App />
  </StrictMode>,
)
