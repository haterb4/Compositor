import React, { useEffect, useState } from "react";
import Editor from "./Editor";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertFromRaw, convertToRaw } from 'draft-js'
import { RawDraftContentState } from "react-draft-wysiwyg";

interface EditorProps {
    setEditorState?: any;
    handleChange?: any;
    blockRenderMap?: any;
}

const MyEditor:React.FC<EditorProps> = ({setEditorState, handleChange, blockRenderMap}) => {
  return (
    <div className='w-[800px] h-[calc(100vh-160px)] bg-white shadow-xl p-2 border'>
      <Editor
          editorState={setEditorState}
          onEditorStateChange={setEditorState}
    />
    </div>
  )
}

export default MyEditor
