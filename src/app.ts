import express from 'express';
import productRouter from './routers/product.router';
import orderRouter from './routers/order.routes';
import loginRouter from './routers/login.router';

const app = express();

app.use(express.json());
app.use(loginRouter);
app.use('/products', productRouter);
app.use('/orders', orderRouter);

export default app;
