import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { configureScrivito } from './config/scrivito'
import './index.css'

configureScrivito()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
