const productModel = require('../models/products.model');

// const productExist = async (produtoId) => {
//   const product = await productModel.findById(produtoId);
//   if (product === undefined) return false;
//   return true;
// };

const findAll = async () => {
  const products = await productModel.findAll();
  return { type: null, message: products };
};

const findById = async (productId) => {
  const product = await productModel.findById(productId);
  if (product === undefined) return { status: 404, message: 'Product not found' };
  return { status: null, message: product };
};

module.exports = {
  findAll,
  findById,
};