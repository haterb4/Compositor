import { faClose, faFileWord, faFolder, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Accordion from '../../components/Accordion'
import AccordionButton from '../../components/AccordionButton'
import ProjectGrid from '../../components/ProjectGrid'
import ProjectList from '../../components/ProjectList'
import Search from '../../components/Search'
import ManagerLayouth from '../../layouts/ManagerLayouth'
import { ProjectType } from '../../types/project'


const Manager = () => {
  const [projects, setProjects] = useState<ProjectType []>([])
  const [localprojects, setLocalProjects] = useState([])
  const [singleProjects, setSingleProjects] = useState(false)
  const [createProject, setCreateProject] = useState(false)
  const [newProjectName, setNewProjectName] = useState('')
  const [thisProjects, setThisProjects] = useState<ProjectType >({
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

})
  const getProjects = () => {
    const data = fetch("/api/projects")
    .then((res) => res.json())
    .then((data) => {
        setProjects(data.composed)
        setLocalProjects(data.local)
    })
    .catch((e) => console.log(e))
  }
  useEffect(() => {
    getProjects()
    setThisProjects(thisProjects)
  }, [thisProjects])
  const resetToSingleProject = () =>{
    setSingleProjects(false)
  }
  const chooseProject = (index: number, where: String) => {
    setSingleProjects(true)
    where === 'composed'? setThisProjects(projects[index]): setThisProjects(localprojects[index])
  }
  const submitNewProject = () => {
    setCreateProject(false)
    if (newProjectName !== '') {
        alert('Project successfull created')
        const tempProject: ProjectType = {
            name: newProjectName,
            id: projects.length.toString(),
            fileIcon: faFileWord,
            folderIcon: faFolder,
            ressourcesid: projects.length.toString(),
            exportid: '',
            configurationsid: projects.length.toString(),
            fgClass: '',
            bgClass: '',
            description: "",
            createdAt: "03/01/2023",
            sizes: {
                file: "5.5MB",
                configurations: "5.5MB",
                ressourses: "5.5MB",
                export: "5.5MB"
            }
        }
        setProjects([tempProject, ...projects])
        setNewProjectName('')
    }
    else alert('Empty project name')
  }
  return (
    <ManagerLayouth>
        <div className='w-full h-full flex justify-start items-start pt-4 pl-1 overflow-hidden relative'>
            <section className='h-full w-96 border-2 rounded-lg p-1'>
                {projects && 
                (<div className='mb-1'>
                    <Accordion title='Mes Compositions' titleColorClass="bg-light-blue-200" items={projects.length} action={resetToSingleProject}>
                        <div>
                            {projects.map((project:ProjectType, index: number) => (
                                <AccordionButton key={index} icon={faFolder} bgClass="bg-light-blue-300" action={() => { chooseProject(index, 'composed') }}>{project.name}</AccordionButton>
                            ))}
                        </div>
                    </Accordion>
                </div>)
                }
                {localprojects &&
                (<Accordion title='Compositions Locales' titleColorClass="bg-light-blue-200" items={localprojects.length} action={resetToSingleProject}>
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
                        {singleProjects
                            ? <ProjectGrid project={thisProjects}/>
                            : <ProjectList composedProjects={projects} localProjects={localprojects} action={chooseProject}/>
                        }

                        <button className='w-64 h-12 bg-white flex items-center justify-start px-4 absolute bottom-8 right-16 hover:bg-blue-100' onClick={() => setCreateProject(true)}>
                            <span className='text-light-blue-500'><FontAwesomeIcon icon={faPlus} className='fa-2x'/></span>
                            <p className='capitalize pl-3 font-bold'>nouvelle composition</p>
                        </button>
                    </div>
                </div>
            </section>
            {createProject && <div className='absolute w-full h-full z-50' style={{background: 'rgba(3, 3, 3, 0.4)'}}>
                <div className=' flex justify-center items-center w-full h-full relative'>
                    <div className='w-96 h-44 bg-white rounded-lg'>
                        <h1 className='font-extrabold text-2xl text-center py-3 mt-2'>New composition</h1>
                        <div className='p-2 mt-4'>
                            <input
                                type="text"
                                className='w-full h-12 border border-blue-gray-200 rounded-lg px-2'
                                placeholder='Project name'
                                value={newProjectName}
                                onChange={ e => setNewProjectName(e.target.value)}
                                onKeyDown={e => { if (e.key === 'Enter') submitNewProject()}}
                            />
                        </div>
                    </div>
                    <button className='h-12 w-12 absolute right-0 top-0 text-white' onClick={() => setCreateProject(false)}><FontAwesomeIcon icon={faClose} className='fa-2x'/></button>
                </div>
            </div>}
        </div>
    </ManagerLayouth>
  )
}

export default Manager