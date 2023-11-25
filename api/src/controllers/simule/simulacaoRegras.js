// Importação de módulos e configurações
import express from 'express';
import { PrismaClient } from '@prisma/client';
import Big from 'big.js';

// Inicialização do Prisma
const prisma = new PrismaClient();

// Configuração do roteador Express
const router = express.Router();

// Função de middleware para tratamento de erros
function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500).json({ success: false, message: 'Ocorreu um erro', error: err.message });
}

// Tratar erros em funções assíncronas
async function handleAsyncError(fn) {
  try {
    return await fn();
  } catch (error) {
    console.error('Erro:', error);
    throw error; // Alteração solicitada
  }
}

// Adicionar ao final das minhas rotas
router.use(errorHandler);

// Função para obter dados de atualização monetária
async function obterDadosAtualizacaoMonetaria(mesAno) {
  return await handleAsyncError(async () => {
    const parts = mesAno.split('/');
    if (parts.length === 2) {
      const newDate = parts[1] + '-' + parts[0];
      console.log("Mês ano:", mesAno);
      console.log("Nova data:", newDate);
      const indiceMonetario = await prisma.atualizacao_monetaria.findFirst({
        where: {
          mes_ano: newDate,
        },
      });

      console.log(indiceMonetario);

      if (indiceMonetario) {
        return indiceMonetario.indice;
      } else {
        throw new Error(`Índice de atualização monetária não encontrado para ${mesAno}`);
      }
    } else {
      throw new Error(`Formato de mês/ano inválido: ${mesAno}`);
    }
  });
}

async function criarSalarioAtualizadoEntries(simulacaoId, campoAnoMes, campoSalario) {
  console.log(`Criando entradas de salário atualizado para a simulação ${simulacaoId}`);
  return await handleAsyncError(async () => {
    const simulacao = await prisma.SimulacaoBeneficio.findUnique({
      where: { id: simulacaoId },
    });

    if (!simulacao) {
      throw new Error(`Simulação não encontrada para o ID: ${simulacaoId}`);
    }

    const salarioAtualizadoEntries = await Promise.all(campoAnoMes.map(async (mesAno, index) => {
      const salario = campoSalario[index];
      const indice = await obterDadosAtualizacaoMonetaria(mesAno);
      const parsedSalario = parseFloat(salario);

      if (isNaN(parsedSalario)) {
        console.log(`Salário inválido para ${mesAno}: ${salario}`);
        return null;
      }

      const salarioAtualizado = new Big(parsedSalario).times(indice).toFixed(2);
      console.log(`Salário atualizado para ${mesAno}: ${salarioAtualizado}`);

      const [month, year] = mesAno.split('/');
      const date = new Date(`${year}-${month.padStart(2, '0')}-01`);

      if (isNaN(date.getTime())) {
        console.log(`Data inválida para ${mesAno}: ${date}`);
        return null;
      }

      if (isNaN(parseFloat(salarioAtualizado))) {
        console.log(`Salário atualizado inválido para ${mesAno}: ${salarioAtualizado}`);
        return null;
      }

      return {
        mes_ano: date,
        salario_atualizado: parseFloat(salarioAtualizado),
        simulacao_beneficio_id: simulacaoId,
      };
    }));

    console.log(`Salário atualizado entradas criadas: ${salarioAtualizadoEntries}`);
    return salarioAtualizadoEntries.filter(entry => entry !== null);
  });
}

async function calcularSalarioAtualizado(simulacaoId, mesAno, arrCampoAnoMes, arrCampoSalario) {
  console.log(`Calculando salário atualizado para a simulação ${simulacaoId}`);
  return await handleAsyncError(async () => {
    const simulacao = await prisma.simulacaoBeneficio.findUnique({
      where: { id: simulacaoId },
    });

    if (!simulacao) {
      throw new Error(`Simulação não encontrada para o ID: ${simulacaoId}`);
    }

    simulacaoId = simulacao.id;

    const salarioAtualizadoEntries = await Promise.all(arrCampoAnoMes.map(async (mesAno, index) => {
      const salario = arrCampoSalario[index];
      const indice = await obterDadosAtualizacaoMonetaria(mesAno);
      const parsedSalario = parseFloat(salario);

      if (isNaN(parsedSalario)) {
        console.log(`Salário inválido para ${mesAno}: ${salario}`);
        return 0;
      }

      const salarioAtualizado = new Big(parsedSalario).times(indice).toFixed(2);
      console.log(`Salário atualizado para ${mesAno}: ${salarioAtualizado}`);

      await prisma.salario_atualizado.create({
        data: {
          mes_ano: mesAno,
          salario_atualizado: parseFloat(salarioAtualizado),
          SimulacaoBeneficio: {
            connect: { id: simulacaoId },
          },
        },
      });

      return {
        mes_ano: mesAno,
        salario_atualizado: parseFloat(salarioAtualizado),
        SimulacaoBeneficio: {
          connect: { id: simulacaoId },
        },
      };
    }));

    console.log(`Salário atualizado entradas calculadas: ${salarioAtualizadoEntries}`);
    await prisma.salario_atualizado.createMany({
      data: salarioAtualizadoEntries,
    });

    const salarioAtualizado = salarioAtualizadoEntries.map(entry => entry.salario_atualizado);

    if (salarioAtualizado.some(isNaN)) {
      const valoresInvalidos = salarioAtualizado.filter(isNaN);
      console.log(`Valores de salário atualizado inválidos: ${valoresInvalidos}`);
      throw new Error('Valores de salário atualizado inválidos');
    }

    return salarioAtualizado;
  });
}

// Função para calcular a idade
function calcularIdade(dataNascimento) {
  console.log('Calculando idade...');
  const hoje = new Date();
  const nascimento = new Date(dataNascimento);
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mesAtual = hoje.getMonth();
  const mesNascimento = nascimento.getMonth();
  if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  console.log('Idade calculada:', idade);
  return idade;
}

// Função para calcular requisitos de aposentadoria
function calcularRequisitosAposentadoria(genero) {
  console.log('Calculando requisitos de aposentadoria...');
  const MASCULINO = 'm';
  const FEMININO = 'f';

  const requisitos = {
    [MASCULINO]: { periodoContribuicaoMinimo: 240, idadeAposentadoria: 65 },
    [FEMININO]: { periodoContribuicaoMinimo: 180, idadeAposentadoria: 62 },
  };

  if (genero in requisitos) {
    console.log('Requisitos de aposentadoria calculados:', requisitos[genero]);
    return requisitos[genero];
  } else {
    console.log('Requisitos de aposentadoria não encontrados para o gênero:', genero);
    return { periodoContribuicaoMinimo: 0, idadeAposentadoria: 0 };
  }
}

// Função para calcular a aposentadoria
function calcularAposentadoria(idade, genero) {
  console.log('Calculando aposentadoria...');
  const idadeAposentadoria = genero === 'Masculino' ? 65 : 62;
  const hoje = new Date();
  const anoAtual = hoje.getFullYear();
  const mesAtual = hoje.getMonth() + 1;
  let mesAposentadoria, anoAposentadoria;

  if (mesAtual <= 6) {
    mesAposentadoria = 7;
    anoAposentadoria = anoAtual + idadeAposentadoria - idade;
  } else {
    mesAposentadoria = 7;
    anoAposentadoria = anoAtual + idadeAposentadoria - idade + 1;
  }

  console.log('Mês e ano de aposentadoria calculados:', mesAposentadoria, anoAposentadoria);
  return {
    mesAposentadoria,
    anoAposentadoria
  };
}

// Função para calcular o mês de aposentadoria
function calcularMesAposentadoria(dataNascimento, genero) {
  console.log('Calculando mês de aposentadoria...');
  const { mesAposentadoria } = calcularAposentadoria(dataNascimento, genero);
  console.log('Mês de aposentadoria calculado:', mesAposentadoria);
  return mesAposentadoria;
}

// Função para calcular o ano de aposentadoria
function calcularAnoAposentadoria(dataNascimento, genero) {
  console.log('Calculando ano de aposentadoria...');
  const { anoAposentadoria } = calcularAposentadoria(dataNascimento, genero);
  console.log('Ano de aposentadoria calculado:', anoAposentadoria);
  return anoAposentadoria;
}

// Função para calcular o tempo de contribuição
function calcularTempoContribuicao(arrCampoAnoMes, periodoContribuicaoMinimo) {
  console.log('Calculando tempo de contribuição...');
  try {
    const tempoContribuicaoMes = arrCampoAnoMes.length;
    const tempoContribuicaoPendente = periodoContribuicaoMinimo - tempoContribuicaoMes;
    console.log('TempoContribuicaoPendente', tempoContribuicaoPendente);

    return { tempoContribuicaoMes, tempoContribuicaoPendente };
  } catch (error) {
    console.error(error);
    // Retorne um objeto padrão em caso de erro
    console.log('Erro ao calcular tempo de contribuição:', error);
    return { tempoContribuicaoMes: 0, tempoContribuicaoPendente: 0 };
  }
}

// Função para calcular o valor do benefício
async function calcularValorBeneficio(simulacaoId) {
  console.log('Calculando valor do benefício...');
  console.log('Simulação ID:', simulacaoId);

  const salarioAtualizado = await prisma.SalarioAtualizado.findFirst({
    where: { simulacao_beneficio_id: simulacaoId },
    select: { salario_atualizado: true },
  });

  console.log('Resultado da consulta:', salarioAtualizado);

  if (!salarioAtualizado) {
    throw new Error('Não há valores de salário atualizado para calcular o benefício');
  }

  const valorBeneficio = new Big(salarioAtualizado.salario_atualizado).times(0.60).toFixed(2);

  console.log('Valor do benefício calculado:', valorBeneficio);
  return valorBeneficio;
};


router.post('/', async (req, res) => {
  console.log('Iniciando a rota POST...');
  try {
    // Obter dados da requisição
    const { campoAnoMes, campoSalario, dataNascimento, genero } = req.body;

    console.log(
      "Dados da requisição:",
      campoAnoMes,
      campoSalario,
      dataNascimento,
      genero
    );

    // Validar dados da requisição
    if (
      !campoAnoMes ||
      !campoSalario ||
      !Array.isArray(campoAnoMes) ||
      !Array.isArray(campoSalario) ||
      isNaN(Date.parse(dataNascimento)) || // Verificar se a data é válida
      typeof genero !== "string"
    ) {
      console.log("Dados ausentes ou inválidos:", campoAnoMes, campoSalario, dataNascimento, genero);
      return res
        .status(400)
        .json({ success: false, message: "Dados ausentes ou inválidos" });
    }

    // Calcular a data de nascimento e a idade da aposentadoria
    const idadeAtual = calcularIdade(dataNascimento);
    const { periodoContribuicaoMinimo, idadeAposentadoria } = calcularRequisitosAposentadoria(genero);

    // Calcular tempo contribuição mes e pendente
    const { tempoContribuicaoMes, tempoContribuicaoPendente } = calcularTempoContribuicao(campoAnoMes, periodoContribuicaoMinimo);

    // Calcular mes e ano de aposentadoria
    const mesAposentadoria = calcularMesAposentadoria(idadeAtual, genero);
    const anoAposentadoria = calcularAnoAposentadoria(idadeAtual, genero);

    // Criar simulação de benefício
    const simulacao = await prisma.SimulacaoBeneficio.create({
      data: {
        genero,
        data_nascimento: new Date(dataNascimento),
        idade: idadeAtual,
        tempo_contribuicao_mes: tempoContribuicaoMes,
        idade_aposentadoria: idadeAposentadoria,
        mes_aposentadoria: mesAposentadoria,
        anoAposentadoria,
        tempo_contribuicao_pendente: tempoContribuicaoPendente,
        // valor_beneficio: valorBeneficio, // Removido
      },
    });

    // Criar entradas de salário atualizado
    const salarioAtualizadoEntries = await criarSalarioAtualizadoEntries(simulacao.id, campoAnoMes, campoSalario);

    // Inserir entradas de salário atualizado no banco de dados
    await prisma.SalarioAtualizado.createMany({
      data: salarioAtualizadoEntries,
    });

    // Calcular valor do benefício
    const valorBeneficio = await calcularValorBeneficio(simulacao.id); // Alterado para usar o ID da simulação criada

    // Atualizar simulação de benefício com o valor do benefício
    await prisma.SimulacaoBeneficio.update({
      where: { id: simulacao.id },
      data: { valor_beneficio: valorBeneficio },
    });

    // Obter ID da simulação
    // const simulacaoId = simulacao.id;

    

    // Calcular valor do benefício
    // const valorBeneficio = await calcularValorBeneficio(simulacaoId);

    // Construir resultado final
    const result = {
      success: true,
      message: 'Simulação inserida com sucesso',
      simulacao,
      idSimulacao: simulacao.id,
      idadeAtual,
      periodoContribuicaoMinimo,
      idadeAposentadoria,
      tempoContribuicaoMes,
      tempoContribuicaoPendente,
      mesAposentadoria,
      anoAposentadoria,
      valorBeneficio: isNaN(valorBeneficio) ? 'Valor não apurado' : valorBeneficio,
    };

    console.log('Resultado final:', result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao processar a simulação', error: error.message });
  }
});

export default router;
