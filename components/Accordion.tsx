import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

type Props = {
    children?: JSX.Element,
    title: String,
    titleColorClass?: String | undefined
    roundClass?: String | undefined
    childrenPaddingClass?: String | undefined,
    vsep?: String | undefined,
    items?: number,
    nodeType?: String,
    action?: Function | void,
}

const Accordion = ({children, title, titleColorClass, roundClass, childrenPaddingClass, items, action, vsep, nodeType}: Props) => {
  const [opened, setOpened] = useState(false)
  const togleOpened = () =>{
    setOpened(!opened)
    if (action){
        action()
    }
  }
  return (
    <div className={`w-full h-full ${vsep? vsep: ''}`}>
        <div 
          className={`flex justify-between items-center w-full h-12 ${roundClass? roundClass :'rounded-lg'}  px-2 cursor-pointer ${titleColorClass? titleColorClass:"bg-light-blue-100"}`} 
          onClick={togleOpened}
        >
            {<h1 className='flex items-center font-bold'>
                {nodeType &&(
                  <div
                    className={`h-10 w-10 rounded-full
                    ${nodeType.toLocaleLowerCase() ==='co'?
                    'bg-blue-200': nodeType.toLocaleLowerCase() ==='pt'? 
                    'bg-green-200':nodeType.toLocaleLowerCase() ==='ch'?
                    'bg-orange-200': nodeType.toLocaleLowerCase() ==='pr'?
                    'bg-red-200': nodeType.toLocaleLowerCase() ==='no'?
                    'bg-indigo-300': 'bg-amber-600'} text-white font-extrabold flex justify-center items-center mr-2`}>
                        {nodeType[0].toUpperCase()+nodeType[1].toLocaleLowerCase()}
                  </div>
                )}
                <span>{title}</span>
            </h1>}
            { nodeType && nodeType.toLocaleLowerCase() ==='no'
              ?''
              :<div className={`flex items-center justify-between ${items? 'w-16': ''}`}>
                  {items && <span className='h-8 w-8 rounded-full flex justify-center items-center bg-white'>{items}</span>}
                  <span><FontAwesomeIcon icon={opened?faChevronUp:faChevronDown} /></span>
              </div>
              
            }
        </div>
        { opened && (<div className={`${childrenPaddingClass? childrenPaddingClass: 'pl-4 mt-6 mb-4'}  w-full rounded-lg h-full`}>
            {children}
        </div>)}
    </div>
  )
}

export default Accordion