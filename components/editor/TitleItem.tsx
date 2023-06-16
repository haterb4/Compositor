import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"
import styles from './editor.module.css'
import { DocData } from "../../pages/api/documents/[id]"
import { NodeType } from "../../data/doc"
import { ItemOptionsProps } from "./EditorItem"
import Text from "./Text"

const TitleItem = (props: ItemOptionsProps) => {
    const [value, setValue] = useState(props.title ? props.title : 'New title here')
    const [editing, setEditing] = useState(true)
    const [titleContent, setTitleContent] = useState<DocData>({
        nodeType: NodeType.TITLE,
        content:[],
        attrs: {
            level: 1
        }
    })
    const [RenderContent, setRenderContent] = useState<DocData[]>([])
    
    const handleInput = (value: string) => {
        setValue(value)
        setTheContent(value)
    }
    const setTheContent = (value: string) => {
        const wordslist = value.split(" ")
        //create a WORD node type item
        const content: DocData[] = []
        //add each on the curent state
        for (let i = 0; i < wordslist.length; i++) {
            const word: DocData = {
                nodeType: NodeType.WORD,
                content: wordslist[i]
            }
            content.push(word)
        }
        //ad the result in the parent state
        const newTitle = titleContent
        newTitle.content = content
        setTitleContent(newTitle)
        setRenderContent(content)
        props.parenStateModifier(titleContent, props.itemId)
    }
    
    const editItem = (newDoc: DocData, index: number) => {
        //console.log(newDoc)
        const title = titleContent
        const content = titleContent.content as DocData[]
        content[index] = newDoc
        title.content = content
        setTitleContent(title)
        console.log(titleContent)
    }
        
    useEffect(() => {
        setTitleContent(titleContent)
        props.parenStateModifier(titleContent, props.itemId)
    }, [titleContent])
    
    useEffect(() => {
        let childrenDocdata = props.chidrenDocData
        let wordValue = []
        if(childrenDocdata !== undefined){
            childrenDocdata = childrenDocdata as DocData[]
            for(let i= 0, c = childrenDocdata.length; i< c ;i++){
                if (childrenDocdata[i].nodeType === NodeType.WORD){
                    wordValue.push(childrenDocdata[i].content)
                }

            }
        }
        const finalString = wordValue.join(" ")
        setValue(finalString)
    }, [props.chidrenDocData])
    return (
        <div className={' w-full relative border border-transparent hover:border-amber-900'}>
            {!editing && (<h1 className={styles.titleText + ' text-5xl my-1'}>{
                RenderContent.map((elt: DocData, index: number) => {
                    if (index !== RenderContent.length - 1) {
                        return (<Text content={elt} space={true} key={index} edit={editItem} index={index}/>)
                    }
                    return (<Text content={elt} space={false} key={index} edit={editItem} index={index}/>)
                })
            }</h1>)}
            {!editing && (
                <div className={styles.titleOptions + " z-50 invisible hover:!visible transition-all absolute top-[25px] right-0 flex justify-between items-center w-[70px]"}>
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