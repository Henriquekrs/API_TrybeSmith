import express from 'express';
import productRouter from './routes/products.routes';
import userRouter from './routes/user.routes';
import loginRouter from './routes/login.router';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/login', loginRouter);

export default app;
