import React from 'react'
import ReactDOM from 'react-dom/client'
import LocalizationWrapper from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <LocalizationWrapper />
    </BrowserRouter>
  </React.StrictMode>,
)
