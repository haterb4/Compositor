import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import { mkdir } from 'fs/promises'
import { DOCUMENT_DIR, PROJECTS_DIR, USER_HOME_DIR } from '../../../constants/constants'

type Data = {
    status: Boolean
}

export default async function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
    if (req.method === 'POST'){
        const { projectName } = req.body
        if (projectName){
            try {
                const documentsPath = path.join(USER_HOME_DIR, DOCUMENT_DIR)
                const project_dir = path.join(documentsPath, PROJECTS_DIR) 
                await mkdir(path.join(project_dir, projectName))
                return res.status(200).json({status: true})
            } catch (error) {
                return res.status(501).json({status: false})
            }
        }
        else{
            return res.status(401).json({status: false})
        }
        
    }
    return res.status(401).json({status: false})
}
