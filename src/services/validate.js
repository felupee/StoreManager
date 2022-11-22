const saleModel = require('../models/sales.model');

const productExist = async (sales) => {
  const productIdExist = sales.map(async ({ productId }) => {
    const newSale = await saleModel.findByIdValidate(Number(productId));

    if (!newSale) {
      return false;
    }
    return true;
  });

  const result = await Promise.all(productIdExist);

  if (result.includes(false)) {
    return false;
  }
  return true;
};

module.exports = {
  productExist,
};