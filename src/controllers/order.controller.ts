import { Request, Response } from 'express';
import orderService from '../services/order.service';
import { Order } from '../types/Order';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function allOrdersWithProducts(_req: Request, res: Response) {
  const serviceResponse = await orderService
    .allOrdersWithProducts() as { status: string, data: Order[] };
  return res.status(200).json(serviceResponse.data);
}

async function createOrderWithProducts(req: Request, res: Response) {
  const { userId, productIds } = req.body;
  const serviceResponse = await orderService
    .createOrderWithProducts(userId, productIds) as { status: string, data: Order };
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
  return res.status(201).json(serviceResponse.data);
}

export default {
  allOrdersWithProducts,
  createOrderWithProducts,
};
