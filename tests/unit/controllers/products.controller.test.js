const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const products = require('./mock/products.controller.mock');
const productService = require('../../../src/services/products.service');
const productController = require('../../../src/controllers/products.controller');

describe('Testes de unidade do model de produtos', function () {
  afterEach(sinon.restore);
  it('Listando os produtos cadastrados', async function () {
    const res = {};
    const req = {};
    const productsList = products.products;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productService, 'findAll')
      .resolves({ type: null, message: productsList });

    await productController.listProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsList);
  });

  it('Buscando um produto por ID', async function () {
    const res = {};
    const req = {
      params: { id: 1 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productService, 'findById')
      .resolves({ type: null, message: products.products[0] });

    await productController.productById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products.products[0]);
  });
});