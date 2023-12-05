import React from 'react';
import {Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Cadastro } from '../pages/Cadastro';


const SignRoutes: React.FC = () => {
  return (  
    <Routes>
      <Route path="/" element={<Login />} />  
      <Route path="/cadastro" element={<Cadastro />} />   
    </Routes>
  );
};

export default SignRoutes;