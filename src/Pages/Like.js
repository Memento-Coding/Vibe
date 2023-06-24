import React from 'react'
import { LeftMenu } from "../Components/LeftMenu"
import { Header } from "../Components/HeaderBar"

function Like() {
  return (
    <div className='like' id='background'>
      <LeftMenu />
      <Header />
    </div>
  )
}

export { Like }