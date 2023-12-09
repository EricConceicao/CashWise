import { useNavigate, useLocation } from 'react-router-dom';

import Header from '../layouts/Header';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ResultadoPage() {
	const location = useLocation();
	const simulationResults = location.state.result;

	const generoLabel = simulationResults.simulacao.genero === 'm' ? 'Masculino' : 'Feminino';
	const navigate = useNavigate();

	return (
		<div className="body">
			<Header />

			<header className='bg-info text-center'>
				<h1 className='display-1'>Resultados da sua simulação</h1>
			</header>

			<main className="container-fluid my-4">
				<Row className='align-items-center bg-light m-1 rounded-2 border border-2'>
					<Col className='d-flex justify-content-center' xm={12} sm={6} md={6}>
						<img src="img/senhor.png" alt="Senhor apresentando os resultados à sua direita" width="75%" />
					</Col>

					<Col xm={12} sm={6} md={6}>
						<section className='m-1'>
							<header className='bg-primary px-1 rounded-2'>
								<h2>Dados Pessoais</h2>
							</header>
							
							<dl className='bg-info p-2 rounded border'>
								<dt>Gênero</dt>
								<dd className='bg-light rounded p-1 border'>{generoLabel}</dd>

								<dt>Idade Atual</dt>
								<dd className='bg-light rounded p-1 border'>{simulationResults.idadeAtual} anos</dd>

								<dt>Tempo de Contribuição</dt>
								<dd className='bg-light rounded p-1 border'>{simulationResults.simulacao.tempo_contribuicao_mes} meses</dd>
							</dl>				
						</section>


						<section className='m-1'>
							<header>
								<h2 className='bg-primary px-1 rounded-2'>Resultados</h2>
							</header>

							<dl className='bg-info p-2 rounded border'>
								<dt>Idade da Aposentadoria</dt>
								<dd className='bg-light rounded p-1 border'>{simulationResults.idadeAposentadoria} anos</dd>

								<dt>Mês e ano da Aposentadoria</dt>
								<dd className='bg-light rounded p-1 border'>{simulationResults.mesAposentadoria} / {simulationResults.anoAposentadoria}</dd>

								<dt>Quanto tempo falta para contribuir</dt>
								<dd className='bg-light rounded p-1 border'>{simulationResults.tempoContribuicaoPendente} meses</dd>

								<dt>O valor mínimo da minha aposentadoria será</dt>
								<dd className='bg-light rounded p-1 border'>R$ {parseFloat(simulationResults.valorAposentadoria).toLocaleString('pt-BR', { maximumFractionDigits: 2 })}</dd>
							
								<dt>O valor mínimo do meu auxílio doença será</dt>
								<dd className='bg-light rounded p-1 border'>R$ {parseFloat(simulationResults.valorAuxilioDoenca).toLocaleString('pt-BR', { maximumFractionDigits: 2 })}</dd>
							</dl>
						</section>
					</Col>
				
					<Col className="d-flex justify-content-center p-2" sm={12}>
						<Button	size="lg" variant="secondary" onClick={() => navigate('/simule')}>
							Nova Consulta
						</Button>
					</Col>
				</Row>
			</main>
		</div>
	);
}

export default ResultadoPage;