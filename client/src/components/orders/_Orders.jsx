import styles from './Orders.module.css'
import { useState } from 'react'
import Selection from '../selection/Selection'
import { fullfilment_status, payment_status, delivery_status, dateFormater } from '../../utilities/utilities'
import { useSelector, useDispatch } from "react-redux";
import { updateOrder } from "../../store/actions";


// // radix imports
// import React from 'react';
// import * as Select from '@radix-ui/react-select';
// import classnames from 'classnames';
// import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
// import './styles.css';

// const SelectItem = React.forwardRef(({ children, className, onValueChange, ...props }, forwardedRef) => {
//   return (
//     <Select.Item className={classnames('SelectItem', className)} {...props} ref={forwardedRef}>
//       <Select.ItemText>{children}</Select.ItemText>
//       <Select.ItemIndicator className="SelectItemIndicator">
//         <CheckIcon />
//       </Select.ItemIndicator>
//     </Select.Item>
//   );
// });

export default function Orders() {

  const orders = useSelector((state) => state.orders);
  // console.log('from Orders component: ', orders)

  const dispatch = useDispatch()

  const handleChange = (idAndPayment) => {

    fetch('http://localhost:3000/orders', {
      method: "PUT",
      body: JSON.stringify(idAndPayment),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('unable to fetch data')
      })
      .then(data => {
        dispatch(updateOrder(data))
        console.log(data)
      })
      .catch(error => {
        console.log('Catched error: ', error)
      })
  }

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
            <li key={Number(order.id)}>
              <div className={styles.tableRow}>
                <p>{order.id}</p>
                <p>{order.ourClient}</p>
                <p>{dateFormater(order.date)}</p>
                <p>{order.quantity}</p>
                <p>{order.charge}</p>

                <p className={styles.selectContainer}>{
                  <select
                    className={styles.select}
                    name='payment' value={order.payment}
                    onChange={(e) => handleChange({
                      id: order.id, payment: e.target.value
                    })}
                  >
                    {payment_status.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                }</p>

                <p className={styles.selectContainer}>{
                  <select
                    className={styles.select}
                    name='fullfilment' value={order.fullfilment}
                    onChange={(e) => handleChange({
                      id: order.id, fullfilment: e.target.value
                    })}
                  >
                    {fullfilment_status.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                }</p>

                <p>{order.finalClient}</p>

                <p className={styles.selectContainer}>{
                  <select
                    className={styles.select}
                    name='delivery' value={order.delivery}
                    onChange={(e) => handleChange({
                      id: order.id, delivery: e.target.value
                    })}
                  >
                    {delivery_status.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                }</p>

                {/* <p className={styles.selectContainer}>{
                  <Select.Root
                    onValueChange={console.log('changed')}
                  >
                    <Select.Trigger className="SelectTrigger" aria-label="Food">
                      <Select.Value placeholder="Select" />
                      <Select.Icon className="SelectIcon">
                        <ChevronDownIcon />
                      </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal >
                      <Select.Content className="SelectContent" >
                        <Select.ScrollUpButton className="SelectScrollButton">
                          <ChevronUpIcon />
                        </Select.ScrollUpButton>
                        <Select.Viewport className="SelectViewport">

                          <Select.Group >
                            <Select.Label className="SelectLabel">Payment Status</Select.Label>
                            <SelectItem value="In hous">In hous</SelectItem>
                            <SelectItem value="On the way">On the way</SelectItem>
                            <SelectItem value="Delivered">Delivered</SelectItem>
                          </Select.Group>

                        </Select.Viewport>
                        <Select.ScrollDownButton className="SelectScrollButton">
                          <ChevronDownIcon />
                        </Select.ScrollDownButton>
                      </Select.Content>
                    </Select.Portal>
                  </Select.Root>
                }</p> */}

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
