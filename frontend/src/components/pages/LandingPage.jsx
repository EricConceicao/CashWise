// Bibliotecas //
import { useState } from 'react';

// Importações de componentes próprios //
import Header from '../layouts/Header';
import Article from '../layouts/Article';
import Footer from '../layouts/Footer';
import LoginModal from '../layouts/LoginModal';
import SignupModal from '../layouts/SignupModal';

// Importações de componentes do BS //
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

// Icones //
import { BiLogIn as LoginIco } from 'react-icons/bi';

import useUserStore from '../store/UserStore';

import './LandingPage.css';

const LandingPage = () => {
	const [feedback, setFeedback] = useState('');

	const name = useUserStore(state => state.name);
	const sname = useUserStore(state => state.sname);
	const userToken = useUserStore(state => state.userToken);

	// Controles dos modais de login e cadastro //
	const [showLogin, setShowLogin] = useState(false);
	const [showSign, setShowSign] = useState(false);

	const handleShowLogin = () => setShowLogin(true);
	const handleCloseLogin = () => {
		setShowLogin(false);
	}

	const handleShowSign = () => setShowSign(true);
	const handleCloseSign = () => {
		setShowSign(false);
	}

	function signModal() {
		handleCloseLogin();
		handleFeedback('');
		handleShowSign();
	}

	function loginModal() {
		handleCloseSign();
		handleShowLogin();
	}

	function handleFeedback(msg) {
		return setFeedback(msg);
	}

	return (
		<>
			<header className="position-sticky z-3 top-0 p-0 bg-primary">
				<Container fluid className="d-flex justify-content-between align-items-center">
					<Navbar.Brand className='fs-5 p-1 fw-light'>
						<img className="my-1 bg-light rounded-pill"
							src="/img/logo-cashwise.png"
							alt="Logo marca do CashWise"
							title="CashWise. Educação Financeira"
							width="36%"
						/>{' '}
						CashWise
					</Navbar.Brand>
					<Button className="fw-medium" onClick={handleShowLogin} variant="secondary"><LoginIco className='me-2' size={25} />Entrar</Button>
				</Container>
			</header>

			<div className='position-relative bg-ligth' id="hero">
				<Image src='/img/banner-landing.svg'
					alt="Desenho de aspecto educativo financeiro. Com uma mulher lendo um livro sentada em vários outros livros 
                gigantes, com dinheiro atrás. E um homem sentado em uma cadeira ao lago com um notebook." />
				<h1
					className='position-absolute w-100 top-50 p-1 text-light display-1'
					style={{ backgroundImage: "linear-gradient(45deg, black 20%, transparent 99%)" }}>
					Aprenda, poupe e prospere<br />Com o <span className='text-primary'>CashWise</span> Você chega lá!
				</h1>
			</div>

			<main>
				<Container fluid className="bg-secondary pt-5" id="main-container"
					style={{ backgroundImage: "linear-gradient(40deg, #172a32 45%, #213740 40%)" }}>

					<p className='container text-light fs-5 text-center pt-5'>
						<span className="lead text-primary fs-3">Bem-vindo ao nosso Sistema de Educação Financeira!</span> <br />Aqui você encontrará ferramentas e recursos para ajudar jovens e
						adultos a alcançarem um futuro financeiro estável e confortável.
						Nós acreditamos que um <strong>planejamento sólido é a chave</strong> para uma vida
						financeira tranquila. Comece sua jornada hoje mesmo!
					</p>
					<hr className='text-light border-3 rounded border-light' />
					<Row>
						<Col md="6">
							<Article title="Controle orçamentário" img="/img/cofrinho.svg" alt="Desenho de uma pessoa sentada em um puf com um notebook">
								Aprenda a administrar suas finanças diárias. Defina metas, categorize seus gastos e acompanhe seu orçamento de forma eficaz.
							</Article>
						</Col>

						<Col md="6">
							<Article title="Aprenda sobre investimentos" img="/img/menino-no-puf.svg" alt="Desenho de uma pessoa colocando moedas em um porquinho porta moedas.">
								Visualize diferentes cenários de investimentos e renda passiva. Aprenda a tomar decisões acertadas sobre como fazer seu dinheiro crescer ao longo do tempo.
							</Article>
						</Col>

						<Col md="6">
							<Article title="Previdência social" img="/img/homi-das-plantas.svg" alt="Desenho de um homem regando plantas dando 'moedas' como frutos.">
								Entenda como o sistema de previdência social funciona e descubra maneiras de otimizar seus benefícios no futuro.
							</Article>
						</Col>

						<Col md="6">
							<Article title="Tenha controle com sua agenda" img="/img/agenda.jpg" alt="Desenho de um homem regando plantas dando 'moedas' como frutos.">
								Mantenha-se organizado com nossa agenda financeira. Marque datas importantes, prazos de pagamento e lembretes para garantir que suas finanças estejam sempre em dia.
							</Article>
						</Col>
					</Row>

					<div className="d-grid">
						<Button onClick={handleShowLogin} className="w-50 mx-auto p-2 mt-3 mb-5 fs-4 fw-bold" size="large" variant="primary">ACESSE JÁ!</Button>
					</div>
				</Container>
			</main>

			<LoginModal feedback={feedback} handleFeedback={handleFeedback} changeModal={signModal} showLogin={showLogin} handleShowLogin={handleShowLogin} handleCloseLogin={handleCloseLogin} />
			<SignupModal feedback={feedback} handleFeedback={handleFeedback} loginModal={loginModal} showSign={showSign} handleShowSign={handleShowSign} handleCloseSign={handleCloseSign} />

			<Footer anchor="hero" />
		</>
	);
}

export default LandingPage