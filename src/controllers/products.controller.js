const productService = require('../services/products.service');

const listProducts = async (_req, res) => {
  const { type, message } = await productService.findAll();

  if (type) return res.status(404).json(message);

  return res.status(200).json(message);
};

const productById = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await productService.findById(id);
  if (status === 404) return res.status(status).json({ message });
  return res.status(200).json(message);
};

const createProduct = async (req, res) => {
  const { name } = req.body;
  console.log('corpo', name);
  const { type, message } = await productService.createProduct(name);

  res.status(type).json(message);
};

module.exports = {
  listProducts,
  productById,
  createProduct,
};