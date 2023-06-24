
import './App.css';
import { LeftMenu } from './Components/LeftMenu';
import { Header } from './Components/HeaderBar';


function App() {
  return (
    <div className="App">
      <LeftMenu />
      <Header />
      <div className='background'></div>
    </div>
  );
}

export default App;
