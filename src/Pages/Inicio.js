import React, {useContext} from 'react'
import "../Styles/Inicio.css"
import { LeftMenu } from "../Components/LeftMenu"
import { Header } from "../Components/HeaderBar"
import { Perfil } from "../Components/Perfil"
import { Table } from '../Components/Table'




function Inicio() {
  const token = localStorage.getItem("token");
  console.log(token)
  
  
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