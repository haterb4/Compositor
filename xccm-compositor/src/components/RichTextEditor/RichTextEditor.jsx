import React, { useState, useEffect } from 'react';
import { ContentState, convertToRaw } from 'draft-js';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import { stateFromHTML  } from 'draft-js-import-html';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './RichTextEditor.css'

function RichTextEditor(props) {
    const [convertedContent, setConvertedContent] = useState(null);
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty()
    )
        
    const loadContentFromHTML = (htmlStringContent) => {
        const contentState = stateFromHTML(htmlStringContent);
        return EditorState.createWithContent(contentState);
    }
    
    useEffect(()=>{
        if(props.defaultText && props.defaultText !== ''){
            setEditorState(EditorState.createWithContent(ContentState.createFromText(props.defaultText)))
        }
        else if(props.defaultHTMLString && props.defaultHTMLString !== ''){
            setEditorState(loadContentFromHTML(props.defaultHTMLString))
        }
    }, [props])

    useEffect(() => {
        let html = convertToHTML(editorState.getCurrentContent());
        if(convertedContent !== html){
            setConvertedContent(html)
            let jsonRaw = convertToRaw(editorState.getCurrentContent());  // RawDraftContentState JSON
            props.setHtmlContent(html)
            props.setJsonContent(JSON.stringify(jsonRaw));
        }
    }, [props, editorState, convertedContent]);


  return (
    <div className='rich-editor-container'>
        <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
        />
    </div>
  )
}

export default RichTextEditor