import React from 'react'
import { 
    IconButton 
} from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFile } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className='flex items-center bg-red-200'>
        <IconButton 
            size='lg'
            color='gray'
            ripple={true}
            className='hidden md:inline-flex h-20 w-20 border-0'
            onClick={() => { alert('hello') }}
        >
            <FontAwesomeIcon icon={faBars} />
        </IconButton>
        <FontAwesomeIcon icon={faFile} className='text-blue-400'/>
    </div>
  )
}

export default Header