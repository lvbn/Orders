import styles from './Orders.module.css'
import Orders from '../../components/orders/Orders'

export default function () {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.pageTitle}>
          <p>Orders</p>
          <h1>Total Orders</h1>
        </div>
        <button className={styles.button}>Create Order</button>
      </div>

    <Orders />
    </div>
  )
}
