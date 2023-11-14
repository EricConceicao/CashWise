import express from 'express';
import { purchaseIcon, getItemList } from '../controllers/shop.controller.js';
import { authenticate } from '../middlewares/jsonwebtoken.js';

const router = express.Router();

router.get('/getIcons', authenticate, getItemList);
router.post('/', authenticate, purchaseIcon);

export default router