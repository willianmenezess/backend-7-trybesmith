import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Testa se é possível cadastrar um produto com sucesso', async function () {
    // Arrange
    const mockCreateResult = ProductModel.build({ id: 5 , name: 'Produto Teste', price: '100', orderId: 4 });
    sinon.stub(ProductModel, 'create').resolves(mockCreateResult);

    // Act
    const httpResponse = await chai.request(app).post('/products').send({ name: 'Produto Teste', price: '100', orderId: 4 });

    // Assert
    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.be.deep.equal({ id: 5 , name: 'Produto Teste', price: '100', orderId: 4 });
  });
});
