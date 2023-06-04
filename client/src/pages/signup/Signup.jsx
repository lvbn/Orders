import styles from './Signup.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/pageHeader/PageHeader';

export default function Signup() {

  const navigate = useNavigate()
  const [emailErrorMessage, setEmailMessageError] = useState('')
  const [passwordErrorMessage, setPasswordMessageError] = useState('')

  const [newUser, setNewUser] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const value = e.target.value
    setNewUser({
      ...newUser,
      [e.target.name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setEmailMessageError(null)
    setPasswordMessageError(null)

    const baseUrl = 'http://127.0.0.1:3000/signup'
    // const baseUrl = import.meta.env.VITE_BASE_URL + '/signup'

    try {
      await fetch(baseUrl, {
        method: "POST",
        mode: 'cors',
        body: JSON.stringify(newUser),
        headers: {
          "Content-type": "application/json",
        },
        credentials: 'include'
      })
      .then(async response => {
        console.log('RESPONSE: ', response)
        const data = await response.json()
        console.log('DATA: ', data)
        if (data.user) {
          console.log(data.user)
          navigate('/login')
        }
        if (data.email) setEmailMessageError(data.email)
        if (data.password) setPasswordMessageError(data.password)
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.container}>
      <PageHeader p={'Welcome'} h1={'Sign up'}/>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Sign up</h1>

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          value={newUser.email}
          onChange={handleChange}
          required
        />
        <div className={styles.errorMessage}>{emailErrorMessage}</div>

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          value={newUser.password}
          onChange={handleChange}
          required
        />
        <div className={styles.errorMessage}>{passwordErrorMessage}</div>

        <button className={styles.button} >Sign up</button>
      </form>
    </div>
  )
}
