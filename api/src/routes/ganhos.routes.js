import express from 'express';
import { verganhos } from '../controllers/ganhos.controller.js';
import { adicionarganho } from '../controllers/ganhos.controller.js'
import { ganhosPorFonte } from '../controllers/ganhos.controller.js';
import { authenticate } from '../middlewares/jsonwebtoken.js';


const router = express.Router();

router.get('/listar', authenticate, verganhos)
router.post('/', authenticate, adicionarganho)
router.get('/fontes', authenticate, ganhosPorFonte)

export default router