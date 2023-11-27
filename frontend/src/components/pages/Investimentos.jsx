import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';
// Ícones //
import { BsCheck2Circle as Check } from 'react-icons/bs';
import { VscError as Nocheck } from 'react-icons/vsc';
import './Artigos.css';


const Investimentos = () => {

	const divStyle = {
		width: '100%',
		backgroundImage: 'url("img/moldura.png")',
		backgroundSize: 'contain',
		backgroundPosition: 'center',
		clear: 'both', textAlign: "left",

	}

	const colorBody = {
		backgroundImage: "linear-gradient(150deg, #fff, var(--cw-primary), #213740 )"
	}

	const card = {
		minHeight: "65rem",
		maxHeight: "65rem",
		borderWidth: '3px',
		padding: '10px',
		
	};

	return (
		<>
			<Header />
			<div style={colorBody}>
				<div className="bg-secondary text-white text-center py-5">
					<h1>Principais Tipos de Investimentos</h1>
					<h2 style={{ color: '#AEF2C6' }}>Os Diferentes Tipos de Renda Fixa</h2>
				</div>

				<Container className="mt-5 mx-auto">
					<Row className='bg-light px-1 py-3'>
						<Col lg={4} md={6} className="mb-4">
							<Card style={card}>
								<Card.Header>
									<Card.Title className="text-center fs-">Certificados de Depósito Bancário</Card.Title>
									<Card.Subtitle className='text-center'>(CDB)</Card.Subtitle>
								</Card.Header>

								<Card.Body>
									<Card.Text style={{ textAlign: "justify" }}>
										<Card.Img style={{ minHeight: "13rem", maxHeight: "13rem" }} className='w-100 mb-4' src="img/inv8.png" alt="Imagem do artigo investimentos" />

										<p className='fs-5'><Check size={30} className='text-primary' /> Vantagens:</p>
										<ul className='fs-6 p-2'>

											<p>Segurança: Garantido pelo Fundo Garantidor de Créditos (FGC) até um determinado valor.</p>

											<p>Variedade de Prazos: CDBs podem ter diferentes prazos, permitindo escolher uma opção que se alinhe com seus objetivos financeiros.</p>

											<p>Rentabilidade: Oferece taxas de juros mais atrativas do que a poupança, dependendo do prazo e do banco emissor.</p>
										</ul>

										<p className='fs-5'><Nocheck size={30} className='text-danger'/> Desvantagens:</p>
										<ul className='fs-6 p-2'>
											<p>Imposto de Renda: Sujeito à tributação de Imposto de Renda, com alíquotas decrescentes conforme o tempo de investimento.
											</p>
										</ul>
									</Card.Text>
								</Card.Body>

							</Card>
						</Col>

						<Col lg={4} md={6} className="mb-4">
							<Card style={card}>
								<Card.Header>
									<Card.Title className="text-center">Tesouro Direto </Card.Title>
									<Card.Subtitle className='text-center'>Títulos Públicos</Card.Subtitle>
								</Card.Header>

								<Card.Body>
									<Card.Text style={{ textAlign: "justify" }}>
										<Card.Img style={{ minHeight: "15rem", maxHeight: "14rem" }} className='w-100 mb-3 ' src="img/inv6.png" alt="Imagem do artigo investimentos" />
										<p className='fs-5'><Check size={30} className='text-primary' /> Vantagens:</p>
										<ul className='fs-6 p-2'>
											<p>Segurança: Investimento em títulos públicos, considerados de baixo risco.</p>

											<p>Acessibilidade: Investidores individuais podem comprar títulos do Tesouro Direto com baixo valor inicial.</p>

											<p>Diversidade: Diferentes tipos de títulos, como Tesouro Selic, Tesouro IPCA+ e Tesouro Prefixado, oferecendo opções para diferentes perfis de investidores.</p>
										</ul>

										<p className='fs-5'><Nocheck size={30} className='text-danger' /> Desvantagens:</p>
										<ul className='fs-6 p-2'>
											<p>Flutuação de Preços: Os preços dos títulos podem variar no mercado secundário, impactando o valor dos investimentos antes do vencimento.</p>
											<p>Tributação: Incide Imposto de Renda sobre os rendimentos, seguindo uma tabela regressiva.</p>
										</ul>
									</Card.Text>
								</Card.Body>

							</Card>
						</Col>

						<Col lg={4} md={6} className="mb-4">
							<Card style={card}>
								<Card.Header>
									<Card.Title className="text-center">Letras de Créditos</Card.Title>
									<Card.Subtitle className='text-center'>(LCI/LCA)</Card.Subtitle>
								</Card.Header>

								<Card.Body className='h-100'>
									<Card.Img style={{ minHeight: "15rem", maxHeight: "13rem" }} className='w-100 mb-3' src="img/inv7.png" alt="Imagem do artigo investimentos" />

									<Card.Text style={{ textAlign: "justify" }} >
										<p className='fs-5'><Check size={30} className='text-primary' /> Vantagens:</p>
										<p>Isenção de Imposto de Renda: Rendimentos são isentos de Imposto de Renda para pessoas físicas.</p>
										<p>Segurança: Garantidos pelo Fundo Garantidor de Créditos (FGC) em caso de falência da instituição financeira emissora.</p>
										<p>Específicos: LCI está atrelada a financiamentos imobiliários; LCA está relacionada ao agronegócio.</p>

										<p className='fs-5'><Nocheck size={30} className='text-danger' /> Desvantagens:</p>
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