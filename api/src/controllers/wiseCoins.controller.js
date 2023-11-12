import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function useCoins(userId, userCoin, price) {
	try {
		const newBalance = userCoin - price;
		console.log("Dinheiro do User: " + userCoin, "Preço: " + price, "Balanço: ", newBalance);

		const updateWallet = await prisma.User.update({
			where: { id: userId },
			data: { wiseCoins: newBalance }
		});
		
		return

	} catch (err) {
		console.error("Erro no contralador se uso de wiseCoins: " + err);
		return false
	}
}