import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function criarconta(req, res) {
    try {
      const { descricao, valor, diaVencimento, recorrencia, periodo } = req.body;
  console.log({descricao, valor, diaVencimento, recorrencia, periodo})
      // Cria a conta
      const contaCriada = await prisma.conta.create({
        data: {
          descricao,
          valor,
          diaVencimento,
          recorrencia,
          // Aqui você inclui o relacionamento com o período
          periodo: {
            create: {
              inicio: periodo.inicio,
              fim: periodo.fim,
            },
          },
        },
        include: {
          // Aqui você inclui o relacionamento com o período na resposta
          periodo: true,
        },
      });
  
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
  