import { v4 as uuidv4 } from 'uuid';
import { createToken } from '../middlewares/jsonwebtoken.js';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createSession(userId, req, res) {
	try {
		const time = 3 * 60 * 60 * 1000;

		// Vendo se não há uma sessão antiga, e então recriando um cookie para ela
		const oldSession = await prisma.Session.findFirst({
			where: { userId: userId }
		});

		// Verificando se deu certo para então escrever um cookie
		if (oldSession) {
			res.cookie('session', oldSession.token, { secure: true, httpOnly: true, sameSite: 'None', expire: time });
			return true
		}

		if (oldSession === null) {
			// Gerando um token único
			const newToken = uuidv4();
			// Registrando a nova sessão no banco caso não exista
			const userSession = await prisma.Session.create({
				data: {
					userId: userId,
					token: newToken
				}
			});

			// Verificando se deu certo para então escrever um cookie
			if (userSession) {
				res.cookie('session', newToken, { secure: true, httpOnly: true, sameSite: 'None', expire: time });
				return true

			} else {
				throw "Sessão retornou com nulo"
			}
		}

	} catch (err) {
		console.error('Erro ao criar sessão: ' + err);
		return res.status(500).json({
			success: false,
			message: 'Erro de servidor interno. Tente mais tarde'
		});
	}
}

///////////////////////////////////////////////////////////////////////////////////

export async function checkSession(req, res) {
	try {
		const sessionToken = req.cookies.session;

		// Vendo se o cookie de sessão existe
		if (sessionToken) {
			const result = await prisma.Session.findFirst({
				where: {token: sessionToken}
			});

			// Vendo se houve resultado
			if (result) {
				const user = await prisma.User.findFirst({
					where: {id: result.userId}
				});

				if (user) {	
					const userData = {
						name: user.name,
						sname: user.sname,
						photo: user.photo,
						wiseCoins: user.wiseCoins,
						level: user.level,
						exp: user.exp,
					}
					// Cria um token passando os dados como argumento
					const userToken = await createToken(user.id);
					return res.status(200).json({
						success: true,
						message: 'Sessão válidada com sucesso.',
						userData,
						userToken,
					});
				} else {
					// Usuário não encontrado no banco com a id do cookie
					return res.status(401).json({
						success: false,
						message: 'Usuário não encontrado com a crendencial de sessão',
					});
				}
			} else {
				// Sessão não encontrada no banco
				res.clearCookie('session');
				return res.status(404).json({
					success: false,
					message: 'Sessão inexistente',
				});
			}
		} else {
			// Sem cookie 401 Não autorizado.
			return res.status(401).json({
				success: false,
				message: 'Cookie de sessão inexistente',
			});
		}	

	} catch (err) {
		console.error('Erro ao checar sessão: ' + err);
		return res.status(500).json({
			success: false,
			message: 'Erro de servidor interno. Tente mais tarde'
		});
	}
}

///////////////////////////////////////////////////////////////////////////

export async function endSession(sessionToken, req, res) {
	try {
		// Deletando a sessão após um logout
		const result = await prisma.Session.delete({
			where: {token: sessionToken}
		});

		// Verificando se deu certo ou não 
		if (result) {
			res.clearCookie('session');
			return true

		} else {
			res.clearCookie('session');
			return false
		}

	} catch (err) {
		console.error('Erro ao finalizar sessão: ' + err);
		return res.status(500).json({
			success: false,
			message: 'Erro de servidor interno. Tente mais tarde'
		});
	}
}