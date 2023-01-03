import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Accordion from '../../../../components/Accordion'
import Header from '../../../../components/Header'

type Props  = {
    children: JSX.Element
}

const EditorLayout = () => {
  return (
    <div className='w-full h-screen overflow-hidden pb-1 flex flex-col justify-between items-start'>
        <Header />
        <div className='w-full h-full px-4 pt-4 flex justify-between items-start overflow-hidden'>
            <section className='w-96 h-full border-2 rounded-lg overflow-hidden p-2'>
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
            </section>
            <section>
                
            </section>
            <section className='w-96 h-full border-2 rounded-lg'></section>
        </div>
    </div>
  )
}

export default EditorLayout