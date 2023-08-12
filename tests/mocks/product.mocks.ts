import { Product } from '../../src/types/Product';
import { ProductInputtableTypes } from '../../src/database/models/product.model';

const validProduct: Product = {
	id: 1,
  name: 'valid name',
	price: 'valid price',
	orderId: 1,
};

const validProductFromDB: Product = {
	id: 1,
	name: 'valid name',
	price: 'valid price',
	orderId: 1,
};

const allProductsFromDB: ProductInputtableTypes[] = [
	{
		id: 1,
		name: 'valid name',
		price: 'valid price',
		orderId: 1,
	},
];


export default {
	validProduct,
	validProductFromDB,
	allProductsFromDB,
};