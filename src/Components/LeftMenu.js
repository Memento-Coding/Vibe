import React from 'react'
import '../Styles/LeftMenu.css'
import { Menu } from './Menu'
import { MenuList } from './MenuList'


function LeftMenu() {
  return (
    <div className="leftmenu">
        <div className='logo-container'>
          <i><img className='logo' src={require('../img/wave-sound.png')} alt='logo'/></i>
          <h2>Vibe</h2>
          
        </div>
        <div className='menulist'>

        </div>

        <Menu menuObject={MenuList}/>
    </div>
  )
}

export { LeftMenu }