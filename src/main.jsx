import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { BluePointApp } from './BluePointApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <BluePointApp />
    </BrowserRouter>
  </React.StrictMode>,
)
