import { faFileArchive, faFileAudio, faFileCode, faFileExcel, faFilePdf, faFilePen, faFilePowerpoint, faFileText, faFileUpload, faFileVideo, faFileWord, faFolder, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Accordion from '../../components/Accordion'
import AccordionButton from '../../components/AccordionButton'
import Card from '../../components/Card'
import Search from '../../components/Search'
import ManagerLayouth from '../../layouts/ManagerLayouth'

const Manager = () => {
  
  return (
    <ManagerLayouth>
        <div className='w-full h-full flex justify-start items-start pt-4 pl-1 overflow-hidden'>
            <section className='h-full w-96 border-2 rounded-lg p-1'>
                <div className='mb-1'>
                    <Accordion title='Mes Compositions' titleColorClass="bg-amber-900">
                        <div>
                            <AccordionButton icon={faFolder} >Project 1</AccordionButton>
                            <AccordionButton icon={faFolder} >Project 2</AccordionButton>
                            <AccordionButton icon={faFolder} >Project 3</AccordionButton>
                        </div>
                    </Accordion>
                </div>
                <Accordion title='Compositions Locales' titleColorClass="bg-blue-700">
                    <div>
                        <AccordionButton icon={faFolder} >Composition Locale 1</AccordionButton>
                        <AccordionButton icon={faFolder} >Composition Locale 2</AccordionButton>
                        <AccordionButton icon={faFolder} >Composition Locale 3</AccordionButton>
                    </div>
                </Accordion>
            </section>
            <section className='h-full w-full flex flex-col justify-between pl-4 overflow-hidden'>
                <Search />
                <div className='w-full h-full p-2 overflow-hidden'>
                    <div className='h-full w-full border rounded-lg bg-blue-gray-50 p-4 overflow-hidden'>
                        <div className='h-full grid grid-cols-5 gap-4 overflow-y-scroll relative'>
                            <Card icon={faFileAudio} id={1} date='05/11/2022' size={5.2} file={true}/>
                            <Card icon={faFileWord} id={1} date='05/11/2022' size={5.2} file={true}/>
                            <Card icon={faFileAudio} id={1} date='05/11/2022' size={5.2} file={true}/>
                            <Card icon={faFileExcel} id={1} date='05/11/2022' size={5.2} file={true}/>
                            <Card icon={faFilePowerpoint} id={1} date='05/11/2022' size={5.2} file={true}/>
                            <Card icon={faFileVideo} id={1} date='05/11/2022' size={5.2} file={true}/>
                            <Card icon={faFilePdf} id={1} date='05/11/2022' size={5.2} file={true}/>
                            <Card icon={faFileCode} id={1} date='05/11/2022' size={5.2} file={true}/>
                            <Card icon={faFilePen} id={1} date='05/11/2022' size={5.2} file={true}/>
                            <Card icon={faFileText} id={1} date='05/11/2022' size={5.2} file={true}/>
                            <Card icon={faFileArchive} id={1} date='05/11/2022' size={5.2} file={true}/>
                            <Card icon={faFileUpload} id={1} date='05/11/2022' size={5.2} file={true}/>
                            <Card icon={faFolder} id={1} date='05/11/2022' size={5.2} file={false}/>
                            <Card icon={faFileAudio} id={1} date='05/11/2022' size={5.2} file={true}/>
                            <Card icon={faFileAudio} id={1} date='05/11/2022' size={5.2} file={true}/>
                            <Card icon={faFileAudio} id={1} date='05/11/2022' size={5.2} file={true}/>
                            <button className='w-64 h-12 bg-white flex items-center justify-start px-4 fixed bottom-8 right-16 hover:bg-blue-100'>
                                <span className='text-light-blue-500'><FontAwesomeIcon icon={faPlus} className='fa-2x'/></span>
                                <p className='capitalize pl-3 font-bold'>nouvelle composition</p>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </ManagerLayouth>
  )
}

export default Manager