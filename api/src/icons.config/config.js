// Este é um arquivo para inserir os ícones da loja de acordo com o que for configurado aqui
// O mesmo pode ser e deve ser, executado com um script após completar a configuração inicial
// do projeto. Script: npm run insert-icons

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

console.log("Inicializando inserções de icones...");

try {
	console.log('Passando uma vassoura na tabela icons, a fim de evitar duplicas');
	const deleteResult = await prisma.Icon.deleteMany();

	console.log("Ícones deletados:", deleteResult.count);

	const success = await prisma.Icon.createMany({
		data: 
		[
			{
				src: "img/pfps/pfp-padrao.png",
				price: 0,
				name: "Porquinho esperto"
			},
			{
				src: "img/pfps/pfp-plants.jpg",
				price: 1000,
				name: "Crescimento"
			},
			{
				src: "img/pfps/pfp-caveirao.jpg",
				price: 3500,
				name: "Cabeça de Crânio"
			},
			{
				src: "img/pfps/pfp-coeio.jpg",
				price: 4000,
				name: "Coelhito"
			},
			{
				src: "img/pfps/pfp-doguinho.jpg",
				price: 4000,
				name: "Doguinho"
			},
		]
	});

	if (success) {
		console.log("Inserções realizadas: ", success.count);	
	} else {
		throw "Houve um erro ao fazer as Inserções. Retorno Nulo."
	}
	
} catch (err) {
	console.error("Problema na execução: " + err);
}