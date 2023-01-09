import { faFileWord, faFolder } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { ProjectType } from '../types/project'
import Card from './Card'


type Props = {
    projects: ProjectType[],
}
const ProjectList = ({projects}: Props) => {
  const [listprojects, setLisProjects] = useState<ProjectType[] >([])
  useEffect(()=> {
    setLisProjects(listprojects)
  }, [listprojects])  
  return (
    <div className='h-full grid grid-cols-5 content-start gap-8 place-items-center md:grid-cols-4 overflow-y-auto'>
        {projects.map((project, index) => (
            <Card
            key={index}
            icon={project.folderIcon}
            id={project.id} date='05/11/2022'
            size={project.sizes.export} file={false}
            name={project.name} fgClass="text-light-blue-500"
            bgClass="bg-light-blue-100"
            href={`/projects-manager/project/${project.id}`}
          />
        ))}
    </div>
  )
}

export default ProjectList