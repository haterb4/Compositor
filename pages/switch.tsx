import { faCircle, faFolder } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@material-tailwind/react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'



export default function Home() {
  return (
    <div>
      <Head>
        <title>XCCM compositor</title>
        <meta name="description" content="Content compoitor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className='bg-[#F8F9FA] pb-10 px-10'>
        <div className="max-w-3xl mx-auto">
          <div className='py-6 flex justify-between items-center'>
            <h2 className='text-gray-700 text-lg'>Start new composition </h2>
            <button
              className='h-8 flex flex-col justify-beetween items-center bg-transparent border-0'
            >
              <FontAwesomeIcon icon={faCircle} className="text-gray-700 text-xm"/>
              <FontAwesomeIcon icon={faCircle} className="text-gray-700 text-xm"/>
              <FontAwesomeIcon icon={faCircle} className="text-gray-700 text-xm"/>
            </button>
          </div>
          <div>
            <div className='relative h-52 w-40'>
              <Image  src="https://links.papareact.com/pju" alt='google add document' layout='fill'/>
            </div>
            <p className='ml-2 mt-2 font-semibold text-sm text-gray-700'>Blank</p>
          </div>
        </div>
      </section>
      <section className='bg-white px-10 md:px-0'>
        <div className='max-w-3xl mx-auto text-sm text-gray-700 py-8'>
          <div className='flex items-center justify-between pb-5'>
            <h2 className='font-meduim flex-grow'>My Compositions</h2>
            <p className='mr-12'>Date Created</p>
            <FontAwesomeIcon icon={faFolder}/>
          </div>
        </div>
      </section>
    </div>
  )
}
