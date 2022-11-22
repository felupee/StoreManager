module.exports = (req, res, next) => {
  const sales = req.body;

  const quantityExist = sales.map(({ quantity }) => {
    if (quantity === undefined) {
      return false;
    }
    return true;
  });

  if (quantityExist.includes(false)) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  return next();
};