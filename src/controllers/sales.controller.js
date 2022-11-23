const saleService = require('../services/sales.service');

const createSale = async (req, res) => {
  const sales = req.body;
  const { type, message } = await saleService.createSale(sales);

  console.log('message', message);
  return res.status(type).json(message);
};

module.exports = {
  createSale,
};