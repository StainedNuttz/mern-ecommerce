const mongoose = require('mongoose');
const paypal = require('@paypal/checkout-server-sdk');
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(environment);

const createOrder = async (req, res, next) => {
  res.status(201).json({ message: 'next' });
}

exports.createOrder = createOrder;