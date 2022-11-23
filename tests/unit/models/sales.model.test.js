const { expect } = require('chai');
const sinon = require('sinon');
const salesModel = require('../../../src/models/sales.model');

const connection = require('../../../src/models/connection');
const sales = require('./mock/sales.model.mock');

describe('Testes de unidade do model de vendas', function () {
  afterEach(sinon.restore);
  it('testando o cadastro de vendas', async function () {
    sinon.stub(connection, 'execute').resolves([[{ lastId: 2}]]);
    const result = await salesModel.createSale(sales.newSale)
    expect(result).to.be.deep.equal(3);
  });

  // it('exibindo a lista de produtos', async function () {
  //   sinon.stub(connection, 'execute').resolves([products]);
  //   const result = await productsModel.findAll();
  //   expect(result).to.be.deep.equal(products);
  // });

  it('Recuperando um produto a partir do seu id', async function () {
    sinon.stub(connection, 'execute').resolves([[sales.returnSales]]);
    const result = await salesModel.findById(4);
    expect(result).to.be.deep.equal([sales.returnSales]);
  });

  it('Verificando a função de validação', async function () {
    sinon.stub(connection, 'execute').resolves([[sales.testeValide]]);
    const result = await salesModel.findByIdValidate(1);
    expect(result).to.be.deep.equal(sales.testeValide);
  });
});