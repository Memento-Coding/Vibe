import React, { useState } from 'react'
import '../Styles/LeftMenu.css'
import { Menu } from '../Components/Menu'
import { MenuList } from '../Components/MenuList'
import '../Styles/HeaderBar.css'
import { BiSearchAlt } from 'react-icons/bi'
import foto from '../img/foto-perfil.jpg'
import { Link, Outlet } from 'react-router-dom';
import { MusicPlayer } from '../Components/MusicPlayer'
import { useNavigate } from 'react-router-dom';

function Base() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path, { replace: true });
  };
  return (
    <div className='Base'>
        <div className="leftmenu">
            <div className='logo-container'>
                <i><img className='logo' src={require('../img/wave-sound.png')} alt='logo'/></i>
                <h2>Vibe</h2>
          
            </div>

        <Menu menuObject={MenuList} navigateTo={navigateTo}/>
        </div>
        <div className='contenido'>
            <div className='headerBox'>
                <div className='buscar'>
                    <input type='text' placeholder='Buscar...' />
                    <i className='buscarIcon'>
                        <BiSearchAlt />
                    </i>
                </div>
                <div className='perfil' onClick={() => {setOpen(!open)}}>
                    <img src={ foto } alt=''></img>
                </div>
                <div className={`desplegable ${open ? 'active' : 'inactive'}`}>
                    <ul>
                        <li className='dropdownItem'>
                            <Link to={"/perfil"}>Perfil</Link>
                        </li>
                        <li>
                            <a href='#'>Cerrar Sesión</a>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet/>
        </div>
        <MusicPlayer/>
        
    </div>
  )
}

export { Base } 