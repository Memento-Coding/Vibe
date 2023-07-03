import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Explorar } from './Pages/Explorar';
import { Like } from './Pages/Like';
import { Microfono } from './Pages/Microfono';
import { Login } from './Pages/login';
import { Register } from './Pages/Register';
import { AuthProvider } from './context/AuthContext';
//import { Auth } from './Components/auth/Auth';
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
            <Route path="/inicio/explorar" element={
                    <Explorar />
                    } />
            <Route path="/inicio/like" element={
                    <Like />
                    } />
            <Route path="/inicio/microfono" element={
                    <Microfono />
                    } />  
            <Route path="/inicio/perfil" element={<Perfil />} />
            
          </Route>
                   
          
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;


