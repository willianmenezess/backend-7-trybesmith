import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import OrderModel from '../../../src/database/models/order.model';
import UserModel from '../../../src/database/models/user.model';
import ProductModel from '../../../src/database/models/product.model';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

chai.use(chaiHttp);

describe('POST /orders', function () { 
  beforeEach(function () { sinon.restore(); });
  it('testa se é possível criar um pedido com sucesso', async function () {
    // Arrange
    const mockFindResult = UserModel.build({ id: 1, username: 'Hagar', vocation: 'Guerreiro', level: 10, password: 'zewDmQuNYZu3gl2vxGiwjusRZ4x4jZhLj6wUvZpIbtToIoAkVBKOu' });
    const mockCreateResult = OrderModel.build({ id: 1, userId: 1 });
    sinon.stub(jwt, 'verify').resolves();
    sinon.stub(bcrypt, 'compareSync').returns(true);
    sinon.stub(UserModel, 'findOne').resolves(mockFindResult);
    sinon.stub(UserModel, 'findByPk').resolves(mockFindResult);
    sinon.stub(OrderModel, 'create').resolves(mockCreateResult);
    sinon.stub(ProductModel, 'update').resolves([1]);
    // Act
    const httpResponse = await chai.request(app).post('/orders').send({ userId: 1, productIds: [1, 2, 3] }).set('Authorization', '456hhuih5664f7798996');

    // Assert
    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.be.deep.equal({ userId: 1, productIds: [1, 2, 3] });
  });

});
