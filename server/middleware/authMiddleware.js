const jwt = require('jsonwebtoken')

// the following middleware is not yet fully implemented
const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt

  if (token) {
    jwt.verify(token, 'secret', (error, decodedToken) => {
      if (error) {
        console.log('Error 1: ', error)
        // res.redirect('/login')
      } else {
        console.log('Success 1: ', decodedToken)
        next()
      }
    })
  } else {
    console.log('Error 2')
    // res.redirect('/login')
  }
}

module.exports = { requireAuth }