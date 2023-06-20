import React, { useEffect, useState } from "react";
import Editor from "../../../components/Editor";
import { ContentState, EditorState, convertFromHTML } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertFromRaw, convertToRaw } from 'draft-js'
import { RawDraftContentState } from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';
import parse from 'html-react-parser';
import { renderToString } from 'react-dom/server';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { DndProvider, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { AiOutlineSave, AiFillThunderbolt } from 'react-icons/ai'
import { VscPreview } from 'react-icons/vsc'
import { CgClose } from 'react-icons/cg'
import Granule from "../../../components/Granule";


const DraftEditor = () => {
    const [items, setItems] = useState([
        { id: 'item-1', content: 'Draggable Item 1' },
        { id: 'item-2', content: 'Draggable Item 2' },
        { id: 'item-3', content: 'Draggable Item 3' },
    ]);
    const [editorState, setEditorState] = useState(() =>  
        EditorState.createEmpty()
    );
    const [htmlString, setHtmlString] = useState('')

    const [dragedItem, setDragedItem] = useState({
        title: '',
        text: ''
    })
    const [tableOfContents, setTableOfContents] = useState('')
    const [preview, setPreview] = useState(false)
    const [viewCode, setViewCode] = useState(false)
    const [savable, setSavable] = useState(false)

    const onEditorContentChanged = (editorState: React.SetStateAction<EditorState>) => {
        setSavable(true)
        setEditorState(editorState);
    }
    
    const handleGetContentAsHTML = () => {
        const contentState = editorState.getCurrentContent();
        const convertedHtml = draftToHtml(convertToRaw(contentState));

        // Ajouter un identifiant unique à chaque titre
        const parsedHTML = parse(convertedHtml);
        let modifiedHTML: any = parsedHTML;

        if (Array.isArray(parsedHTML)) {
            modifiedHTML = parsedHTML.map((node: any, index: number) => {
                if (typeof node.type === 'string' && node.type.match(/^h[1-6]$/)) {
                    console.log(node)
                    const anchorId = `heading-${index + 1}`;
                    return {
                        ...node,
                        props: {
                            ...node.props,
                            id: anchorId,
                        },
                    };
                }
                console.log(node)
                return node;
            });
        }
        console.log(modifiedHTML)

        const modifiedHtmlString = renderToString(modifiedHTML);
        console.log(modifiedHtmlString)
      
        setHtmlString(modifiedHtmlString);
        handleReplaceContentWithHTML(htmlString)
    };
      
    // const [{ isOver }, drop] = useDrop(() => ({
    //     accept: 'granule',
    //     drop: () => () => {
    //         alert('Please select')
    //     },
    //     collect: monitor => ({
    //       isOver: !!monitor.isOver(),
    //     }),
    // }), [])

    const handleReplaceContentWithHTML = (newHTMLContent: string) => {
        // Convertir le nouveau contenu HTML en ContentState
        console.log(newHTMLContent)
        if (newHTMLContent !== ''){
            const contentBlocks = convertFromHTML(newHTMLContent);
            const newContentState = ContentState.createFromBlockArray(contentBlocks.contentBlocks);
            console.log(newContentState)
            // Mettre à jour l'état de l'éditeur avec le nouveau contenu
            const newEditorState = EditorState.push(editorState, newContentState, 'insert-characters');
            console.log(newContentState)
            // Mettre à jour l'état de l'éditeur
            //setEditorState(newEditorState);
        }
    };


    useEffect(() => {
        handleGetContentAsHTML()
    }, [editorState]);

    useEffect(() => {
        const generateTableOfContents = () => {
          const parsedHTML = parse(htmlString);
          let headings: any[] = [];
          
          if (Array.isArray(parsedHTML)) {
            headings = parsedHTML.filter(
              (node) => typeof node.type === 'string' && node.type.match(/^h[1-6]$/)
            );
          }

          console.log(headings)
    
          let tocHTML = '';
          headings.forEach((heading) => {
            const level = parseInt(heading.type.charAt(1));
            const text = renderToString(heading.props?.children);
            console.log(text)
            const anchorId = heading.props?.id;
            console.log(anchorId)
            if (text) {
              tocHTML += `<a href="#${anchorId}" class="toc-level-${level}">${text}</a>`;
            }
          });
          console.log(tocHTML)
          return tocHTML;
        };
    
        const generatedTOC = generateTableOfContents();
        setTableOfContents(generatedTOC);
      }, [htmlString]);

    return (
        <div className='overflow-hidden w-full h-screen flex flex-col justify-between items-start'>
            <header className='w-full h-16'>
                <nav className='w-full flex itms-center justify-between shadow-lg'>
                    <div className='text-4xl text-black p-4'>Composix</div>
                </nav>
            </header>
            <main className='w-full h-full bg-white flex justify-between items-start m-auto mx-0 mt-8 overflow-x-hidden overflow-y-hidden'>
                <div className='flex-flex-col px-4 text-green-700 py-8 w-[300px]'>
                    <div className="flex flex-col justify-start items-start" dangerouslySetInnerHTML={{ __html: tableOfContents }}></div>
                </div>
                <div className="absolute w-full right-0 top-20 flex justify-between items-center px-4">
                    <div className="w-[300px] flex justify-start itens-center">
                        <button className="h-8 w-8 border flex justify-center items-center mr-2 hover:bg-amber-500 hover:rounded">
                            <AiFillThunderbolt />
                        </button>
                    </div>
                    <div className="w-[300px] flex justify-end itens-center">
                        <button className="h-8 w-8 border flex justify-center items-center mr-2 hover:bg-amber-500 hover:rounded">
                            <AiOutlineSave />
                        </button>
                        <button onClick={() => {
                            setPreview(true)
                            setViewCode(false)
                        }} className="h-8 w-8 border flex justify-center items-center hover:bg-amber-500 hover:rounded">
                            <VscPreview />
                        </button>
                        <button onClick={() => {
                            setPreview(true)
                            setViewCode(true)
                        }} className="h-8 w-8 border flex justify-center items-center hover:bg-amber-500 hover:rounded">
                            <VscPreview />
                        </button>
                    </div>
                </div>
                <DndProvider backend={HTML5Backend}>
                    <div className="w-[864px] overflow-y-scroll h-full px-8" >
                        <Editor
                            toolbarClassName="flex !absolute w-[calc(100%-300px)] h-[72px] right-0 top-0 z-50 !justify-center mx-auto border-0"
                            editorClassName="w-full mt-8 bg-white shadow-lg h-full max-w-5xl border p-10 mb-12 mx-auto"
                            editorState={editorState}
                            onEditorStateChange={onEditorContentChanged}
                        />
                        
                    </div>
                    <div className="flex-flex-col px-4 text-green-700 py-8 w-[300px]">
                    {items.map((item, index) => (
                        <Granule title={item.content} text={item.content} key={index}/>
                    ))}
                    </div>
                </DndProvider>
            </main>
            {preview &&(<div className="previewer fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                {viewCode
                ?
                    (<div className="bg-white p-4 h-[800px] w-[864px] px-8 overflow-y-scroll" dangerouslySetInnerHTML={{ __html: htmlString }}></div>)
                :
                    (<div className="bg-white p-4 h-[800px] w-[864px] px-8 overflow-y-scroll">{htmlString}</div>)
                }
                <button
                    className="absolute top-0 right-0 p-2 hover:text-amber-700 text-white"
                    onClick={() => {
                        setPreview(false)
                        setViewCode(false)
                    }}
                >
                    <CgClose size={24}/>
                </button>
            </div>)}
            <footer className='w-full h-16'>
                <div className='w-full flex justify-between items-center p-4'>
                    <div>&copy; 2023 Compositor</div>
                    <div>designed with love by haterb</div>
                </div>
            </footer>
        </div>
    )
}

export default DraftEditor
