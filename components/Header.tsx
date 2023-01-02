import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFile, faSearch, faList } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='w-full sticky top-0 z-50 flex items-center justify-between px-4 py-2 bg-white h-28 shadow-md'>
        <div className='flex justify-start items-center'>
          <h1 className='font-extrabold text-7xl px-6'>XCCM</h1>
          <div className='relative h-full flex items-center justify-start px-4'>
            <div className='w-1 h-14 bg-gradient-to-b from-amber-900 via-amber-700 to-amber-500'></div>
            <p className='text-3xl ml-4'>Module de Compositon de Contenus</p>
          </div>
        </div>
        <div className='h-24 w-24'><Image src='/images/LOGO-POLYTECHNIQUE-01-scaled.jpg' width={200} height={200} alt="logo ENSPY"/></div>
    </div>
  )
}

export default Header