import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';

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

export default {
  allOrdersWithProducts,
};