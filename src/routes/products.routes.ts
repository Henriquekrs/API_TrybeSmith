import express from 'express';
import productController from '../controller/productController';

const route = express.Router();

route.post('/', productController.createProduct);
route.get('/', productController.getProducts);

export default route;