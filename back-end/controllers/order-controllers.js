const mongoose = require('mongoose');
const { validationResult } = require('express-validator');

const isValidObjectId = mongoose.isValidObjectId;

const HttpError = require('../models/http-error');
const Order = require('../models/order');
const User = require('../models/user');

const getOrderById = async (req, res, next) => {
  if (!isValidObjectId(req.params.oid)) {
    return next(new HttpError(422, 'Invalid order ID'));
  }

  let order;
  try {
    order = await Order.findById(req.params.oid).exec();
    if (!order) { throw 'Order not found' }
  } catch (err) {
    return next(new HttpError(404, 'Order not found'));
  }

  res.status(200).json(order.toObject({ getters: true }));
}

const createOrder = async (req, res, next) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    const index = result.errors.findIndex(e => e.param === 'user');
    // if 'user' validation failed, probably because it's been passed in as NULL
    // (indicating checked out as guest), let it pass as valid if it is NULL
    if (index !== -1 && result.errors[index].value === null) {
      // do nothing
    } else {
      return next(new HttpError(422, 'Invalid order data'));
    }
  }

  const { productsOrdered, amountPaid, paymentMethod, address, user } = req.body;

  if (user !== null) {
    let foundUser;
    try {
      foundUser = await User.findById(user);
      if (!foundUser) { throw 'User not found' }
    } catch (err) {
      return next(new HttpError(404, 'User not found'));
    }
  }

  const newOrder = new Order({
    productsOrdered,
    amountPaid,
    paymentMethod,
    address,
    status: 'Awaiting dispatch',
    date: new Date().toISOString(),
    user
  });

  try {
    const session = await mongoose.startSession();
    session.startTransaction();

    await newOrder.save({ session: session });

    if (user) {
      foundUser.orders.push(newOrder._id);
      await foundUser.save({ session: session });
    }

    await session.commitTransaction();
  } catch(err) {
    return next(new HttpError(500, 'Failed to create order, please try again'));
  }

  res.status(201).json({ message: 'Order created', order: newOrder });
}

exports.getOrderById = getOrderById;
exports.createOrder = createOrder;