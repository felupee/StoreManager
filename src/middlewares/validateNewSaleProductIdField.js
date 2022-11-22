module.exports = (req, res, next) => {
  const sales = req.body;

  const productIdExist = sales.map(({ productId }) => {
    if (!productId) {
      return false;
    }
    return true;
  });
  console.log(productIdExist);

  if (productIdExist.includes(false)) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  return next();
};