import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { giveCoins } from './wiseCoins.controller.js';

// Função para obtenção da lista de palavras que foram ou não clicadas //
export async function getTextList(req, res) {
    try {
        const userId = req.accessToken.id;

        // Acessa a lista de palavras que o usuário achou, caso tenha.
        const list = await prisma.CoinText.findMany({
            where: { userId },
            select: {
                id: true,
                found: true
            }
        });

        if (list.length > 0) {
            return res.status(200).json({
                success: true,
                message: "Lista encontrada!",
                list
            });
 
        } else {
            return res.status(404).json({
                success: false,
                message: "Não há registros",
            });
        }

    } catch (err) {
        console.error("Erro ao recuperar dados da lista de coinTexts: " + err);

        res.status(500).json({
            success: false,
            message: "Erro de servidor interno"
        })
    }
}

// As palávras chave encontrada são marcadas com um { found: true }
// e inseridas no banco, para que sejam rastreadas, e não possam ser clicadas novamente. 
// E o usuário ganha wisecoins no processo.
export async function coinAdd(req, res) {
    try {
        const userId = req.accessToken.id;
        const { textId } = req.body;
        console.log("TextId: ", textId);

        // Insere um novo registro com a palavra encontrada
        const newText = await prisma.CoinText.create({
            data: {
                id: textId,
                userId,
                found: true
            }
        });
        console.log("newText: ", newText);
        if (!newText) throw `newText teve um retorno inesperado: ${newText}`

        // Pega a carteira do usuário.
        const user = await prisma.User.findFirstOrThrow({
            where: { id: userId },
            select: {
                wiseCoins: true
            }
        });
        console.log("user: ", user);
        if (!user) throw `user retornou inesperadamente: ${user}`

        // Chama a função para depositar as novas moedas para o usuário.
        const newBalance = await giveCoins(userId, user.wiseCoins, 50);
         console.log("newBalance: ", newBalance);
        // Marca no banco, que o usuário já achou essa palavra para que então, ele não possa
        // clicar nela de novo e ganhar wisecoins.

        return res.status(200).json({
            success: true,
            message: "wiseCoins adicionadas com successo",
            newBalance
        });
        

    } catch (err) {
        console.error("Erro ao adicionar Wisecoins no coinText: " + err);

        res.status(500).json({
            success: false,
            message: "Erro de servidor interno"
        })
    }
}