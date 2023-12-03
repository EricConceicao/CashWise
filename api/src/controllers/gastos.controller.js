import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import moment from 'moment';


export async function vergastos(req, res) {
  try {
    const gastos = await prisma.gasto.findMany();
    res.json(gastos);
  } catch (error) {
    console.error('Erro ao adicionar nova despesa:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};


export async function adicionargasto(req, res) {
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


export async function gastosPorCategoria(req, res) {
  try {
    const dataAtual = moment().format('YYYY-MM');

    // Consulta as categorias distintas presentes na coluna 'categoria'
    const categorias = await prisma.gasto.findMany({
      where: {
        data: {
          startsWith: dataAtual,
        }
      },
      distinct: ['categoria'],
      select: {
        categoria: true,
      },
    });

    // Calcula o somatório dos gastos por categoria
    const somatorioPorCategoria = await prisma.gasto.groupBy({
      by: ['categoria'],
      where: {
        data: {
          startsWith: dataAtual,
        }
      },  
      _sum: {
        valor: true,
      },
    });

    const resultado = categorias.map((categoria) => {
      const categoriaAtual = categoria.categoria;
      const somatorio = somatorioPorCategoria.find((item) => item.categoria === categoriaAtual);

      return {
        categoria: categoriaAtual,
        totalGasto: somatorio ? somatorio._sum.valor : 0,
      };
    });

    res.status(200).json(resultado);
  } catch (error) {
    console.error('Erro ao obter categorias e somatório de gastos:', error);
    res.status(500).json({ error: 'Erro interno do servidor ao obter categorias e somatório de gastos' });
  }
}