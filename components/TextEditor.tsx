import React, { useEffect, useState } from "react";
import Editor from "./Editor";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";

const TextEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const onEditorContentChanged = (editorState: React.SetStateAction<EditorState>) => {
    setEditorState(editorState);
  } 
  useEffect(() => {
    console.log(editorState);
  }, [editorState]);
  return (
    <Editor
      toolbarClassName="flex !stycky top-0 z-50 !justify-center mx-auto"
      editorClassName="mt-8 bg-white shadow-lg h-full max-w-5xl border p-10 mb-12 mx-auto"
      editorState={editorState}
      onEditorStateChange={onEditorContentChanged}
    />
  );
}

export default TextEditor