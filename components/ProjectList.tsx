import { faFileWord, faFolder } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { ProjectType } from '../types/project'
import Card from './Card'


type Props = {
    projects: ProjectType[]
}
const ProjectList = ({projects}: Props) => {
  const [listprojects, setLisProjects] = useState<ProjectType[] >([{
    name: 'app',
    id: '',
    fileIcon: faFileWord,
    folderIcon: faFolder,
    ressourcesid: '',
    exportid: '',
    configurationsid: '',
    fgClass: '',
    bgClass: '',
    description: "",
    createdAt: "",
    sizes: {
        file: "",
        configurations: "",
        ressourses: "",
        export: ""
    }
  }])
  useEffect(()=> {
    setLisProjects(listprojects)
  }, [listprojects])  
  return (
    <div className='h-full grid grid-cols-5 overflow-y-scroll'>
        {projects.map((project, index) => (
            <Card
            key={index}
            icon={project.folderIcon}
            id={project.id} date='05/11/2022'
            size={project.sizes.export} file={true}
            name={project.name} fgClass="text-light-blue-500"
            bgClass="bg-light-blue-100"
          />
        ))}
    </div>
  )
}

export default ProjectList