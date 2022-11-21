const camelize = require('camelize');
const connection = require('./connection');

   

const findById = async (productId) => {
    const [[result]] = await connection.execute(
      'SELECT * FROM products WHERE id = ?',
      [productId],
    );
    return camelize(result);
  };

  
  module.exports = {
    findById,
  };