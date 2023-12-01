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
		backgroundSize: 'contain',
		backgroundPosition: 'center',
		clear: 'both', textAlign: "left",

	}
	const colorBody = {
		backgroundImage: 'url("img/moldura.png")',
	}


	const card = {		
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

				<Container className="mt-5 mb-5 mx-auto">
					<Row className='bg-light px-1 py-3'>
						<Col lg={4} md={6} className="mb-4">
							<Card style={card}>
								<Card.Header>
									<Card.Title className="text-center fs-">Certificado de Depósito Bancário</Card.Title>
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

										<p className='fs-5'><Nocheck size={30} className='text-danger' /> Desvantagens:</p>
										<ul className='fs-6 p-2'>
											<p>Imposto de Renda: Sujeito à tributação de Imposto de Renda, com alíquotas decrescentes conforme o tempo de investimento.</p>
											<p>Valor Mínimo de Investimento: Alguns CDBs podem ter um valor mínimo de investimento inicial mais elevado, o que pode limitar o acesso a certos investidores.</p>
											<p>Dependência do Banco Emissor: O rendimento e a segurança do CDB dependem da saúde financeira da instituição emissora. Caso o banco enfrente dificuldades financeiras, isso pode impactar os rendimentos ou até mesmo a garantia do investimento, caso ultrapasse o limite garantido pelo FGC.</p>
											<p>Rentabilidade Variável: As taxas de retorno dos CDBs podem variar entre diferentes instituições financeiras e de acordo com o prazo de investimento. Isso significa que a rentabilidade não é garantida e pode ser afetada por condições de mercado e políticas da instituição.</p>
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
										<Card.Img style={{ minHeight: "15rem", maxHeight: "14rem" }} className='w-100 mb-4 ' src="img/inv6.png" alt="Imagem do artigo investimentos" />
										<p className='fs-5'><Check size={30} className='text-primary' /> Vantagens:</p>
										<ul className='fs-6 p-2'>
											<p>Segurança: Investimentos em títulos públicos são considerados de baixo risco.</p>
											<p>Rentabilidade: Dependendo do tipo de título e do momento de compra, oferecem rentabilidades competitivas em comparação com outros investimentos de renda fixa, principalmente em cenários de juros mais altos.</p>
											<p>Acessibilidade: Investidores individuais têm a possibilidade de adquirir títulos do Tesouro Direto com um baixo valor inicial.</p>
											<p>Diversidade: Diferentes tipos de títulos, tais como Tesouro Selic, Tesouro IPCA+ e Tesouro Prefixado, oferecem opções para distintos perfis de investidores.</p>
										</ul>

										<p className='fs-5'><Nocheck size={30} className='text-danger' /> Desvantagens:</p>
										<ul className='fs-6 p-2'>
											<p>Flutuação de Preços: Os preços dos títulos podem variar no mercado secundário, o que impacta o valor dos investimentos antes do vencimento.</p>
											<p>Tributação: Há incidência de Imposto de Renda sobre os rendimentos, seguindo uma tabela regressiva.</p>
											<p>Risco de Mercado: Em momentos de aumento da taxa de juros ou volatilidade do mercado, os preços dos títulos podem sofrer variações, afetando temporariamente o valor dos investimentos.</p>
											<p>Prazos e Liquidez: Alguns títulos têm prazos mais longos e podem apresentar menor liquidez, ou seja, podem exigir um tempo maior de investimento e não permitir resgates imediatos sem perda de rentabilidade.</p>

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
									<Card.Img style={{ minHeight: "13rem", maxHeight: "13rem" }} className='w-100 mb-5' src="img/inv7.png" alt="Imagem do artigo investimentos" />

									<Card.Text style={{ textAlign: "justify" }} >
										<p className='fs-5'><Check size={30} className='text-primary' /> Vantagens:</p>
										<p>Isenção de Imposto de Renda: Os rendimentos são isentos de Imposto de Renda para pessoas físicas.</p>
										<p>Segurança: Os investimentos são garantidos pelo Fundo Garantidor de Créditos (FGC) em caso de falência da instituição financeira emissora.</p>
										<p>Rentabilidade Atrativa: Embora a rentabilidade possa variar, esses investimentos muitas vezes oferecem taxas interessantes em comparação com outras opções conservadoras de renda fixa, como a poupança.</p>

										<p className='fs-5 mt-5'><Nocheck size={30} className='text-danger' /> Desvantagens:</p>
										<p>Liquidez: Alguns títulos têm prazos mínimos de carência, limitando a disponibilidade do dinheiro antes do vencimento.</p>
										<p>Variação de Rentabilidade: A taxa de retorno pode variar entre diferentes instituições financeiras e também ao longo do tempo, o que pode resultar em rendimentos menos previsíveis, dependendo das condições do mercado e das ofertas disponíveis.</p>
										<p>Menor Diversificação: Por estarem vinculados a setores específicos da economia (imobiliário e agronegócio), investir exclusivamente em LCI e LCA pode limitar a diversificação da carteira de investimentos, o que pode aumentar o risco em determinadas situações.</p>
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