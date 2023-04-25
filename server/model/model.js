const { userSchema, orderSchema } = require('../database/models')
const { mongoose } = require('../database/db')
const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')

// save a function after doc is saved to the db
// these middlewares have to be declared before compiling a model
// https://mongoosejs.com/docs/middleware.html#defining

// hashing password
userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt()
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

// compiles the models
const Orders = mongoose.model('Orders', orderSchema)
const User = mongoose.model('user', userSchema)

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

// // create token
// const maxAge = 3 * 24 * 60 * 60;
// const createToken = (id) => {
//   return jwt.sign({ id }, 'the dashboard secret', {
//     expiresIn: maxAge
//   })
// }

// HTTP REQUESTS

const getAll = async () => {
  const orders = await Orders.find()
  return orders
}

const postOne = async (order) => {
  // console.log('in the model: ', order)
  try {
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
    return newOrder
  } catch (error) {
    console.log(error)
    const errors = handleErrors(error)
    return errors
  }
}

const updateOne = async (idAndField) => {
  // await Orders.updateOne({id: idAndField.id}, {payment: idAndField.payment})
  // const doc = Orders.findOne({id: 1})

  const [keys, values] = Object.entries(idAndField);
  // console.log('in the model: ', keys, values)

  // finding the document and saving it is the best supported method for updating docs.
  // https://masteringjs.io/tutorials/mongoose/update
  // const doc = await Orders.findOne({id: idAndField.id})
  // doc[values[0]] = values[1];
  // return await doc.save();

  const doc = await Orders.findOne({id: idAndField.id})
  doc[values[0]] = values[1];
  await doc.save();
  return {id: doc.id, [values[0]]: values[1]}
}


const createUser = async (email, password) => {
  let errors;
  try {
    const user = await User.create({
      email: email,
      password: password
    })
    return user;
  } catch (error) {
    errors = handleErrors(error)
    // console.log('error - model: ', errors)
    // return errors
  }

  if (errors) {
    return errors
  }
}

const logInUser = async (email, password) => {
    let errors;
    try {
      const user = await User.login(email, password)
      return user
    } catch (error) {
      errors = handleErrors(error)
    }
    if (errors) {
      return errors;
    }
  }


// const logInUser = async (email, password) => {
//   const response = {}
//   // console.log('2')
//   try {
//     const user = await User.login(email, password)
//     // console.log(user)
//     response.user = user._id
//   } catch (error) {
//     response.error = error
//   }
//   // console.log('response::: ', response.error)
//   return response;
// }



module.exports = { getAll, postOne, updateOne, createUser,  logInUser}