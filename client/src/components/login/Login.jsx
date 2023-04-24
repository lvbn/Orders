// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import styles from './Login.module.css'

// export default function Login() {

//   const navigate = useNavigate()

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

//     const baseUrl = 'http://localhost:3000'

//     try {
//       const res = await fetch(baseUrl, {
//         method: "POST",
//         body: JSON.stringify(newUser),
//         headers: {
//           "Content-type": "application/json"
//         },
//         // credentials: 'include'
//       })
//       .then(response => {
//         if (response.ok) {
//           return response.json()
//         }
//         throw new Error('fail to create new user')
//       })
//       .then(data => {
//         console.log('logando data: ', data, data.user)
//         if (data.user) navigate('/orders')
//         // if (data.user) location.assign('/orders')
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   return (
//     <div className={styles.container}>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <h1>Log in</h1>

//         <label htmlFor='email'>Email</label>
//         <input
//           type='email'
//           id='email'
//           name='email'
//           value={newUser.email}
//           onChange={handleChange}
//           required></input>

//         <label htmlFor='password'>Password</label>
//         <input
//           type='password'
//           id='password'
//           name='password'
//           value={newUser.password}
//           onChange={handleChange}
//           required></input>

//         <button className={styles.button} >Log in</button>
//       </form>
//     </div>
//   )
// }
