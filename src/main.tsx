import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'

import { NavBar } from './components/Navbar/index.tsx'
import Routes from './routes/index.tsx'
import App from './app.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
