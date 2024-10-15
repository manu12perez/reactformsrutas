import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import './index.css'
import Router from './components/Router.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>INDEX PRINCIPAL</h1>
    <hr />
    <Router />
    <hr />
    <h2>Pie de página</h2>
  </StrictMode>
)
