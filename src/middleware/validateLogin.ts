import { RequestHandler } from 'express';
import bcrypt from 'bcryptjs';
import User from '../database/models/user.model';

export type ResponseErrorType = {
  status: number;
  message: string;
};

const validateInputLogin: RequestHandler = (req, res, next) => {
  const { username, password } = req.body;
  if (!username) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }
  if (!password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }
  next();
};

const validateCredentials: RequestHandler = async (req, res, next) => {
  const usernameI = req.body.username;
  const passwordI = req.body.password;
  const user = await User.findOne({ where: { username: usernameI } });
  
  if (!user) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  if (!bcrypt.compareSync(passwordI, user.dataValues.password)) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  next();
};

export default {
  validateInputLogin,
  validateCredentials,
};