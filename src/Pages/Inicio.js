import React from 'react'
import "../Styles/Inicio.css"
import { LeftMenu } from "../Components/LeftMenu"
import { Header } from "../Components/HeaderBar"
import { MusicPlayer } from '../Components/MusicPlayer'

function Inicio() {
  return (
    <div className='contenedor'>
      <LeftMenu />
      <Header />
    <div className='inicio' id='background'>
    
      <div className='mainInicio'>
      
        <div>

        </div>
      </div>
    </div>
    <MusicPlayer/>
    </div>
    
  )
}

export { Inicio }