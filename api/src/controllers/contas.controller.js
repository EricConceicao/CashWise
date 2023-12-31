import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export async function verContas(req, res) {
  try {
    const userId = req.accessToken.id;
    const contas = await prisma.conta.findMany({
      where: {
        userId
      }
    });
    res.json(contas);
  } catch (error) {
    console.error('Erro ao adicionar nova despesa:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};


export async function criarConta(req, res) {
  try {
    const userId = req.accessToken.id;
    const { descricao, valor, diaVencimento, recorrencia, periodo } = req.body;
    // Cria a conta

    const objDados = {
      data: {
        descricao,
        valor,
        diaVencimento,
        recorrencia,
        userId,
        // Aqui você inclui o relacionamento com o período
        periodo: {
          create: {
            inicio: periodo?.inicio,
            fim: periodo?.fim,
          },
        },
      },
      include: {
        // Aqui você inclui o relacionamento com o período na resposta
        periodo: true,
      },
    }
    if (recorrencia === 'MENSAL') {
      delete objDados.data.periodo
    }
    const contaCriada = await prisma.conta.create(objDados);

    res.status(200).json({
      conta: contaCriada,
      success: true,
      message: "Criado com sucesso!",
    });
  } catch (error) {
    console.error('Erro ao criar nova conta:', error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
}


export async function contasProgramadas(req, res) {
  try {
    const userId = req.accessToken.id;
    const contas = await prisma.conta.findMany({
      where: {
        userId: userId,
      },
      include: {
        periodo: true,
      },
    });

    const contasFiltradas = contas.filter((conta) => {
      if (conta.recorrencia === 'MENSAL') {
        return true;
      } else if (conta.recorrencia === 'POR_PERIODO' && conta.periodo) {
        // Se a recorrência for "POR_PERIODO" e houver um período associado
        // Faça a junção dos dados da conta e do período

        return true;
      }
      return false;
    });

    res.json(contasFiltradas);
  } catch (error) {
    console.error('Erro ao obter contas válidas:', error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
}


export async function deletarConta(req, res) {
  const userId = req.accessToken.id;
  const contaId = parseInt(req.params.id);

  try {
    const conta = await prisma.conta.findUnique({
      where: { id: contaId },
      include: {
        // Inclua o relacionamento com o usuário para verificar se a conta pertence ao usuário autenticado
        User: true,
      },
    });

    if (!conta) {
      return res.status(404).json({ error: 'Conta não encontrada' });
    }

    // Verifique se a conta pertence ao usuário autenticado
    if (conta.User.id !== userId) {
      return res.status(403).json({ error: 'Não autorizado a excluir esta conta' });
    }

    if (conta.recorrencia === 'MENSAL') {
      // Exclua diretamente a conta, pois não há período associado
      await prisma.conta.delete({
        where: { id: contaId },
      });
    } else {
      // Se a conta tem outro tipo de recorrência, exclua o período associado primeiro
      await prisma.periodo.delete({
        where: { contaId: contaId },
      });

      // Em seguida, exclua a conta
      await prisma.conta.delete({
        where: { id: contaId },
      });
    }

    return res.status(204).end();
  } catch (error) {
    console.error('Erro ao excluir conta:', error);
    return res.status(500).json({ error: 'Erro interno no servidor' });
  }
};


export async function editarConta(req, res) {

  const userId = req.accessToken.id;
  const contaId = parseInt(req.params.id);

  try {

    const conta = await prisma.conta.findUnique({
      where: { id: contaId },
      include: {
        User: true,
      },
    });

    if (!conta) {
      return res.status(404).json({ error: 'Conta não encontrada' });
    }

    // Verifique se a conta pertence ao usuário autenticado
    if (conta.User.id !== userId) {
      return res.status(403).json({ error: 'Não autorizado a editar esta conta' });
    }

    const { descricao, valor, diaVencimento, recorrencia, periodo } = req.body;

    const objDados = {
      where: { id: contaId },
      data: {
        descricao,
        valor,
        diaVencimento,
        recorrencia,
        // Aqui você inclui o relacionamento com o período
        periodo: {
          create: {
            inicio: periodo?.inicio,
            fim: periodo?.fim,
          },
        },
      },
      include: {
        // Aqui você inclui o relacionamento com o período na resposta
        periodo: true,
      },
    }
    if (recorrencia === 'MENSAL') {
      delete objDados.data.periodo
    }
    const contaEditada = await prisma.conta.update(objDados);

    res.status(200).json({
      conta: contaEditada,
      success: true,
      message: "Editada com sucesso!",
    });



  } catch (error) {
    console.error('Erro ao criar nova conta:', error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
};


