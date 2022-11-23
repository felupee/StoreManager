const { expect } = require('chai');
const sinon = require('sinon');

const salesService = require('../../../src/services/sales.service');
const salesModel = require('../../../src/models/sales.model');
const sales = require('./mock/sales.service.mock');

describe('Testes de unidade de service de sales', function () {
  afterEach(sinon.restore);
  // it('retorna a lista completa de produtos', async function () {
  //   sinon.stub(productsModel, 'findAll').resolves(products);

  //   const result = await productService.findAll();

  //   expect(result.message).to.deep.equal(products);
  // });

  // it('retorna um erro caso receba um ID inválido', async function () {
  //   const result = await productService.findById(20);

  //   expect(result.status).to.equal(404);
  //   expect(result.message).to.equal('Product not found');
  // });

  // it('retorna um produto caso ID exista', async function () {
  //   sinon.stub(productsModel, 'findById').resolves(products.products[0]);

  //   const result = await productService.findById(1);

  //   expect(result.status).to.equal(null);
  //   expect(result.message).to.deep.equal(products.products[0]);
  // });

  it('retorna o ID da venda cadastrada', async function () {
    sinon.stub(salesModel, 'createSale').resolves([{ lastId: 3 }]);
    sinon.stub(salesModel, 'findById').resolves(sales.returnSales[0]);

    const result = await salesService.createSale(sales.newSale);
    expect(result.type).to.equal(201);
    expect(result.message).to.deep.equal(sales.retorno);
  });
});