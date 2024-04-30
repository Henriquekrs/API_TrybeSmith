import express from 'express';
import productController from '../controller/productController';
import productMiddleware from '../middleware/validateProducts';

const route = express.Router();

route.post(
  '/',
  productMiddleware.validateInputName,
  productMiddleware.validateInputPrice,
  productMiddleware.validateInputUserId,
  productController.createProduct,
);
route.get('/', productController.getProducts);

export default route;