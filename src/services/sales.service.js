const saleModel = require('../models/sales.model');
const validate = require('./validate');

const createSale = async (sales) => {
  const valida = await validate.productExist(sales);
  const a = { message: 'Product not found' };
  if (!valida) {
    return { type: 404, message: a };
  }
  const newSaleId = await saleModel.createSale(sales);
  const newSale = await saleModel.findById(newSaleId);

  const retorno = {
    id: newSaleId,
    itemsSold: newSale,
  };

  return { type: 201, message: retorno };
};

const findAll = async () => {
  const passengers = await saleModel.findAll();
  return { type: 200, message: passengers };
};

const findById = async (saleId) => {
  const sale = await saleModel.findById2(saleId);
  console.log('sale teste', sale);
  if (sale.length >= 1) return { type: 200, message: sale };
  const b = { message: 'Sale not found' };
  return { type: 404, message: b };
};

module.exports = {
  createSale,
  findAll,
  findById,
};