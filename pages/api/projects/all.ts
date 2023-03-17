import type { NextApiRequest, NextApiResponse } from 'next'
import Projects from '../../../data/projects'
import LocalProjects from '../../../data/localProjects'
import { ProjectType } from '../../../types/project'
import os from 'os'
import path from 'path'
import { readdir, mkdir } from 'node:fs/promises'
import { DOCUMENT_DIR, PROJECTS_DIR, USER_HOME_DIR } from '../../../constants/constants'

type Data = {
  projects: string[] | null,
  message: string,
  success: boolean
}

export default async function handler( req: NextApiRequest, res: NextApiResponse<Data | string[]> ) {
    if (req.method === 'GET'){
        try {
            const documentsPath = path.join(USER_HOME_DIR, DOCUMENT_DIR) 
            const content = await readdir(documentsPath);
            if (content.includes(PROJECTS_DIR)){
                const projectFilesBasePath = path.join(documentsPath, content[content.indexOf(PROJECTS_DIR)]);
                const projects = await readdir(projectFilesBasePath);
                return res.status(200).json({projects, message: '', success: true})
            }
            else{
                await mkdir(path.join(documentsPath, PROJECTS_DIR))
                return res.status(200).json({projects: [], message: 'this folder is still empty', success: true})
            }
            
        } catch (error) {
            return res.status(501).json({projects: null, message: 'something went wrong', success: false})
        }
    }
    else{
        return res.status(401).json({projects: null, message: 'unknown access method', success: false})
    }
}
