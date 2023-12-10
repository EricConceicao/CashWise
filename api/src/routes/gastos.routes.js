import express from 'express';
import { verGastos } from '../controllers/gastos.controller.js';
import { adicionarGasto } from '../controllers/gastos.controller.js';
import { gastosPorCategoria } from '../controllers/gastos.controller.js';
import { deletarGasto } from '../controllers/gastos.controller.js';
import { editarGasto } from '../controllers/gastos.controller.js';
import { authenticate } from '../middlewares/jsonwebtoken.js';


const router = express.Router();

router.get('/listar', authenticate, verGastos)
router.post('/', authenticate, adicionarGasto)
router.get('/categorias', authenticate, gastosPorCategoria)
router.delete('/deletar/:id', authenticate, deletarGasto)
router.patch('/editar/:id', authenticate, editarGasto)

export default router