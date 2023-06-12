/* eslint-disable react-hooks/exhaustive-deps */
import { faAlignCenter, faAlignJustify, faAlignLeft, faAlignRight, faClose, faEdit, faHeading, faPlus, faRedo, faSave, faUndo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@material-tailwind/react'
import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import NotionFinder from '../../../../components/NotionFinder'
import Header from '../../../../components/Header'
import Accordion from '../../../../components/Accordion'
import ToolBarButton from '../../../../components/editor/ToolBarButton'
import doc, { NodeType, newDoc } from '../../../../data/doc'
import { DocData } from '../../../api/documents/[id]'
import parse from 'html-react-parser';
import { buildContentTableUtils } from '../../../../components/editor/editorUtils'
import EditorItem from '../../../../components/editor/EditorItem'

const DraftEditor = () => {
    //show the editing mode
    const [editionMode, setEditionMode] = useState(true)

    //document squeleton: this will content all the document json structure at the end of work
    const [document, setDocument] = useState<DocData>(newDoc)

    const [documentContent, setDocumentContent] = useState<DocData[]>([])

    //content table jsx element after building
    const [contentTable, setContentTable] = useState<JSX.Element>()

    const [contentTree, setContentTree] = useState<JSX.Element>()

    //contains jsx elements that will be rendered
    const [editorJSXDocument, setEditorJSXDocument] = useState<JSX.Element[]>([])

    const [newChild, setNewChild] = useState<JSX.Element>()

    const [options, setOptions] = useState(false)
    //receiving new partial document and update global document
    const editContent = (newDoc: DocData, index: number) => {
      if (index !== undefined){
        let docContent:DocData[] | undefined = documentContent
        if (docContent !== undefined){
          docContent[index] = newDoc
          setDocumentContent(docContent)
          const doc = document
          doc.content = documentContent as DocData[]
          setDocument(doc)
          let contentTableString = getContentTable(document)
          const contentTableJSX = parse(contentTableString) as JSX.Element
          //rendering the content table
          setContentTable(contentTableJSX) 
        }
        //console.log(document)
        //console.log(contentTable)
      }
    }

    //show the preview mode
    const previewEditorContent = () => {
        setEditionMode(false)
    }

    const getContentTable = (partialDocument: DocData): string => {
      console.log('base document: ', partialDocument)
      const contentTable = buildContentTableUtils(partialDocument)
      //console.log('content table', contentTable)
      return contentTable
    }
    //hooks usEeffect

    //on document first build
    useEffect(() => {
      // set the document squeleton
      if(document === undefined){
        setDocument(newDoc)
        //retreiving content table
        let contentTableString = getContentTable(document)
        const contentTableJSX = parse(contentTableString) as JSX.Element
        //rendering the content table
        setContentTable(contentTableJSX) 
        //console.log(contentTable)
      }

      if (editorJSXDocument.length === 0){
        setEditorJSXDocument([
          <EditorItem key={0} parenStateModifier={editContent} itemId={1}/>,
        ])
      }
    }, [])

    //when the document change
    useEffect(() => {
      // set the document squeleton
      if(document === undefined){
        setDocument(newDoc)
      }
      else{
        //retreiving content table
        let contentTableString = getContentTable(document)
        const contentTableJSX = parse(contentTableString) as JSX.Element
        //rendering the content table
        setContentTable(contentTableJSX) 
      }
    }, [document])

    useEffect(() => {
      if (newChild !== undefined) {
        setEditorJSXDocument([...editorJSXDocument, newChild])
          setNewChild(undefined)
      }
    }, [newChild])
  return (
    <div className='w-full h-screen overflow-hidden pb-1 flex flex-col justify-between items-start relative'>
        <Header />
        <div className='w-full h-full px-4 pt-4 flex justify-between items-start overflow-hidden'>
          {/* the left corner mode */}
          <section className='w-96 h-full border-2 flex flex-col justify-between rounded-lg overflow-hidden p-2 relative'>
            <div className='w-full h-full'>
              <h1>Table of contents</h1>
              <div className='!text-left'>
                {contentTable ? contentTable : "empty" }
              </div>
            </div>
            <div className='flex justify-end h-12 w-12 rounded-full absolute bottom-0 right-1'><Button className='w-12 h-12 rounded-full flex justify-center items-center'><FontAwesomeIcon icon={faPlus}/></Button></div>
          </section>
            <section className='w-full h-full flex flex-col justify-between items-start px-4 pb-1 overflow-hidden'>
              <div className='h-16 w-full flex justiy-between items-center'>
                <div className='w-full h-12'>
                  <h1 className='font-bold text-3xl uppercase'>EDITION DE CONTENUS</h1>
                </div>
                <Button className='capitalize h-12 w-32 text-xl' onClick={previewEditorContent}>Generer</Button>
              </div>
              <div className='m-auto h-full w-full rounded-lg bg-[#F8F9FA] pb-2 relative overflow-hidden'>
                {/* the editor zone */}
                <div className="relative h-full overflow-hidden">
                  <div className='w-full h-full overflow-hidden flex flex-col relative'>
                    {/* 
                      the toolbar
                      all text manipulations functions
                    */}
                    <div className='w-full px-4 flex justify-center items-center h-[50px] bg-white border'>
                      <div className='h-full w-full flex justify-between items-center'>
                        <div className='flex'>
                          <ToolBarButton icon={faAlignLeft} />
                          <ToolBarButton icon={faAlignCenter} />
                          <ToolBarButton icon={faAlignRight} />
                          <ToolBarButton icon={faAlignJustify} />
                          <ToolBarButton icon={faHeading} />
                          <ToolBarButton icon={faEdit} />
                          <ToolBarButton icon={faUndo} />
                          <ToolBarButton icon={faRedo} />
                        </div>
                        <div>
                          <ToolBarButton icon={faSave} />
                        </div>
                      </div>
                    </div>
                    {/*
                      the textEditor
                      the content editable nested components rendering side
                    */}
                    <div  className='w-full h-full m-auto mt-2 px-4 overflow-y-scroll focus:border-0'>
                      {editorJSXDocument.map((child, index) => {
                        return (
                          <Fragment key={index}>{child}</Fragment>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* notion finder zone */}
            <NotionFinder />
            {!editionMode && (
              <div className='absolute top-0 left-0 h-full w-full' style={{background: 'rgba(3, 3, 3, 0.4)'}}>
                <div className='relative h-full w-full flex justify-center items-center'>
                  <div className='w-1/2 h-1/2 bg-white opacity-100 z-50'>
                    
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

export default DraftEditor
