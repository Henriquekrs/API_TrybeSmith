import express from 'express';
import userController from '../controller/userController';

const route = express.Router();

route.get('/', userController.getAllUsers);

export default route;