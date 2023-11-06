// Importações de bibliotecas e pacotes
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Importando as variáveis de ambiente do .env
import { config } from 'dotenv';
config();

const api = express();

// Definindo middlewares
api.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
api.use(express.json());
api.use(cookieParser());


// Rotas //

// Importações
import authRouter from './routes/auth.routes.js';
import contactRouter from './routes/contact.routes.js';

// Atribuições
api.use('/auth', authRouter);
api.use('/contact', contactRouter);


api.use('/', (req, res) => {
	res.status(200).json({ success: true, message: 'Bem vindo ao lugar nenhum da nossa API :3'});
});


// Configurações da api
const port = process.env.PORT || 3000;
api.listen(port, (req, res) => {
	console.log(`Api online na porta ${port}`);
});