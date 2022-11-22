const products = [
  {
    "id": 1,
    "name": "Computador"
  },
  {
    "id": 2,
    "name": "Celular"
  },
  {
    "id": 3,
    "name": "Tablet"
  }
];

const invalidValue = {
  name: 'a'
};

const productMock = {
  name: 'Teclado',
};

const newProductMock = { id: 1, ...productMock };

module.exports = {
  products,
  productMock,
  invalidValue,
  newProductMock,
};