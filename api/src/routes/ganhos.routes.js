import express from 'express';
import { verGanhos } from '../controllers/ganhos.controller.js';
import { adicionarGanho } from '../controllers/ganhos.controller.js'
import { ganhosPorFonte } from '../controllers/ganhos.controller.js';
import { deletarGanho } from '../controllers/ganhos.controller.js';
import { editarGanho } from '../controllers/ganhos.controller.js';
import { authenticate } from '../middlewares/jsonwebtoken.js';


const router = express.Router();

router.get('/listar', authenticate, verGanhos)
router.post('/', authenticate, adicionarGanho)
router.get('/fontes', authenticate, ganhosPorFonte)
router.delete('/deletar/:id', authenticate, deletarGanho)
router.patch('/editar/:id', authenticate, editarGanho)

export default router