import type { NextApiRequest, NextApiResponse } from 'next'
import { DocData } from '../[id]';
import fs from 'fs'
import path from 'path'
import { mkdir, writeFile } from 'fs/promises'
import { DOCUMENT_DIR, PROJECTS_DIR, USER_HOME_DIR } from '../../../../constants/constants'

type Response = {
    status: Boolean;
}

export default async function getDocumentById( req: NextApiRequest, res: NextApiResponse<Response> ) {
    if (req.method === 'POST'){
        const name = req.query.name
        const { document, project, } = req.body
        if (name){
            console.log(name)
            const documentsPath = path.join(USER_HOME_DIR, DOCUMENT_DIR)
            const project_dir = path.join(documentsPath, PROJECTS_DIR)
            const project_path = path.join(project_dir, project)
            const project_basefile = path.join(project_path, `${name}.json`)
            const resp = {
                status: true,
            }
            try {
                console.log(document)
                await writeFile(project_basefile, JSON.stringify(document));
                // fichier écrit avec succès
                return res.status(200).json(resp)
            } catch (err) {
                console.error(err);
                return res.status(401).json({status: false})
            }
        }
        return res.status(401).json({status: false})
    }
}