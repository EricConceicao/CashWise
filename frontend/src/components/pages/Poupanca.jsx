import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import CoinText from '../utils/CoinText';

import { Container, Row, Col, Card } from 'react-bootstrap';

import './Artigos.css';

// Ícones //
import { BsCheck2Circle as Check } from 'react-icons/bs';
import { VscError as Nocheck } from 'react-icons/vsc'
const Poupanca = () => {

	const divStyle = {
		width: '100%',
		backgroundSize: 'contain',
		backgroundPosition: 'center',
	}
	const colorBody = {
        backgroundImage: 'url("img/moldura.png")',
		backgroundSize: 'contain',		
    }
	
	return (
		<>
			<Header />
			<div style={colorBody}>
				<div className="bg-secondary text-white text-center py-5">
					<h1 >Poupança</h1>
					<h2 style={{ color: '#AEF2C6' }}>Conheça as Vantagens e Desvantagens de um dos Investimentos mais Tradicionais</h2>
				</div>
				<Container className="mt-5 mb-5 mx-auto">
					<Row className='bg-light px-1 py-3'>
						<Col lg={6} md={6} className="mb-4">
							<Card className="h-100" border="#213740" style={{ borderWidth: '3px' }}>
								<Card.Body >
									<Card.Title className="fs-3 p-3 bg-info rounded-3' text-center ">Vantagens da Poupança:</Card.Title>
									<Card.Img className='w-60' src="img/cofrinho.png" alt="Imagem do artigo poupança" />

									<Card.Text className='fs-5' style={{ textAlign: "justify" }}>
										<p><Check size={35} className='text-primary' /> Segurança: <CoinText>A poupança é garantida pelo Fundo Garantidor de Créditos (FGC)</CoinText> até um determinado valor, proporcionando segurança ao seu investimento.</p>

										<p><Check size={35} className='text-primary' /> Acesso Fácil: É fácil abrir uma conta poupança, pois a maioria dos bancos oferecem serviços online, proporcionando acesso conveniente aos seus fundos.</p>

										<p><Check size={35} className='text-primary' /> Liquidez: <CoinText textId="poup-2">Você pode acessar seu dinheiro a qualquer momento</CoinText>, tornando a poupança uma escolha ideal para emergências e necessidades imediatas.</p>

										<p><Check size={35} className='text-primary' /> Rentabilidade Básica: A poupança <CoinText textId="poup-3">oferece uma taxa de juros básica</CoinText>, permitindo que seu dinheiro cresça, mesmo que em um ritmo moderado.</p>

										<p><Check size={35} className='text-primary' /> Isenção de Impostos: <CoinText textId="poup-4">Em muitos países, os rendimentos da poupança são isentos de impostos</CoinText>, o que significa que você mantém todo o dinheiro que ganha.</p>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>

						<Col lg={6} md={6} className="mb-4">
							<Card border="#213740" style={{ borderWidth: '3px' }}>
								<Card.Body>
									<Card.Title className="fs-3 p-3 bg-info rounded-3' text-center ">Desvantagens da Poupança:</Card.Title>
									<Card.Img className='w-60' src="img/desvPoup.png" alt="Imagem do artigo poupança" />


									<Card.Text className='fs-5' style={{ textAlign: "justify" }}>
										<p><Nocheck size={35} className='text-danger' /> Baixa Rentabilidade: Comparada a outras opções de investimento, <CoinText textId="poup-5">poupança oferece uma taxa de juros relativamente baixa</CoinText>, muitas vezes não acompanhando a inflação.</p>

										<p><Nocheck size={35} className='text-danger' /> Perda para Inflação: Se a taxa de inflação for maior do que a taxa de juros da poupança, o poder de compra do seu dinheiro diminuirá ao longo do tempo.</p>

										<p><Nocheck size={35} className='text-danger' /> Limites de Saque: Alguns bancos impõem limites aos saques da poupança, o que pode ser um problema em situações de emergência ou quando você precisa acessar grandes quantias.</p>

										<p><Nocheck size={35} className='text-danger' /> Opções Limitadas: A poupança não oferece muitas opções de crescimento para seu dinheiro; é uma escolha conservadora e limitada, em termos de potenciais de ganhos.</p>

										<p><Nocheck size={35} className='text-danger' /> Risco de Desvalorização: Em tempos de instabilidade econômica, a moeda pode desvalorizar, afetando indiretamente o valor real do seu dinheiro na poupança.</p>


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