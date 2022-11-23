const { expect } = require('chai');
const sinon = require('sinon');
const salesModel = require('../../../src/models/sales.model');

const connection = require('../../../src/models/connection');
const sales = require('./mock/sales.model.mock');

describe('Testes de unidade do model de vendas', function () {
  afterEach(sinon.restore);
  it('venda foi cadastrada com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([[{ lastId: 2}]]);


    // const result = await Promise.all(sales.newSale.map(async (sale) => salesModel.createSale(4, sale)));
    const result = await salesModel.createSale(sales.newSale)
    expect(result).to.be.deep.equal(3);
  });

  // it('exibindo a lista de produtos', async function () {
  //   sinon.stub(connection, 'execute').resolves([products]);
  //   const result = await productsModel.findAll();
  //   expect(result).to.be.deep.equal(products);
  // });

  // it('Recuperando um produto a partir do seu id', async function () {
  //   sinon.stub(connection, 'execute').resolves([[products.products[0]]]);
  //   const result = await productsModel.findById(1);
  //   expect(result).to.be.deep.equal(products.products[0]);
  // });
});