import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faFileWord } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'



type Props = {
    icon: IconProp
    id: number,
    date: String,
    size: number,
    file: Boolean,

}

const Card = ({icon, id, date, size, file}:Props) => {
  return (
    <div className='h-56 w-64 bg-white rounded-lg p-2'>
        <div className='w-full h-32 bg-light-blue-100 rounded-lg flex justify-center items-center text-blue-300'>
            <FontAwesomeIcon icon={icon} className='fa-4x'/>
        </div>
        <div className='h-full w-full pt-2'>
            <h4 className='font-bold'><Link href={file?`project-manager/project/${id}`:`project-manager/${id}`}>Modele de support5.docx</Link></h4>
            <p className='text-gray-500'>{date}</p>
            <p className='text-gray-500'>{size}MB</p>
        </div>
    </div>
  )
}

export default Card