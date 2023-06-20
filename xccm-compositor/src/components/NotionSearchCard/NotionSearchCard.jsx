import React, {useState} from 'react'
import './NotionSearchCard.css'

function NotionSearchCard(props) {
    const [documentName, setDocumentName] = useState(props.documentJSON.documentName)
    const [notionsList, setNotionsList] = useState(props.documentJSON.notionsList)
  return (
    <div className='notioncardContainer'>
        <div className='p-[4px]'>
            <span>Co</span>
            <span>{documentName}</span>
        </div>
        {
            notionsList.map((notion, index) =>{
                return (
                    <button key={index}>
                        <div>
                            <span style={{color:'#4285F4', fontWeight:'bold'}}>Notion</span>
                        </div>
                        <span>{notion.content}</span>
                    </button>
                )
            })
        }
        

    </div>
  )
}

export default NotionSearchCard