import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faFolder, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import postAPIData from '../data/postApiData'



type Props = {
    icon?: IconProp
    id?: String,
    date?: String,
    size?: String,
    file?: Boolean,
    name: String,
    fgClass?: String,
    bgClass?: String
    href: String,
    action?: Function,
}

const Card = ({name, fgClass, bgClass, href, action}:Props) => {
  const [target, setTarget] = useState(``)
  useEffect(()=> {
    setTarget(`${window.location.origin}/${href}`)
  }, [href])
  const promptName = async () => {
    const fname = prompt("type the folder name")
    if (name === fname) {
      action? action(): null
    }
    else alert("incorrect name")
  }
  return (
    <div className='h-56 w-64 bg-white rounded-lg p-2 relative'>
        <div className={`w-full h-32 ${bgClass? bgClass:'bg-light-blue-100'} rounded-lg flex justify-center items-center ${fgClass? fgClass :'text-blue-300'}`}>
            <FontAwesomeIcon icon={faFolder} className='fa-4x'/>
        </div>
        <div className='24 w-full pt-2'>
            <h4 className='font-bold w-full'><Link href={target}>{name}</Link></h4> 
            <p className='text-gray-500'>22/09/2010</p>
            <p className='text-gray-500'>25 Ko</p>
        </div>
        <button onClick={promptName} className="absolute right-4 bottom-5 h-6 w-6 bg-white text-red-500 flex justify-center items-center">
          <FontAwesomeIcon icon={faTrash}/>
        </button>
    </div>
  )
}

export default Card