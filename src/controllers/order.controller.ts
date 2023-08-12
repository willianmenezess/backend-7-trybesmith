import { Request, Response } from 'express';
import orderService from '../services/order.service';
import { Order } from '../types/Order';

async function allOrdersWithProducts(_req: Request, res: Response) {
  const serviceResponse = await orderService
    .allOrdersWithProducts() as { status: string, data: Order[] };
  return res.status(200).json(serviceResponse.data);
}

export default {
  allOrdersWithProducts,
};
