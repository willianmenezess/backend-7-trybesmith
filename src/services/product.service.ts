import ProductModel, {
  ProductInputtableTypes,
  ProductSequelizeModel,
} from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';
// import validateInputValues from './validateInputValues';

async function getAll(): Promise<ServiceResponse<ProductSequelizeModel[]>> {
  const allProducts = await ProductModel.findAll();
  return { status: 'SUCCESSFUL', data: allProducts };
}

async function create(product: ProductInputtableTypes): Promise<ServiceResponse<Product>> {
  const newProduct = await ProductModel.create(product);
  const responseService: 
  ServiceResponse<Product> = { status: 'SUCCESSFUL', data: newProduct.dataValues };
  return responseService;
}

export default {
  create,
  getAll,
};