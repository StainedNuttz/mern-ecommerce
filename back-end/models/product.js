const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  rating: { type: Number, required: true },
  date: { type: Date, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

const productSchema = new Schema({
  brand: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  rating: { type: Number, required: true },
  reviews: [reviewSchema],
});

exports.Product = mongoose.model('Product', productSchema);
exports.Review = mongoose.model('Review', reviewSchema);