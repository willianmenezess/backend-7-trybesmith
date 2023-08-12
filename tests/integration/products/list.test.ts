import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app'
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('É possível listar todos os produtos', async function () {
    sinon.stub(ProductModel, 'findAll').resolves([]);
    const httpResponse = await chai.request(app).get('/products');
    expect(httpResponse.status).to.be.equal(200);
  });

});
