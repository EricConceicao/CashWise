import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function adicionargasto (req, res) {
    try {
      const novaDespesa = req.body; // Supondo que os dados são enviados no corpo da requisição
      const despesaCriada = await prisma.Gasto.create({
        data: novaDespesa,
      });
      res.json(despesaCriada);
    } catch (error) {
      console.error('Erro ao adicionar nova despesa:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  };

  