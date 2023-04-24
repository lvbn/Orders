// export const fullfilment_status = ['ready to start', 'processing', 'fullfiled']
export const fullfilment_status = [{id: 1, status: 'Ready to start'}, {id: 2, status: 'Processing'}, {id: 3, status: 'Fulfilled'}]

// export const payment_status = ['unpaid', 'paid']
export const payment_status = [{id: 1, status: 'unpaid'}, {id: 2, status: 'paid'}]

// export const delivery_status = ['in hous', 'on the way', 'delivered']
export const delivery_status = [{id: 1, status: 'In hous'}, {id: 2, status: 'On the way'}, {id: 3, status: 'Delivered'}]

export const stage_1 = ['unpaid', 'In hous', 'Ready to start']
export const stage_2 = ['paid', 'Processing', 'On the way']
export const stage_3 = ['Fulfilled', 'Delivered']

export const dateFormater = (date) => {
  const d = new Date(date)
  return d.toLocaleDateString()
}