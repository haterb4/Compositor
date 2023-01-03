import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

type Props = {
    children: JSX.Element,
    title: String,
    titleColorClass?: String | undefined
    items?: number
}

const Accordion = ({children, title, titleColorClass, items}: Props) => {
  const [opened, setOpened] = useState(false)
  return (
    <div className='w-full'>
        <div className={`flex justify-between items-center w-full h-12 rounded-lg  px-2 cursor-pointer ${titleColorClass? titleColorClass:"bg-light-blue-100"}`}  onClick={() => setOpened(!opened)}>
            <h1 className='flex items-center font-bold'>{title}</h1>
            <div className='flex items-center justify-between w-16'>
                {items && <span className='h-8 w-8 rounded-full flex justify-center items-center bg-white'>{items}</span>}
                <span><FontAwesomeIcon icon={opened?faChevronUp:faChevronDown} /></span>
            </div>
        </div>
        { opened && (<div className='pl-4 mt-6 mb-4 w-full rounded-lg'>
            {children}
        </div>)}
    </div>
  )
}

export default Accordion