import React from 'react'
import { JsxElement } from 'typescript'
import Header from '../components/Header'

type Props = {
    children: JSX.Element,
}
const ManagerLayouth = ({children}: Props) => {
  return (
    <div className='w-full h-screen overflow-hidden flex flex-col justify-between items-start'>
        <Header />
        <div className='w-full h-full m-auto mt-0 overflow-hidden'>{children}</div>
    </div>
  )
}

export default ManagerLayouth