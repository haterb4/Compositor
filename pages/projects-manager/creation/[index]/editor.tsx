import React, { useEffect, useRef, useState } from 'react'

import Header from '../../../../components/Header'
import NotionFinder from '../../../../components/NotionFinder'
import ContentTable from '../../../../components/ContentTable'
import Editor from '../../../../components/TextEditor'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RawDraftContentState } from 'react-draft-wysiwyg'

type Props  = {
    children: JSX.Element
}

const EditorLayout = () => {
  const [editionMode, setEditionMode] = useState(true)
  const [editorContent, setEditorContent] = useState <RawDraftContentState>()
  const getProjectFile = async () => {
    await fetch(`/api/projects/getone`)
    .then((res) => res.json())
    .then((data) => {
      if (data.status === true) setEditorContent(data.content)
      else console.log('nothing')
    })
    .catch((e) => {
      console.log("une erreur est survenue")
      console.log(e)
    })
  }

  useEffect(() => {
    getProjectFile()
  }, [])

  return (
    <div className='w-full h-screen overflow-hidden pb-1 flex flex-col justify-between items-start relative'>
        <Header />
        <div className='w-full h-full px-4 pt-4 flex justify-between items-start overflow-hidden'>
            <ContentTable />
            <section className='w-full h-full flex flex-col justify-between items-start px-4 pb-1 overflow-hidden'>
              {/**<div className='h-16 w-full flex justiy-between items-center'>
                <div className='w-full h-12'>
                  <h1 className='font-bold text-3xl uppercase'>EDITION DE CONTENUS</h1>
                </div>
                <Button className='capitalize h-12 w-32 text-xl' onClick={() => setEditionMode(false)}>Generer</Button>
              </div>**/}
              <div className='m-auto h-full w-full rounded-lg bg-[#F8F9FA] pb-2 relative'>
                <Editor projectName='projectfilestate' editorContent={editorContent}/>
              </div>
            </section>
            <NotionFinder />
            {!editionMode && (
              <div className='absolute top-0 left-0 h-full w-full' style={{background: 'rgba(3, 3, 3, 0.4)'}}>
                <div className='relative h-full w-full flex justify-center items-center'>
                  <div className='w-1/2 h-1/2 bg-white '>
                  </div>
                  <button
                    className='absolute right-0 top-24 border border-white h-12 w-12 text-white flex justify-center items-center'
                    onClick={() => { setEditionMode(true);}}
                  ><FontAwesomeIcon icon={faClose}/></button>
                </div>
              </div>
            )}
        </div>
    </div>
  )
}

export default EditorLayout