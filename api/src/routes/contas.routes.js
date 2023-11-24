import express from 'express';
import { criarconta } from '../controllers/contas.controller.js';
import { vercontas } from  '../controllers/contas.controller.js';

const router = express.Router();

router.get('/listar', vercontas)
router.post('/', criarconta)

export default router