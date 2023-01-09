import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import os from "os"
const userHomeDir = os.homedir()
import path from 'path'

type Data = {
    status: boolean
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
    if (req.method === 'POST'){
        const { state, fileName } = req.body
        if (state && fileName){
            fs.writeFile(path.join(userHomeDir, 'Documents', `${fileName}.json`), JSON.stringify(state),function(err){
                if(err) res.status(501).json({status: false});
            })
                const data= {
                status: true
            }
            return res.status(200).json(data)
        }
        else{
            return res.status(402).json({status: false})
        }
        
    }
    return res.status(401).json({status: false})
}
