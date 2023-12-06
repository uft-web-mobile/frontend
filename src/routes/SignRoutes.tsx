import React from 'react';
import {Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Cadastro } from '../pages/Cadastro';
import { ForgotPassword } from '../pages/ForgotPassword';
 

const SignRoutes: React.FC = () => {
  return (  
    <Routes>
      <Route path="/" element={<Login />} />  
      <Route path="/cadastro" element={<Cadastro />} />   
      <Route path="/forgot-password" element={<ForgotPassword />} />  
    </Routes>
  );
};

export default SignRoutes;