import { faClose, faFileWord, faFolder, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import ProjectGrid from '../../components/ProjectGrid'
import ProjectList from '../../components/ProjectList'
import Search from '../../components/Search'
import ManagerLayouth from '../../layouts/ManagerLayouth'
import { ProjectType } from '../../types/project'
import { useRouter } from "next/router";
import FileManagerTreeView from '../../components/FileManagerTreeView'
import Project from '../../data/project'


const Manager = () => {
    const [projects, setProjects] = useState<ProjectType []>([])
    const [createProject, setCreateProject] = useState(false)
    const [newProjectName, setNewProjectName] = useState('')

    const getProjects = () => {
        const data = fetch("/api/projects/all")
        .then((res) => res.json())
        .then((data) => {
            setProjects(data.composed)
        })
        .catch((e) => console.log(e))
    }

    useEffect(() => {
        getProjects()
    }, [])

    return (
        <ManagerLayouth projects={projects} root={true} title="Mes compositions">
            <ProjectList projects={projects}/>
        </ManagerLayouth>
    )
}

export default Manager