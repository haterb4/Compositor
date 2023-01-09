import { faClose, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { JsxElement } from 'typescript'
import FileManagerTreeView from '../components/FileManagerTreeView'
import Header from '../components/Header'
import ProjectManagerTreeView from '../components/ProjectManagerTreeView'
import Search from '../components/Search'
import { ProjectType } from '../types/project'

type Props = {
    children: JSX.Element,
    project?: ProjectType,
    projects?: ProjectType[],
    root: Boolean,
    title: String
}
const ManagerLayouth = ({children, project, projects, root, title}: Props) => {
  const [createProject, setCreateProject] = useState(false)
  const [newProjectName, setNewProjectName] = useState('')
  const submitNewProject = () => {
    setCreateProject(false)
    if (newProjectName !== '')alert('Project successfull created')
    else alert('Empty project name')
  }
  return (
    <div className='w-full h-screen overflow-hidden flex flex-col justify-between items-start'>
        <Header />
        <div className='w-full h-full m-auto mt-0 overflow-hidden'>
          <div className='w-full h-full flex justify-start items-start pt-4 pl-1 overflow-hidden relative'>
          {root
            ?<ProjectManagerTreeView title={title} projects={projects} action={() => null }/>
            :<FileManagerTreeView title={title} project={project} action={() => null }/>
          }
            <section className='h-full w-full flex flex-col justify-between pl-4 overflow-hidden relative'>
                <Search />
                <div className='w-full h-full p-2 overflow-hidden'>
                    <div className='h-full w-full border rounded-lg bg-blue-gray-50 p-4 overflow-hidden  relative'>
                        {children}
                        <button 
                          className='w-64 h-12 bg-white flex items-center justify-start px-4 hover:bg-blue-100'
                          onClick={() => setCreateProject(true)}
                          style={{position: 'absolute', right: '2rem', bottom: '2rem'}}
                        >
                            <span className='text-light-blue-500'><FontAwesomeIcon icon={faPlus} className='fa-2x'/></span>
                            <p className='capitalize pl-4 font-bold'>nouvelle composition</p>
                        </button>
                    </div>
                </div>
            </section>
            {createProject && <div className='absolute w-full h-full z-50' style={{background: 'rgba(3, 3, 3, 0.4)'}}>
                <div className=' flex justify-center items-center w-full h-full relative'>
                    <div className='w-96 h-44 bg-white rounded-lg'>
                        <h1 className='font-extrabold text-2xl text-center py-3 mt-2'>Nouvelle composition</h1>
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
        </div>
    </div>
  )
}

export default ManagerLayouth