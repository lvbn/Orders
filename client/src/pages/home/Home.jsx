import styles from './Home.module.css'

// import Login from '../../components/login/Login'
import Signup from '../../components/signup/Signup'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.pageTitle}>
          <p>Welcome</p>
          <h1>Home</h1>
        </div>
        {/* <button className={styles.button}>Create Order</button> */}
      </div>

    {/* <Login /> */}
    <Signup />
    </div>
  )
}
