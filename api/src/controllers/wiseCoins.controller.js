import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function useCoins(userId, userCoin, price) {
	try {
		const newBalance = userCoin - price;

		const updateWallet = await prisma.User.update({
			where: { id: userId },
			data: { wiseCoins: newBalance }
		});
		
		return newBalance

	} catch (err) {
		console.error("Erro no contralador se uso de wiseCoins: " + err);
		return false
	}
}