const { getAll, postOne } = require('../model/model')

const getOrders = async (req, res) => {
  // console.log('reached the controller')
  try {
    const orders = await getAll()
    res.status(201)
    res.send(orders)
  } catch (error) {
    console.log(error)
    res.status(400)
    res.send('stuck in controller')
  }
}

const postOrder = (req, res) => {
  // console.log('reached the controller', req.body)
  try {
    const order = postOne(req.body)
    res.status(201)
    res.send(order)
  } catch (error) {
    console.log(error)
    res.status(400)
    res.send('stuck in controller')
  }
}

module.exports = { getOrders, postOrder }