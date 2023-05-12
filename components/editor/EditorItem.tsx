import { faClose, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment, useEffect, useState } from 'react'
import styles from './editor.module.css'
import TitleItem from './TitleItem'
import SectionItem from './SectionItem'
import ParagraphItem from './ParagraphItem'

export interface ItemOptionsProps {
    outAddSection: Function;
    outAddParagraph: Function;
}
const EditorItem = ({outAddSection, outAddParagraph}: ItemOptionsProps) => {
  const [children, setChildren] = useState<JSX.Element[]>([])
  const [newChild, setNewChild] = useState<JSX.Element>()
  const [options, setOptions] = useState(false)
  const [outOptions, setOutOptions] = useState(false)
  const [removeIndex, setRemoveIndex] = useState(-1)
  
  const addTitle = () => {
    setNewChild(
        <TitleItem />
    )
    setOptions(false)
  }
  const addSection = () => {
    setNewChild(
        <SectionItem outAddParagraph={addParagraph} outAddSection={addSection}/>
    )
    setOptions(false)
  }
  const addParagraph = () => {
    setNewChild(
        <ParagraphItem />
    )
    setOptions(false)
  }
  const removeItem = (index: number) => {
    const tmp = children
    tmp.splice(index, 1)
    setChildren(tmp)
  }
  useEffect(() => {
    if (newChild !== undefined) {
        setChildren([...children, newChild])
        setNewChild(undefined)
    }
  }, [newChild])
  
  useEffect(() => {
    if (children.length === 0) {
        setChildren([
            <TitleItem key={0}/>
        ])
    }
  }, [children])
  return (
    <div className='w-full relative flex flex-col items-end'>
      <div className={' w-full min-h-[50px]  py-6 mt-8 mb-2 hover:border-b-2 border-amber-900'}>
        {children?.map((elt, index) => {
            return (<Fragment key={index}>{elt}</Fragment>)
        })}
        {children.length === 0 && (
            <p>add some content</p>
        )}
      </div>
      <div className='w-full flex flex-col items-start justify-between h-10 absolute bottom-[-11px] z-50'>
        <div className={styles.editorItemContent + ' w-full h-5 border border-transparent hover:border-amber-900 transition-all flex justify-between items-center'}>
        {!options && (<div className={styles.editorActionIndicator + ' invisible hover:visible'}>action inside</div>)}
        {!options && (
            <div className={styles.editorItemOptions + ' invisible hover:visible'}>
                <button onClick={() => setOptions(true)} className={'h-[16px] w-[16px] rounded-full transition-all mr-2'}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                <button onClick={() => setOptions(true)} className={'h-[16px] w-[16px] rounded-full transition-all'}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        )}
        </div>
        <div className={styles.editorItemContent + ' w-full h-5 border border-transparent hover:border-amber-900 transition-all flex justify-between items-center'}>
        {!options && (<div className={styles.editorActionIndicator + ' invisible hover:visible'}>action outside</div>)}
        {!options && (
            <div className={styles.editorItemOptions + ' invisible hover:visible'}>
                <button onClick={() => setOptions(true)} className={'h-[16px] w-[16px] rounded-full transition-all mr-2'}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                <button onClick={() => setOutOptions(true)} className={'h-[16px] w-[16px] rounded-full transition-all'}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        )}
        </div>
      </div>
      
      {options && (<div className={' w-56 bg-transparent flex flex-col justify-end items-end relative'}>
        <button onClick={addSection} className='bg-white my-[6px] py-[5px] px-8 text-right rounded-md'>Part</button>
        <button onClick={addTitle} className='bg-white my-[6px] py-[5px] px-8 text-right rounded-md'>Title</button>
        <button onClick={addSection} className='bg-white my-[6px] py-[5px] px-8 text-right rounded-md'>Section</button>
        <button onClick={addSection}className='bg-white my-[6px] py-[5px] px-8 text-right rounded-md'>Chapter</button>
        <button onClick={addParagraph} className='bg-white my-[6px] py-[5px] px-8 text-right rounded-md'>Paragraph</button>
        <button onClick={() => setOptions(false)} className='absolute left-0 top-2 border border-blue-400 h-[30px] w-[30px] rounded-full'>
            <FontAwesomeIcon icon={faClose} />
        </button>
      </div>)}
      {outOptions && (<div className={' w-56 bg-transparent flex flex-col justify-end items-end relative'}>
        <button onClick={() => {outAddSection(); setOutOptions(false);}} className='bg-white my-[6px] py-[5px] px-8 text-right rounded-md'>Section</button>
        <button onClick={() => {outAddParagraph(); setOutOptions(false);}} className='bg-white my-[6px] py-[5px] px-8 text-right rounded-md'>Paragraph</button>
        <button onClick={() => setOutOptions(false)} className='absolute left-0 top-2 border border-blue-400 h-[30px] w-[30px] rounded-full'>
            <FontAwesomeIcon icon={faClose} />
        </button>
      </div>)}
      
    </div>
  )
}

export default EditorItem
