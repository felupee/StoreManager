const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const sales = require('./mock/sales.controller.mock');
const salesService = require('../../../src/services/sales.service');
const salesController = require('../../../src/controllers/sales.controller');

describe('Testes de unidade do controller de sales', function () {
  afterEach(sinon.restore);

  it('Cadastrando uma nova venda com sucesso', async function () {
    const res = {};
    const req = {
      body: sales.saleMock,
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, 'createSale')
      .resolves({ type: null, message: sales.retorno });

    await salesController.createSale(req, res);

    expect(res.status).to.have.been.calledWith(null);
    expect(res.json).to.have.been.calledWith(sales.retorno);
  });

});