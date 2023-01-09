import { faFile, faFolder } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import Project from '../data/project'
import { ProjectType } from '../types/project'
import Accordion from './Accordion'
import AccordionButton from './AccordionButton'

type Props = {
    title: String,
    project?: ProjectType,
    action: Function
}

const FileManagerTreeView = ({ title, project, action }: Props) => {
    const [single, setSingle] = useState<ProjectType> (Project)
    const [isSingle, setIsSingle] = useState(false)

    useEffect(() => {
        if (project !== undefined && project !== null) {
            setSingle(project)
            setIsSingle(true)
        }
    }, [project])

    return (
        <section className='h-full w-96 border-2 rounded-lg p-1'>
            <div className='mb-1'>
                <Accordion title={title} titleColorClass="bg-light-blue-200" items={4} action={action}>
                    <div>
                        <AccordionButton icon={faFile} bgClass="bg-light-blue-300" href={`projects-manager/project/${single.id}`}>{single.name}</AccordionButton>
                        <AccordionButton icon={faFolder} bgClass="bg-light-blue-300" href={`projects-manager/project/${single.id}/assets/configurations`}>Configurations</AccordionButton>
                        <AccordionButton icon={faFolder} bgClass="bg-light-blue-300" href={`projects-manager/project/${single.id}/assets/ressources`}>Ressources</AccordionButton>
                        <AccordionButton icon={faFolder} bgClass="bg-light-blue-300" href={`projects-manager/project/${single.id}/assets/exports`}>Exports</AccordionButton>
                    </div>
                </Accordion>
            </div>
        </section>
    )
}

export default FileManagerTreeView