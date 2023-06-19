import React from 'react'
import { LeftMenu } from "../Components/LeftMenu"
import { Header } from "../Components/HeaderBar"

function Albums() {
  return (
    <div className='albums' id='background'>
      <LeftMenu />
      <Header />
    </div>
  )
}

export { Albums }