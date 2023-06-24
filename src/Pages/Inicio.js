import React,{useContext} from 'react'
import { AuthContext } from '../context/AuthContext' 
import "../Styles/Inicio.css"
import { LeftMenu } from "../Components/LeftMenu"
import { Header } from "../Components/HeaderBar"
import { MusicPlayer } from '../Components/MusicPlayer'

function Inicio() {
  const {cerrarSesion} = useContext(AuthContext)

  const handleCerrarSesion = async () => {
    await cerrarSesion()
  }
  return (
    <div className='contenedor'>
      <LeftMenu />
      <Header />

    <div className='inicio' id='background'>
    
      <div className='mainInicio'>

        <button onClick={handleCerrarSesion}>cerrar Sesion</button>
      
      <div>

        </div>
      </div>
    </div>
    <MusicPlayer/>
    </div>
    
  )
}

export { Inicio }