import express from 'express';
import { criarConta, deletarConta, editarConta } from '../controllers/contas.controller.js';
import { verContas } from  '../controllers/contas.controller.js';
import { contasProgramadas } from '../controllers/contas.controller.js';
import { authenticate } from '../middlewares/jsonwebtoken.js';

const router = express.Router();

router.get('/listar', authenticate, verContas)
router.post('/', authenticate, criarConta)
router.get('/agenda', authenticate, contasProgramadas)
router.delete('/deletar/:id', authenticate, deletarConta)
router.patch('/editar/:id', authenticate, editarConta)

export default router