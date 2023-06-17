import { Register } from './pages/Register';
import { Login } from './pages/login';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import { LeftMenu } from './Components/LeftMenu';
import { Header } from './Components/HeaderBar';


function App() {
  return (
    <div className="App">
      
      <div className='background'></div>
      <BrowserRouter>
       <Routes>
          <Route path='/login' element = {<Login/>}></Route>
          <Route path='/register' element = {<Register/>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
