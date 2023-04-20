import { useState } from 'react'
import styles from './AddOrder.module.css'

export default function AddOrder() {

  // handling multi-line forms with one single handleChange function for each input type
  // https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
  const [state, setState] = useState({
    id: '',
    ourClient: '',
    quantity,
  })

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    })
    // console.log(state)
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    const baseUrl = 'http://localhost:3000'

    const postEvent = async (order) => {
      const response = await fetch(baseUrl + '/orders', {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
          "Content-type": "application/json"
        }
      })
      return await response.json()
    }
    postEvent(state)
  }

  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <div className={styles.pageTitle}>
          <p>Orders</p>
          <h1>Add New Order</h1>
        </div>
        <button
          className={styles.deleteButton}
          onClick={() => routeChange('/addorder')}
        >Cancel</button>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>New Order</h1>

        <label htmlFor='id'>ID</label>
        <input type='text' id='id' name='id' value={state.id} onChange={handleChange}></input>

        <label htmlFor='ourClient'>Our client</label>
        <input type='text' id='ourClient' name='ourClient' value={state.ourClient} onChange={handleChange}></input>

        {/* create handle change for date */}
        <label htmlFor='date'>Date</label>
        <input type='datetime-local' id='date' name='date'></input>

        <label htmlFor='quantity'>Quantity</label>
        <input type='number' id='quantity' name='quantity' value={state.quantity} onChange={handleChange}></input>

        <label htmlFor='charge'>Charge</label>
        <input type='text' id='charge' name='charge'></input>

        <label htmlFor='payment'>Payment</label>
        <input type='text' id='payment' name='payment'></input>

        <label htmlFor='fullfilment'>Fullfilment</label>
        <input type='text' id='fullfilment' name='fullfilment'></input>

        <label htmlFor='final_client'>Final client</label>
        <input type='text' id='final_client' name='final_client'></input>

        <label htmlFor='delivery'>Delivery</label>
        <input type='text' id='delivery' name='delivery'></input>

        <button className={styles.addButton} >Add Order</button>
      </form>
    </div>
  )
}
