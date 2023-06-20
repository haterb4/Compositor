import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ToolBarButton = (props) => {
  return (
    <button onClick={() =>props.action ? props.action(): null} className='w-[30px] h-[30px] border flex justify-center items-center hover:bg-gray-100 transition-all'>
        <FontAwesomeIcon icon={props.icon}/>
    </button>
  )
}

export default ToolBarButton
