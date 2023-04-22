const { Router } = require('express')
const router = new Router()

const { getOrders, postOrder, putOrder, signUp } = require('./controller/controller')

router.get('/orders', getOrders)

router.post('/orders', postOrder)

router.put('/orders', putOrder)

router.post('/', signUp)

// router.post('/',
// // signUp




// (req, res) => {

//   // res.setHeader('Set-Cookie', 'newUser=true');

//   res.cookie('newUser', false)
//   res.cookie('isEmployee', true, {
//     maxAge: 1000* 60 * 60 * 24,
//     // secure: true,
//     // httpOnly: true
//   })
//   res.send('you cookie cookie');

// }
// )

router.get('/read-cookies', (req, res) => {

  const cookies = req.cookies;
  console.log(cookies);

  res.json(cookies.newUser);

});

module.exports = router;