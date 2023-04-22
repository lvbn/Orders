const { userSchema, orderSchema } = require('../database/models')
const { mongoose } = require('../database/db')
const bcrypt = require('bcrypt')

// save a function after doc is saved to the db
// these middlewares have to be declared before compiling a model
// https://mongoosejs.com/docs/middleware.html#defining
userSchema.post('save', function (doc, next) {
  console.log('new order created', doc)
  next()
})

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
  console.log(errors.message, errors.code)
  const errs = { email: '', password: ''};

  // duplicate error  code
  if (errors.code === 11000) {
    errs.email = 'Email already used. Please choose a different one.'
    return errs
  }

  // validation errors
  if (errors.message.includes('user validation failed')) {
   Object.values(errors.errors).forEach(({properties}) => {
    errs[properties.path] = properties.message;
   })
  }

  return errs;
}

const getAll = async () => {
  const orders = await Orders.find()
  return orders
}

const postOne = async (order) => {
  // console.log('in the model: ', order)
  // const newOrder = new Orders({
  //   id: order.id,
  //   ourClient: order.ourClient,
  //   date: order.date,
  //   quantity: order.quantity,
  //   charge: order.charge,
  //   payment: order.payment,
  //   fullfilment: order.fullfilment,
  //   finalClient: order.finalClient,
  //   delivery: order.delivery
  // })

  // return await newOrder.save()

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
  try {
    const user = await User.create({
      email: email,
      password: password
    })
    return user;
  } catch (error) {
    const errors = handleErrors(error)
    return errors
  }
}

module.exports = { getAll, postOne, updateOne, createUser }