import { faFileWord, faFolder, faPlus } from '@fortawesome/free-solid-svg-icons'
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
  const [projects, setProjects] = useState([])
  const [localprojects, setLocalProjects] = useState([])
  const [singleProjects, setSingleProjects] = useState(false)
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
  return (
    <ManagerLayouth>
        <div className='w-full h-full flex justify-start items-start pt-4 pl-1 overflow-hidden'>
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
                            : <ProjectList projects={[...projects, ...localprojects]}/>
                        }

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