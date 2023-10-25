import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


async function feedback(req, res) {
	try {
		const userData = req.body;
		
		const newFeedback = await prisma.Contact.create({
			data: {
				name: userData.name,
				subject: userData.subject,
				email: userData.email,
				message: userData.message,
			}
		})

		if (newFeedback) {
			return res.status(201).json({
				success: true,
				message: 'Mensagem enviada com successo!'
			})
		} else {
			return res.status(500).json({
				success: false,
				message: 'Erro de envio da mensagem!'
			})
		}

		
	} catch (err) {
		console.error('erro no controle de feedback: ' + err);
	}
}

export default feedback;