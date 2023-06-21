import React, { useState, useEffect, useRef } from 'react'
import './CreationEditor.css'
import DOMPurify from 'dompurify'

import { faPlus, faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    Header,
    NotionFinder,
    ToolBarButton,
    NodesCard,
    RichTextEditor
} from '../../components'

function CreationEditor() {
    const [isModalActive, setIsModalActive] = useState(false)
    const [isNodeTitleModalActive, setIsNodeTitleActive] = useState(false)
    const [isNotionEditorActive, setIsNotionEditorActive] = useState(false)
    const [tableOfContents, setTableOfcontents] = useState([
        {
            nodeType: 'DOC',
            nodeTitle: 'Titre de cours',
            nodeLevel: 'Co',
            htmlContent: '',
            isClicked: false,
            isEnterPressed: false
        }
    ])
    const [tableOfContentsComponents, setTableOfContentsComponents] = useState([])
    const [selectedNode, setSelectedNode] = useState(null)
    const [enterPressedNotion, setEnterPressedNotion] = useState(null)

    let defaultHTMLString = ""
    // const sampleHTML = '<p>Alfred Hetsron Yepnjio</p><ul><li><strong>Sample</strong></li></ul><ol type="1"><li>you</li></ol><ul><li>content</li><li>state</li></ul><p></p>'
    const [htmlEditorContent, setHtmlEditorContent] = useState(null)
    const [newHTMLContent, setNewHTMLContent] = useState(null)
    // const [defaultHTMLString, setDefaultHTMLString] = useState(null)
    const [jsonEditorContent, setJsonEditorContent] = useState(null)

    const [documentHTML, setDocumentHTML] = useState([])

    const [addNodeOptions, setAddNodeOptions] = useState([])
    const [addNodeInfo, setAddNodeInfo] = useState(null)
    const [addNodeTitle, setAddNodeTitle] = useState("")

    const targetHTMLParseRef = useRef(null)
    const documentHTMLRef = useRef(null)

    const parseStringToHTML = (htmlString) => {
        const parser = new DOMParser();
        const parsedHTML = parser.parseFromString(htmlString, 'text/html');
        return parsedHTML.body;
    }

    const setEnterPressNotionInTOC = (nodeInfo) => {
        setEnterPressedNotion(nodeInfo)
        if(nodeInfo){
            // setDefaultHTMLString(nodeInfo.htmlContent)
            defaultHTMLString = nodeInfo.htmlContent
            let tempTOC = [...tableOfContents]
            setTableOfcontents([])
            tempTOC[nodeInfo.index].isClicked = nodeInfo.isClicked
            tempTOC[nodeInfo.index].isEnterPressed = nodeInfo.isEnterPressed
            setTableOfcontents(tempTOC)

            /* We Display the Editor if all condiions satisfy*/ 
            setIsNotionEditorActive(true)
        }
    }
    
    const setSelectedNodeInTOC = (nodeInfo) => {
        setSelectedNode(nodeInfo)
        if(nodeInfo){
            let tempTOC = [...tableOfContents]
            setTableOfcontents([])
            tempTOC[nodeInfo.index].isClicked = nodeInfo.isClicked
            tempTOC[nodeInfo.index].isEnterPressed = nodeInfo.isEnterPressed
            setTableOfcontents(tempTOC)
        }
    }

    const updateEditedNodeTitle = (nodeInfo) => {
        if(nodeInfo){
            setSelectedNode(nodeInfo)
            let tempTOC = [...tableOfContents]
            setTableOfcontents([])
            tempTOC[nodeInfo.index].nodeTitle = nodeInfo.nodeTitle
            setTableOfcontents(tempTOC)
        }
    }

    const updateNotionHTMLInTOC = (htmlString) => {
        // setDefaultHTMLString("")
        defaultHTMLString = ""
        console.log(htmlString)
        let tempTOC = [...tableOfContents]
        setTableOfcontents([])
        setTableOfContentsComponents([])
        tempTOC[enterPressedNotion.index].htmlContent = htmlString
        tempTOC[enterPressedNotion.index].isClicked = false
        tempTOC[enterPressedNotion.index].isEnterPressed = false
        setTableOfcontents(tempTOC)
        setEnterPressedNotion({...enterPressedNotion, htmlContent:htmlString })
        setIsNotionEditorActive(false)
    }
    
    const setAddNodeTypes = (selectedNode) => {
        switch(selectedNode.nodeType) {
            case 'DOC':
                setAddNodeOptions([{
                    nodeType: 'NOTION',
                    nodeInitial: 'No',
                    nodeColor: '#E2EBF9',
                    textColor: '#4285F4'
                  }, {
                    nodeType: 'PARAGRAPH',
                    nodeInitial: 'Pr',
                    nodeColor: '#EA4335',
                    textColor: 'white'
                  }, {
                    nodeType: 'PART',
                    nodeInitial: 'Pt',
                    nodeColor: '#34A853',
                    textColor: 'white'
                  }])
                break
            case 'PART':
                setAddNodeOptions([{
                    nodeType: 'NOTION',
                    nodeInitial: 'No',
                    nodeColor: '#E2EBF9',
                    textColor: '#4285F4'
                  }, {
                    nodeType: 'PARAGRAPH',
                    nodeInitial: 'Pr',
                    nodeColor: '#EA4335',
                    textColor: 'white'
                  }, {
                    nodeType: 'CHAPTER',
                    nodeInitial: 'Ch',
                    nodeColor: '#FBBC05',
                    textColor: 'white'
                  }])
                break
            case 'CHAPTER':
                setAddNodeOptions([{
                    nodeType: 'NOTION',
                    nodeInitial: 'No',
                    nodeColor: '#E2EBF9',
                    textColor: '#4285F4'
                  }, {
                    nodeType: 'PARAGRAPH',
                    nodeInitial: 'Pr',
                    nodeColor: '#EA4335',
                    textColor: 'white'
                  }])
                break
            case 'PARAGRAPH':
                setAddNodeOptions([{
                    nodeType: 'NOTION',
                    nodeInitial: 'No',
                    nodeColor: '#E2EBF9',
                    textColor: '#4285F4'
                  }])
                break
            default:
                setAddNodeOptions([{
                    nodeType: 'NOTION',
                    nodeInitial: 'No',
                    nodeColor: '#E2EBF9',
                    textColor: '#4285F4'
                  }])
                break
        }
    }

    // const getInitialFromNodeType = (nodeType) => {
    //     switch(nodeType){
    //         case 'DOC':
    //             return 'Co'
    //             break
    //         case 'PART':
    //             return 'Pt'
    //             break
    //         case 'CHAPTER':
    //             return 'Ch'
    //             break
    //         case 'PARAGRAPH':
    //             return 'Pr'
    //             break
    //         case 'NOTION':
    //             return 'No'
    //             break
    //         default:
    //             return 'Co'
    //     }
    // }

    const insertElementAtPosition = (array, element, index) => {
        const newArray = [...array]
        newArray.splice(index, 0, element)
        return newArray;
    }
    
    const handleOpenAddNodeModal = () => {
        if(selectedNode && selectedNode.isClicked){
            setIsModalActive(true)
            setAddNodeTypes(selectedNode)
        }
    }

    const handleOpenAddTitleModal = (nodeInfo) => {
        setAddNodeInfo(nodeInfo)
        setIsNodeTitleActive(true)

    }
    const handleExitModal = () => {
        setSelectedNode(null)
        setIsModalActive(false)
        setIsNodeTitleActive(false)
        setAddNodeOptions([])
        setAddNodeInfo(null)
        setAddNodeTitle("")
        let tempTOC = [...tableOfContents]
        setTableOfcontents([])
        setTableOfContentsComponents([])
        setTableOfcontents(tempTOC)
    }

    const handleAddNewNodeToTOC = (nodeTitle) => {
        setAddNodeTitle(nodeTitle)
        /* Add to TOC Logic Here */
        let tempTOC = [...tableOfContents]
        setTableOfcontents([])
        setTableOfContentsComponents([])
        tempTOC[selectedNode.index].isClicked = false
        const newNode = {
            nodeType: addNodeInfo.nodeType,
            nodeTitle: nodeTitle,
            nodeLevel: (selectedNode.nodeType !== 'NOTION')? `${selectedNode.nodeLevel}_${addNodeInfo.nodeInitial}`: `${selectedNode.nodeLevel}`,
            htmlContent: '',
            isClicked: false,
            isEnterPressed: false
        }
        const newTOC = insertElementAtPosition(tempTOC,newNode,selectedNode.index + 1)
        setTableOfcontents(newTOC)
        /* before the code bellow */
        setSelectedNode(null)
        setIsModalActive(false)
        setIsNodeTitleActive(false)
        setAddNodeOptions([])
        setAddNodeInfo(null)
        setAddNodeTitle("")
    }

    const composeDocumentHTML = () => {
        const documentTitleHTML = `<h1 className="w-full text-center">${tableOfContents[0].nodeTitle}</h1>`
        const documentBodyHTML = tableOfContents.map((node, index) =>{
            
            if(node.nodeType !== 'DOC' && index !==0){ // We construct the DOM excluding the 'DOC' Node
                let partLastIndex = 0
                let chapterLastIndex = 0
                let paragraphIndex = 0
                let notionIndex = 0
                switch(node.nodeType){
                    case 'PART':
                        partLastIndex++
                        chapterLastIndex = 0
                        paragraphIndex = 0
                        notionIndex = 0
                        return `<h2>Partie ${partLastIndex} - ${node.nodeTitle}</h2>`
                    case 'CHAPTER':
                        chapterLastIndex++
                        paragraphIndex = 0
                        notionIndex = 0
                        return `<h3>Chapitre ${chapterLastIndex} - ${node.nodeTitle}</h3>`
                    case 'PARAGRAPH':
                        paragraphIndex++
                        notionIndex = 0
                        return `<h4>Paragraph ${paragraphIndex} - ${node.nodeTitle}</h4>`
                    case 'NOTION':
                        notionIndex++
                        let notionHTML = (node.nodeTitle !== "")? `<h5>${notionIndex} - ${node.nodeTitle}</h5>` : ""
                        notionHTML += node.htmlContent
                        return notionHTML
                    default:
                        return ""
                }
            }
        })

        const parsedHTML = parseStringToHTML(`${documentTitleHTML}${documentBodyHTML.join("")}`)
        setDocumentHTML(parsedHTML.innerHTML)
        console.log(parsedHTML.innerHTML)
        documentHTMLRef.current.appendChild(parsedHTML.innerHTM);
    }

    useEffect(() => {
        if(newHTMLContent !== htmlEditorContent){
            setNewHTMLContent(DOMPurify.sanitize(htmlEditorContent))
            targetHTMLParseRef.current.innerHTML = ''
            const parsedHTML = parseStringToHTML(`${DOMPurify.sanitize(htmlEditorContent)}`);
            targetHTMLParseRef.current.appendChild(parsedHTML);
        }
    }, [newHTMLContent, htmlEditorContent]);

    useEffect(()=>{
        setTableOfContentsComponents(tableOfContents.map((node, index) => 
                            <NodesCard
                                key={index}
                                index={index}
                                nodeType={node.nodeType}
                                nodeTitle={node.nodeTitle}
                                nodeLevel={node.nodeLevel}
                                isClicked={false} 
                                isEnterPressed={false}
                                updateNode={updateEditedNodeTitle}
                                setSelectedNode={setSelectedNodeInTOC}
                                setEnterPressedNotion={setEnterPressNotionInTOC}
                            />
                        ))
        
    }, [tableOfContents])

  return (
    <div className='w-full h-screen overflow-hidden pb-1 flex flex-col justify-between items-start relative'>
        <Header />
        <div className='w-full h-full px-4 pt-4 flex justify-between items-start overflow-hidden'>

            {/* the left corner mode */}
            <section className='w-96 h-full border-2 flex flex-col justify-between rounded-lg overflow-auto p-2 relative'>
                <div className='w-full h-full'>
                    <h1 style={{color:'black', backgroundColor:'#E2EBF9', padding:'8px 4px', borderRadius:8, fontWeight:'bold'}}>Table of contents</h1>
                    <div className='!text-left py-[4px] w-ful flex flex-col gap-[4px]'>
                        {tableOfContentsComponents}
                    </div>
                </div>
                {(selectedNode && selectedNode.isClicked)?
                    <div className='flex justify-end h-12 w-12 rounded-full absolute bottom-0 right-1'>
                        <button onClick={()=>handleOpenAddNodeModal()} className='w-12 h-12 rounded-full flex justify-center items-center' style={{backgroundColor:'#4285F4', borderRadius:100, color:'white'}}><FontAwesomeIcon icon={faPlus}/></button>
                    </div>
                : null}
                {isModalActive?
                    <div className='modal-background inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80'>
                        {!isNodeTitleModalActive?
                            <div className='modal-container'>
                                {/* New Node Select Modal */}
                                <div className='flex justify-between px-2'>
                                    <span className='w-full text-center text-[24px] font-bold'>Add a Node to the Selected Node : {selectedNode.nodeTitle}</span>
                                    <button onClick={()=>handleExitModal()} className='text-[24px] font-bold' type='button'>X</button>
                                </div>
                                <div className='border-2 border-[#4285F4] rounded-lg h-full flex flex-col justify-evenly items-center'>
                                    <span className='capitalize text-[20px] font-bold'>Select the node you want to add?</span>
                                    <div className='flex flex-row justify-evenly w-full'>
                                        {
                                            addNodeOptions.map((nodeOption, index) => 
                                                <button onClick={()=>handleOpenAddTitleModal(nodeOption)} key={index} className='p-[8px] flex flex-col gap-[5px] items-center' style={{backgroundColor:'white',borderRadius:8, boxShadow:'0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)'}}>
                                                    <span className='text-[50px]' style={{width:100, height:100, fontWeight:'bold', padding:'8px', borderRadius:100, textAlign:'center', backgroundColor:`${nodeOption.nodeColor}`, color:`${nodeOption.textColor}`}}>
                                                        {nodeOption.nodeInitial}
                                                    </span>
                                                    <span style={{color:'black', fontWeight:'bold'}}>{nodeOption.nodeType}</span>
                                                </button>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            :
                            <div className='modal-container'>
                                {/* New Node Title Input Modal */}
                                <div className='flex justify-between px-2'>
                                    <span className='w-full text-center text-[24px] font-bold'>Add a Node to the Selected Node : {selectedNode.nodeTitle}</span>
                                    <button onClick={()=>handleExitModal()} className='text-[24px] font-bold' type='button'>X</button>
                                </div>
                                <div className='border-2 border-[#4285F4] rounded-lg h-full flex flex-col justify-evenly items-center'>
                                    <span className='capitalize text-[20px] font-bold'>Add a Title to the Node</span>
                                    <div className='flex flex-col justify-center items-center gap-1 w-full'>
                                        <div className="group">
                                            <input required="" type="text" className="input" onChange={(e)=>setAddNodeTitle(e.target.value)} autoFocus/>
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <label>New Node Title</label>
                                        </div>
                                        <div className='p-[6px] flex flex-row gap-[5px] items-baseline rounded-lg' style={{backgroundColor:'white',boxShadow:'0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)'}}>
                                            <span style={{fontWeight:'bold', padding:'2px 5px', borderRadius:100, textAlign:'center', backgroundColor:`${addNodeInfo.nodeColor}`, color:`${addNodeInfo.textColor}`}}>
                                                {addNodeInfo.nodeInitial}
                                            </span>
                                            <span style={{color:'black'}}>{addNodeTitle}</span>
                                        </div>
                                        <button onClick={()=>handleAddNewNodeToTOC(addNodeTitle)} className='capitalize h-12 w-32 text-xl' style={{backgroundColor:'#4285F4', borderRadius:8, color:'white'}}>Add Node</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                : null}
            </section>

            {/* The Middle Section */}
            <section className='w-full h-full flex flex-col justify-between items-start px-4 pb-1 overflow-hidden'>
                <div className='h-16 w-full flex justiy-between items-center'>
                    <div className='w-full h-12'>
                        <h1 className='font-bold text-3xl uppercase'>EDITION DE CONTENUS</h1>
                    </div>
                    <button onClick={()=>composeDocumentHTML()} className='capitalize h-12 w-32 text-xl' style={{backgroundColor:'#4285F4', borderRadius:8, color:'white'}}>Apercu</button>
                </div>

                <div className='m-auto h-full w-full rounded-lg bg-[#E2EBF9] pb-[32px] relative'>
                    {/* the editor zone */}
                    <div className='w-full px-4 flex justify-center items-center h-[50px] bg-white border'>
                        <div className='h-full w-full flex justify-between items-center'>
                            {/* 
                                the toolbar below
                                all text manipulations functions
                            */}
                            {isNotionEditorActive ?
                                <button onClick={()=>updateNotionHTMLInTOC(DOMPurify.sanitize(htmlEditorContent))}>
                                    <ToolBarButton icon={faSave} />
                                </button>
                            : null}
                        </div>
                    </div>

                    <div className="relative h-full pb-[64px]">
                        <div className='w-full h-full flex flex-col relative p-[8px] break-words overflow-auto'>
                            {/*
                                the textEditor below
                                the content editable nested components rendering side
                            */}
                            {JSON.stringify(selectedNode)}
                            <br/>
                            <br/>
                            {JSON.stringify(tableOfContents)}
                            <br/>
                            <br/>
                            {JSON.stringify(enterPressedNotion)}
                            <br/>
                            <br/>
                            {isNotionEditorActive && <>
                                <RichTextEditor
                                    setHtmlContent={setHtmlEditorContent}
                                    setJsonContent={setJsonEditorContent}
                                    // defaultText=''
                                    defaultHTMLString={defaultHTMLString}
                                />
                                <div className='html-viewer' >
                                    <span style={{fontWeight:'bold'}}>Editor HTML content:</span>
                                    <span>{`${DOMPurify.sanitize(htmlEditorContent)}`}</span>
                                </div>
                                <div className='html-viewer'>
                                    <span style={{fontWeight:'bold'}}>STRING TO HTML content: "preview.html"</span>
                                    <div ref={targetHTMLParseRef} className='px-[16px]'></div>
                                </div>
                            </>}
                            <div className='html-viewer'>
                                    <span style={{fontWeight:'bold'}}>PREVIEW OF THE DOCUMENT: "{tableOfContents[0].nodeTitle}.html"</span>
                                    <div ref={documentHTMLRef} className='px-[16px]'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* notion finder zone */}
            <NotionFinder />
        </div>
    </div>
  )
}

export default CreationEditor