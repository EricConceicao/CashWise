import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';
// Ícones //
import { BsCheck2Circle as Check } from 'react-icons/bs';
import { VscError as Nocheck } from 'react-icons/vsc';


const Investimentos = () => {

	const divStyle = {
		width: '100%',
		backgroundImage: 'url("img/moldura.png")',
		backgroundSize: 'contain',
		backgroundPosition: 'center',
		clear: 'both', textAlign: "left",

	};

	return (
		<>
			<Header />
			<div style={divStyle}>
				<div className="bg-secondary text-white text-center py-5">
					<h1>Principais Tipos de Investimentos</h1>
					<h2>Os Diferentes Tipos de Renda Fixa</h2>
				</div>

				<Container className="mt-5 mx-auto">
					<Row>
						<Col lg={4} md={6} className="mb-4">
							<Card className='h-100'>
								<Card.Header>
									<Card.Title className="text-center">Certificados de Depósito Bancário</Card.Title>
									<Card.Subtitle className='text-center'>(CDB)</Card.Subtitle>
								</Card.Header>

								<Card.Body>
									<Card.Text style={{ textAlign: "justify" }}>
										<Card.Img style={{ minHeight: "20rem", maxHeight: "20rem" }} className='w-100' src="img/titulos.png" alt="Imagem do artigo investimentos" />

										<p><Check size={20} className='text-primary' />Vantagens:</p>
										<ul>

											<li>Segurança: Garantido pelo Fundo Garantidor de Créditos (FGC) até um determinado valor.</li>

											<li>Variedade de Prazos: CDBs podem ter diferentes prazos, permitindo escolher uma opção que se alinhe com seus objetivos financeiros.</li>

											<li>Rentabilidade: Oferece taxas de juros mais atrativas do que a poupança, dependendo do prazo e do banco emissor.</li>
										</ul>

										<p><Nocheck size={20} className='text-danger' />Desvantagens:</p>
										<ul>
											<li>Imposto de Renda: Sujeito à tributação de Imposto de Renda, com alíquotas decrescentes conforme o tempo de investimento.
											</li>
										</ul>
									</Card.Text>
								</Card.Body>

							</Card>
						</Col>

						<Col lg={4} md={6} className="mb-4">
							<Card className='h-100'>
								<Card.Header>
									<Card.Title className="text-center">Tesouro Direto </Card.Title>
									<Card.Subtitle className='text-center'>Títulos Públicos</Card.Subtitle>
								</Card.Header>

								<Card.Body>
									<Card.Text style={{ textAlign: "justify" }}>
										<Card.Img style={{ minHeight: "20rem", maxHeight: "20rem" }} className='w-100 ' src="img/tesouro.png" alt="Imagem do artigo investimentos" />
										<p><Check size={20} className='text-primary' />Vantagens:</p>
										<ul>
											<li>Segurança: Investimento em títulos públicos, considerados de baixo risco.</li>

											<li>Acessibilidade: Investidores individuais podem comprar títulos do Tesouro Direto com baixo valor inicial.</li>

											<li>Diversidade: Diferentes tipos de títulos, como Tesouro Selic, Tesouro IPCA+ e Tesouro Prefixado, oferecendo opções para diferentes perfis de investidores.</li>
										</ul>

										<span><Nocheck size={20} className='text-danger' />Desvantagens:</span>
										<ul>
											<li>Flutuação de Preços: Os preços dos títulos podem variar no mercado secundário, impactando o valor dos investimentos antes do vencimento.</li>
											<li>Tributação: Incide Imposto de Renda sobre os rendimentos, seguindo uma tabela regressiva.</li>
										</ul>
									</Card.Text>
								</Card.Body>

							</Card>
						</Col>

						<Col lg={4} md={6} className="mb-4">
							<Card className='h-100'>
								<Card.Header>
									<Card.Title className="text-center">Letra de Crédito Imobiliário</Card.Title>
									<Card.Subtitle className='text-center'>(LCI/LCA)</Card.Subtitle>
								</Card.Header>

								<Card.Body className='h-100'>
									<Card.Img style={{ minHeight: "20rem", maxHeight: "20rem" }} className='w-100' src="img/investimentos.png" alt="Imagem do artigo investimentos" />

									<Card.Text style={{ textAlign: "justify" }} >
										<p><Check size={20} className='text-primary' />Vantagens:</p>
										<p>Isenção de Imposto de Renda: Rendimentos são isentos de Imposto de Renda para pessoas físicas.</p>
										<p>Segurança: Garantidos pelo Fundo Garantidor de Créditos (FGC) em caso de falência da instituição financeira emissora.</p>
										<p>Específicos: LCI está atrelada a financiamentos imobiliários; LCA está relacionada ao agronegócio.</p>

										<p><Nocheck size={20} className='text-danger' />Desvantagens:</p>
										<p>Liquidez: Alguns títulos têm prazos mínimos de carência, limitando a disponibilidade do dinheiro antes do vencimento.</p>
										<p>Rendimento Menor: Em geral, oferecem taxas de juros um pouco menores em comparação com CDBs de bancos médios e grandes.</p>
									</Card.Text>
								</Card.Body>

							</Card>
						</Col>
					</Row>
				</Container>
				<Footer />

			</div>
		</>
	);
}

export default Investimentos;