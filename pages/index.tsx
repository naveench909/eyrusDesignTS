import Head from 'next/head'
import styles from '../styles/Home.module.css'

//Components
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/SidebarModal/Sidebar'
import Content from '../components/Content/Content'

export default function Home() {
  return (
    <div className={styles.mainContainer}>

      <Head>
        <title>Eyrus</title>
      </Head>

      <div className={styles.navbar}>
        <Navbar />
      </div>

      <div className={styles.body}>
        <Sidebar />
        <Content />
      </div>   

    </div>
  )
}
