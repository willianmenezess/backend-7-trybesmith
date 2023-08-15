import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import UserModel from '../database/models/user.model';

async function allOrdersWithProducts(): Promise<unknown> {
  const allOrders = await OrderModel.findAll({ include: [
    { model: ProductModel,
      as: 'productIds', 
      attributes: { exclude: ['name', 'price', 'orderId'] },
    }], 
  });
  const ordersDataValues = allOrders.map((order) => order.dataValues);
  const ordersWithProducts = ordersDataValues.map((order) => ({
    id: order.id,
    userId: order.userId,
    productIds: order.productIds?.map((product) => product.id),
  }));
  return { status: 'SUCCESSFUL', data: ordersWithProducts };
}

async function createOrderWithProducts(userId: number, productIds: number[]): Promise<unknown> {
  const foundUser = await UserModel.findByPk(userId);
  if (!foundUser) {
    return { status: 'NOT_FOUND', data: { message: '"userId" not found' } };
  }
  const newOrder = await OrderModel.create({ userId });
  const updateProducts = productIds.map((productId) => ProductModel.update({ 
    orderId: newOrder.dataValues.id }, { where: { id: productId } }));
  await Promise.all(updateProducts);
  return { status: 'SUCCESSFUL', data: { userId, productIds } };
}

export default {
  allOrdersWithProducts,
  createOrderWithProducts,
};