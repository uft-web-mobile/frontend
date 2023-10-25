import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { Home } from './pages/Home/index.tsx'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { About } from './pages/About/index.tsx'
import { NavBar } from './components/Navbar/index.tsx'
import { Desafios } from './pages/Desafios/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/desafios" element={<Desafios />}/>
        <Route path="/desafios/:id" element={<Desafios />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
