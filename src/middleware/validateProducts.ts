import { RequestHandler } from 'express';
import Product from '../database/models/product.model';

const validateInputName: RequestHandler = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (typeof name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }
  if (name.length < 3) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }
  next();
};

const validateInputPrice: RequestHandler = (req, res, next) => {
  const { price } = req.body;
  if (!price) {
    return res.status(400).json({ message: '"price" is required' });
  }
  if (typeof price !== 'string') {
    return res.status(422).json({ message: '"price" must be a string' });
  }
  if (price.length < 3) {
    return res.status(422).json({ message: '"price" length must be at least 3 characters long' });
  }
  next();
};

const validateInputUserId: RequestHandler = async (req, res, next) => {
  const { userId } = req.body;
  if (!userId) {
    return res.status(400).json({ message: '"userId" is required' });
  }
  if (typeof userId !== 'number') {
    return res.status(422).json({ message: '"userId" must be a number' });
  }
  const response = await Product.findOne({ where: { userId } });

  if (!response) {
    return res.status(422).json({ message: '"userId" not found' });
  }
  next();
};

export default {
  validateInputName,
  validateInputPrice,
  validateInputUserId,
};