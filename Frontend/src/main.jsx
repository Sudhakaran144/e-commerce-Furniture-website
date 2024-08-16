import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FurnitureContextProvider from './Context/FurnitureContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FurnitureContextProvider>
    <App />
  </FurnitureContextProvider>
)
