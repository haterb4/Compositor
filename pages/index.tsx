import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>XCCM compositor</title>
        <meta name="description" content="Content compoitor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  )
}
