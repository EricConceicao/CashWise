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

		console.log(newFeedback);
	} catch (err) {
		console.error('erro no controle de feedback: ' + err);
	}
}

export default feedback;