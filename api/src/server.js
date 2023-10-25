// Importações de bibliotecas e pacotes
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const api = express();

// Definindo middlewares
api.use(cors());
api.use(bodyParser.json());

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
const PORT = 3000;
api.listen(PORT, (req, res) => {
	console.log(`Api online na porta ${PORT}`);
});