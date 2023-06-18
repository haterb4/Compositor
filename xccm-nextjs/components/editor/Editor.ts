import React from "react";
import { NodeType } from "../../data/doc";
import { DocData } from "../../pages/api/documents/[id]";
import parse from 'html-react-parser';

export class MyEditor {
    private documentName: string;
    private content: DocData = {
        nodeType: NodeType.DOCUMENT,
        content: []
    }
    private baseElement: string =  `
        <div>
            <p>Les enfants sont bien rentres</p>
            <p>Les enfants sont bien rentres</p>
        </div>
    `;
    
    private reactElement: string | JSX.Element | JSX.Element[] = parse(this.baseElement)
    constructor(documentName: string){
        this.documentName = documentName;
    }
    setContent(content: DocData): void {
        this.content = content;
    }
    buidContentTable(partialDocument: DocData, result: string): string{
        let partialHtmlString = '<div>'
        if (partialDocument.nodeType === NodeType.TITLE){
            const level = partialDocument.attrs
            if (level !== undefined){
                let title = `<h${level}>`

                const subDocument = partialDocument.content as DocData[]
                for (let j = 0; j < subDocument.length; j++){
                    const wordContent = subDocument[j].content as string
                    let classes = ''
                    const marks = subDocument[j].marks
                    if (marks !== undefined) {
                        
                        for (let i = 0; i < marks.length; i++){
                            classes += ` ${marks[i].type}`
                        }
                    }
                    title += `<span class="${classes}"> ${wordContent}</span>`
                    partialHtmlString += title
                }

                title = `</h${level}>`
                console.log(title)
                return title
            }
            else{
                return ""
            }
        }
        if (partialDocument.nodeType === NodeType.NOTION){
            let content = '<p>'
            const subDocument = partialDocument.content as DocData[]
            for (let j = 0; j < subDocument.length; j++){
                const wordContent = subDocument[j].content as string
                let classes = ''
                const marks = subDocument[j].marks
                if (marks !== undefined) {
                    
                    for (let i = 0; i < marks.length; i++){
                        classes += ` ${marks[i].type}`
                    }
                }
                content += `<span class="${classes}"> ${wordContent}</span>`
                partialHtmlString += content
            }
            content += `</p>`
            console.log(content)
            return content
        }
        partialHtmlString += '</div>'
        return partialHtmlString
    }
    getContentTable(): string | JSX.Element | JSX.Element[] {
        let contentString = ''
        try {
            const htmlString = this.buidContentTable(this.content, contentString)
            const reactHtmlParsed = parse(htmlString)
            return reactHtmlParsed
        } catch (error) {
            
        }
        return ""
    }
    getHTMLContent(): string | JSX.Element | JSX.Element[] {
        console.log(this.reactElement)
        return  this.reactElement
    }

    getJSONContent(){
        
    }

    saveDocument(): Boolean{
        console.log(this.documentName)
        return true
    }
    testWork(): string {
        return 'work successfully'
    }
} 