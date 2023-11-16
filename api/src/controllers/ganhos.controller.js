import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function verganhos (req, res) {
  try {
    const ganhos = await prisma.ganho.findMany();
    res.json(ganhos);
  } catch (error) {
    console.error('Erro ao adicionar novo ganho:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};


export async function adicionarganho (req, res) {
    try {
      const novoGanho = req.body;
      console.log(novoGanho) 
      const despesaCriada = await prisma.ganho.create({
        data: novoGanho,
      });
      
      res.status(200).json({
        success: true, 
        message: "Criado com sucesso!"
      })
    } catch (error) {
      console.error('Erro ao adicionar novo ganho:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  };

  