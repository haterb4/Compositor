import React, { useEffect, useState } from 'react'
import EditorItem, { ItemOptionsProps } from './EditorItem'
import { DocData } from '../../pages/api/documents/[id]'
import { NodeType } from '../../data/doc'

const PartItem = (props: ItemOptionsProps) => {
  const [sectionDocument, setSectionDocument] = useState<DocData>({
    nodeType: NodeType.PART,
    content:[]
  })

  const editContent = (newDoc: DocData, index: number) => {
    console.log("section item: ", index)
    const doc = sectionDocument
    const docContent = sectionDocument.content as DocData[]
    docContent[index] = newDoc
    doc.content = docContent
    setSectionDocument(doc)
    console.log('section: ', sectionDocument)
  }
  useEffect(() => {
    props.parenStateModifier(sectionDocument, props.itemId)
  }, [props, sectionDocument])
  return (
    <EditorItem itemId={1} outAddParagraph={props.outAddParagraph} outAddSection={props.outAddSection} chidrenDocData={props.chidrenDocData} parenStateModifier={editContent}/>
  )
}

export default PartItem
