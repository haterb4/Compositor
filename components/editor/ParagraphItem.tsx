import React, { useState } from 'react'
import sanitizeHtml from "sanitize-html"
import ContentEditable from 'react-contenteditable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './editor.module.css'

const ParagraphItem = () => {
    const [value, setValue] = useState('New Paragraph')
    const [editing, setEditing] = useState(true)
  return (
    <div className='relative'>
     {!editing && <p className={styles.titleText + ' my-2'}>{value}</p>}
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
      {editing && (
      <textarea onKeyDown={ e => { if (e.key === 'Enter') setEditing(false) }} className='w-full h-56 bg-transparent outline-none border-0' value={value} onChange={(e) => {
        setValue(e.target.value)
      }}/>)}
    </div>
  )
}

export default ParagraphItem
