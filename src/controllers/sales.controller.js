const saleService = require('../services/sales.service');

const createSale = async (req, res) => {
  const sales = req.body;
  const { type, message } = await saleService.createSale(sales);
  return res.status(type).json(message);
};

const findAll = async (_req, res) => {
  const { type, message } = await saleService.findAll();

  res.status(type).json(message);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await saleService.findById(id);

  res.status(type).json(message);
};

module.exports = {
  createSale,
  findAll,
  findById,
};