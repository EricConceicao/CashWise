import express from 'express';
import { signup, login, logout } from '../controllers/auth.controller.js';
import { checkSession } from '../controllers/session.controller.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.delete('/logout', logout);
router.get('/refresh', checkSession);

export default router