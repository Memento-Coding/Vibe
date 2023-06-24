import React from 'react'
import { LeftMenu } from "../Components/LeftMenu"
import { Header } from "../Components/HeaderBar"

function Explorar() {
  return (
    <div className='explorar' id='background'>
      <LeftMenu />
      <Header />
    </div>
  )
}

export { Explorar }