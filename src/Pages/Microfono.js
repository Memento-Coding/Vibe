import React from 'react'
import { LeftMenu } from "../Components/LeftMenu"
import { Header } from "../Components/HeaderBar"

function Microfono() {
  return (
    <div className='microfono' id='background'>
      <LeftMenu />
      <Header />
    </div>
  )
}

export { Microfono }