import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import styles from './editor.module.css'

const TitleItem = () => {
    const [value, setValue] = useState('New title here')
    const [editing, setEditing] = useState(true)
    const handleInput = (value: string) => {
        setValue(value)
    }
    
    return (
        <div className={' w-full relative'}>
            {!editing && (<h1 className={styles.titleText + ' text-5xl my-2 py-1'}>{value}</h1>)}
            {!editing && (
                <div className={styles.titleOptions + " z-50 invisible hover:!visible transition-all absolute bottom-[-25px] left-0 flex justify-between items-center w-[70px]"}>
                    <button
                        onClick={() => setEditing(true) }
                        className="text-amber-900 p-[6px] border rounded-full flex justify-center items-center transition-all border-amber-300 hover:border-blue-500">
                            <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                    className="text-amber-900 p-[6px] border rounded-full flex justify-center items-center transition-all border-amber-300 hover:border-blue-500">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            )}
            {editing && 
            (<div className="py-2 w-full">
                <input
                    onKeyDown={ e => { if (e.key === 'Enter') setEditing(false) }}
                    onChange={e => handleInput(e.target.value)}
                    value={value}
                    type="text"
                    className='w-full text-5xl my-3 py-2 border-0 outline-none bg-transparent'
                    placeholder='New title here'
                />
            </div>)}
        </div>
    )
}

export default TitleItem