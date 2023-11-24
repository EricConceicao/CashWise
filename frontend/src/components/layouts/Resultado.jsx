import { useNavigate } from 'react-router-dom';
import Header from '../layouts/Header';
import { useLocation } from 'react-router-dom';
import { Container, Button, Row, Col } from 'react-bootstrap';
//import './Resultado.css';

function ResultadoPage() {
  const location = useLocation();
  const simulationResults = location.state;

  console.log(simulationResults);

  const generoLabel = simulationResults.simulacao.genero === 'm' ? 'Masculino' : 'Feminino';
  const navigate = useNavigate();

  return (
    <div className="body">
      <Header />
      <main className="main">
        <Container>
          <Row>
            <Col md={6}>
              <div className="titulo">
                <h2>
                  <b>Dados Pessoais</b>
                </h2>
              </div>
              <div className="barra">
                <p>
                  <i>Gênero:</i> <span>{generoLabel}</span>
                </p>
                <p>
                  <i>Idade Atual:</i> <span>{simulationResults.idadeAtual} anos</span>
                </p>
                <p>
                  <i>Tempo de Contribuição:</i>{' '}
                  <span>{simulationResults.simulacao.tempo_contribuicao_mes} meses</span>
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="titulo">
                <h2>
                  <b>Resultados</b>
                </h2>
              </div>
              <div className="barra">
                <p>
                  <i>Idade da Aposentadoria:</i>{' '}
                  <span>{simulationResults.idadeAposentadoria} anos</span>
                </p>
                <p>
                  <i>Mês e ano da Aposentadoria:</i>{' '}
                  <span>
                    {simulationResults.mesAposentadoria} / {simulationResults.anoAposentadoria}
                  </span>
                </p>
                <p>
                  <i>Quanto tempo falta para contribuir:</i>
                  <br />
                  <span>{simulationResults.tempoContribuicaoPendente} meses</span>
                </p>
                <p>
                  <i>O valor mínimo do meu benefício será:</i>{' '}
                  <span id="valorBeneficio">
                    R$ {parseFloat(simulationResults.valorBeneficio).toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
                  </span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="botao">
          <Button
            variant="secondary"
            className="envio"
            onClick={() => {
              navigate('/simule');
            }}
          >
            Nova Consulta
          </Button>
        </div>
        <div className="imagem">
          <img src="img/senhor.png" alt="" width="200px" />
        </div>
      </main>
    </div>
  );
}

export default ResultadoPage;
