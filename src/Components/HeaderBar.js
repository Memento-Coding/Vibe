import React from 'react'
import '../Styles/HeaderBar.css'
import { BiSearchAlt } from 'react-icons/bi'

function Header() {
  return (
    <div className='headerBox'>
      <div className='buscar'>
        <input type='text' placeholder='Buscar...' />
        <i className='buscarIcon'>
          <BiSearchAlt />
        </i>
      </div>
    </div>
  )
}

export { Header };