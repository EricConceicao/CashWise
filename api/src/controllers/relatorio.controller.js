import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function exibirRelatorio (req, res) {
    try {
        const { data } = req.query;
    
        // Consulta de gastos no mês e ano fornecidos
        const gastos = await prisma.gasto.findMany({
            where: {
              AND: [
                { 
                  data: { 
                    startsWith: `${data}` // Agora `data` contém algo como "MM/YYYY"
                  } 
                },
              ],
            },
          });
          
          // Consulta de ganhos no mês e ano fornecidos
          const ganhos = await prisma.ganho.findMany({
            where: {
              AND: [
                { 
                  data: { 
                    startsWith: `${data}` // Também aqui, `data` contém algo como "MM/YYYY"
                  } 
                },
              ],
            },
          });
    
        // Somatório de gastos no mês e ano fornecidos
        const somatorioGastos = gastos.reduce((acc, gasto) => acc + parseFloat(gasto.valor), 0);
    
        // Somatório de ganhos no mês e ano fornecidos
        const somatorioGanhos = ganhos.reduce((acc, ganho) => acc + parseFloat(ganho.valor), 0);
    
        // Retornar os resultados
        res.json({
          gastos,
          ganhos,
          somatorioGastos,
          somatorioGanhos,
        });
    } catch (error) {
        console.error('Erro ao processar o relatório:', error);
        res.status(500).json({ error: 'Erro interno ao processar o relatório' });
      }
}

export async function exibirControleMensal (req, res) {
  try {

  }
  catch {
    
  }
}