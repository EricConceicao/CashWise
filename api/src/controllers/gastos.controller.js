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
        gasto: despesaCriada,
        success: true, 
        message: "Criado com sucesso!"
      })
    } catch (error) {
      console.error('Erro ao adicionar nova despesa:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  };

  /*
  export async function somargastosmensais (req, res) {
    try {
      const hoje = new Date();
      const mesAtual = hoje.getMonth() + 1; // Lembre-se de que os meses em JavaScript são baseados em zero
  
      const somaGastosMensais = await prisma.gasto.aggregate({
        sum: {
          valor: true,
        },
        where: {
          // Filtra os gastos do mês corrente
          data: {
            gte: new Date(`${hoje.getFullYear()}-${mesAtual}-01T00:00:00.000Z`), // Primeiro dia do mês
            lt: new Date(`${hoje.getFullYear()}-${mesAtual + 1}-01T00:00:00.000Z`), // Primeiro dia do próximo mês
          },
        },
      });
  
      res.json({ somaGastosMensais: somaGastosMensais.sum.valor });
    } catch (error) {
      console.error('Erro ao calcular a soma dos gastos mensais:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  */

/*
export async function somargastosmensais(req, res) {
  try {
    const hoje = new Date();
    const mesAtual = hoje.getMonth() + 1; // Lembre-se de que os meses em JavaScript são baseados em zero

    const gastosMensais = await prisma.gasto.findMany({
      where: {
        data: {
          gte: new Date(hoje.getFullYear(), mesAtual - 1, 1), // Primeiro dia do mês
          lt: new Date(hoje.getFullYear(), mesAtual, 1), // Primeiro dia do próximo mês
        },
      },
    });

    const somaGastosMensais = gastosMensais.reduce(
      (total, gasto) => total + gasto.valor,
      0
    );

    res.json({ somaGastosMensais });
  } catch (error) {
    console.error('Erro ao calcular a soma dos gastos mensais:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}
*/