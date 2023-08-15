import { Router } from 'express';
import orderController from '../controllers/order.controller';
import authValidations from '../middlewares/auth.validations';
import orderValidations from '../middlewares/order.validations';

const orderRouter = Router();

const { validateUserId, validateProductIds } = orderValidations;
const validations = [validateUserId, validateProductIds];
orderRouter.get('/', orderController.allOrdersWithProducts);
orderRouter.post('/', authValidations, validations, orderController.createOrderWithProducts);

export default orderRouter;