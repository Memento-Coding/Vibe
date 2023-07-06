import React, { useContext } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();


  const handleLogout = () => {
  
    localStorage.removeItem("token");
    localStorage.removeItem("decodedToken");


    navigate("/");

  
  };

  return (
    <div className='headerBox'>
      <div className='buscar'>
        <input type='text' placeholder='Buscar...' />
        <i className='buscarIcon'>
          <BiSearchAlt />
        </i>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </div>
  )
}

export { Header };
