import express from 'express';
import shop from '../controllers/shop.controller.js';
import { authenticate } from '../middlewares/jsonwebtoken.js';

const router = express.Router();

router.post('/', shop);

export default router