// import styles from './Signup.module.css'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// export default function Signup() {

//   const navigate = useNavigate()
//   const [emailErrorMessage, setEmailMessageError] = useState('')
//   const [passwordErrorMessage, setPasswordMessageError] = useState('')

//   const [newUser, setNewUser] = useState({
//     email: '',
//     password: ''
//   })

//   const handleChange = (e) => {
//     const value = e.target.value
//     setNewUser({
//       ...newUser,
//       [e.target.name]: value
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     // console.log(newUser)

//     const baseUrl = 'http://127.0.0.1:3000'

//     try {
//       await fetch(baseUrl, {
//         method: "POST",
//         body: JSON.stringify(newUser),
//         headers: {
//           "Content-type": "application/json"
//         },
//         credentials: 'include'
//       })
//       .then(response => {
//         if (response.ok) {
//           return response.json()
//         }
//         throw new Error('fail to create new user')
//       })
//       .then(data => {
//         console.log('logando data: ', data, data.user)

//         if (data.responseUser && (data.responseUser.email ||  data.responseUser.password)) {
//           setEmailMessageError(data.responseUser.email)
//           setPasswordMessageError(data.responseUser.password)
//         } else {
//           setEmailMessageError('ok')
//           setPasswordMessageError('ok')
//           setTimeout(() => {
//             if (data.user) navigate('/login')
//           }, 1000)
//         }

//         // if (data.user) navigate('/orders')
//         // if (data.user) location.assign('/orders')
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   return (
//     <div className={styles.container}>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <h1>Sign up</h1>

//         <label htmlFor='email'>Email</label>
//         <input
//           type='email'
//           id='email'
//           name='email'
//           value={newUser.email}
//           onChange={handleChange}
//           required
//         />
//         <div className={styles.errorMessage}>{emailErrorMessage}</div>

//         <label htmlFor='password'>Password</label>
//         <input
//           type='password'
//           id='password'
//           name='password'
//           value={newUser.password}
//           onChange={handleChange}
//           required
//         />
//         <div className={styles.errorMessage}>{passwordErrorMessage}</div>

//         <button className={styles.button} >Sign up</button>
//       </form>
//     </div>
//   )
// }
