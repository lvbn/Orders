import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.dashboard}>
          {/* <Link to='/'>DASHBOARD</Link> */}
          DASHBOARD
        </h1>
      </div>

      <form className={styles.form}>
        <input className={styles.searchbar}></input>
      </form>

      <div className={styles.userInfo}>
        <div className={styles.thumbnail}></div>
        <div className={styles.user}>
          <p className={styles.name}>Username</p>
          <p className={styles.occupation}>roll</p>
        </div>
      </div>
    </div>
  )
}
