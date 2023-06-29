import React, { useEffect, useState } from 'react'
import "../Styles/Inicio.css"
import { LeftMenu } from "../Components/LeftMenu"
import { Header } from "../Components/HeaderBar"
import { MusicPlayer } from '../Components/MusicPlayer'
import axios from 'axios'


function Inicio() {

  const [song5, setSong5] = useState([]);

  const getSong5 = async () => {
    await axios.get('https://thriving-insect-production.up.railway.app/v1/song/random/5')
    .then(({ data }) => setSong5(data))
    .catch((error) => console.error(error));
  }

  useEffect(() => {
    getSong5();
  }, []);

  console.log({ song5 });


  return (
    <div className='contenedor'>
      <LeftMenu />
      <Header />
    <div className='inicio' id='background'>
    
      <div className='mainInicio'>
        
        
        
      </div>
      
    </div>
    <MusicPlayer/>
    </div>
    
  )
}

export { Inicio }