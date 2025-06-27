import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import PageNotFound from './components/PageNotFound.jsx';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="*" element={ <PageNotFound /> } />
      </Routes>
      <Toaster /> 

    </div>
  )
}

export default App