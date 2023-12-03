import express from "express";
import { exibirRelatorio } from "../controllers/relatorio.controller.js";


const router = express.Router();

router.get('/',exibirRelatorio)

export default router