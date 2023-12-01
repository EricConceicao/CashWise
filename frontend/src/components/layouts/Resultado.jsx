import { useNavigate, useLocation } from 'react-router-dom';

import Header from '../layouts/Header';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ResultadoPage() {
	const location = useLocation();
	const simulationResults = location.state.result;

	console.log(simulationResults);

	const generoLabel = simulationResults.simulacao.genero === 'm' ? 'Masculino' : 'Feminino';
	const navigate = useNavigate();

	return (
		<div className="body">
			<Header />

			<header className='bg-info text-center'>
				<h1 className='display-1'>Resultados da sua simulação</h1>
			</header>
			<main className="main">
				<Container fluid>
					<section>
						<header>
							<h2>Dados Pessoais</h2>
						</header>
						<p>
							<i>Gênero:</i> <span>{generoLabel}</span>
						</p>
						<p>
							<i>Idade Atual:</i> <span>{simulationResults.idadeAtual} anos</span>
						</p>
						<p>
							<i>Tempo de Contribuição: </i>
							<span>{simulationResults.simulacao.tempo_contribuicao_mes} meses</span>
						</p>
					</section>

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
							<i>O valor mínimo da minha aposentadoria será:</i>{' '}
							<span id="valorAposentadoria">
								R$ {parseFloat(simulationResults.valorAposentadoria).toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
							</span>
						</p>

						<p>
							<i>O valor mínimo do meu auxílio doença será:</i>{' '}
							<span id="valorAuxilioDoenca">
								R$ {parseFloat(simulationResults.valorAuxilioDoenca).toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
							</span>
						</p>
					</div>
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