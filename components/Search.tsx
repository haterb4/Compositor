import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import IncreaseButton from './IncreaseButton'

const Search = () => {
  const [filterNumber, setFilterNumber] = useState(0)
  const [keyword, setKeyword] = useState('')
  const search = () => {
    alert(keyword)
  }  
  return (
    <div className='w-full h-20 p-2'>
        <div className='w-full h-full border-2 rounded-lg  flex justify-between items-center p-1 '>
            <div className='w-80 h-full bg-blue-gray-100 rounded-lg flex justify-start items-center'>
                <div className='h-12 w-12 flex justify-center items-center'><FontAwesomeIcon icon={faSearch} /></div>
                <input type="text" onKeyDown={ e => { if (e.key === 'Enter') search() }} onChange={e => {setKeyword(e.target.value)}} value={keyword} className='bg-transparent text-black h-10 w-full outline-none' placeholder='Rechercher...'/>
            </div>
            <div className='flex items-center'>
                <div>
                    <span className='mr-2'>Trier par: </span>
                    <select name="" id="" className='h-12 px-2 rounded-lg outline-none bg-white border'>
                        <option value="">Modifier Le</option>
                    </select>
                </div>
                <IncreaseButton state={filterNumber} stater={setFilterNumber} />
            </div>
        </div>
    </div>
  )
}

export default Search