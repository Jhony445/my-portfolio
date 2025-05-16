// src/index.js
import React from 'react'
import ReactDOM from 'react-dom/client'

// resets globales y variables de tu paleta
import './styles/reset.css'
import './styles/variables.css'



import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
