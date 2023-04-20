const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/orders');
  console.log('MongoDB connected via mongoose ✅')
}

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

module.exports = { orderSchema, mongoose };
