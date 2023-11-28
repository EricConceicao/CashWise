// Importação de módulos e configurações
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import Big from 'big.js';

// Tratar erros em funções assíncronas
async function handleAsyncError(fn) {
  try {
    return await fn();
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
}

// Função para obter dados de atualização monetária
async function obterDadosAtualizacaoMonetaria(mesAno) {
  return await handleAsyncError(async () => {
    const parts = mesAno.split('/');
    if (parts.length === 2) {
      const newDate = parts[1] + '-' + parts[0];

      const indiceMonetario = await prisma.atualizacao_monetaria.findFirst({
        where: {
          mes_ano: newDate,
        },
      });

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
        return null;
      }

      const salarioAtualizado = new Big(parsedSalario).times(indice).toFixed(2);
      const [month, year] = mesAno.split('/');
      const date = new Date(`${year}-${month.padStart(2, '0')}-01`);

      if (isNaN(date.getTime())) {

        return null;
      }

      if (isNaN(parseFloat(salarioAtualizado))) {
        return null;
      }

      return {
        mes_ano: date,
        salario_atualizado: parseFloat(salarioAtualizado),
        simulacao_beneficio_id: simulacaoId,
      };
    }));

    return salarioAtualizadoEntries.filter(entry => entry !== null);
  });
}

async function calcularSalarioAtualizado(simulacaoId, mesAno, arrCampoAnoMes, arrCampoSalario) {
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

        return 0;
      }

      const salarioAtualizado = new Big(parsedSalario).times(indice).toFixed(2);

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

    await prisma.salario_atualizado.createMany({
      data: salarioAtualizadoEntries,
    });

    const salarioAtualizado = salarioAtualizadoEntries.map(entry => entry.salario_atualizado);

    if (salarioAtualizado.some(isNaN)) {
      const valoresInvalidos = salarioAtualizado.filter(isNaN);
      throw new Error('Valores de salário atualizado inválidos');
    }

    return salarioAtualizado;
  });
}

// Função para calcular a idade
function calcularIdade(dataNascimento) {
  const hoje = new Date();
  const nascimento = new Date(dataNascimento);
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mesAtual = hoje.getMonth();
  const mesNascimento = nascimento.getMonth();
  if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  return idade;
}

// Função para calcular requisitos de aposentadoria
function calcularRequisitosAposentadoria(genero) {

  const MASCULINO = 'm';
  const FEMININO = 'f';

  const requisitos = {
    [MASCULINO]: { periodoContribuicaoMinimo: 240, idadeAposentadoria: 65 },
    [FEMININO]: { periodoContribuicaoMinimo: 180, idadeAposentadoria: 62 },
  };

  if (genero in requisitos) {

    return requisitos[genero];
  } else {

    return { periodoContribuicaoMinimo: 0, idadeAposentadoria: 0 };
  }
}

// Função para calcular a aposentadoria
function calcularAposentadoria(idade, genero) {

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

  return {
    mesAposentadoria,
    anoAposentadoria
  };
}


// Função para calcular o mês de aposentadoria
function calcularMesAposentadoria(dataNascimento, genero) {
  const { mesAposentadoria } = calcularAposentadoria(dataNascimento, genero);

  return mesAposentadoria;
}

// Função para calcular o ano de aposentadoria
function calcularAnoAposentadoria(dataNascimento, genero) {
  const { anoAposentadoria } = calcularAposentadoria(dataNascimento, genero);
  return anoAposentadoria;
}

// Função para calcular o tempo de contribuição
function calcularTempoContribuicao(arrCampoAnoMes, periodoContribuicaoMinimo) {
  try {
    const tempoContribuicaoMes = arrCampoAnoMes.length;
    const tempoContribuicaoPendente = periodoContribuicaoMinimo - tempoContribuicaoMes;

    return { tempoContribuicaoMes, tempoContribuicaoPendente };
  } catch (error) {
    console.error('Erro ao calcular tempo de contribuição: ', error);
    // Retorne um objeto padrão em caso de erro
    return { tempoContribuicaoMes: 0, tempoContribuicaoPendente: 0 };
  }
}

// Função para calcular o ValorAposentadoria
async function calcularValorAposentadoria(simulacaoId) {
  const salarioAtualizado = await prisma.SalarioAtualizado.findFirst({
    where: { simulacao_beneficio_id: simulacaoId },
    select: { salario_atualizado: true },
  });

  if (!salarioAtualizado) {
    throw new Error('Não há valores de salário atualizado para calcular o benefício');
  }

  const valorAposentadoria = new Big(salarioAtualizado.salario_atualizado).times(0.60).toFixed(2);

  return valorAposentadoria;
}

// Função para calcular o ValorAuxilioDoenca
async function calcularValorAuxilioDoenca(simulacaoId) {
  const salarioAtualizado = await prisma.SalarioAtualizado.findFirst({
    where: { simulacao_beneficio_id: simulacaoId },
    select: { salario_atualizado: true },
  });

  if (!salarioAtualizado) {
    throw new Error('Não há valores de salário atualizado para calcular o benefício');
  }

  const valorAuxilioDoenca = new Big(salarioAtualizado.salario_atualizado).times(0.91).toFixed(2);

  return valorAuxilioDoenca;
}


// Função principal do controlador
const calcSimulacao = async (req, res) => {
  try {
    // Obter dados da requisição
    const { campoAnoMes, campoSalario, dataNascimento, genero } = req.body;

    // Validar dados da requisição
    if (!campoAnoMes || !campoSalario || !Array.isArray(campoAnoMes) || !Array.isArray(campoSalario) || isNaN(Date.parse(dataNascimento)) || typeof genero !== "string") {
      return res.status(400).json({
        success: false,
        message: "Dados ausentes ou inválidos"
      });
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
      },
    });

    // Criar entradas de salário atualizado
    const salarioAtualizadoEntries = await criarSalarioAtualizadoEntries(simulacao.id, campoAnoMes, campoSalario);

    // Inserir entradas de salário atualizado no banco de dados
    await prisma.SalarioAtualizado.createMany({
      data: salarioAtualizadoEntries,
    });

    // Calcular valor da aposentadoria
    const valorAposentadoria = await calcularValorAposentadoria(simulacao.id);
    console.log('Valor de Aposentadoria:', valorAposentadoria);

    // Calcular valor do auxílio doença
    const valorAuxilioDoenca = await calcularValorAuxilioDoenca(simulacao.id);
    console.log('Valor de Auxílio Doença:', valorAuxilioDoenca);

    // Atualizar simulação de benefício com os valores calculados
    await prisma.SimulacaoBeneficio.update({
      where: { id: simulacao.id },
      data: {
        valor_aposentadoria: valorAposentadoria,
        valor_auxilio_doenca: valorAuxilioDoenca,
      },
    });

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
      valorAposentadoria: isNaN(valorAposentadoria) ? 'Valor não apurado' : valorAposentadoria,
      valorAuxilioDoenca: isNaN(valorAuxilioDoenca) ? 'Valor não apurado' : valorAuxilioDoenca,
    };

    res.status(200).json({
      success: true,
      result
    });

  } catch (error) {
    console.error('Erro ao processar a simulação', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao processar a simulação',
      error: error.message
    });
  }
};

export default calcSimulacao;