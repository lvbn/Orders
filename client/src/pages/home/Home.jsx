import styles from './Home.module.css'
import PageHeader from '../../components/pageHeader/PageHeader';


// import Login from '../../components/login/Login'
// import Signup from '../../components/signup/Signup'

export default function Home() {
  return (
    <div className={styles.container}>
      <PageHeader p={'Welcome'} h1={'Home'}/>
    </div>
  )
}
