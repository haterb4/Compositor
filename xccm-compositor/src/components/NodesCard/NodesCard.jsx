import React, { useState } from 'react'
import './NodesCard.css'

function NodesCard(props) {
  const NODEINFOS = [
    {
      nodeType: 'DOC',
      nodeInitial: 'Co',
      nodeColor: '#4285F4',
      textColor: 'white'
    },
    {
      nodeType: 'PART',
      nodeInitial: 'Pt',
      nodeColor: '#34A853',
      textColor: 'white'
    },
    {
      nodeType: 'CHAPTER',
      nodeInitial: 'Ch',
      nodeColor: '#FBBC05',
      textColor: 'white'
    },
    {
      nodeType: 'PARAGRAPH',
      nodeInitial: 'Pr',
      nodeColor: '#EA4335',
      textColor: 'white'
    },
    {
      nodeType: 'NOTION',
      nodeInitial: 'No',
      nodeColor: '#E2EBF9',
      textColor: '#4285F4'
    }
  ]

  const [nodeElement, setNodeElement] = useState(props.nodeType? NODEINFOS.find((node)=> node.nodeType === props.nodeType) : {
    nodeType: 'DOC',
    nodeInitial: 'Co',
    nodeColor: '#4285F4',
    textColor: 'white'
  })
  const [nodeTitle, setNodeTitle] = useState(props.nodeTitle? props.nodeTitle : "")
  const [nodeLevel, setNodeLevel] = useState(props.nodeLevel? props.nodeLevel : 'doc')
  const [nodeIndex, setNodeIndex] = useState(props.index? props.index : 0)
  const [isClicked, setIsClicked] = useState(props.isClicked? props.isClicked : false)

  const [nodeBgColor, setNodeBgColor] = useState('white')
  const [nodeColor, setNodeColor] = useState(nodeElement.nodeColor)
  const [textColor, setTextColor] = useState(nodeElement.textColor)
  const [titleColor, setTitleColor] = useState('black')


  const handleNodeOnClick = () => {
    setIsClicked(!isClicked)
    if(isClicked){ // When I click once on the node card, I enable the selected node card
      setNodeBgColor(nodeColor)
      setNodeColor('white')
      setTextColor((nodeElement.nodeType !== 'NOTION')? nodeElement.nodeColor : nodeElement.textColor)
      setTitleColor((nodeElement.nodeType !== 'NOTION')? 'white' : 'black') 
    }
    else{
      setNodeBgColor('white')
      setNodeColor(nodeElement.nodeColor)
      setTextColor(nodeElement.textColor)
      setTitleColor('black')
      props.setSelectedNode(null)
    }
    props.setSelectedNode({
      index: nodeIndex,
      nodeType: nodeElement.nodeType,
      nodeTitle: nodeTitle,
      nodeLevel: nodeLevel,
      htmlContent: '',
      isClicked: isClicked
    })
  }


  return (
    <button className='p-[4px] flex flex-row gap-[5px] items-baseline rounded-lg' style={{width:'100%',backgroundColor:`${nodeBgColor}`,boxShadow:'0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)'}}>
      <span onClick={() => handleNodeOnClick()} style={{fontWeight:'bold', padding:'2px 5px', borderRadius:100, textAlign:'center', backgroundColor:`${nodeColor}`, color:`${textColor}`}}>
        {nodeElement.nodeInitial}
      </span>
      <input contenteditable className='node-title-input w-full' style={{color:`${titleColor}`, backgroundColor:`${nodeBgColor}`}} value={nodeTitle} onChange={(e)=>setNodeTitle(e.target.value)} onBlur={()=>props.updateNode({
        index: nodeIndex,
        nodeType: nodeElement.nodeType,
        nodeTitle: nodeTitle,
        nodeLevel: nodeLevel,
        htmlContent: '',
        isClicked: isClicked
      })}/>
    </button>
  )
}

export default NodesCard