import React, {useState} from 'react'
import styles from '../styles/NotionCard.module.css'

type Props = {
    documentJSON: {
        documentName: string,
        notionList: {
            content: string
        } []
    }
}

function NotionCard({documentJSON}:Props) {
    const [documentName, setDocumentName] = useState(documentJSON.documentName)
    const [notionList, setNotionList] = useState<{
        content: string
    } []>([])
  return (
    <div className={styles.notioncardContainer}>
        <div className='p-[4px]'>
            <span>Co</span>
            <span>{documentName}</span>
        </div>
        {
            notionList.map((notion:any, index:number) =>{
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

export default NotionCard