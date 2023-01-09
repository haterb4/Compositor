import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const NotionFinder = () => {
    return (
        <section className='w-96 h-full border-2 rounded-lg p-2 flex flex-col justify-between overflow-hidden'>
            <div className='h-12 w-full border bg-gray-300 rounded-lg flex items-center pr-2'>
                <div className='h-10 w-10 flex items-center justify-center'><FontAwesomeIcon icon={faSearch}/></div>
                <input type='text' className='bg-transparent h-10 w-full outline-none' placeholder='Rechercher...'/>
            </div>
            <div className='bg-gray-100 w-full h-full m-auto mt-8'>

            </div>
        </section>
    )
}

export default NotionFinder