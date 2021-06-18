import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import ordersController from './controllers/orders.js';

const app = express();

app.use(express.json());

if (app) {
  console.log('cursed server');
}

app.use(ordersController);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
