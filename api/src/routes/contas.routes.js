import express from 'express';
import { criarconta } from '../controllers/contas.controller.js';

const router = express.Router();

router.post('/', criarconta)

export default router