import type { NextApiRequest, NextApiResponse } from 'next'
import { DocData } from '../[id]';
import fs from 'fs'
import path from 'path'
import { readFile } from 'fs/promises'
import { DOCUMENT_DIR, PROJECTS_DIR, USER_HOME_DIR } from '../../../../constants/constants'

type Response = {
    status: Boolean;
    document?: DocData
}

export default async function getSingleDocument( req: NextApiRequest, res: NextApiResponse<Response> ) {
    console.log('========================')
    console.log('getting the document')
    console.log('========================')
    if (req.method === 'POST'){
        const { project, name} = req.body
        if (name){
            console.log(name)
            const documentsPath = path.join(USER_HOME_DIR, DOCUMENT_DIR)
            const project_dir = path.join(documentsPath, PROJECTS_DIR)
            const project_path = path.join(project_dir, project)
            console.log(project_path)
            const project_basefile = path.join(project_path, `${name}.json`)
            try {
                //console.log(document)
                const documentContent = await readFile(project_basefile, { encoding: 'utf8' });
                const document = JSON.parse(documentContent)
                const resp = {
                    status: true,
                    document: document
                }
                // fichier écrit avec succès
                return res.status(200).json(resp)
            } catch (err) {
                console.error(err);
                return res.status(401).json({status: false})
            }
        }
        console.log("aborted")
        return res.status(401).json({status: false})
    }
}