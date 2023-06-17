import React, { useState, useEffect, useRef } from 'react'
import './ProjectManager.css'

import DOMPurify from 'dompurify'
import {
  RichTextEditor
} from '../../components'

function ProjectManager() {
  const sampleHTML = '<p>Alfred Hetsron Yepnjio</p><ul><li><strong>Sample</strong></li></ul><ol type="1"><li>you</li></ol><ul><li>content</li><li>state</li></ul><p></p>'
  const [htmlEditorContent, setHtmlEditorContent] = useState(null)
  const [newHTMLContent, setNewHTMLContent] = useState(null)
  const [jsonEditorContent, setJsonEditorContent] = useState(null)

  const targetHTMLParseRef = useRef(null)

  const parseStringToHTML = (htmlString) => {
    const parser = new DOMParser();
    const parsedHTML = parser.parseFromString(htmlString, 'text/html');
    return parsedHTML.body;
  }

  useEffect(() => {
    if(newHTMLContent !== htmlEditorContent){
      setNewHTMLContent(htmlEditorContent)
      targetHTMLParseRef.current.innerHTML = ''
      const parsedHTML = parseStringToHTML(`${htmlEditorContent}`);
      targetHTMLParseRef.current.appendChild(parsedHTML);
    }

  }, [newHTMLContent, htmlEditorContent]);

  return (
    <div className='project-manager-container'>
      <RichTextEditor
        setHtmlContent={setHtmlEditorContent}
        setJsonContent={setJsonEditorContent}
        // defaultText=''
        defaultHTMLString={sampleHTML}
      />
      <div className='html-viewer' >
        <span style={{fontWeight:'bold'}}>Editor HTML content:</span>
        <span>{`${DOMPurify.sanitize(htmlEditorContent)}`}</span>
      </div>
      <div className='html-viewer'>
        <span style={{fontWeight:'bold'}}>Editor JSON content:</span>
        <span>{`${jsonEditorContent}`}</span>
      </div>
      <div className='html-viewer'>
        <span style={{fontWeight:'bold'}}>STRING TO HTML content:</span>
        <div ref={targetHTMLParseRef}></div>
      </div>
    </div>
  )
}

export default ProjectManager