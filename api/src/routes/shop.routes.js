import express from 'express';
import { purchaseIcon } from '../controllers/shop.controller.js';
import { authenticate } from '../middlewares/jsonwebtoken.js';

const router = express.Router();

router.post('/', authenticate, purchaseIcon);

export default router