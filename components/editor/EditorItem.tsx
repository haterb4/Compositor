/* eslint-disable react-hooks/exhaustive-deps */
import { faClose, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment, useEffect, useState } from 'react'
import styles from './editor.module.css'
import TitleItem from './TitleItem'
import SectionItem from './SectionItem'
import ParagraphItem from './ParagraphItem'
import { DocData } from '../../pages/api/documents/[id]'
import ChapterItem from './ChapterItem'
import PartItem from './PartItem'

export interface ItemOptionsProps {
    outAddSection?: Function;
    outAddParagraph?: Function;
    parenStateModifier: Function;
    itemId: number;
    title?: string;
}
const EditorItem = (props: ItemOptionsProps) => {
  const [editorContent, setChildren] = useState<JSX.Element[]>([])
  const [newChild, setNewChild] = useState<JSX.Element>()
  const [options, setOptions] = useState(false)
  const [outOptions, setOutOptions] = useState(false)
  const [removeIndex, setRemoveIndex] = useState(-1)
  const [EditorDocument, setEditorDocument] = useState<DocData>()
  const [editorDocumentContent, setEditorDocumentContent] = useState<DocData[]>([])


  const editContent = (newDoc: DocData, index: number) => {
    //console.log("editor: ", newDoc)
    props.parenStateModifier(newDoc, props.itemId + index)
  }
  const addTitle = () => {
    setNewChild(
        <TitleItem parenStateModifier={editContent} itemId={editorContent.length - 1}/>
    )
    setOptions(false)
  }
  const addSection = () => {
    setNewChild(
        <SectionItem parenStateModifier={editContent} itemId={editorContent.length - 1}/>
    )
    setOptions(false)
  }
  const addChapter = () => {
    setNewChild(
        <ChapterItem parenStateModifier={editContent} itemId={editorContent.length - 1}/>
    )
    setOptions(false)
  }
  const addPart = () => {
    setNewChild(
        <PartItem parenStateModifier={editContent} itemId={editorContent.length - 1}/>
    )
    setOptions(false)
  }
  const addParagraph = () => {
    console.log(editorContent.length)
    setNewChild(
        <ParagraphItem parenStateModifier={editContent} outAddSection={() => null} outAddParagraph={() => null} itemId={editorContent.length - 1}/>
    )
    setOptions(false)
  }
  const removeItem = (index: number) => {
    const tmp = editorContent
    tmp.splice(index, 1)
    setChildren(tmp)
  }

  useEffect(() => {
    if (newChild !== undefined) {
        setChildren([...editorContent, newChild])
        setNewChild(undefined)
    }
  }, [newChild])

  //initial component build adding title
  useEffect(() => {
    if (editorContent.length === 0) {
        setChildren([
            <TitleItem key={0} outAddParagraph={addParagraph} outAddSection={addSection} parenStateModifier={props.parenStateModifier} itemId={0} title={props.title ? props.title : 'Part Title here'}/>
        ])
    }
  }, [editorContent, editorDocumentContent])

  useEffect(() => {
    editorDocumentContent.map((item: DocData, index: number) => {
      props.parenStateModifier(item, index)
    })
  }, [editorDocumentContent])
  
  return (
    <div className='w-full relative flex flex-col items-end'>
      <div className={' w-full min-h-[50px]  py-6 mt-2 hover:border-b-2 border-amber-900'}>
        {editorContent?.map((elt, index) => {
            return (<Fragment key={index}>{elt}</Fragment>)
        })}
        {editorContent.length === 0 && (
            <p>add some content</p>
        )}
      </div>
      <div className='w-full flex flex-col items-start justify-between h-10 absolute bottom-[-11px] z-50'>
        {!options &&(
        <div className={styles.editorItemContent + ' w-full h-5 border border-transparent hover:border-amber-900 transition-all flex justify-between items-center'}>
          <div className={styles.editorItemOptions + ' invisible hover:visible w-full h-full flex items-center justify-center'}>
              <button onClick={() => setOptions(true)} className={'h-[16px] w-[16px] border flex justify-center items-center text-amber-900 rounded-full transition-all border-amber-900'}>
                  <FontAwesomeIcon icon={faPlus} />
              </button>
          </div>
        </div>)}
      </div>
      {options && (
        <div className={'absolute bg-white w-full z-20'}>
          <div className={'w-full bg-transparent flex justify-center items-center relative'}>
            <div className='w-full flex justify-between items-center'>
              <div className='flex items-start mr-8 w-[calc(100%-350px)]'>
                <div className='flex flex-col p-4 mr-20'>
                  <h1 className='mb-4'>Adding Bloc</h1>
                  <button onClick={addChapter}className='flex justify-start items-center my-[6px] py-[8px] px-8 text-left hover:text-blue-400'>New Chapter</button>
                  <button onClick={addPart} className='flex justify-start items-center my-[6px] py-[8px] px-8 text-left hover:text-blue-400'>Part</button>
                  <button onClick={addSection} className='flex justify-start items-center my-[6px] py-[8px] px-8 text-left hover:text-blue-400'>Section</button>
                </div>
                <div className='flex flex-col p-4'>
                  <h1 className='mb-4'>Adding Text</h1>
                  <button onClick={addTitle} className='flex justify-start items-center my-[6px] py-[8px] px-8 text-left hover:text-blue-400'>Title</button>
                  <div><button onClick={addParagraph} className='flex justify-start items-center my-[6px] py-[8px] px-8 text-left hover:text-blue-400'>Paragraph</button></div>
                </div>
              </div>
              <div className='px-4'>
              <h1 className='mb-4'>Choose where apply changes</h1>
                <div className='flex items-center justify-between py-2'>
                  <label className='underline' htmlFor="inside">Insert inside</label>
                  <input type="checkbox" id='inside'className='mx-4 h-5 w-5' checked /> 
                </div>
              </div>
            </div>
            <button onClick={() => setOptions(false)} className='absolute right-0 top-2 h-[30px] w-[30px] rounded-full'>
                <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default EditorItem
