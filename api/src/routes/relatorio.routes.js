import express from "express";
import { exibirRelatorio } from "../controllers/relatorio.controller.js";
import { exibirControleMensal } from "../controllers/relatorio.controller.js";


const router = express.Router();

router.get('/',exibirRelatorio)
router.get('/controle',exibirControleMensal)

export default router