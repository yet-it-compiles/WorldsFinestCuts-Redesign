/**
 * @module main.jsx
 * 
 * @description The main entry point of the application, responsible for 
 * rendering the root component within React.StrictMode.
 * 
 * @version 0.1.0
 */

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
