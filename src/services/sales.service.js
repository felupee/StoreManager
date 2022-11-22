const saleModel = require('../models/sales.model');
const validate = require('./validate');

const createSale = async (sales) => {
  const valida = await validate.productExist(sales);
  if (!valida) {
    return { type: 404, message: 'Product not found' };
  }
  const newSaleId = await saleModel.createSale(sales);
  const newSale = await saleModel.findById(newSaleId);

  const retorno = {
    id: newSaleId,
    itemsSold: newSale,
  };

  return { type: 201, message: retorno };
};

module.exports = {
  createSale,
};