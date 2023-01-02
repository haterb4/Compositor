import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@material-tailwind/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {

  const redirect = () => {
      const currentLink = window.location.href
      window.location.href = `${currentLink}/login`
  }

  return (
    <div>
      <Head>
        <title>XCCM compositor</title>
        <meta name="description" content="Content compoitor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.homeContainer}>
        <div className='w-full flex items-center justify-start my'>
          <div className='mr-4'>
            <Image
              src='/images/LOGO-POLYTECHNIQUE-01-scaled.jpg'
              height={100}
              width={100}
              alt='office scheme'
            />
          </div>
          <h1 className={styles.textWelcome}>ECOLE NATIONALE SUPERIEURE POLYTECHNIQUE DE YAOUNDE</h1>
        </div>
        <div className={styles.homeContent}>
          <div>
            <h1 className='text-6xl uppercase font-extrabold'>XCCM</h1>
            <div className='pl-6 leading-8 mt-6 flex items-stretch justify-start'>
              <div className='h-ful w-1 bg-gradient-to-b from-amber-900 via-amber-700 to-amber-500'></div>
              <p className={styles.textIntro}>Module de Compositon <br />de Contenus</p>
            </div>
            <div className={styles.startButton}>
              <Button className='capitalize'><Link href='/login' className='w-full'>Se connecter</Link></Button>
            </div>
          </div>
          <div>
            <Image
              src='/images/useoffice-scheme.png'
              height={550}
              width={550}
              alt='office scheme'
            />
          </div>
        </div>
        <div className={styles.absoluteIcon1}><Image src='/images/icons/12.png' height={50} width={50} alt='underline icon'/></div>
        <div className={styles.absoluteIcon2}><Image src='/images/icons/2.png' height={50} width={50} alt='underline icon'/></div>
        <div className={styles.absoluteIcon3}><Image src='/images/icons/17.png' height={50} width={50} alt='underline icon'/></div>
        <div className={styles.absoluteIcon4}><Image src='/images/icons/29.png' height={50} width={50} alt='underline icon'/></div>
        <div className={styles.absoluteIcon5}><Image src='/images/icons/3.png' height={50} width={50} alt='underline icon'/></div>
        <div className={styles.absoluteIcon6}><Image src='/images/icons/20.png' height={50} width={50} alt='underline icon'/></div>
        <div className={styles.absoluteIcon7}><Image src='/images/icons/26.png' height={50} width={50} alt='underline icon'/></div>
        <div className={styles.absoluteIcon8}><Image src='/images/icons/4.png' height={50} width={50} alt='underline icon'/></div>
      </section>
    </div>
  )
}
