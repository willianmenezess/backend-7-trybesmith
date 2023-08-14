import { Router } from 'express';
import productController from '../controllers/product.controller';
import nameValidations from '../middlewares/productName.validations';
import priceValidations from '../middlewares/productPrice.validations';

const productRouter = Router();

productRouter.post('/', nameValidations, priceValidations, productController.create);
productRouter.get('/', productController.getAll);

export default productRouter;