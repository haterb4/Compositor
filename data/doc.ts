import { DocData } from "../pages/api/documents/[id]"
export const NodeType = {
    DOCUMENT: "doc",
    PART: 'part',
    CHAPTER: "chapter",
    SECTION: "section",
    TITLE: "title",
    NOTION: "notion",
    WORD: "word",
}

export const newDoc:DocData = {
    nodeType: NodeType.DOCUMENT,
    content:[]
}
const Project: DocData = {
    nodeType: NodeType.DOCUMENT,
    content: [
        {
            nodeType: NodeType.TITLE,
            attrs: {
                level: 1
            },
            marks: [
                {
                    type: "class",
                    value: 'text-amber-500'
                }
            ],
            content: [
                {
                    nodeType: NodeType.WORD,
                    content: "Moi"
                },
                {
                    nodeType: NodeType.WORD,
                    content: "et"
                },
                {
                    nodeType: NodeType.WORD,
                    content: "Mes"
                },
                {
                    nodeType: NodeType.WORD,
                    content: "Habits"
                },
                {
                    nodeType: NodeType.WORD,
                    content: "ici"
                }
            ]
        },
        {
            nodeType: NodeType.PART,
            content: [
                {
                    nodeType: NodeType.CHAPTER,
                    content: [
                        {
                            nodeType: NodeType.SECTION,
                            content: [
                                {
                                    nodeType: NodeType.NOTION,
                                    content: [
                                        {
                                            nodeType: NodeType.WORD,
                                            content: "Les"
                                        },
                                        {
                                            nodeType: NodeType.WORD,
                                            content: "Premies"
                                        },
                                        {
                                            nodeType: NodeType.WORD,
                                            content: "Pas"
                                        },
                                        {
                                            nodeType: NodeType.WORD,
                                            content: "Du"
                                        },
                                        {
                                            nodeType: NodeType.WORD,
                                            content: "Bebe"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
    

export default Project