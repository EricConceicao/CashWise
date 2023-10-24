import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export async function signup(req, res) {
	try {
		const userData = req.body;
		
		const newUser = await prisma.User.create({
			data: {
				name: userData.name,
				sname: userData.sname,
				email: userData.email,
				password: userData.password,
			}
		})

		console.log(newUser);
	} catch (e) {
		console.error(e);
	}
}

export async function login(req, res) {
	return console.log('a');
}