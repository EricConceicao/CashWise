import express from 'express';
import { vergastos } from '../controllers/gastos.controller.js';
import { adicionargasto } from '../controllers/gastos.controller.js'


const router = express.Router();

router.get('/listar', vergastos)
router.post('/', adicionargasto)

export default router