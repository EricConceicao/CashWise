import express from 'express';
import { authenticate } from '../middlewares/jsonwebtoken.js';
import { coinAdd } from '../controllers/coinText.controller.js';

const router = express.Router();

router.post('/add', authenticate, coinAdd);


export default router