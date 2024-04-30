import { Request, Response } from 'express';
import userService from '../service/userService';
import { User } from '../types/User';

async function getAllUsers(req: Request, res: Response): Promise<Response<User[]>> {
  const dataUsers = await userService.getAll();
  return res.status(dataUsers.status).json(dataUsers.data);
}

async function login(req: Request, res: Response): Promise<Response<User>> {
  const { username } = req.body;  
  const dataUser = await userService.login(username);
  return res.status(dataUser.status).json(dataUser.data);
}

export default {
  getAllUsers,
  login,
};
