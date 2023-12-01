import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


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


// export async function vercategorias(req, res) {
//   try {
//     // Consulta as categorias distintas presentes na coluna 'categoria'
//     const categorias = await prisma.gasto.findMany({
//       distinct: ['categoria'],
//       select: {
//         categoria: true,
//       },
//     });

//     // Calcula o somatório dos gastos por categoria
//     const somatorioPorCategoria = await prisma.gasto.groupBy({
//       by: ['categoria'],
//       _sum: {
//         valor: true,
//       },
//     });

//     const resultado = categorias.map((categoria) => {
//       const categoriaAtual = categoria.categoria;
//       const somatorio = somatorioPorCategoria.find((item) => item.categoria === categoriaAtual);

//       return {
//         categoria: categoriaAtual,
//         totalGasto: somatorio ? somatorio._sum.valor : 0,
//       };
//     });

//     res.status(200).json( resultado );
//   } catch (error) {
//     console.error('Erro ao obter categorias e somatório de gastos:', error);
//     res.status(500).json({ error: 'Erro interno do servidor ao obter categorias e somatório de gastos' });
//   }
// }


export async function vercategorias(req, res) {
  try {
    // Consulta as categorias distintas presentes na coluna 'categoria'
    const categorias = await prisma.gasto.findMany({
      distinct: ['categoria'],
      select: {
        categoria: true,
      },
    });

    // Calcula o somatório dos gastos por categoria usando o método Prisma groupBy
    const totaisPorCategoria = await prisma.gasto.groupBy({
      by: ['categoria'],
      _sum: {
        valor: true,
      },
    });

    // Extrai as categorias e totais de gastos separadamente
    const categoriasSeparadas = categorias.map(({ categoria }) => categoria);
    const totaisDeGastosSeparados = totaisPorCategoria.map((resultado) => resultado._sum.valor || 0);

      // Envia a resposta JSON com as categorias e totais de gastos separados
    res.status(200).json({ categorias: categoriasSeparadas, totaisDeGastos: totaisDeGastosSeparados });
  } catch (error) {
    console.error('Erro ao obter categorias e somatório de gastos:', error);
    res.status(500).json({ error: 'Erro interno do servidor ao obter categorias e somatório de gastos' });
  }
}