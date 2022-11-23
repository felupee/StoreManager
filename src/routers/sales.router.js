const express = require('express');
const saleController = require('../controllers/sales.controller');
const validateNewSaleProductIdField = require('../middlewares/validateNewSaleProductIdField');
const validateNewSaleQuantityField = require('../middlewares/validateNewSaleQuantityField');
const validateQuantityLength = require('../middlewares/validateQuantityLength');

const router = express.Router();

router.post(
  '/',
  validateNewSaleProductIdField,
  validateNewSaleQuantityField,
  validateQuantityLength,
  saleController.createSale,
);

router.get(
  '/',
  saleController.findAll,
);

router.get(
  '/:id',
  saleController.findById,
);

module.exports = router;