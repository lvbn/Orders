import styles from './Home.module.css'
import PageHeader from '../../components/pageHeader/PageHeader';


export default function Home() {
  return (
    <div className={styles.container}>
      <PageHeader p={'Welcome'} h1={'Home'}/>
    </div>
  )
}
