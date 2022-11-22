const camelize = require('camelize');
const connection = require('./connection');

const createSale = async (sales) => {
  await connection.execute('INSERT INTO StoreManager.sales (date) VALUE (NOW())');

  const [[{ lastId }]] = await connection.execute(
    'SELECT MAX(sale_id) AS lastId FROM StoreManager.sales_products',
  );

  const idSale = lastId + 1;

  const newSales = sales.map(async ({ productId, quantity }) => {
    await connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [idSale, productId, quantity],
    );
  });

  await Promise.all(newSales);

  return idSale;
};

const findById = async (id) => {
  const [sale] = await connection.execute(
    ` SELECT sales_products.product_id as productId, sales_products.quantity
    FROM sales_products
    INNER JOIN sales ON sales.id = sales_products.sale_id
    WHERE sales_products.sale_id = ?
    ORDER BY sales_products.sale_id, sales_products.product_id`,
    [id],
  );
  return sale;
};

const findByIdValidate = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );
  return camelize(result);
};

module.exports = {
  createSale,
  findById,
  findByIdValidate,
};