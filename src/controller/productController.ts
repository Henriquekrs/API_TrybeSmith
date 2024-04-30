import { Request, Response } from 'express';
import productService from '../service/productService';
import { Product } from '../types/Product';

async function createProduct(req: Request, res: Response): Promise<Response<Product>> {
  const { name, price, userId } = req.body;
  const { status, data } = await productService.create(name, price, userId);
  return res.status(status).json(data);
}

async function getProducts(req: Request, res: Response): Promise<Response<Product[]>> {
  const products = await productService.getAll();
  return res.status(200).json(products.data);
}

export default {
  createProduct,
  getProducts,
};
