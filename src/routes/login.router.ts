import express from 'express';
import userController from '../controller/userController';
import validateLogin from '../middleware/validateLogin';

const router = express.Router();

router.post(
  '/',
  validateLogin.validateInputLogin,
  validateLogin.validateCredentials,
  userController.login,
);

export default router;