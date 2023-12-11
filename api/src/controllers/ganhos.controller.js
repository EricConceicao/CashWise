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
          id: true,
          fonte: true,
          descricao: true,
          data: true,
          valor: true,
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
      const userId = req.accessToken.id;
      const ganhoId = parseInt(req.params.id);
      await prisma.ganho.delete({
        where: {
          id: ganhoId,
          userId: userId,
        },
      });
      res.status(200).json({
        success: true,
        message: "Ganho deletado com sucesso!",
      });
    } catch (error) {
      console.error('Erro ao deletar ganho:', error);
      res.status(500).json({ error: 'Erro interno do servidor ao deletar ganho' });
    }
  }


  export async function editarGanho(req, res) {
    try {
      const userId = req.accessToken.id;
      const ganhoId = parseInt(req.params.id);
      const novoDadosGanho = req.body;
      const ganhoAtualizado = await prisma.ganho.update({
        where: {
          id: ganhoId,
          userId: userId,
        },
        data: novoDadosGanho,
      });
      res.status(200).json({
        ganho: ganhoAtualizado,
        success: true,
        message: "Ganho atualizado com sucesso!",
      });
    } catch (error) {
      console.error('Erro ao editar ganho:', error);
      res.status(500).json({ error: 'Erro interno do servidor ao editar ganho' });
    }
  }

  