require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user-routes');
const productRoutes = require('./routes/product-routes');
const HttpError = require('./models/http-error');

const app = express();


app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
})

app.use('/api', userRoutes);

app.use('/api/products', productRoutes);

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

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000))
  .catch(err => console.log(err));