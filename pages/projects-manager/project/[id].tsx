/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import ProjectGrid from '../../../components/ProjectGrid'
import ManagerLayouth from '../../../layouts/ManagerLayouth'
import { ProjectType } from '../../../types/project'
import { useRouter } from "next/router";
import Project from '../../../data/project'


const Manager = () => {
    const [project, setProject] = useState<ProjectType>(Project)
    var router = useRouter();
    useEffect(() => {
        let id = router.query["id"]
        console.log(id)
        const proj = project as ProjectType
        console.log(proj.id)
        proj.id = id as string
        setProject(proj)
        console.log(project)
        console.log(proj)
    }, [])

    return (
        <ManagerLayouth root={false} projects={[]} project={project} title={project.name}>
            <ProjectGrid project={project}/>
        </ManagerLayouth>
    )
}

export default Manager