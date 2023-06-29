
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
import { AuthProvider } from './context/AuthContext';
import { Auth } from './Components/auth/Auth';
import { Perfil } from './Pages/Perfil';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={
                    <Inicio />
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
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
