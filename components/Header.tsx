import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFile, faSearch, faList } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className='sticky top-0 z-50 flex items-center px-4 py-2 shadow bg-white'>
        <button className='md:inline-flex h-8 w-8 flex items-center justify-center border-0  text-blue-500'>
            <FontAwesomeIcon icon={faBars} />
        </button>
        <FontAwesomeIcon icon={faFile} className='text-blue-400 fa-2x ml-4'/>
        <h1 className='ml-4 text-gray-700 text-2xl'>XCCM</h1>

        <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg ml-4 focus-within:text-gray-600 focus-within:shadow-md">
          <FontAwesomeIcon icon={faSearch} className='text-gray'/>
          <input type="text"  placeholder='search' className='flex-grow px-5 text-base bg-transparent outline-none'/>
        </div>
        <button className='md:inline-flex h-8 w-8 flex items-center justify-center border-0  text-blue-500' >
          <FontAwesomeIcon icon={faList} />
        </button>
        <img loading='lazy' className='cursor-pointer hidden h-12 w-12 rounded-full ml-2' src="/images/github.png" alt="nothing" />
    </div>
  )
}

export default Header