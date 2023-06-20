import { ComposixObject, ComposixNode } from "../types/composition";


const course: ComposixObject = {
    node: ComposixNode.DOCUMENT,
    title: [
        {
            node: 'TEXT',
            content: 'Les'
        },
        {
            node: 'TEXT',
            content: 'Canards'
        },
        {
            node: 'TEXT',
            content: 'Sauvages'
        },
        
    ],
    children: []
}

export default course