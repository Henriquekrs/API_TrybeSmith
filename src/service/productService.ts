import Product, { ProductSequelizeModel } from '../database/models/product.model';

export type ProductServiceResposeType = {
  status: number;
  data: ProductSequelizeModel[] | ProductSequelizeModel;
};

async function create(
  name: string,
  price: string,
  userId: number,
): Promise<ProductServiceResposeType> {
  const dataCreated = await Product.create({ name, price, userId });
  return { status: 201, data: dataCreated };
}

async function getAll(): Promise<ProductServiceResposeType> {
  const dataProduct = await Product.findAll();
  return { status: 200, data: dataProduct };
}

export default {
  create,
  getAll,
};
