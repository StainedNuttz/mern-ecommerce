const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 8 },
  orders: [
    { type: mongoose.Types.ObjectId, required: true }
  ],
  reviews: [mongoose.Types.ObjectId],
  isAdmin: { type: Boolean }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);