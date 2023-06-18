import React, { useEffect, useState } from 'react'
import { DocData } from '../../pages/api/documents/[id]'
import { spaceCase } from 'remirror';
import { NodeType } from '../../data/doc';

interface Props {
    content: DocData,
    space: boolean;
    edit: Function;
    index: number
}
const Text = (props: Props) => {
    const [document, setDocument] = useState<DocData>(props.content);
    const [className, setClassName] = useState('')
    useEffect(() => {
        setDocument(props.content)
    }, [props.content])

    const addClass = (className: string) => {
        const doc = document
        if (doc.marks === undefined) {
            doc.marks = []
        }
        if (!doc.marks.includes({type: 'class', value: className})){
            doc.marks.push({
                type: 'class',
                value: className
            })
            setDocument(doc)
            props.edit(document, props.index)
            let classes = ''
            document.marks?.map((mark, index) => {
                if (mark.type === 'class') classes += ` ${mark.value}`
            })
            setClassName(classes)
        }
    }
    
    const handleMouseUp = () =>{
        const selected = `Selected text: ${window.getSelection()?.toString()}`
        addClass('underline')
        console.log('selected: ', selected);
    }
    return (
        <span onMouseUp={handleMouseUp} className={`${className} `}>{document.content as string} { props.space && ' ' }</span>
    )
}

export default Text
