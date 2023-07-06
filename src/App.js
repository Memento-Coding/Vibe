import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Inicio } from './Pages/Inicio';
import { Explorar } from './Pages/Explorar';
import { Albums } from './Pages/Albums';
import { Like } from './Pages/Like';
import { Microfono } from './Pages/Microfono';
import { Login } from './Pages/login';
import { Register } from './Pages/Register';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/microfono" element={<Microfono />} />
          <Route path="/explorar" element={<Explorar />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/like" element={<Like />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
