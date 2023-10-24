import express from 'express';
import { signup, login } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/', signup)

export default router