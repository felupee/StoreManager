const { expect } = require('chai');
const sinon = require('sinon');

const productService = require('../../../src/services/products.service');
const productsModel = require('../../../src/models/products.model');
const products = require('./mock/products.service.mock');

describe('Testes de unidade de service de produtos', function () {
  afterEach(sinon.restore);
  it('retorna a lista completa de produtos', async function () {
    sinon.stub(productsModel, 'findAll').resolves(products);

    const result = await productService.findAll();

    expect(result.message).to.deep.equal(products);
  });

  it('retorna um erro caso receba um ID inválido', async function () {
    const result = await productService.findById(20);

    expect(result.status).to.equal(404);
    expect(result.message).to.equal('Product not found');
  });

  it('retorna um produto caso ID exista', async function () {
    sinon.stub(productsModel, 'findById').resolves(products.products[0]);

    const result = await productService.findById(1);

    expect(result.status).to.equal(null);
    expect(result.message).to.deep.equal(products.products[0]);
  });

  it('retorna o ID do produto cadastrado', async function () {
    sinon.stub(productsModel, 'insert').resolves([{ insertId: 1 }]);
    sinon.stub(productsModel, 'findById').resolves(products.products[0]);

    const result = await productService.createProduct(products.validName);

    expect(result.type).to.equal(201);
    expect(result.message).to.deep.equal(products.products[0]);
  });
});