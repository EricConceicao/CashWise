import express from 'express';
import { authenticate } from '../middlewares/jsonwebtoken.js';
import { coinAdd, getTextList } from '../controllers/coinText.controller.js';

const router = express.Router();

router.get('/', authenticate, getTextList);
router.post('/add', authenticate, coinAdd);


export default router