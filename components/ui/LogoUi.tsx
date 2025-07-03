import React from 'react'
import { RxVideo } from "react-icons/rx";
const LogoUi = () => {
  return (
    <div className='flex items-center gap-1'>
        <RxVideo size={40} color='red' />
        <h2 className='capitalize font-bold text-xl'>Movies streaming  studio</h2>
    </div>
  )
}

export default LogoUi