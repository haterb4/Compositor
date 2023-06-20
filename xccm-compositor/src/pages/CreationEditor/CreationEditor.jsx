import React, { useEffect } from 'react'
import './CreationEditor.css'

import { faPlus, faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    Header,
    NotionFinder,
    ToolBarButton,
    NodesCard
} from '../../components'
import { useState } from 'react'

function CreationEditor() {
    const [isModalActive, setIsModalActive] = useState(false)
    const [isNodeTitleModalActive, setIsNodeTitleActive] = useState(false)

    const [tableOfContents, setTableOfcontents] = useState([
        {
            nodeType: 'DOC',
            nodeTitle: 'Titre de cours',
            nodeLevel: 'Co',
            htmlContent: '',
            isClicked: false
        }
    ])
    const [tableOfContentsComponents, setTableOfContentsComponents] = useState([])
    const [selectedNode, setSelectedNode] = useState(null)

    const [addNodeOptions, setAddNodeOptions] = useState([])
    const [addNodeInfo, setAddNodeInfo] = useState(null)
    const [addNodeTitle, setAddNodeTitle] = useState("")

    const setSelectedNodeInTOC = (nodeInfo) => {
        setSelectedNode(nodeInfo)
        if(nodeInfo){
            let tempTOC = [...tableOfContents]
            setTableOfcontents([])
            tempTOC[nodeInfo.index].isClicked = nodeInfo.isClicked
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
            isClicked: false
        }
        const newTOC = insertElementAtPosition(tempTOC,newNode,selectedNode.index + 1)
        setTableOfcontents(newTOC)
        /* before the code bellow */
        handleExitModal()
    }

    useEffect(()=>{
        setTableOfContentsComponents(tableOfContents.map((node, index) => 
                            <NodesCard key={index} index={index} nodeType={node.nodeType} nodeTitle={node.nodeTitle} nodeLevel={node.nodeLevel} isClicked={false} updateNode={updateEditedNodeTitle} setSelectedNode={setSelectedNodeInTOC}/>
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
                    <div className='modal-background'>
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
                                    <div className='flex flex-col justify-center items-center gap-[16px] w-full'>
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
                    <button className='capitalize h-12 w-32 text-xl' style={{backgroundColor:'#4285F4', borderRadius:8, color:'white'}}>Apercu</button>
                </div>

                <div className='m-auto h-full w-full rounded-lg bg-[#E2EBF9] pb-2 relative overflow-hidden'>
                    {/* the editor zone */}
                    <div className='w-full px-4 flex justify-center items-center h-[50px] bg-white border'>
                        <div className='h-full w-full flex justify-between items-center'>
                            {/* 
                                the toolbar below
                                all text manipulations functions
                            */}
                            <ToolBarButton icon={faSave} />
                        </div>
                    </div>

                    <div className="relative h-full overflow-hidden">
                        <div className='w-full h-full overflow-hidden flex flex-col relative p-[8px]'>
                            {/*
                                the textEditor below
                                the content editable nested components rendering side
                            */}
                            {JSON.stringify(selectedNode)}
                            <br/>
                            {JSON.stringify(tableOfContents)}
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