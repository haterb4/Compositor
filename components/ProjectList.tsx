/* eslint-disable react-hooks/exhaustive-deps */
import { faFileWord, faFolder } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useRef, useState } from 'react'
import { ProjectType } from '../types/project'
import Card from './Card'
import { useAppSelector, useAppDispatch } from '../store/hooks/hook'
import { removeProject, selectProjects, setProjects } from '../store/slices/projectsNameSlice'
import postAPIData from '../data/postApiData'


const ProjectList = () => {
  const projects = useAppSelector(selectProjects);
  const dispatch = useAppDispatch();
  const deleteProject = async (index: number) => {
    const response = await postAPIData('/api/projects/delete', { projectName: projects[index]})
    if (response.status === true) {
      dispatch(removeProject({index}))
      alert("deleted successfully")
    }
    else{
      alert("an error occurred")
    }
  }
  const getProjects = () => {
    const data = fetch("/api/projects/all")
    .then((res) => res.json())
    .then((data) => {
        if (data.success === true){
            dispatch(setProjects({projects: data.projects}))
        }
        else console.log(data.message)
    })
    .catch((e) => console.log(e))
  }
  useEffect(() => {
      getProjects()
  }, [])
  return (
    <div className='h-full grid grid-cols-5 content-start gap-8 place-items-center md:grid-cols-4 overflow-y-auto'>
        {projects.map((name, index) => (
            <Card
            key={index}
            name={name} fgClass="text-light-blue-500"
            bgClass="bg-light-blue-100"
            href={`/projects-manager/project/${name}`}
            action={ ()=> {deleteProject(index)}}
          />
        ))}
    </div>
  )
}

export default ProjectList