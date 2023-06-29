import React, { useState } from 'react'
import '../Styles/HeaderBar.css'
import { BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import foto from '../img/foto-perfil.jpg'


function Header() {
    const [open, setOpen] = useState(false);
  return (
    <div className='headerBox'>
      <div className='buscar'>
        <input type='text' placeholder='Buscar...' />
        <i className='buscarIcon'>
          <BiSearchAlt />
        </i>
      </div>
      <div className='perfil' onClick={() => {setOpen(!open)}}>
        <img src={foto} alt='Perfil'></img>
      </div>
      <div className={`desplegable ${open ? 'active' : 'inactive'}`}>
        <ul>
          <li className='dropdownItem'>
            <Link to={"/perfil"}>Perfil</Link>
          </li>
          <li>
            <Link to={"/login"}>Cerrar Sesión</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}



export { Header };