const express = require('express');
const productsController = require('../controllers/products.controller');
const validateNewProductField = require('../middlewares/validateNewProductField');

const router = express.Router();

router.get(
  '/',
  productsController.listProducts,
);

router.get(
  '/:id',
  productsController.productById,
);

router.post(
  '/',
  validateNewProductField,
  productsController.createProduct,
);

router.put(
  '/:id',
  validateNewProductField,
  productsController.updateById,
);

module.exports = router;