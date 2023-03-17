import { faClose, faFileWord, faFolder, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import FileManagerTreeView from '../components/FileManagerTreeView'
import Header from '../components/Header'
import ProjectManagerTreeView from '../components/ProjectManagerTreeView'
import Search from '../components/Search'
import { ProjectType } from '../types/project'
import jsondata from "../pages/api/projects/projects.json"

type Props = {
    children: JSX.Element,
    project?: ProjectType,
    projects?: string[],
    root: Boolean,
    title: String
    modalState?: {
      setState: Function,
      state: string,
      submit: Function
    }
}
const ManagerLayouth = ({children, project, projects, root, title, modalState}: Props) => {
  const [createProject, setCreateProject] = useState(false)
  
  
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
            {/* modal create project */}
            {createProject && 
            modalState?(<div className='absolute w-full h-full z-50' style={{background: 'rgba(3, 3, 3, 0.4)'}}>
                <div className=' flex justify-center items-center w-full h-full relative'>
                    <div className='w-96 h-52 bg-white rounded-lg'>
                        <h1 className='font-extrabold text-2xl text-center py-3 mt-2'>Nouvelle composition</h1>
                        <h4 className='px-2 font-bold mt-2'>Nom de la composition</h4>
                        <div className='p-2'>
                            <input
                                type="text"
                                className='w-full h-12 border border-blue-gray-200 rounded-lg px-2'
                                placeholder='Project name'
                                value={modalState?modalState.state: ''}
                                onChange={ e => {modalState?modalState.setState(e.target.value): null}}
                                onKeyDown={e => { if (e.key === 'Enter') {modalState?modalState.submit(): null; setCreateProject(false)}}}
                            />
                        </div>
                    </div>
                    <button className='h-12 w-12 absolute right-0 top-0 text-white' onClick={() => {setCreateProject(false);}}><FontAwesomeIcon icon={faClose} className='fa-2x'/></button>
                </div>
            </div>): ''
            }
          </div>
        </div>
    </div>
  )
}

export default ManagerLayouth