import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CoinText from '../../utils/CoinText';

// Ícones //
import { BsCheck2Circle as Check } from 'react-icons/bs';
import { VscError as Nocheck } from 'react-icons/vsc';

import './Artigos.css';


const Investimentos = () => {

	const divStyle = {
		width: '100%',
		backgroundSize: 'contain',
		backgroundPosition: 'center',
		clear: 'both', textAlign: "left",

	}
	const colorBody = {
		backgroundImage: 'url("img/moldura.png")',
	}


	const card = {
		minHeight: "63rem",
		maxHeight: "70rem",
		borderWidth: '3px',
		padding: '10px',

	};

	return (
		<div id="topo" style={colorBody}>
			<Header />
			
				<header className="bg-secondary text-white text-center py-5">
					<h1 className="display-2">Principais Tipos de Investimentos</h1>
					<h2 style={{ color: '#AEF2C6' }}>Os Diferentes Tipos de Renda Fixa</h2>
				</header>

				<main className='container mt-5 mb-5'>
					<Row className='px-1 py-3'>
						<Col lg={4} md={6} className="mb-4">
							<article>
								<Card style={card}>
									<Card.Header className="p-1">
										<Card.Title className="text-center">Certificados de Depósito Bancário</Card.Title>
										<Card.Subtitle className='text-center'>(CDB)</Card.Subtitle>
									</Card.Header>

									<Card.Body>
									<Card.Img style={{ minHeight: "13rem", maxHeight: "13rem" }} className='w-100 mb-4' src="img/inv8.png" alt="Imagem do artigo investimentos" />
										<Card.Text style={{ textAlign: "justify" }}>
											<p className='fs-5'><Check size={30} className='text-primary' /> Vantagens:</p>
											<ul className='list-unstyled'>
												<li>Segurança: Garantido pelo Fundo Garantidor de Créditos (FGC) até um determinado valor.</li>

												<li>Variedade de Prazos: CDBs podem ter <CoinText textId="inv-1">diferentes prazos</CoinText>, permitindo escolher uma opção que se alinhe com seus objetivos financeiros.</li>

												<li>Rentabilidade: Oferece <CoinText textId="inv-2">taxas de juros mais atrativas</CoinText> do que a poupança, dependendo do prazo e do banco emissor.</li>
											</ul>

											<p className='fs-5'><Nocheck size={30} className='text-danger' /> Desvantagens:</p>
											<ul className='list-unstyled'>
												<li>Imposto de Renda: <CoinText textId="inv-3">Sujeito à tributação</CoinText> de Imposto de Renda, com alíquotas decrescentes conforme o tempo de investimento.
												</li>
											</ul>
										</Card.Text>
									</Card.Body>
								</Card>
							</article>	
						</Col>
						
						<Col lg={4} md={6} className="mb-4">
							<article>
								<Card style={card}>
									<Card.Header  className="p-1">
										<Card.Title className="text-center">Tesouro Direto </Card.Title>
										<Card.Subtitle className='text-center'>Títulos Públicos</Card.Subtitle>
									</Card.Header>

									<Card.Body>
										<Card.Text style={{ textAlign: "justify" }}>
											<Card.Img style={{ minHeight: "15rem", maxHeight: "14rem" }} className='w-100 mb-3 ' src="img/inv6.png" alt="Imagem do artigo investimentos" />
											<p className='fs-5'><Check size={30} className='text-primary' /> Vantagens:</p>
											<ul className='list-unstyled'>
												<li>Segurança: Investimento em títulos públicos, considerados de <CoinText textId="inv-4">baixo risco</CoinText>.</li>

												<li>Acessibilidade: Investidores individuais podem comprar títulos do Tesouro Direto com baixo valor inicial.</li>

												<li>Diversidade: Diferentes <CoinText textId="inv-5">tipos de títulos</CoinText>, como Tesouro Selic, Tesouro IPCA+ e Tesouro Prefixado, oferecendo opções para diferentes perfis de investidores.</li>
											</ul>

											<p className='fs-5'><Nocheck size={30} className='text-danger' /> Desvantagens:</p>
											<ul className='list-unstyled'>
												<li>Flutuação de Preços: Os preços dos títulos podem variar no mercado secundário, impactando o <CoinText textId="inv-6">valor dos investimentos</CoinText> antes do vencimento.</li>
												<li>Tributação: Incide <CoinText textId="inv-7">Imposto de Renda</CoinText> sobre os rendimentos, seguindo uma tabela regressiva.</li>
											</ul>
										</Card.Text>
									</Card.Body>

								</Card>
							</article>
						</Col>
						
						
						<Col lg={4} md={6} className="mb-4">
							<article>
								<Card style={card}>
									<Card.Header  className="p-1">
										<Card.Title className="text-center">Letras de Créditos</Card.Title>
										<Card.Subtitle className='text-center'>(LCI/LCA)</Card.Subtitle>
									</Card.Header>

									<Card.Body className='h-100'>
										<Card.Img style={{ minHeight: "15rem", maxHeight: "13rem" }} className='w-100 mb-3' src="img/inv7.png" alt="Imagem do artigo investimentos" />

										<Card.Text style={{ textAlign: "justify" }}>
											<p className='fs-5'><Check size={30} className='text-primary' /> Vantagens:</p>
											<ul className='list-unstyled'> 
												<li>Isenção de Imposto de Renda: Rendimentos são isentos de Imposto de Renda para pessoas físicas.</li>
												<li>Segurança: Garantidos pelo Fundo Garantidor de Créditos (FGC) em caso de falência da instituição financeira emissora.</li>
												<li>Específicos: LCI está atrelada a <CoinText textId="inv-8">financiamentos imobiliários</CoinText>; LCA está relacionada ao agronegócio.</li>
											</ul>

											<p className='fs-5'><Nocheck size={30} className='text-danger' /> Desvantagens:</p>
											<ul className='list-unstyled'>
												<li>Liquidez: Alguns títulos têm prazos mínimos de carência, limitando a disponibilidade do dinheiro antes do vencimento.</li>
												<li>Rendimento Menor: Em geral, oferecem taxas de juros um pouco menores em <CoinText textId="inv-9">comparação com CDBs</CoinText> de bancos médios e grandes.</li>
											</ul>
											</Card.Text>
									</Card.Body>
								</Card>
							</article>
						</Col>
					</Row>
				</main>

				<Footer anchor="topo" />
		</div>
	);
}

export default Investimentos;