// Configuração do roteador Express
import express from 'express';
import calcSimulacao from '../controllers/simulacao.controller.js';

const router = express.Router();


// Função de middleware para tratamento de erros
function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500).json({ success: false, message: 'Ocorreu um erro', error: err.message });
}

// Adicionar ao final das minhas rotas
router.use(errorHandler);

router.post('/', calcSimulacao);


export default router