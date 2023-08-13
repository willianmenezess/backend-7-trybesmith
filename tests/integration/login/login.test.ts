import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import loginMocks from '../../mocks/login.mocks';
import UserModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Ao fazer Login com um e-mail e uma senha válida, devolve um token!', async function () {
    // Arrange
    const mockFindOne = UserModel.build(loginMocks.userWithHash);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOne);
    // Act
    const httpResponse = await chai.request(app).post('/login').send(loginMocks.validLoginBody)
    // Assert
    expect(httpResponse).to.have.status(200); 
    expect(httpResponse.body).to.have.key('token');
  });
  it('Ao fazer Login com um e-mail e uma senha inválida, devolve um erro!', async function () {
    // Arrange
    const mockFindOne = UserModel.build(loginMocks.userWithHash);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOne);
    // Act
    const httpResponse = await chai.request(app).post('/login').send({ ...loginMocks.validLoginBody, password: 'senha inválida' })
    // Assert
    expect(httpResponse).to.have.status(401); 
    expect(httpResponse.body).to.have.key('message');
    expect(httpResponse.body.message).to.be.equal('Username or password invalid');
  });
});
