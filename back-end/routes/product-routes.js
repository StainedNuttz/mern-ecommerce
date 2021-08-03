const express = require('express');
const { check } = require('express-validator');

const productControllers = require('../controllers/product-controllers');
const authCheck = require('../middleware/auth-check');

const router = express.Router();

router.get('/', productControllers.getAllProducts);

router.get('/:pid', productControllers.getProductById);

router.use(authCheck);

// -- PROTECTED ROUTES --

router.post('/new',
  [
    check('name')
      .not()
      .isEmpty(),
    check('brand')
      .not()
      .isEmpty(),
    check('price')
      .isDecimal({force_decimal: false, decimal_digits: 2, locale: 'en-GB'}),
    check('stock')
      .isNumeric()
  ],
  productControllers.createProduct
);

router.patch('/:pid',
  [
    // check('name')
    //   .exists()
    //   .not()
    //   .isEmpty(),
    // check('brand')
    //   .exists()
    //   .not()
    //   .isEmpty(),
    // check('price')
    //   .exists()
    //   .isDecimal({ force_decimal: false, decimal_digits: 2, locale: 'en-GB' }),
    // check('stock')
    //   .exists()
    //   .isNumeric()
  ],
  productControllers.editProduct
);

router.delete('/', productControllers.deleteAllProducts);

router.delete('/:pid', productControllers.deleteProduct);

router.post('/:pid/review',
  [
    check('title')
      .not()
      .isEmpty(),
    check('text')
      .not()
      .isEmpty(),
    check('rating')
      .isLength({ min: 0.5, max: 5 })
      .custom(value => {
        return (value % 0.5) === 0;
      }),
    check('date')
      .not()
      .isEmpty(),
    check('user')
      .isMongoId()
  ],
  productControllers.createReview
);

router.delete('/:pid/review', productControllers.deleteReview);

module.exports = router;