import express from 'express';
import { adicionargasto } from '../controllers/gastos.controller.js'

const router = express.Router();

router.post('/', adicionargasto)

export default router