const express = require('express');
const { check } = require('express-validator');

const userControllers = require('../controllers/user-controllers');

const router = express.Router();

router.post('/login',
  [
    check('password')
      .isString()
  ],
  userControllers.login
);

router.post('/signup',
  [
    check('username')
      .not()
      .isEmpty(),
    check('email')
      .normalizeEmail()
      .isEmail(),
    check('password')
      .isString()
      .isLength({ min: 8 })
  ],
  userControllers.signup
);

module.exports = router;