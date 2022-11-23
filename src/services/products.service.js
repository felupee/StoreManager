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

const createProduct = async (name) => {
  const newProductId = await productModel.insert(name);
  const newProduct = await productModel.findById(newProductId);

  return { type: 201, message: newProduct };
};

const updateById = async (product, productId) => {
  const productExist = await productModel.findById(productId);
  const a = { message: 'Product not found' };
  if (!productExist) return { type: 404, message: a };

  await productModel.updateById(product, productId);
  const result = await productModel.findById(productId);
  return { type: 200, message: result };
};

module.exports = {
  findAll,
  findById,
  createProduct,
  updateById,
};