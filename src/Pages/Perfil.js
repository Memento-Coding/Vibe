import React, {useContext} from 'react'
import '../Styles/Perfil.css'
import {AuthContext} from '../context/AuthContext'
import { Table } from '../Components/Table'


function Perfil() {
  const{userLogin} = useContext(AuthContext)
  return (
    <div className='perfil'>
      <div className='Container-perfil'>
      <div className='photo'>
        <img src={userLogin.photoURL}  className="round-image" alt=''/>
      </div>
      <div className='data-user'>
          <h1 id='titulo'>Perfil</h1>
          <h1 id='name-user'>{userLogin.displayName}</h1>
          <h1 id='numero-canciones'>15 canciones favoritas</h1>

      </div>

      <div className='favorite-song'>
        <h1 id='generos'>Mis Generos Favoritos</h1>
        <br/>
        <h2 id='favoritos'>Rock</h2>

      </div>
    </div>
    <Table/>
    </div>
    
  )
}

export { Perfil };