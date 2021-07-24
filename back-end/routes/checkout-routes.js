const express = require('express');
const { check } = require('express-validator');

const checkoutControllers = require('../controllers/checkout-controllers');

const router = express.Router();

router.post('/order', checkoutControllers.createOrder);

module.exports = router;