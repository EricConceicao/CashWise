// Importações de bibliotecas e pacotes
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

// Importando as variáveis de ambiente do .env
import { config } from 'dotenv';
config();

const api = express();

// Definindo middlewares
api.use(
  cors({
    origin: [process.env.ORIGIN, 'http://localhost:5173', 'http://127.0.0.1:5173'], 
    credentials: true,
  })
);
api.use(express.json());
api.use(cookieParser());

// Rotas //

// Importações
import authRouter from './routes/auth.routes.js';
import contactRouter from './routes/contact.routes.js';
import shopRouter from './routes/shop.routes.js';

import simulacaoRegras from './controllers/simule/simulacaoRegras.js';
import coinsRouter from './routes/coins.routes.js';
import gastosRouter from './routes/gastos.routes.js'
import ganhosRouter from './routes/ganhos.routes.js'
import contasRouter from './routes/contas.routes.js'

// Atribuições
api.use('/auth', authRouter);
api.use('/contact', contactRouter);
api.use('/shop', shopRouter);
api.use('/coins', coinsRouter);
api.use('/gastos', gastosRouter);
api.use('/ganhos', ganhosRouter);
api.use('/simule', simulacaoRegras);

api.use('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Bem vindo ao lugar nenhum da nossa API :3' });
});

// Configurações da api
const port = process.env.PORT || 3000;
api.listen(port, (req, res) => {
  console.log(`Api online na porta ${port}`);
});
