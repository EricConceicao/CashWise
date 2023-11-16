import express from 'express';
import { verganhos } from '../controllers/ganhos.controller.js';
import { adicionarganho } from '../controllers/ganhos.controller.js'


const router = express.Router();

router.get('/listar', verganhos)
router.post('/', adicionarganho)

export default router