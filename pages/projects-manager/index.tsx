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

    const createNewProject = async (url = '', data = {}) => {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
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
            //fetch the route for the project
            createNewProject('/api/projects/new', { project: tempProject})
            setProjects([tempProject, ...projects])
            setNewProjectName('')
        }
        else alert('Empty project name')
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