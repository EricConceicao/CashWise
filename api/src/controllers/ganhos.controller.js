import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import moment from 'moment';

export async function verGanhos (req, res) {
  try {
    const userId = req.accessToken.id;
    const ganhos = await prisma.ganho.findMany({
      where: {
        userId
      }
    });
    res.json(ganhos);
  } catch (error) {
    console.error('Erro ao adicionar novo ganho:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};


export async function adicionarGanho (req, res) {
    try {
      const userId = req.accessToken.id;
      const novoGanho = req.body; 
      const despesaCriada = await prisma.ganho.create({
        data: {
          ...novoGanho, 
          userId,
        },
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
      const userId = req.accessToken.id;
      const dataAtual = moment().format('YYYY-MM');

      // Consulta as fontes distintas presentes na coluna 'fonte'
      const fontes = await prisma.ganho.findMany({
        where: {
          userId: userId,
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
          userId: userId,
          data: {
            startsWith: dataAtual,
          }
        },
        _sum: {
          valor: true,
        },
      });

      const todosGanhosPorFonte = await prisma.ganho.findMany({
        where: {
          userId: userId,
          data: {
            startsWith: dataAtual,
          }
        },
        select: {
          fonte: true,
          descricao: true,
          data: true,
          valor: true,
          // Adicione outros campos do gasto que você deseja retornar
        },
      });
  
      const resultado = fontes.map((fonte) => {
        const fonteAtual = fonte.fonte;
        const somatorio = somatorioPorFonte.find((item) => item.fonte === fonteAtual);
        const ganhosFonte = todosGanhosPorFonte.filter((ganho) => ganho.fonte === fonteAtual);
  
        return {
          fonte: fonteAtual,
          totalGanho: somatorio ? somatorio._sum.valor : 0,
          ganhos: ganhosFonte,
        };
      });
  
      res.status(200).json( resultado );
    } catch (error) {
      console.error('Erro ao obter fontes e somatório de ganhos:', error);
      res.status(500).json({ error: 'Erro interno do servidor ao obter fontes e somatório de ganhos' });
    }
  }


  export async function deletarGanho(req, res) {
    try {

    }
    catch {

    }
  }


  export async function editarGanho(req, res) {
    try {

    }
    catch {
      
    }
  }

  