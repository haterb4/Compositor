import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import os from "os"
const userHomeDir = os.homedir()
import path from 'path'

type Data = {
    content: {},
    status: Boolean
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
    if (req.method === 'GET'){
        const fileName = 'projectfilestate'
        if (fileName){
            const content = fs.readFileSync(path.join(userHomeDir, 'Documents', `${fileName}.json`))
            return res.status(200).json({status: true, content: JSON.parse(content.toString())})
        }
        else{
            console.log('empty')
            return res.status(402).json({status: false, content: {},})
        }
        
    }
    return res.status(401).json({status: false, content: {},})
}
