const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderProductSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  qty: { type: Number, required: true }
});

const orderSchema = new Schema({
  productsOrdered: [orderProductSchema],
  amountPaid: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  address: {
    name: { type: String, required: true },
    line1: { type: String, required: true },
    line2: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true }
  },
  status: { type: String, required: true },
  date: { type: Date, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Order', orderSchema);