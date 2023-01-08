import React from 'react'
import { ProjectType } from '../types/project'
import Card from './Card'


type Props = {
    project: ProjectType
}
const ProjectGrid = ({project}: Props) => {
  return (
    <div>
      {project && (
        <div className='h-full grid grid-cols-5 gap-4 overflow-y-scroll'>
            <Card
              icon={project.fileIcon}
              id={project.id}
              date={project.createdAt}
              size={project.sizes.file}
              file={true} name={project.name}
              fgClass={project.fgClass}
              bgClass={project.bgClass}
              href={`projects-manager/creation/${project.id}/editor`}
            />
            <Card
              icon={project.folderIcon}
              id={project.id} date='05/11/2022'
              size={project.sizes.configurations}
              file={true} name="configurations"
              fgClass="text-red-400"
              bgClass="bg-red-200"
              href={`projects-manager/creation/${project.id}/assets/configurations`}
            />
            <Card
              icon={project.folderIcon}
              id={project.id} date='05/11/2022'
              size={project.sizes.ressourses}
              file={true} name="Ressources"
              fgClass="text-green-500"
              bgClass='bg-green-200'
              href={`projects-manager/creation/${project.id}/assets/ressources`}
            />
            <Card
              icon={project.folderIcon}
              id={project.id} date='05/11/2022'
              size={project.sizes.export} file={true}
              name="Export" fgClass="text-light-blue-500"
              bgClass="bg-light-blue-100"
              href={`projects-manager/creation/${project.id}/assets/Export`}
            />
        </div>
      )}
    </div>
  )
}

export default ProjectGrid