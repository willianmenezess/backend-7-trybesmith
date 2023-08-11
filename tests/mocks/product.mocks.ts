import { Product } from '../../src/types/Product';

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

export default {
	validProduct,
	validProductFromDB,
};