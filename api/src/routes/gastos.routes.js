import express from 'express';
import { vergastos } from '../controllers/gastos.controller.js';
import { adicionargasto } from '../controllers/gastos.controller.js';
import { gastosPorCategoria } from '../controllers/gastos.controller.js';
import { authenticate } from '../middlewares/jsonwebtoken.js';


const router = express.Router();

router.get('/listar', authenticate, vergastos)
router.post('/', authenticate, adicionargasto)
router.get('/categorias', authenticate, gastosPorCategoria)

export default router