import { NodeType } from "../../data/doc"
import { DocData } from "../../pages/api/documents/[id]"

export const buildContentTableUtils = (partialDocument: DocData): string => {
    console.log('noeud: ', partialDocument)
    const partialDocumentAsArray = partialDocument.content as DocData[]
    if (partialDocumentAsArray.length !== 0){
        if (partialDocument.nodeType === NodeType.DOCUMENT){
            let partialHtmlString = '<section class="pl-2 flex flex-col justify-start items-start text-left">'
            const partialDacumentMarks = partialDocument.marks
            if (partialDacumentMarks !== undefined){
                let classes = ''
                const marks = partialDocument.marks
                if (marks !== undefined) {
                    for (let i = 0; i < marks.length; i++){
                        classes += ` ${marks[i].type}`
                    }
                }
                partialHtmlString = `<section class="${classes}">`
            }
            const partialDocumentContent = partialDocument.content as DocData[]
            console.log("document Profondeur: ", partialDocumentContent.length)
            for (let i = 0; i < partialDocumentContent.length; i++) {
                console.log("document enfant: ", i+1)
                const partialResult = buildContentTableUtils(partialDocumentContent[i])
                partialHtmlString += partialResult
            }
            partialHtmlString += '</section>'
            console.log('section: ', partialHtmlString)
            return partialHtmlString
        }
        if (partialDocument.nodeType === NodeType.PART){
            let partialHtmlString = `<div class="pl-2 flex flex-col justify-start items-start text-left">`
            const partialDacumentMarks = partialDocument.marks
            if (partialDacumentMarks !== undefined){
                let classes = ''
                const marks = partialDocument.marks
                if (marks !== undefined) {
                    for (let i = 0; i < marks.length; i++){
                        classes += ` ${marks[i].type}`
                    }
                }
                partialHtmlString = `<div class="${classes}">`
            }
            const partialDocumentContent = partialDocument.content as DocData[]
            console.log("partie Profondeur: ", partialDocumentContent.length)
            for (let i = 0; i < partialDocumentContent.length; i++) {
                console.log("partie enfant: ", i+1)
                const partialResult = buildContentTableUtils(partialDocumentContent[i])
                partialHtmlString += partialResult
            }
            partialHtmlString += '</div>'
            return partialHtmlString
        }
        if (partialDocument.nodeType === NodeType.CHAPTER){
            let partialHtmlString = '<div class="pl-2 flex flex-col justify-start items-start text-left">'
            const partialDacumentMarks = partialDocument.marks
            if (partialDacumentMarks !== undefined){
                let classes = ''
                const marks = partialDocument.marks
                if (marks !== undefined) {
                    for (let i = 0; i < marks.length; i++){
                        classes += ` ${marks[i].type}`
                    }
                }
                partialHtmlString = `<div class="${classes}">`
            }
            const partialDocumentContent = partialDocument.content as DocData[]
            console.log("chapitre Profondeur: ", partialDocumentContent.length)
            for (let i = 0; i < partialDocumentContent.length; i++) {
                console.log("chapitre enfant: ", i+1)
                const partialResult = buildContentTableUtils(partialDocumentContent[i])
                partialHtmlString += partialResult
            }
            partialHtmlString += '</div>'
            return partialHtmlString
        }
        if (partialDocument.nodeType === NodeType.SECTION){
            let partialHtmlString = '<div class="pl-2 flex flex-col justify-start items-start text-left">'
            const partialDacumentMarks = partialDocument.marks
            if (partialDacumentMarks !== undefined){
                let classes = ''
                const marks = partialDocument.marks
                if (marks !== undefined) {
                    for (let i = 0; i < marks.length; i++){
                        classes += ` ${marks[i].type}`
                    }
                }
                partialHtmlString = `<div class="${classes}">`
            }
            const partialDocumentContent = partialDocument.content as DocData[]
            console.log("section Profondeur: ", partialDocumentContent.length)
            for (let i = 0; i < partialDocumentContent.length; i++) {
                console.log("section enfant: ", i+1)
                const partialResult = buildContentTableUtils(partialDocumentContent[i])
                partialHtmlString += partialResult
            }
            partialHtmlString += '</div>'
            return partialHtmlString
        }
        if (partialDocument.nodeType === NodeType.TITLE){
            
            const level = partialDocument.attrs
            if (level !== undefined){
                //let title = `<h${level.level}>`
                let title = `<button class="text-green-900 text-left hover:underline">`
    
                const partialDacumentMarks = partialDocument.marks
                if (partialDacumentMarks !== undefined){
                    let classes = ''
                    const marks = partialDocument.marks
                    if (marks !== undefined) {
                        for (let i = 0; i < marks.length; i++){
                            if (marks[i].type === 'class')
                            classes += ` ${marks[i].value}`
                        }
                    }
                    title = `<h${level.level} class="${classes}">`
                }
    
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
                }
                
                //title += `</h${level.level}>`
                title += `</button>`
                console.log('title: ', title)
                return title
            }
            else{
                return ""
            }
        }
        return ''
    }
    /*if (partialDocument.nodeType === NodeType.NOTION){
        let content = '<button>'
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
        }
        content += `</button>`
        return content
    }*/
    return ''
}