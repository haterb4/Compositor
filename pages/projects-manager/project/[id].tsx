import { useEffect, useState } from 'react'
import ProjectGrid from '../../../components/ProjectGrid'
import ManagerLayouth from '../../../layouts/ManagerLayouth'
import { ProjectType } from '../../../types/project'
import { useRouter } from "next/router";
import Project from '../../../data/project'


const Manager = () => {
    const [project, setProject] = useState<ProjectType>(Project)
    var router = useRouter();

    const getSingleProject = (id:number) => {
        const data = fetch(`/api/projects/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setProject(data.project)
        })
        .catch((e) => console.log(e))
    }

    useEffect(() => {
        let id = router.query["query"]
        if (id !== undefined && id !== null) {
            if (id === "0" || (typeof id === "string" && Number.parseInt(id))){
                getSingleProject(Number.parseInt(id))
            }
            else{
                window.location.href = `${window.location.origin}/error`
            }
        }
    }, [router.query])

    return (
        <ManagerLayouth root={false} projects={[]} project={project} title={project.name}>
            <ProjectGrid project={project}/>
        </ManagerLayouth>
    )
}

export default Manager