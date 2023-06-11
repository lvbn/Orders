const { getAll, postOne, updateOne, createUser, logInUser } = require('../model/model')
const { userSchema, orderSchema } = require('../database/models')
const { mongoose } = require('../database/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// compiles the models
const Orders = mongoose.model('Orders', orderSchema)
const User = mongoose.model('user', userSchema)

// create token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'secret', {
    // expiresIn: maxAge
  })
}

// handle errors
const handleErrors = (errors) => {
  // console.log(errors.message, errors.code)
  const errs = { email: '', password: ''};

  // wrong email when logging in
  if (errors.message.includes('incorrect email')) {
    errs.email = 'Email not registered.'
  }

  // wrong password when logging in
  if (errors.message.includes('incorrect password')) {
    errs.password = 'Wrong password.'
  }

  // Email already taken on signup
  if (errors.code === 11000) {
    errs.email = 'Email already used. Please choose a different one.'
    return errs
  }

  // Errors on signup
  if (errors.message.includes('user validation failed')) {
   Object.values(errors.errors).forEach(({properties}) => {
    errs[properties.path] = properties.message;
   })
  }

  return errs;
}

const getOrders = async (req, res) => {
  try {
    // const orders = await getAll()
    const orders = await Orders.find()
    if (orders.length > 0) {
      res.status(201)
      res.send(orders)
    } else {
      res.status(201)
      res.send([])
    }
  } catch (error) {
    console.log(error)
    res.status(400)
    res.send('unable to retrieve all orders')
  }
}

const postOrder = async (req, res) => {
  // console.log('reached the controller', req.body)
  const order = req.body
  try {
    // const order = postOne(req.body)
    const newOrder = await Orders.create({
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
    res.status(201)
    res.send(newOrder)
  } catch (error) {
    console.log(error)
    res.status(400)
    res.send('unable to create new order')
  }
}

const putOrder = async (req, res) => {
  console.log(req.body)
  try {
    const order = await Orders.findOneAndUpdate(
      {id: req.body.id},
      {payment: req.body.payment},
      {new: true}
    )
    console.log('ORDER: ', order)
    // res.json({message: 'ok'})
    res.status(200)
    res.send(order)
  } catch (error) {
    console.log(error)
    res.status(400)
    res.send('unable to update.')
  }
}

// hashing password
const hash = async (password) => {
  const salt = await bcrypt.genSalt()
  password = await bcrypt.hash(password, salt)
  return password
}

const signUp = async (req, res) => {
  // console.log('reached the controller')
  const { email, password } = req.body;

  try {
    // responseUser = await createUser(email, password)
    const hashedPassword = await hash(password)
    console.log('HASHED PASSWORD: ', hashedPassword)

    const user = await User.create({
      email: email,
      password: hashedPassword
    })

    if (user._id) {
      const token = createToken(user._id)
      res.cookie('jwt', token, {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
        // maxAge: maxAge * 1000
      })
      res.status(201)
      res.send({ user: user._id })
    } else {
      console.log('testing')
      res.json('error here?')
    }
  } catch (error) {
    const err = handleErrors(error)
    res.status(201)
    res.send(err)
  }
}


const logIn = async (req, res) => {
  let errors;
  const { email, password } = req.body
  try {
    // const response = await logInUser(email, password)

    const user = await User.login(email, password)

    if (user._id) {

      res.status(200)
      const token = createToken(user._id)
      res.cookie('jwt', token, {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
        // maxAge: maxAge * 1000
      })
      res.send({ user: user._id })

    }
  } catch (error) {
    errors = handleErrors(error)
    res.status(400)
    res.send(errors)
  }
}

const logout = async (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 })
  res.send({})
}

module.exports = { getOrders, postOrder, putOrder, signUp, logIn, logout }