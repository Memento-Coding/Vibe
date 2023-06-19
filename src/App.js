
//import { LeftMenu } from './Components/LeftMenu';
//import { Header } from './Components/HeaderBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Inicio } from './Pages/Inicio';
import { Explorar } from './Pages/Explorar';
import { Albums } from './Pages/Albums';
import { Like } from './Pages/Like';
import { Microfono } from './Pages/Microfono';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/microfono" element={<Microfono />} />
          <Route path="/explorar" element={<Explorar />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/like" element={<Like />} />
        </Routes>
      </Router>
  );
}

export default App;
