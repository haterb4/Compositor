import React from 'react'
import EditorItem, { ItemOptionsProps } from './EditorItem'

const SectionItem = ({outAddParagraph, outAddSection}: ItemOptionsProps) => {
  return (
    <EditorItem outAddParagraph={outAddParagraph} outAddSection={outAddSection}/>
  )
}

export default SectionItem
