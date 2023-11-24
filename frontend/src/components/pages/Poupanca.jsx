import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

import { Container, Row, Col, Card } from 'react-bootstrap';

import './Artigos.css';

// Ícones //
import { BsCheck2Circle as Check } from 'react-icons/bs';
import { VscError as Nocheck } from 'react-icons/vsc'
const Poupanca = () => {

	const divStyle = {
		width: '100%',
		backgroundImage: 'url("img/moldura.png")',
		backgroundSize: 'contain',
		backgroundPosition: 'center',
	};

	return (
		<>
			<Header />
			<div style={divStyle}>
				<div className="bg-secondary text-white text-center py-5 fs-2">
					<h1>Poupança</h1>
					<p>Conheça as vantagens e desvantagens de um dos investimentos mais tradicionais.</p>
				</div>

				<Container className="mt-5 mx-auto">
					<Row>
						<Col lg={6} md={6} className="mb-4">
							<Card border="#213740" style={{ borderWidth: '3px' }}>
								<Card.Body>
									<Card.Title className="fs-3 p-3 text-center ">Vantagens da Poupança:</Card.Title>
									<Card.Img id='card-img' src="img/cofrinho.png" alt="Imagem do artigo poupança" />

									<Card.Text>
										<p><Check size={20} className='text-primary' /> Segurança: A poupança é garantida pelo Fundo Garantidor de Créditos (FGC) até um determinado valor, proporcionando segurança aos seus fundos.</p>

										<p><Check size={20} className='text-primary' />Acesso Fácil: É fácil abrir uma conta poupança, e a maioria dos bancos oferece serviços online, proporcionando acesso conveniente aos seus fundos.</p>

										<p><Check size={20} className='text-primary' />Liquidez: Você pode acessar seu dinheiro a qualquer momento, tornando a poupança uma escolha ideal para emergências e necessidades imediatas.</p>

										<p><Check size={20} className='text-primary' />Rentabilidade Básica: A poupança oferece uma taxa de juros básica, permitindo que seu dinheiro cresça, mesmo que em um ritmo moderado.</p>

										<p><Check size={20} className='text-primary' />Isenção de Impostos: Em muitos países, os rendimentos da poupança são isentos de impostos, o que significa que você mantém todo o dinheiro que ganha.</p>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>

						<Col lg={6} md={6} className="mb-4">
							<Card border="#213740" style={{ borderWidth: '3px' }}>
								<Card.Body>
									<Card.Title className="fs-3 p-3 text-center ">Desvantagens da Poupança:</Card.Title>
									<Card.Img id='card-img' src="img/desvPoup.png" alt="Imagem do artigo poupança" />


									<Card.Text className='text-justify'>
										<p><Nocheck size={20} className='text-danger' />Baixa Rentabilidade: Comparada a outras opções de investimento, a poupança oferece uma taxa de juros relativamente baixa, muitas vezes não acompanhando a inflação.</p>

										<p><Nocheck size={20} className='text-danger' />Perda para Inflação: Se a taxa de inflação for maior do que a taxa de juros da poupança, o poder de compra do seu dinheiro diminuirá ao longo do tempo.</p>

										<p><Nocheck size={20} className='text-danger' />Limites de Saque: Alguns bancos impõem limites aos saques da poupança, o que pode ser um problema em situações de emergência ou quando você precisa acessar grandes quantias.</p>

										<p><Nocheck size={20} className='text-danger' />Opções Limitadas: A poupança não oferece muitas opções de crescimento para seu dinheiro; é uma escolha conservadora, mas limitada em termos de potencial de ganhos.</p>

										<p><Nocheck size={20} className='text-danger' />Risco de Desvalorização: Em tempos de instabilidade econômica, a moeda pode desvalorizar, afetando indiretamente o valor real do seu dinheiro na poupança.</p>


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

export default Poupanca;