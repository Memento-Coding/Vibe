import React from 'react'
import "../Styles/Inicio.css"
import { LeftMenu } from "../Components/LeftMenu"
import { Header } from "../Components/HeaderBar"

function Inicio() {
  return (
    <div className='inicio' id='background'>
      <LeftMenu />
      <Header />
      
    </div>
  )
}

export { Inicio }