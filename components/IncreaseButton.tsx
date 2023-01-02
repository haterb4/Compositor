import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface CallbackOneParam<T1, T2 = void> {
    (param: T1): T2
}

type Props = {
    state: number,
    stater: Function,
}

const IncreaseButton = ({state, stater}: Props) => {
  const increment = () => {
    stater(state+1)
  }
  const decrement = () => {
    if (state > 0) stater(state-1)
  }
  return (
    <div className='flex justify-between items-center h-12 border mx-2 rounded-lg px-2 w-20'>
        <input type="text" className='h-8 w-full outline-none' value={state} onChange={ e => stater(e.target.value) }/>
        <div className='flex flex-col justify-center h-12'>
            <button className='h-3 flex justify-center items-center' onClick={increment}><FontAwesomeIcon icon={faChevronUp}/></button>
            <button className='h-3 flex justify-center items-center' onClick={decrement}><FontAwesomeIcon icon={faChevronDown}/></button>
        </div>
    </div>
  )
}

export default IncreaseButton