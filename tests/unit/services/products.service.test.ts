import { expect } from 'chai';
import sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model';
import ProductsService from '../../../src/services/product.service';
import productMocks from '../../mocks/product.mocks';


describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });
  it('É possivel cadastrar um produto com sucesso', async function() {
    // arrange

    // Act
    const mockCreateReturn = ProductModel.build(productMocks.validProductFromDB);
    sinon.stub(ProductModel, 'create').resolves(mockCreateReturn);
    const serviceResponse = await ProductsService.create(productMocks.validProduct);

    // Assert
    expect(serviceResponse.status).to.be.equal('SUCCESSFUL');
    expect(serviceResponse.data).to.be.deep.equal(productMocks.validProductFromDB);
  })

  // it('É possivel listar todos os produtos com sucesso', async function() {
    // Arrange

    // Act
    // const mockFindAllReturn = ProductModel.build(productMocks.allProductsFromDB);
    // sinon.stub(ProductModel, 'findAll').resolves(mockFindAllReturn);
    // Assert
    // const serviceResponse = await ProductsService.getAll();
    // expect(serviceResponse.status).to.be.equal('SUCCESSFUL');
    // expect(serviceResponse.data).to.be.deep.equal([productMocks.validProductFromDB]);
  // });

});
