
const { orderSchema, mongoose } = require('../database/db')

const Orders = mongoose.model('Orders', orderSchema)

const getAll = async () => {
  const orders = await Orders.find()
  return orders
}

const postOne = async (order) => {
  console.log('in the model: ', order)
  const newOrder = new Orders({
    id: order.id,
    ourClient: order.ourClient,
    date: order.date,
    quantity: order.quantity,
    charge: order.charge,
    payment: order.payment,
    fullfilment: order.fullfilment,
    finalClient: order.finalClient,
    delivery: order.delivery
  })

  return await newOrder.save()
}

module.exports = { getAll, postOne }