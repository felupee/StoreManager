const newSale = [
  {
    "productId": 2,
    "quantity": 5
  },
];

const retorno = {
  id: [{ lastId: 3 }],
  itemsSold: { id: 4, productId: 2, quantity: 5 }
}

const returnSales = [
  { id: 4, productId: 2, quantity: 5 },
  { id: 4, productId: 2, quantity: 1 }
];

const testeFindId = [
  { productId: 1, quantity: 6 },
  { productId: 2, quantity: 2 }
]

const testeValide = { id: 1, name: 'Martelo de Thor' }

module.exports = {
  newSale,
  returnSales,
  testeFindId,
  testeValide,
  retorno,
};