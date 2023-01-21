import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import os from "os"
const userHomeDir = __dirname
import path from 'path'
import { ProjectType } from '../../../types/project'
import Projects from '../../../data/projects'
import jsondata from "./projects.json"

type Data = {
    status: boolean
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
    if (req.method === 'POST'){
        const {  project } = req.body
        let allprojects = jsondata.projects
        allprojects.push(project)
        jsondata.projects = allprojects
        fs.writeFile(path.join(userHomeDir, 'pages/api/projects', `projects.json`), JSON.stringify(jsondata),function(err){
            if(err) res.status(501).json({status: false});
        })
        return res.status(200).json({status: true})
    }
    return res.status(401).json({status: false})
}
