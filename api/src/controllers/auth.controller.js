import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export async function signup(req, res) {
	try {
		const userData = req.body;

		// Verifica se os dados estão todos aqui
		if (!userData.name || !userData.sname || !userData.email || !userData.password) {
            return res.status(400).json({
                success: false,
                message: 'Campos necessários ausentes.',
            });
        }
		
		// Geração de um salt para potencializar a senha, e o hash do mesmo.
		const salt = await bcrypt.genSalt(10);
		const password = await bcrypt.hash(userData.password, salt);

		// Fazendo a query com o Prisma
		const newUser = await prisma.User.create({
			data: {
				name: userData.name,
				sname: userData.sname,
				email: userData.email,
				password: password,
			},
		});

		// Checando se o Prisma retornou com sucesso da query
		if (newUser) {
			return res.status(201).json({
				success: true,
				message: 'Usuário criado com successo!'
			})
		} else {
			return res.status(500).json({
				success: false,
				message: 'Erro de servidor interno!'
			})
		}

		
	} catch (err) {
		console.error('Erro no controlador do cadastro: ' + err);
	}
}

export async function login(req, res) {
	try {
		const userInput = req.body;
		
		// Checa se os dados chegaram antes de continuar
		if (!userInput.email || !userInput.password) {
			return res.status(400).json({
                success: false,
                message: 'Campos necessários ausentes.',
            });
		}

		// Query para encontrar o usuário pelo email, e retonar seus dados
		const user = await prisma.User.findFirst({
			where: {email: userInput.email},
		});

		// Condição para saber se o usuário foi o não encontrado
		if (user) {
			// Comparação da senha inserida com a senha no banco
			const auth = await bcrypt.compare(userInput.password, user.password);

			// Condicional com um true ou false caso a senha tenha batido ou não
			if (auth) {
				res.status(200).json({
					success: true,
					message: 'Logado!',
				});
			} else {
				res.status(400).json({
					success: false,
					message: 'Senha incorreta!',
				});
			}
		} else {
			res.status(404).json({
				success: false,
				message: 'Email não encontrado!',
			});
		}
		
	} catch (e) {
		console.error('Erro no controlador de login: ' + e);
	}
}