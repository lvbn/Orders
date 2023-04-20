import styles from './Orders.module.css'
import Orders from '../../components/orders/Orders'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function () {

  const [orders, setOrders] = useState([])

  let navigate = useNavigate()

  const routeChange = (path) => {
    navigate(path)
  }

  useEffect(() => {
    fetch('http://localhost:3000/orders')
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('unable to fetch data')
      })
      .then(data => {
        setOrders([...data])
        // console.log('data: ', data)
      })
      .catch(error => {
        console.log('Catched error: ', error)
      })
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.pageTitle}>
          <p>Orders</p>
          <h1>Total Orders</h1>
        </div>
        <button
          className={styles.button}
          onClick={() => routeChange('/addorder')}
        >Create Order</button>
      </div>

      <Orders orders={orders}/>
    </div>
  )
}
