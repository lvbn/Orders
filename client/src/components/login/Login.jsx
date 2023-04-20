import styles from './Login.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>Log in</h1>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email'></input>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password'></input>
        <button className={styles.button} >Log in</button>
      </form>
    </div>
            )
}
