import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Desafios } from '../pages/Desafios';
import { NavBar } from '../components/Navbar';

const OtherRoutes: React.FC = () => {
 return (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About />}/>
      <Route path="/desafios" element={<Desafios />}/>
      <Route path="/desafios/:id" element={<Desafios />}/>
    </Routes>
  </>
 );
};

export default OtherRoutes;