import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AddSong } from './Pages/AddSong';
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
          <Route path="/inicio" element={<Base />}>
            <Route path="/inicio" element={
                    <Inicio />
                    } />
            <Route path="/inicio/addsong" element={
                    <AddSong />
                    } />  
            <Route path="/inicio/perfil" element={<Perfil />} />
            
          </Route>
                   
          
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;


