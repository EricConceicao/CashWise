import bcrypt from 'bcrypt';
import { createToken } from '../middlewares/jsonwebtoken.js';
import { createSession, endSession } from '../controllers/session.controller.js'
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

        const checkEmail = await prisma.User.findFirst({
			where: {email: userData.email},
			select: {email: true},
		});

        // Checa no banco para ver se o E-mail já está cadastrado
		if (checkEmail) {
			return res.status(400).json({
				success: false,
				message: "E-mail já cadastrado",
			})
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
		return res.status(500).json({
			success: false,
			message: 'Erro de servidor interno!'
		})
	}
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

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
			where: {email: userInput.email}
		});

		// Condição para saber se o usuário foi o não encontrado
		if (user) {
			// Comparação da senha inserida com a senha no banco
			const auth = await bcrypt.compare(userInput.password, user.password);

			// Condicional com um true ou false caso a senha tenha batido ou não
			if (auth) {
				// Formatando o que será enviado para o front
				const userData = {
					name: user.name,
					sname: user.sname,
					photo: user.photo,
					wiseCoins: user.wiseCoins,
					level: user.level,
					exp: user.exp,
				}

				// Inicia uma sessão para este usuário, e gera um token de sessão.
				const sessionToken = await createSession(user.id, req, res);

				if (sessionToken) {
					// Cria um token passando os dados como argumento
					const userToken = await createToken(user.id);
					return res.status(200).json({
						success: true,
						message: 'Usuário autenticado com sucesso.',
						userData,
						userToken,
					});
				}

			} else {
				return res.status(400).json({
					success: false,
					message: 'Senha incorreta!',
				});
			}
		} else {
			return res.status(404).json({
				success: false,
				message: 'Email não encontrado!',
			});
		}
		
	} catch (e) {
		console.error('Erro no controlador de login: ' + e);
		return res.status(500).json({
				success: false,
				message: 'Erro no servidor. Tente mais tarde!',
			});
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export async function logout(req, res) {
	try {
		const sessionToken = req.cookies.session;
		if (!sessionToken) {
			return res.status(404).json({
				success: false,
				message: "Sessão não encontrada. Faça login novamente"
			})
		}

		const result = await endSession(sessionToken, req, res);

		if (result) {
			return res.status(200).json({
				success: true,
				message: "Sessão finalizada com sucesso"
			})
		} else {
			return res.status(500).json({
				success: false,
				message: "Erro ao finalizar sessão"
			})
		}

	} catch (err) {
		console.error("Erro ao fazer logout: " + err)
	}
}