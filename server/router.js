const { Router } = require('express')
const router = new Router()

const { getOrders, postOrder, putOrder, signUp } = require('./controller/controller')

router.get('/orders', getOrders)

router.post('/orders', postOrder)

router.put('/orders', putOrder)

router.post('/', signUp)

module.exports = router