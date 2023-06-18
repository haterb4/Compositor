import type { NextApiRequest, NextApiResponse } from 'next'
import doc from '../../../data/doc'

export interface DocData {
    nodeType: string;
    attrs?: {
        level: number;
    };
    marks?: {
        type: string,
        value: string;
    }[];
    content: DocData[] | string;
}

type Response = {
    status: Boolean;
    document?: DocData;
}

export default function getDocumentById( req: NextApiRequest, res: NextApiResponse<Response> ) {
    if (req.method === 'GET'){
        const id = req.query.id
        if (id){
            console.log(id)
            const resp = {
                status: true,
                project: doc,
            }
            return res.status(200).json(resp)
        }
        return res.status(401).json({status: false})
    }
}
