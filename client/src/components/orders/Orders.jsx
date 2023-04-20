import styles from './Orders.module.css'

import orders from '../../data/mock_2.json'
import Selection from '../selection/Selection'
import { fullfilment_status, payment_status, delivery_status } from '../../utilities/utilities'

export default function Orders() {
  console.log(orders)
  return (
    <>
      <div className={styles.container}>
        <div className={styles.tableHeader}>
          <p>ID</p>
          <p>Our client</p>
          <p>Date</p>
          <p>Quantity</p>
          <p>Charge</p>
          <p>Payment</p>
          <p>Fullfilment</p>
          <p>Final client</p>
          <p>Delivery</p>
        </div>
        <ul className={styles.ul}>
          {orders.map(order => (
            <li key={order.order_id}>
              <div className={styles.tableRow}>
                <p>{order.order_id}</p>
                <p>{order.name}</p>
                <p>{order.date}</p>
                <p>{order.quantity}</p>
                <p>{order.charge}</p>
                <p>{<Selection statuses={payment_status}/>}</p>
                <p>{<Selection statuses={fullfilment_status}/>}</p>
                <p>{order.name}</p>
                <p>{<Selection statuses={delivery_status}/>}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* <table className={styles.container}>
        <thead>
          <tr>
            <th>Invoice</th>
            <th>Company</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          <tr className={styles.tableRow}>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
        </tbody>
      </table> */}
    </>
  )
}
