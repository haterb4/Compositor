import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
type Props = {
    icon: IconProp,
    children: String,
    bgClass?: String,
    fgClass?: String,
}
const AccordionButton = ({icon, children, fgClass, bgClass}: Props) => {
  return (
    <div className={`my-1 h-10 w-full flex justify-start items-center  rounded-lg ${bgClass?bgClass:'bg-light-green-700'} ${fgClass && fgClass}`}>
        <button className='h-full w-full text-left pl-2 flex items-center justify-start'>
            <FontAwesomeIcon icon={icon}/>
            <div className='ml-2'>{children}</div>
        </button>
    </div>
  )
}

export default AccordionButton