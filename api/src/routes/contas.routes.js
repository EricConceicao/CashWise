import express from 'express';
import { criarconta, deletarconta, editarconta } from '../controllers/contas.controller.js';
import { vercontas } from  '../controllers/contas.controller.js';
import { contasValidas } from '../controllers/contas.controller.js';
import { authenticate } from '../middlewares/jsonwebtoken.js';

const router = express.Router();

router.get('/listar', authenticate, vercontas)
router.post('/', authenticate, criarconta)
router.get('/agenda', authenticate, contasValidas)
router.delete('/deletar/:id', authenticate, deletarconta)
router.patch('/editar/:id', authenticate, editarconta)

export default router