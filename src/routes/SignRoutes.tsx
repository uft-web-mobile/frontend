import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';


const SignRoutes: React.FC = () => {
  return (  
    <Routes>
      <Route path="/" element={<Login />} />   
    </Routes>
  );
};

export default SignRoutes;