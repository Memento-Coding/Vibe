import React,{useContext} from 'react'
import { AuthContext } from '../context/AuthContext' 
import "../Styles/Inicio.css"
import { LeftMenu } from "../Components/LeftMenu"
import { Header } from "../Components/HeaderBar"
import { Perfil } from "../Components/Perfil"
import { Table } from '../Components/Table'


function Inicio() {
  const {cerrarSesion} = useContext(AuthContext)

  const handleCerrarSesion = async () => {
    await cerrarSesion()
  }

  //<button onClick={handleCerrarSesion}>cerrar Sesion</button>
  return (
    <div className='inicio' id='background'>
      <LeftMenu />
      <Header />
      <Perfil/>
      <Table/>
      
      
    </div>
  )
}

export { Inicio }