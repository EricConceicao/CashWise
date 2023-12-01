import express from 'express';
import { vergastos } from '../controllers/gastos.controller.js';
import { vercategorias } from '../controllers/gastos.controller.js';
import { adicionargasto } from '../controllers/gastos.controller.js'


const router = express.Router();

router.get('/listar', vergastos)
router.get('/categorias', vercategorias)
router.post('/', adicionargasto)

export default router