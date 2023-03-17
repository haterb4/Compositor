import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import os from "os"
const userHomeDir = os.homedir()
import path from 'path'
import { DOCUMENT_DIR, PROJECTS_DIR, USER_HOME_DIR } from '../../../constants/constants'
import { readdir, rm, unlink } from 'fs/promises'

type Data = {
    status: boolean
}

export default async function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
    if (req.method === 'POST'){
        const { projectName } = req.body
        if (projectName){
            try {
                const documentsPath = path.join(USER_HOME_DIR, DOCUMENT_DIR)
                const project_dir = path.join(documentsPath, PROJECTS_DIR)
                const content = await readdir(path.join(project_dir, projectName))
                
                await rm(path.join(project_dir, projectName), { recursive: true, force: true })
                return res.status(200).json({status: true})
            } catch (error) {
                console.log("erreur")
                return res.status(501).json({status: false})
            }
        }
        else{
            return res.status(401).json({status: false})
        }
        
    }
    return res.status(401).json({status: false})
}
