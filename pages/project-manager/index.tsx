import { faFileWord, faFolder, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Accordion from '../../components/Accordion'
import AccordionButton from '../../components/AccordionButton'
import ProjectGrid from '../../components/ProjectGrid'
import Search from '../../components/Search'
import ManagerLayouth from '../../layouts/ManagerLayouth'
import { ProjectType } from '../../types/project'


const Manager = () => {
  const [projects, setProjects] = useState([])
  const [localprojects, setLocalProjects] = useState([])
  const [thisProjects, setThisProjects] = useState<ProjectType >({
    name: 'app',
    id: '1',
    fileIcon: faFileWord,
    folderIcon: faFolder,
    ressourcesid: '1',
    exportid: '1',
    configurationsid: '1',
    fgClass: 'text-pink-200',
    bgClass: 'bg-pink-900',
    description: "Description of Project 1",
    createdAt: "05/11/2022",
    sizes: {
        file: "5.2MB",
        configurations: "5.2MB",
        ressourses: "5.2MB",
        export: "5.2MB"
    }

})
  const getProjects = () => {
    const data = fetch("/api/projects")
    .then((res) => res.json())
    .then((data) => {
        setProjects(data.composed)
        setLocalProjects(data.local)
        if (projects) setThisProjects(data.composed[0])
    })
    .catch((e) => console.log(e))
  }
  useEffect(() => {
    getProjects()
  }, [])
  const chooseProject = (index: number, where: String) => {
    where === 'composed'? setThisProjects(projects[index]): setThisProjects(localprojects[index])
  }
  return (
    <ManagerLayouth>
        <div className='w-full h-full flex justify-start items-start pt-4 pl-1 overflow-hidden'>
            <section className='h-full w-96 border-2 rounded-lg p-1'>
                {projects && 
                (<div className='mb-1'>
                    <Accordion title='Mes Compositions' titleColorClass="bg-light-blue-200" items={projects.length}>
                        <div>
                            {projects.map((project:ProjectType, index: number) => (
                                <AccordionButton key={index} icon={faFolder} bgClass="bg-light-blue-300" action={() => { chooseProject(index, 'composed') }}>{project.name}</AccordionButton>
                            ))}
                        </div>
                    </Accordion>
                </div>)
                }
                {localprojects &&
                (<Accordion title='Compositions Locales' titleColorClass="bg-light-blue-200" items={localprojects.length}>
                    <div>
                        {localprojects.map((project:ProjectType, index: number) => (
                                <AccordionButton key={index} icon={faFolder} bgClass="bg-light-blue-300" action={() => { chooseProject(index, 'local') }}>{project.name}</AccordionButton>
                        ))}
                    </div>
                </Accordion>)
                }
            </section>
            <section className='h-full w-full flex flex-col justify-between pl-4 overflow-hidden'>
                <Search />
                <div className='w-full h-full p-2 overflow-hidden'>
                    <div className='h-full w-full border rounded-lg bg-blue-gray-50 p-4 overflow-hidden  relative'>
                        <ProjectGrid project={thisProjects}/>
                        <button className='w-64 h-12 bg-white flex items-center justify-start px-4 absolute bottom-8 right-16 hover:bg-blue-100'>
                            <span className='text-light-blue-500'><FontAwesomeIcon icon={faPlus} className='fa-2x'/></span>
                            <p className='capitalize pl-3 font-bold'>nouvelle composition</p>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    </ManagerLayouth>
  )
}

export default Manager