import ProductModel, {
  ProductInputtableTypes,
} from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';
// import validateInputValues from './validateInputValues';

async function create(product: ProductInputtableTypes): Promise<ServiceResponse<Product>> {
  // let responseService: ServiceResponse<Product>;
  // const error = validateInputValues.validateParams(product);
  // if (error) {
  //   responseService = { status: 'INVALID_DATA', data: { message: error } };
  //   return responseService;
  // }
  const newProduct = await ProductModel.create(product);
  const responseService: 
  ServiceResponse<Product> = { status: 'SUCCESSFUL', data: newProduct.dataValues };
  return responseService;
}

export default {
  create,
};