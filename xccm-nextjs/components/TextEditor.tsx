import React, { useEffect, useState } from "react";
import Editor from "./Editor";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertFromRaw, convertToRaw } from 'draft-js' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { RawDraftContentState } from "react-draft-wysiwyg";

type Props = {
  projectName: String,
  editorContent: RawDraftContentState | undefined;
  saveEditorContent: Function
}

const TextEditor = ({ projectName, editorContent, saveEditorContent }: Props) => {
  const [editorState, setEditorState] = useState(() =>  
    EditorState.createEmpty()
  );
  const [saveTimer, setSaveTimer] = useState(0)
  const [savable, setSavable] = useState(false)
  const [saveStatus, setSaveStatus] = useState(true)
  const onEditorContentChanged = (editorState: React.SetStateAction<EditorState>) => {
    setSavable(true)
    setEditorState(editorState);
  }
  const saveState = async (data = {}) => {
    
  }
  useEffect(() => {
    setInterval(() => {
      if (savable){
        saveState({
          state: convertToRaw(editorState.getCurrentContent()),
          fileName: 'projectfilestate.json'
        })
        if (saveStatus === true){
          setSavable(false)
          console.log('saved')
        }
        else{
          setSavable(true)
          console.log('save error')
        }
      }
    }, 60000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    if (editorContent){
      setEditorState(EditorState.createWithContent(
        convertFromRaw(editorContent)
      ))
    }
    else{
      setEditorState(EditorState.createEmpty())
    }
  }, [editorContent])
  useEffect(() => {
    saveEditorContent(convertToRaw(editorState.getCurrentContent()));
  }, [editorState, saveEditorContent])
  return (
    <div className="relative">
      <Editor
        toolbarClassName="flex !stycky top-0 z-50 !justify-center mx-auto"
        editorClassName="mt-8 bg-white shadow-lg h-full max-w-5xl border p-10 mb-12 mx-auto"
        editorState={editorState}
        onEditorStateChange={onEditorContentChanged}
      />
      <button
        className={`absolute right-5 top-3 ${savable? 'text-green-700': 'text-black'}`}
        onClick={() => {
          saveState({
            state: convertToRaw(editorState.getCurrentContent()),
            fileName: 'projectfilestate'
          })
        }}
      >
        <FontAwesomeIcon icon={faSave}/>
      </button>
    </div>
  );
}

export default TextEditor