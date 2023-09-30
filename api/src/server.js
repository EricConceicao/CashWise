// Importações de bibliotecas e pacotes
import express from 'express';
import cors from 'cors';


const api = express();

// Definindo middlewares
api.use(cors());

// Rotas
api.use('/', () => {
	res.status(200).json({ success: true, message: 'Bem vindo ao lugar nenhum da nossa API :3'});
});

// Configurações da api
api.listen(PORT, () => {
	console.log(`Api online na porta ${PORT}`);
});