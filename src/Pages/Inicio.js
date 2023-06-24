import React,{useContext} from 'react'
import { AuthContext } from '../context/AuthContext' 
import "../Styles/Inicio.css"
import { LeftMenu } from "../Components/LeftMenu"
import { Header } from "../Components/HeaderBar"

function Inicio() {
  const {cerrarSesion} = useContext(AuthContext)

  const handleCerrarSesion = async () => {
    await cerrarSesion()
  }
  return (
    <div className='inicio' id='background'>
      <LeftMenu />
      <Header />
      <button onClick={handleCerrarSesion}>cerrar Sesion</button>
      
    </div>
  )
}

export { Inicio }