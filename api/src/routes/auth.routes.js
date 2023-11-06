import express from 'express';
import { signup, login, logout } from '../controllers/auth.controller.js';
import { checkSession } from '../controllers/session.controller.js';
import { authenticate } from '../middlewares/jsonwebtoken.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.post('/refresh', checkSession);

export default router