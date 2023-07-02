
//import { LeftMenu } from './Components/LeftMenu';
//import { Header } from './Components/HeaderBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Explorar } from './Pages/Explorar';
import { Albums } from './Pages/Albums';
import { Like } from './Pages/Like';
import { Microfono } from './Pages/Microfono';
import { Login } from './Pages/login';
import { Register } from './Pages/Register';
import { AuthProvider } from './context/AuthContext';
import { Auth } from './Components/auth/Auth';
import { Perfil } from './Pages/Perfil';
import { Base } from './Pages/Base';
import { Inicio } from './Pages/Inicio';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Base />}>
          <Route path="/" element={
                    <Inicio />
                    } />
            <Route path="/microfono" element={
                    <Microfono />
                    } />
            <Route path="/explorar" element={
                    <Explorar />
                    } />
            <Route path="/albums" element={
                    <Albums />
                    } />
            <Route path="/like" element={
                    <Like />
                    } />
          </Route>           
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
