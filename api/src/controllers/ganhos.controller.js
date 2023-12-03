import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import moment from 'moment';

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
        ganho: despesaCriada,
        success: true, 
        message: "Criado com sucesso!"
      })
    } catch (error) {
      console.error('Erro ao adicionar novo ganho:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  };


  export async function ganhosPorFonte(req, res) {
    try {
      const dataAtual = moment().format('YYYY-MM');

      // Consulta as fontes distintas presentes na coluna 'fonte'
      const fontes = await prisma.ganho.findMany({
        where: {
          data: {
            startsWith: dataAtual,
          }
        },
        distinct: ['fonte'],
        select: {
          fonte: true,
        },
      });
  
      // Calcula o somatório dos ganhos por fonte
      const somatorioPorFonte = await prisma.ganho.groupBy({
        by: ['fonte'],
        where: {
          data: {
            startsWith: dataAtual,
          }
        },
        _sum: {
          valor: true,
        },
      });
  
      const resultado = fontes.map((fonte) => {
        const fonteAtual = fonte.fonte;
        const somatorio = somatorioPorFonte.find((item) => item.fonte === fonteAtual);
  
        return {
          fonte: fonteAtual,
          totalGanho: somatorio ? somatorio._sum.valor : 0,
        };
      });
  
      res.status(200).json( resultado );
    } catch (error) {
      console.error('Erro ao obter fontes e somatório de ganhos:', error);
      res.status(500).json({ error: 'Erro interno do servidor ao obter fontes e somatório de ganhos' });
    }
  }

  