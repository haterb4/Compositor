import type { NextApiRequest, NextApiResponse } from 'next'
import Project from '../../../data/project'
import { ProjectType } from '../../../types/project'

type Data = {
  project: ProjectType | [],
  status: Boolean,
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
    if (req.method === 'GET'){
        const id = req.query.id
        if (id){
            console.log(id)
            const singleProject = {
                status: true,
                project: Project,
            }
            return res.status(200).json(singleProject)
        }
        return res.status(401).json({status: false, project: []})
    }
}
