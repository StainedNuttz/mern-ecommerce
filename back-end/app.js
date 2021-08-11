require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const session = require('express-session');
const MongoStore = require('connect-mongo')

const userRoutes = require('./routes/user-routes');
const productRoutes = require('./routes/product-routes');
const orderRoutes = require('./routes/order-routes');

const HttpError = require('./models/http-error');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

app.use('/api', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// if no route exists
app.use((req, res, next) => {
  throw new HttpError(404, 'Route not found');
});

// if any errors thrown
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  console.log(error.message)
  res
    .status(error.status || 500)
    .json({ message: error.message || 'An unknown error has occurred' });
});

// connect to mongoDB
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ek8qv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
  .then(() => app.listen(process.env.PORT || 5000))
  .catch(err => console.log(err));