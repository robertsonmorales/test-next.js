import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Buy, Sell, Recycle your Eyewear | ecoVision</title>
        <meta name="description" content="Start selling your new and used eyewears easily. It’s good for you and for the environment." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
    </div>
  )
}
