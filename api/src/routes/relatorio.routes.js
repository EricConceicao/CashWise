import express from "express";
import { exibirRelatorio } from "../controllers/relatorio.controller.js";
import { authenticate } from '../middlewares/jsonwebtoken.js';


const router = express.Router();

router.get('/', authenticate, exibirRelatorio)

export default router