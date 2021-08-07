const { validationResult } = require('express-validator');
const querystring = require('querystring');
const mongoose = require('mongoose');
const isValidObjectId = mongoose.isValidObjectId;

const { Product, Review } = require('../models/product');
const HttpError = require('../models/http-error');
const User = require('../models/user');

// get all products OR selected products from query string
const getAllProducts = async (req, res, next) => {
  if (req.query.ids && Array.isArray(req.query.ids)) {
    let products = [];
    for (p of req.query.ids) {
      let product;
      try {
        product = await Product.findById(p).exec();
        if (product) { 
          const { id, name, price, stock } = product;
          products.push({ id, name, price, stock });
        }
      } catch (err) {
        return next(new HttpError(422, 'Invalid product ID(s) passed in'));
      }
    }
    res.status(200).json({ products })
  } else {
    let products;
    try {
      products = await Product.find().exec();
    } catch (err) {
      return next(new HttpError(500, err));
    } finally {
      if (!products) return next(new HttpError(404, 'Could not find any products'));
    }
    res.status(200).json({ products: products.map(p => p.toObject({ getters: true })) })
  }
}

const getProductById = async (req, res, next) => {
  if (!isValidObjectId(req.params.pid)) {
    return next(new HttpError(422, 'Invalid product ID'));
  }

  let product;
  try {
    product = await Product
    .findById(req.params.pid)
    .populate('reviews.user', 'username')
    .exec();
  } catch (err) {
    return next(new HttpError(500, err))
  } finally {
    if (!product) { 
      return next(new HttpError(404, 'Could not find product'))
    }
  }

  res.status(200).json(product);
}

// -- PROTECTED ROUTES --

const createProduct = async (req, res, next) => {
  if (!req.userIsAdmin) {
    return next(new HttpError(401, 'Authorization failed'));
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError(422, 'Invalid product data passed in'));
  }

  const { brand, name, image, price, stock } = req.body;

  const newProduct = new Product({
    brand,
    name,
    image: image || 'image',
    price,
    stock: stock <= 0 ? 0 : stock,
    rating: 0,
    reviews: []
  });

  try {
    await newProduct.save();
  } catch (err) {
    return next(new HttpError(500, 'Failed to save product to database'));
  }

  res.status(201).json({ message: 'Product created', product: newProduct.toObject({ getters: true }) });
}

const editProduct = async (req, res, next) => {
  if (!req.userIsAdmin) {
    return next(new HttpError(401, 'Authorization failed'));
  }

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError(422, 'Invalid product data passed in'));
  }

  let product;
  try {
    product = await Product.findById(req.params.pid).exec();
  } catch (err) {
    return next(new HttpError(404, 'Could not find product'));
  }
  
  const { brand, name, image, price, stock } = req.body;

  product.brand = brand || product.brand;
  product.name = name || product.name;
  product.image = image || product.image;
  product.price = price || product.price;
  product.stock = stock <= 0 ? 0 : stock || product.stock;

  try {
    await product.save();
  } catch (err) {
    return next(new HttpError(500, 'Failed to save edited product to database'));
  }

  res.status(200).json({ message: 'Product edited', product: product.toObject({ getters: true }) });
}

const deleteProduct = async (req, res, next) => {
  if (!req.userIsAdmin) {
    return next(new HttpError(401, 'Authorization failed'));
  }

  let product;
  try {
    product = await Product.findById(req.params.pid).exec();
  } catch (err) {
    return next(new HttpError(500, `No product by that ID found`));
  } finally {
    if (!product) return next(new HttpError(500, `No product by that ID found`));
  }

  try {
    await Product.findByIdAndDelete(req.params.pid).exec();
  } catch (err) {
    return next(new HttpError(500, 'Failed to delete product from database'));
  }

  res.status(200).json({ message: 'Product deleted' });
}

const deleteAllProducts = async (req, res, next) => {
  if (!req.userIsAdmin) {
    return next(new HttpError(401, 'Authorization failed'));
  }
  await Product.deleteMany().exec();

  res.json({ message: 'All products deleted' });
}

// reviews
const createReview = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(req.body);
    console.log(errors)
    return next(new HttpError(422, 'Invalid review data'));
  }

  if (!isValidObjectId(req.params.pid)) {
    return next(new HttpError(422, 'Invalid product ID'));
  }

  const product = await Product.findById(req.params.pid).exec();
  if (!product) {
    return next(new HttpError(404, 'Product doesn\'t exist'))
  }

  const { title, text, rating, user, date } = req.body;

  let foundUser;
  try {
    foundUser = await User.findById(user);
    if (!foundUser) {
      return next(new HttpError(404, 'User doesn\'t exist'));
    }
  } catch (err) {
    return next(new HttpError(500, err));
  }

  const newReview = new Review({
    title,
    text,
    rating,
    user,
    date
  });

  // create review, add review to user who created review
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    
    product.reviews.push(newReview);
    await product.save({ session: session });

    foundUser.reviews.push(newReview);
    await foundUser.save({ session: session });

    await session.commitTransaction();
  } catch (err) {
    return next(new HttpError(500, err));
  }

  res.status(201).json({ message: `Review posted for ${product.name}`, review: newReview }); 
}

const deleteReview = async (req, res, next) => {
  if (!isValidObjectId(req.body.id)) {
    return next(new HttpError(422, 'Invalid review ID'));
  }

  let product;
  try {
    product = await Product.findById(req.params.pid).exec();
  } catch (err) {
    return next(new HttpError(500, err));
  } finally {
    if (!product) {
      return next(new HttpError(422, 'Product not found'));
    }
  }

  const index = product.reviews.findIndex(r => r.id === req.body.id);
  if (index === -1) {
    return next(new HttpError(422, 'Review not found'));
  }

  const review = product.reviews[index];
  product.reviews[index].remove();
  
  try {
    await product.save();
  } catch (err) {
    return next(new HttpError(500, err));
  }

  res.status(200).json({ message: 'Review deleted', review })
}

exports.getAllProducts = getAllProducts;
exports.getProductById = getProductById;
exports.createProduct = createProduct;
exports.editProduct = editProduct;
exports.deleteProduct = deleteProduct;
exports.deleteAllProducts = deleteAllProducts;

exports.createReview = createReview;
exports.deleteReview = deleteReview;