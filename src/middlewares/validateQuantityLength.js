module.exports = (req, res, next) => {
  const sales = req.body;

  const quantityExist = sales.map(({ quantity }) => {
    if (Number(quantity) <= 0) {
      return false;
    }
    return true;
  });

  if (quantityExist.includes(false)) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  return next();
};