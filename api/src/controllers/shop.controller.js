import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Sistema para fazer a movimentação de wisecoins do usuário
import { useCoins } from './wiseCoins.controller.js';

// Função para aquisição dos ícones da loja // 
export async function getItemList(req, res) {
    try {
        const userId = req.accessToken.id;

        const userIcons = await prisma.UserIcons.findMany({
            where: { userId: userId },
            select: { 
                iconId: true, 
                obtained: true, 
            }
        });
        const icons = await prisma.Icon.findMany();
        // Formatando o objeto para envio
        const iconsData = {
            userIcons,
            icons
        }

        return res.status(200).json({
            success: true,
            iconsData
        });

    } catch (err) {
        console.error("Erro no controlador de listagem de ícones " + err);
        res.status(500);
    }
}

// Função para compra e troca de ícones :3 //
export async function purchaseIcon(req, res) {
    try {
        const userId = req.accessToken.id;
        const src = req.body.photo;

        // Procura o icone no banco pelo 'source'
        const icon = await prisma.Icon.findFirstOrThrow({
            where: { src: src },
            select: {
                id: true,
                price: true,
            }
        });

        // Busca o icone na tabela de icones do usuário (ícones que ele tem)
        const haveIcon = await prisma.UserIcons.findFirst({
            where: { userId: userId, iconId: icon.id },
            select: { obtained: true }
        });
        
        // Se for nulo, ele tenta comprar
        if (haveIcon === null){
            const user = await prisma.User.findFirstOrThrow({
                where: { id: userId },
                select: {
                    wiseCoins: true
                }
            });


            if (user.wiseCoins >= icon.price) {
                const result = await useCoins(userId, user.wiseCoins, icon.price);
                if (result === false) { throw "Erro na hora de pagar as contas" }

                // Registra o novo ícone do usuário em sua tabela de ícones
                const insertIcon = await prisma.UserIcons.create({
                    data: {
                        userId: userId,
                        iconId: icon.id,
                        obtained: true
                    }
                });

                await changeIcon(userId, src);
                return res.status(200).json({
                    success: true,
                    message: 'Ícone comprado com sucesso',
                    newIcon: src
                });

            } else {
                return res.status(401).json({
                    success: false,
                    message: 'Wisecoins insuficientes'
                });
            }
        }

        // Se o ícone já tiver sido obtido, ele apenas atualiza/muda
        if (haveIcon.obtained) {
            await changeIcon(userId, src);

            return res.status(200).json({
                success: true,
                message: 'Ícone alterado com sucesso',
                newIcon: src
            });
        } 
        
    } catch (err) {
        console.error('Erro no controlador de compra de ícones: ' + err);
        return res.status(500);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Sisteminha para mudar o ícone do usuário no banco de dados //
export async function changeIcon(userId, src) {
    try {
        const newIcon = await prisma.User.update({
            where: { id: userId },
            data: { photo: src }
        });

        return
        
    } catch (err) {
        console.error("Erro no controlador de mudança de ícones: " + err);
    }
}