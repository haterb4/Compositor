import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { FC, MouseEventHandler, useEffect, useState } from 'react'
type Props = {
    icon: IconProp,
    children: String,
    bgClass?: String,
    fgClass?: String,
    href?: String,
    action?: MouseEventHandler | undefined
}
const AccordionButton: FC<Props> = ({icon, children, fgClass, bgClass, action, href}: Props) => {
  const [target, setTarget] = useState(``)
  useEffect(()=> {
    setTarget(`${window.location.origin}/${href}`)
  }, [href])
  return (
    <div className={`my-1 h-10 w-full flex justify-start items-center  rounded-lg ${bgClass?bgClass:'bg-light-green-700'} ${fgClass && fgClass}`}>
        {href
          ? 
          <Link href={target} className='h-full w-full text-left pl-2 flex items-center justify-start'>
            <FontAwesomeIcon icon={icon}/>
              <div className='ml-2'>{children}</div>
          </Link>
          
          :
          <button 
            className='h-full w-full text-left pl-2 flex items-center justify-start'
            onClick={action}
          >
              <FontAwesomeIcon icon={icon}/>
              <div className='ml-2'>{children}</div>
          </button>
        }
    </div>
  )
}

export default AccordionButton