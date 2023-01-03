import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'



type Props = {
    icon: IconProp
    id: String,
    date: String,
    size: String,
    file: Boolean,
    name: String,
    fgClass?: String,
    bgClass?: String

}

const Card = ({icon, id, date, size, file, name, fgClass, bgClass}:Props) => {
  return (
    <div className='h-56 w-64 bg-white rounded-lg p-2'>
        <div className={`w-full h-32 ${bgClass? bgClass:'bg-light-blue-100'} rounded-lg flex justify-center items-center ${fgClass? fgClass :'text-blue-300'}`}>
            <FontAwesomeIcon icon={icon} className='fa-4x'/>
        </div>
        <div className='h-full w-full pt-2'>
            <h4 className='font-bold'><Link href={file?`project-manager/project/${id}`:`project-manager/${id}`}>{name}</Link></h4>
            <p className='text-gray-500'>{date}</p>
            <p className='text-gray-500'>{size}</p>
        </div>
    </div>
  )
}

export default Card