import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@material-tailwind/react'
import React from 'react'
import Accordion from './Accordion'

const ContentTable = () => {
    return (
        <section className='w-96 h-full border-2 flex flex-col justify-between rounded-lg overflow-hidden p-2 relative'>
            <div className='w-full h-full'>
                <Accordion title="Table des matieres" childrenPaddingClass='pl-0 my-2 overflow-y-scroll h-full' vsep='flex flex-col' titleColorClass='bg-light-blue-400 shadow-lg'>
                    <Accordion title='Module de Support5' childrenPaddingClass='pl-2 my-2' vsep='my-2' nodeType='co' titleColorClass='bg-white shadow-lg'>
                        <div>
                        <Accordion title='I - Titre Partie' childrenPaddingClass='pl-2 my-2' vsep='my-2' nodeType='pt' titleColorClass='bg-white shadow-lg'>
                            <Accordion title='I - Titre Chapitre' childrenPaddingClass='pl-2 my-2' vsep='my-2' nodeType='ch' titleColorClass='bg-white shadow-lg'>
                            <Accordion title='Titre Paragraphe' childrenPaddingClass='pl-2 my-2' vsep='my-2' nodeType='pr' titleColorClass='bg-white shadow-lg'>
                                <Accordion title='Titre Notion' childrenPaddingClass='pl-2 my-2' vsep='my-2' nodeType='no' titleColorClass='bg-white shadow-lg'></Accordion>
                            </Accordion>
                            </Accordion>
                        </Accordion>
                        <Accordion title='II - Titre Partie' childrenPaddingClass='pl-2 my-2' vsep='my-2' nodeType='pt' titleColorClass='bg-white shadow-lg'>
                            <Accordion title='I - Titre Chapitre' childrenPaddingClass='pl-2 my-2' vsep='my-2' nodeType='ch' titleColorClass='bg-white shadow-lg'>
                            <Accordion title='Titre Paragraphe' childrenPaddingClass='pl-2 my-2' vsep='my-2' nodeType='pr' titleColorClass='bg-white shadow-lg'>
                                <Accordion title='Titre Notion' childrenPaddingClass='pl-2 my-2' vsep='my-2' nodeType='no' titleColorClass='bg-white shadow-lg'></Accordion>
                            </Accordion>
                            </Accordion>
                        </Accordion>
                        <Accordion title='III - Titre Partie' childrenPaddingClass='pl-2 my-2' vsep='my-2' nodeType='pt' titleColorClass='bg-white shadow-lg'>
                            <Accordion title='I - Titre Chapitre' childrenPaddingClass='pl-2 my-2' vsep='my-2' nodeType='ch' titleColorClass='bg-white shadow-lg'>
                            <Accordion title='Titre Paragraphe' childrenPaddingClass='pl-2 my-2' vsep='my-2' nodeType='pr' titleColorClass='bg-white shadow-lg'>
                                <Accordion title='Titre Notion' childrenPaddingClass='pl-2 my-2' vsep='my-2' nodeType='no' titleColorClass='bg-white shadow-lg'></Accordion>
                            </Accordion>
                            </Accordion>
                        </Accordion>
                        <Accordion title='III - Titre Partie' childrenPaddingClass='pl-2 my-2' vsep='my-2' nodeType='pt' titleColorClass='bg-white shadow-lg'>
                            <Accordion title='I - Titre Chapitre' childrenPaddingClass='pl-2 my-2' vsep='my-2' nodeType='ch' titleColorClass='bg-white shadow-lg'>
                            <Accordion title='Titre Paragraphe' childrenPaddingClass='pl-2 my-2' vsep='my-2' nodeType='pr' titleColorClass='bg-white shadow-lg'>
                                <Accordion title='Titre Notion' childrenPaddingClass='pl-2 my-2' vsep='my-2' nodeType='no' titleColorClass='bg-white shadow-lg mb-12'></Accordion>
                            </Accordion>
                            </Accordion>
                        </Accordion>
                        <div className='h-4'></div>
                        </div>
                    </Accordion>
                </Accordion>
            </div>
            <div className='flex justify-end h-12 w-12 rounded-full absolute bottom-0 right-1'><Button className='w-12 h-12 rounded-full flex justify-center items-center'><FontAwesomeIcon icon={faPlus}/></Button></div>
        </section>
    )
}

export default ContentTable