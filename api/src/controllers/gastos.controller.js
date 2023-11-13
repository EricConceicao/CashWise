import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function vergastos (req, res) {
  try {
    const gastos = await prisma.gasto.findMany();
    res.json(gastos);
  } catch (error) {
    console.error('Erro ao adicionar nova despesa:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};


export async function adicionargasto (req, res) {
    try {
      const novoGasto = req.body;
      console.log(novoGasto) 
      const despesaCriada = await prisma.gasto.create({
        data: novoGasto,
      });
      
      res.status(200).json({
        success: true, 
        message: "Criado com sucesso!"
      })
    } catch (error) {
      console.error('Erro ao adicionar nova despesa:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  };

  