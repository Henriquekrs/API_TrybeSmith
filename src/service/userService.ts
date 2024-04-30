import jwt from 'jsonwebtoken';
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

export type LoginServiceResposeType = {
  status: number;
  data: { token: string };
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

async function login(usernameI: string): Promise<LoginServiceResposeType> {
  const user = await User.findOne({ where: { username: usernameI } });

  const payload = {
    username: user?.dataValues.username,
    id: user?.dataValues.id,
  };

  const secret = process.env.JWT_SECRET || 'secret';
  
  const tokenUser = jwt.sign(payload, secret as string, {
    expiresIn: '1h',
    algorithm: 'HS256',
  });

  return { status: 200, data: { token: tokenUser } };
}

export default {
  getAll,
  login,
};