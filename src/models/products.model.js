const camelize = require('camelize');
// const snakeize = require('snakeize');
const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return camelize(result);
};

const findById = async (productId) => {
    const [[result]] = await connection.execute(
      'SELECT * FROM products WHERE id = ?',
      [productId],
    );
    return camelize(result);
};

const insert = async (product) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [product],
    );
    
  console.log('insertir model', insertId);
  return insertId;
};

module.exports = {
  findAll,
  findById,
  insert,
};