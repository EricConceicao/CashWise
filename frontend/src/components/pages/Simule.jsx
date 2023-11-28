// Importações de bibliotecas //
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

// Importações de components do projeto //
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

// Importações do BS //
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function SimulePage() {
  const navigate = useNavigate();

  const [mesAno, setMesAno] = useState(['']);
  const [salario, setSalario] = useState(['']);
  const [genero, setGenero] = useState('');
  const [error, setError] = useState(null);

  const handleGeneroChange = (e) => {
    setGenero(e.target.value);
  };

  const adicionarLinha = () => {
    setMesAno([...mesAno, '']);
    setSalario([...salario, '']);
  };

  const handleSimulation = async (dataNascimento) => {
    const requestData = {
      genero,
      dataNascimento,
      campoAnoMes: mesAno,
      campoSalario: salario,
    };

    try {
      const response = await axios.post('http://localhost:3000/simule', requestData);
      if (response.data.success) {
        const simulacaoData = response.data;
        console.log(simulacaoData)
        navigate('/resultado', { state: { ...simulacaoData } });
      } else {
        setError('Não apurado!');
      }
    } catch (error) {
      console.error(error);
      setError('Erro de rede ao se comunicar com o servidor.');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSimulation(e.target.dataNascimento.value);
  };
  function GeneroSelection({ genero, handleGeneroChange }) {
    return (
      <div>
        <h2 className='h3'>Selecione o seu Gênero</h2>
        <div className="radio-group">
          <div className="px-1 d-inline">
            <label className='p-1'>Masculino</label>
            <input
              type="radio"
              name="genero"
              value="m"
              checked={genero === 'm'}
              onChange={handleGeneroChange}
              className='px-2'
            />
          </div>

          <div className="px-1 d-inline">
            <label className='p-1'>Feminino</label>
            <input
              type="radio"
              name="genero"
              value="f"
              checked={genero === 'f'}
              onChange={handleGeneroChange}
            />
          </div>
        </div>
      </div>
    );
  }

  GeneroSelection.propTypes = {
    genero: PropTypes.string.isRequired,
    handleGeneroChange: PropTypes.func.isRequired,
  };

  function DataNascimentoInput() {
    return (
      <div className="section">
        <h2 className='h3'>Insira a sua Data de Nascimento</h2>
        <input
          type="date"
          className="data-input"
          name="dataNascimento"

        />
      </div>
    );
  }

  DataNascimentoInput.propTypes = {
    dataNascimento: PropTypes.string.isRequired,
    handleDataNascimentoChange: PropTypes.func.isRequired,
  };

  return (
    <>
      <Header />

      <main>
        <h1 className='display-1 bg-secondary text-light text-center py-3 px-2 m-0'>Previdência Social!</h1>
        <Container className='py-2 fs-5 bg-info rounded-2 text-center'>
          <Row>
            <Col>
              <p>
                Como já falamos em outras partes desse site, a educação financeira é fundamental para garantir a saúde financeira e a estabilidade econômica.
                A renda ativa é o dinheiro que você ganha por meio do seu trabalho ou negócio próprio. Já a renda passiva é o dinheiro que você ganha sem precisar
                trabalhar ativamente, como por exemplo, aluguel de imóveis, investimentos em fundos imobiliários, direitos autorais, royalties de música, entre outros.
              </p>

              <p>
                Para garantir uma vida financeira saudável, é importante ter uma combinação de renda ativa e passiva. A renda ativa é importante para garantir o sustento
                diário e a renda passiva pode ser utilizada para complementar a renda ativa e garantir um futuro mais tranquilo.
              </p>

              <p>
                Nesse módulo queremos dar ênfase em uma parte muito importante da renda passiva que é a Previdência Social. A Previdência Social é um seguro público que
                garante renda aos seus contribuintes, quando esses por algum motivo de saúde ou acidentes de trabalho ficam impossibilitados de ter uma renda ativamente e
                também quando chega a hora de sua aposentadoria.
              </p>

              <p>
                Todos os trabalhadores, sejam da iniciativa privada, seja do serviço público ou mesmo empresários, são automaticamente filiados a um Regime Previdenciário,
                seja o Regime Geral (INSS), seja a um Regime Próprio (Servidor Público Estatutário), que assim podem contribuir com o regime e garantir uma renda passiva,
                no caso de imprevistos como doenças, acidentes e outros eventos inesperados, além de garantir uma renda futura no caso da aposentadoria.
              </p>

              <p>
                A partir da Emenda Constitucional 103/2019 (
                <a href="https://www.planalto.gov.br/ccivil_03/Constituicao/Emendas/Emc/emc103.htm" rel='noreferrer' target="_blank">
                  Emenda Constitucional 103/2019
                </a>
                ), que entrou em vigor em 13 de novembro de 2019, <strong>o cálculo dos benefícios de Auxílio Doença e aposentadoria para</strong> para os trabalhadores que ingressaram no sistema previdenciário após a vigência da reforma <strong>mudou</strong> em relação ao modelo anterior.
              </p>

              <p>
                Agora, o trabalhador precisará atingir a <strong>idade mínima</strong> de 62 anos, se mulher, e 65 anos, se homem, além de ter no mínimo 15 anos de <strong>contribuição</strong> para a Previdência Social, se mulher e 20 anos no caso de homem. Para esses casos, o cálculo do benefício previdenciário passou a ser feito com base na média aritmética simples de todos os salários de contribuição do trabalhador desde julho de 1994, corrigidos mês a mês pelo fator de atualização fornecido pelo governo, com base no inpc acumulado. O valor do benefício, então, será equivalente a 60% da média salarial, acrescido de 2% para cada ano de contribuição que exceder o tempo mínimo de 15 ou 20 anos, respectivamente, se mulher ou homem, para o caso de aposentadoria e 91% da média salarial, para o caso de Auxílio Doença.
              </p>

              <p>
                <i>Na seção abaixo, disponibilizamos um recurso que ajudará o beneficiário da previdência a fazer uma simulação de cálculo do seu benefício, devendo para tanto, preencher os dados necessários (salários de contribuição, data de nascimento e sexo) e clicar em (Enviar dados e Simular).</i>
              </p>
            </Col>
          </Row>
        </Container>

        <Container className='mt-2'>
          <Row>
            <Col sm={12} md={6} className='justify-content-center align-items-center'>
              <img src='img/inv1.png' alt='homem pensando com gráficos ao fundo' width="100%" />
            </Col>
            <Col sm={12} md={6}>
              <form onSubmit={handleFormSubmit}>
                <div className="justify-content-center align-items-center">
                  <h2 className='h3'>Informe o salário recebido correspondente ao mês/ano trabalhado</h2>
                  <table>
                    <thead>
                      <tr className='text-center'>
                        <th>MÊS / ANO</th>
                        <th>SALÁRIO (R$)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mesAno.map((value, index) => (
                        <tr className='text-center' key={index}>
                          <td>
                            <Form.Group>
                              <Form.Control
                                type="text"
                                name="mesAno"
                                value={value}
                                onChange={(e) => {
                                  const updatedMesAno = [...mesAno];
                                  updatedMesAno[index] = e.target.value;
                                  setMesAno(updatedMesAno);
                                }}
                              />
                            </Form.Group>
                          </td>
                          <td>
                            <Form.Group>
                              <Form.Control
                                type="text"
                                name="salario"
                                value={salario[index]}
                                onChange={(e) => {
                                  const updatedSalario = [...salario];
                                  updatedSalario[index] = e.target.value;
                                  setSalario(updatedSalario);
                                }}
                              />
                            </Form.Group>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <Button variant="primary" onClick={adicionarLinha} className='my-2'>Adicionar Linha na Tabela</Button>

                <GeneroSelection genero={genero} handleGeneroChange={handleGeneroChange} />
                <DataNascimentoInput />
                <Button variant="primary" type="submit" className="my-2">
                  Enviar dados e Simular
                </Button>
                {error && <div className="error-message">{error}</div>}
              </form>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}




export default SimulePage;