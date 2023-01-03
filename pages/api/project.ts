import type { NextApiRequest, NextApiResponse } from 'next'
import Projects from '../../data/projects'
import LocalProjects from '../../data/localProjects'
import { ProjectType } from '../../types/project'

type Data = {
  project: ProjectType[],
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
    if (req.method === 'GET'){
        const projects = {
            project: LocalProjects,
        }
        return res.status(200).json(projects)
    }
}
