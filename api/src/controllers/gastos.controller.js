import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import moment from 'moment';


export async function verGastos(req, res) {
  try {
    const userId = req.accessToken.id;
    const gastos = await prisma.gasto.findMany({
      where: {
        userId
      }
    });
    res.json(gastos);
  } catch (error) {
    console.error('Erro ao adicionar nova despesa:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};


export async function adicionarGasto(req, res) {
  try {
    const userId = req.accessToken.id;
    const novoGasto = req.body;

    const despesaCriada = await prisma.gasto.create({
      data: {
        ...novoGasto, 
        userId,
      } ,
    });
    console.log(despesaCriada)

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
    const userId = req.accessToken.id;
    const dataAtual = moment().format('YYYY-MM');

    // Consulta as categorias distintas presentes na coluna 'categoria'
    const categorias = await prisma.gasto.findMany({
      where: {
        userId: userId,
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
        userId: userId,
        data: {
          startsWith: dataAtual,
        }
      },  
      _sum: {
        valor: true,
      },
    });

    const todosGastosPorCategoria = await prisma.gasto.findMany({
      where: {
        userId: userId,
        data: {
          startsWith: dataAtual,
        }
      },
      select: {
        id: true,
        categoria: true,
        descricao: true,
        data: true,
        valor: true,
        // Adicione outros campos do gasto que você deseja retornar
      },
    });

    const resultado = categorias.map((categoria) => {
      const categoriaAtual = categoria.categoria;
      const somatorio = somatorioPorCategoria.find((item) => item.categoria === categoriaAtual);
      const gastosCategoria = todosGastosPorCategoria.filter((gasto) => gasto.categoria === categoriaAtual);

      return {
        categoria: categoriaAtual,
        totalGasto: somatorio ? somatorio._sum.valor : 0,
        gastos: gastosCategoria,
      };
    });

    res.status(200).json(resultado);
  } catch (error) {
    console.error('Erro ao obter categorias e somatório de gastos:', error);
    res.status(500).json({ error: 'Erro interno do servidor ao obter categorias e somatório de gastos' });
  }
}

export async function deletarGasto(req, res) {
  try {
    const userId = req.accessToken.id;
    const gastoId = parseInt(req.params.id); // Assumindo que o ID do gasto está nos parâmetros da URL
    await prisma.gasto.delete({
      where: {
        id: gastoId,
        userId: userId,
      },
    });
    res.status(200).json({
      success: true,
      message: "Gasto deletado com sucesso!",
    });
  } catch (error) {
    console.error('Erro ao deletar gasto:', error);
    res.status(500).json({ error: 'Erro interno do servidor ao deletar gasto' });
  }
}

export async function editarGasto(req, res) {
  try {
    const userId = req.accessToken.id;
    const gastoId = parseInt(req.params.id); // Assumindo que o ID do gasto está nos parâmetros da URL
    const novoDadosGasto = req.body;
    const gastoAtualizado = await prisma.gasto.update({
      where: {
        id: gastoId,
        userId: userId,
      },
      data: novoDadosGasto,
    });
    res.status(200).json({
      gasto: gastoAtualizado,
      success: true,
      message: "Gasto atualizado com sucesso!",
    });
  } catch (error) {
    console.error('Erro ao editar gasto:', error);
    res.status(500).json({ error: 'Erro interno do servidor ao editar gasto' });
  }
}
