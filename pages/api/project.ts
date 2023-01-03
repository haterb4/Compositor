import type { NextApiRequest, NextApiResponse } from 'next'
import Project from '../../data/project'
import { ProjectType } from '../../types/project'

type Data = {
  project: ProjectType,
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
    if (req.method === 'GET'){
        const singleProject = {
            project: Project,
        }
        return res.status(200).json(singleProject)
    }
}
