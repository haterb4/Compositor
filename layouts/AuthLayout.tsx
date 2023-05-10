import Head from 'next/head'
import Image from 'next/image'
import React, { Children } from 'react'
import styles from '../styles/AuthLayout.module.css'

type Props = {
    title: string,
    children: JSX.Element,
}

const AuthLayout = ({title, children}: Props) => {
  return (
    <>
        <Head>
            <title>{title}</title>
        </Head>
        <div className={styles.layoutContainer}>
            <div className={styles.loginContainer}>
                <div className={styles.mainLoginContainer}>
                    <div className={styles.leftSide}>
                    <div className='w-full flex items-center justify-start my'>
                        <div className='mr-4 border-2 h-22 w-22 rounded-full overflow-hidden flex items-center justify-center'>
                            <Image
                            src='/images/LOGO-POLYTECHNIQUE-01-scaled.jpg'
                            height={150}
                            width={150}
                            alt='office scheme'
                            />
                        </div>
                        <h1 className={styles.textWelcome}>ECOLE NATIONALE SUPERIEURE POLYTECHNIQUE DE YAOUNDE</h1>
                    </div>
                    <div>
                        <h1 className={styles.xccm}>XCCM</h1>
                        <div className='pl-6 leading-8 flex items-stretch justify-start'>
                        <div className='h-ful w-1 bg-gradient-to-b from-amber-900 via-amber-700 to-amber-500'></div>
                        <p className={styles.textIntro}>Module de Compositon <br />de Contenus</p>
                        </div>
                    </div>
                </div>
                <div className={styles.childSide}>
                    {children}
                </div>
                <div className={styles.boule1}></div>
                <div className={styles.boule2}></div>
                <div className={styles.boule3}></div>
                <div className={styles.boule4}></div>
                <div className={styles.boule5}></div>
                <div className={styles.boule6}></div>
                <div className={styles.absoluteIcon1}><Image src='/images/icons/12.png' height={50} width={50} alt='underline icon'/></div>
                <div className={styles.absoluteIcon2}><Image src='/images/icons/2.png' height={50} width={50} alt='underline icon'/></div>
                <div className={styles.absoluteIcon3}><Image src='/images/icons/17.png' height={50} width={50} alt='underline icon'/></div>
                <div className={styles.absoluteIcon4}><Image src='/images/icons/29.png' height={50} width={50} alt='underline icon'/></div>
                <div className={styles.absoluteIcon5}><Image src='/images/icons/3.png' height={50} width={50} alt='underline icon'/></div>
                <div className={styles.absoluteIcon6}><Image src='/images/icons/22.png' height={50} width={50} alt='underline icon'/></div>
                <div className={styles.absoluteIcon7}><Image src='/images/icons/28.png' height={50} width={50} alt='underline icon'/></div>
                <div className={styles.absoluteIcon8}><Image src='/images/icons/4.png' height={50} width={50} alt='underline icon'/></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AuthLayout