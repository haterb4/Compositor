import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ToolBarButton = ({icon, action}: {icon: IconProp, action?: Function}) => {
  return (
    <button onClick={() =>action ? action(): null} className='w-[30px] h-[30px] border flex justify-center items-center hover:bg-gray-100 transition-all'>
        <FontAwesomeIcon icon={icon}/>
    </button>
  )
}

export default ToolBarButton
