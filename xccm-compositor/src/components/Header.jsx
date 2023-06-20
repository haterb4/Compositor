import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoENSPY from '../assets/images/LOGO-POLYTECHNIQUE-01-scaled.jpg'

const Header = () => {
  return (
    <div className='w-full sticky top-0 z-50 flex items-center justify-between px-4 py-2 bg-white h-24 shadow-md'>
        <div className='flex justify-start items-center'>
            <h1 className='font-extrabold text-7xl px-6'><NavLink to='/'>XCCM</NavLink></h1>
            <div className='relative h-full flex items-center justify-start px-4'>
                <div className='w-1 h-16 bg-gradient-to-b from-amber-900 via-amber-700 to-amber-500'></div>
                <p className='text-3xl ml-4'>Module de Compositon de Contenus</p>
            </div>
        </div>
        <div className='h-20 w-20'><img src={LogoENSPY} width={200} height={200} alt="logo ENSPY"/></div>
    </div>
  )
}

export default Header