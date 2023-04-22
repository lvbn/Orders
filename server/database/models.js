const { mongoose } = require('./db')
const { isEmail } = require('validator')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter an email.'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email.']
  },
  password: {
    type: String,
    required: [true, 'Please enter a password.'],
    minlength: [6, 'Minimum password length is 6 characters.']
  }
});

const orderSchema = new mongoose.Schema({
  id: Number,
  ourClient: String,
  date: Date,
  quantity: Number,
  charge: Number,
  payment: String,
  fullfilment: String,
  finalClient: String,
  delivery: String
});

module.exports = {
  userSchema,
  orderSchema
}