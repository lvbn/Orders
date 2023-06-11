const { Router } = require('express')
const router = new Router()
const { requireAuth, checkUser } = require('./middleware/authMiddleware')

const { getOrders, postOrder, putOrder, signUp, logIn, logout } = require('./controller/controller')

// router.get('*', checkUser)

router.get('/orders', requireAuth, getOrders)

router.post('/orders', postOrder)

router.put('/orders', putOrder)

router.post('/signup', signUp)

router.post('/login', logIn)

router.get('/logout', logout)

router.get('/read-cookies', (req, res) => {

  const cookies = req.cookies;
  console.log(cookies);

  res.json(cookies.newUser);

});

module.exports = router;