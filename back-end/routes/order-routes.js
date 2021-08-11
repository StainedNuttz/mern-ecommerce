const express = require('express');
const { check } = require('express-validator');

const orderControllers = require('../controllers/order-controllers');
const authCheck = require('../middleware/auth-check');

const router = express.Router();

// router.use(authCheck);

router.get('/:oid', orderControllers.getOrderById);

router.post('/',
  [
    check('productsOrdered')
      .isArray()
      .notEmpty(),
    check('amountPaid')
      .isDecimal()
      .notEmpty(),
    check('paymentMethod')
      .isString()
      .notEmpty(),
    check('address')
      .isObject()
      .notEmpty(),
    check('user')
      .isMongoId()
      .notEmpty()
  ], orderControllers.createOrder);

module.exports = router;