import User from '../database/models/user.model';
import Product from '../database/models/product.model';

export type UserServiceResposeType = {
  status: number;
  data: UserInputtableTypes[];
};

export type UserInputtableTypes = {
  username: string;
  productIds: number[];
};

async function getAll(): Promise<UserServiceResposeType> {
  const users = await User.findAll();

  const products = await Product.findAll();

  const usersWithProducts: UserInputtableTypes[] = users.map((user) => {
    const userProducts: UserInputtableTypes = {
      username: user.dataValues.username,
      productIds: products
        .filter((product) => product.dataValues.userId === user.dataValues.id)
        .map((product) => product.dataValues.id),
    };
    return userProducts;
  });
  return { status: 200, data: usersWithProducts };
}

export default {
  getAll,
};