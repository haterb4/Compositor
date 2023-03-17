/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react'
import ProjectList from '../../components/ProjectList'
import postAPIData from '../../data/postApiData'
import ManagerLayouth from '../../layouts/ManagerLayouth'
import { useAppSelector, useAppDispatch } from '../../store/hooks/hook'
import { addProject, selectProjects } from '../../store/slices/projectsNameSlice'


const Manager = () => {
    const [createProject, setCreateProject] = useState(false)
    const [newProjectName, setNewProjectName] = useState('')
    const projects = useAppSelector(selectProjects);
    const dispatch = useAppDispatch();

    const submitNewProject = async () => {
        setCreateProject(false)
        if (newProjectName !== '') {
            //fetch the route for the project
            if (projects.includes(newProjectName)) alert('project already exists')
            else{
                const response = await postAPIData('/api/projects/new', { projectName: newProjectName})
                if (response.status === true) {
                    dispatch(addProject({projectName: newProjectName}))
                    alert("Project created successfully")
                }
                else{
                    alert('something went wrong')
                }
            }
            setNewProjectName('')
        }
        else alert('Empty project name')
    }
    const modalState = {
        state: newProjectName,
        setState: setNewProjectName,
        submit: submitNewProject
    }
    return (
        <ManagerLayouth
            projects={projects}
            root={true}
            title="Mes compositions"
            modalState= {modalState}
        >
            <ProjectList />
        </ManagerLayouth>
    )
}

export default Manager