import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import ProductsController from '../../../src/controllers/product.controller';
import productService from '../../../src/services/product.service';
import productMocks from '../../mocks/product.mocks';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  it('É possivel cadastrar um produto com sucesso', async function() {
    // Arrange
    req.body = productMocks.validProduct;
    sinon.stub(productService, 'create').resolves({ status: 'SUCCESSFUL', data: productMocks.validProductFromDB });

    // Act
    await ProductsController.create(req, res);
    // Assert
    expect(res.status).to.be.calledWith(201);
    expect(res.json).to.be.calledWith(productMocks.validProductFromDB);
  });

});
