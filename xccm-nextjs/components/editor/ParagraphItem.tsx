import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './editor.module.css'
import { ItemOptionsProps } from './EditorItem';
import { DocData } from '../../pages/api/documents/[id]';
import { NodeType } from '../../data/doc';
import Text from './Text';

const ParagraphItem = (props: ItemOptionsProps) => {
    const [value, setValue] = useState('New Paragraph')
    const [editing, setEditing] = useState(true)
    const [paragraphContent, setParagraphContent] = useState<DocData>({
        nodeType: NodeType.NOTION,
        content:[]
    })
    const [RenderContent, setRenderContent] = useState<DocData[]>([])

    const handleInput = (value: string) => {
        setValue(value)
        setTheContent(value)
    }
    const editItem = (newDoc: DocData, index: number) => {
        //console.log(newDoc)
        const paragraph = paragraphContent
        const content = paragraphContent.content as DocData[]
        content[index] = newDoc
        paragraph.content = content
        setParagraphContent(paragraph)
        console.log(paragraph)
    }
    const setTheContent = (value: string) => {
        //split the value in single words
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
        const newParagraph = paragraphContent
        newParagraph.content = content
        setParagraphContent(newParagraph)
        setRenderContent(content)
        props.parenStateModifier(paragraphContent, props.itemId)
    }
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

    useEffect(() => {
        setParagraphContent(paragraphContent)
        props.parenStateModifier(paragraphContent, props.itemId)
    }, [paragraphContent])
    return (
        <div className='relative'>
        {!editing && <p className={styles.titleText + ' my-2 border border-transparent hover:border-amber-900'}>{
            RenderContent.map((elt: DocData, index: number) => {
                if (index !== RenderContent.length - 1) {
                    return (<Text content={elt} space={true} key={index} edit={editItem} index={index}/>)
                }
                return (<Text content={elt} space={false} key={index} edit={editItem} index={index}/>)
            })
        }</p>}
        {!editing && (
            <div className={styles.titleOptions + " z-50 invisible hover:!visible transition-all absolute bottom-[0px] right-0 flex justify-between items-center w-[70px]"}>
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
        <textarea onKeyDown={ e => { if (e.key === 'Enter') setEditing(false) }} className='w-full min-h-[200px] bg-transparent outline-none border-0' value={value} onChange={(e) => {
            handleInput(e.target.value)
        }}/>)}
        </div>
    )
}

export default ParagraphItem
