const { Router } = require('express')
const router = new Router()

const { getOrders, postOrder } = require('./controller/controller')

router.get('/orders', getOrders)

router.post('/orders', postOrder)

module.exports = router