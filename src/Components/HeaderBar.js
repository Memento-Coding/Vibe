import React, { useState } from 'react'
import '../Styles/HeaderBar.css'
import { BiSearchAlt } from 'react-icons/bi'
import foto from '../img/foto-perfil.jpg'
import { Link } from 'react-router-dom';


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
        <img src={ foto }></img>
      </div>
      <div className={`desplegable ${open ? 'active' : 'inactive'}`}>
        <ul>
          <li className='dropdownItem'>
            <Link to={"/perfil"}>Perfil</Link>
          </li>
          <li>
            <a>Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </div>
  )
}



export { Header };