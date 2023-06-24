
//import { LeftMenu } from './Components/LeftMenu';
//import { Header } from './Components/HeaderBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Inicio } from './Pages/Inicio';
import { Explorar } from './Pages/Explorar';
import { Albums } from './Pages/Albums';
import { Like } from './Pages/Like';
import { Microfono } from './Pages/Microfono';
import { Login } from './Pages/login';
import { Register } from './Pages/Register';

import { Perfil } from './Pages/Perfil';
import { AuthProvider } from './context/AuthContext';
import { Auth } from './Components/auth/Auth';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/" element={<Login />} />
          <Route path="/inicio" element={
                  <Auth><Inicio /></Auth>
                  } />
          <Route path="/microfono" element={
                  <Auth><Microfono /></Auth>
                  } />
          <Route path="/explorar" element={
                  <Auth><Explorar /></Auth>
                  } />
          <Route path="/albums" element={
                  <Auth><Albums /></Auth>
                  } />
          <Route path="/like" element={
                  <Auth><Like /></Auth>
                  } />
        
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
