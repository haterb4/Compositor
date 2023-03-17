import { faFolder } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import Project from '../data/project'
import { ProjectType } from '../types/project'
import Accordion from './Accordion'
import AccordionButton from './AccordionButton'

type Props = {
    title: String,
    projects?:  string[],
    action: Function
}

const ProjectManagerTreeView = ({ title, projects, action }: Props) => {
    return (
        <section className='h-full w-96 border-2 rounded-lg p-1'>
            {projects && 
            (<div className='mb-1'>
                <Accordion title={title} titleColorClass="bg-light-blue-200" items={projects.length} action={action}>
                    <div>
                        {
                            projects.map((name:string, index: number) => (
                                <AccordionButton key={index} icon={faFolder} bgClass="bg-light-blue-300" href={`projects-manager/project/${name}`}>{name}</AccordionButton>
                            ))
                        }
                    </div>
                </Accordion>
            </div>)
            }
        </section>
    )
}

export default ProjectManagerTreeView