export const ComposixNode = {
    DOCUMENT: 'DOCUMENT',
    PART: 'PART',
    CHAPTER: 'CHAPTER',
    SECTION: 'SECTION',
    PARAGRAPH: 'PARAGRAPH',
    TITLE: 'TITLE',
    TEXT: 'TEXT'
}


interface Attribute {
    type: string;
    value: string[];
}

export interface ComposixObject {
    node: string;
    atrributes?: Attribute[];
    marks?: Attribute[];
    title?: {
        node: 'TEXT';
        atrributes?: Attribute[];
        marks?: Attribute[];
        content: string;
    }[];
    children: ComposixObject[] | string
}

