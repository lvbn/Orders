const jwt = require('jsonwebtoken')
// const { User } = require('../controller/controller')
const { userSchema, orderSchema } = require('../database/models')
const { mongoose } = require('../database/db')
const User = mongoose.model('user', userSchema)


const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt

  if (token) {
    jwt.verify(token, 'secret', (error, decodedToken) => {
      if (error) {
        console.log('Error: not authorised ', error)
        throw new Error('not authorised')
      } else {
        // console.log('Success 1: ', decodedToken)
        next()
      }
    })
  } else {
    console.log('Error: no token found.')
    throw new Error('no token found')
  }
}

// used to check permissions
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt

  console.log(req.cookies)

  if (token) {
    jwt.verify(token, 'secret', async (error, decodedToken) => {
      if (error) {
        console.log('Error: not authorised ', error)
        res.locals.user = null;
        next()
      } else {
        console.log('Success 1: ', decodedToken)
        let user = await User.findById(decodedToken.id)
        res.locals.user = user
        next()
      }
    })
  } else {
    console.log('Error: no token found.')
    res.locals.user = null;
    next()
  }
}


module.exports = { requireAuth, checkUser }