// Bibliotecas //
import { useState } from 'react';

// Importações de componentes próprios //
import Header from '../layouts/Header';
import Article from '../layouts/Article';
import Footer from '../layouts/Footer';

// Importações de componentes do BS //
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import './LandingPage.css';

const LandingPage = () => {
	// Controles dos modais de login e cadastro //
	const [showLogin, setShowLogin] = useState(false);
	const [showSign, setShowSign] = useState(false);

	const handleShowLogin = () => setShowLogin(true);
	const handleCloseLogin = () => setShowLogin(false);

	const handleShowSign = () => setShowSign(true);
	const handleCloseSign = () => setShowSign(false);

	// Isso faz com que quando você para o outro modal, o que você está feche
	function signModal() {
		handleCloseLogin();
		handleShowSign();
	}

	function loginModal() {
		handleCloseSign();
		handleShowLogin();
	}

	// Meus handlers para respostas no formulário //
	const [feedback, setFeedback] = useState('');
	const [success, setSuccess] = useState(true);
	// Valor do campo confirmar senha
	const [confirm, setConfirm] = useState('');


	async function createUser(e) {
		e.preventDefault();
		if (e.target.checkValidity() === false) return


		if (e.target.password.value !== e.target.confirm.value) {
			return (
				setFeedback('Senhas diferentes. Confirme sua senha corretamente'),
				setConfirm('')
			)
		}

		const userInput = {
			name: e.target.name.value,
			sname: e.target.sname.value,
			email: e.target.email.value,
			password: e.target.password.value,
		}

		const response = await fetch('http://localhost:3000/auth/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userInput),
		});

		if (response.ok) {
			const data = await response.json();

			setSuccess(data.success);
			setFeedback(data.message);
			loginModal();
		}

	}

	async function login(e) {
		e.preventDefault();

		const userInput = {
			email: e.target.email.value,
			password: e.target.password.value,
		}

		const response = await fetch('http://localhost:3000/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userInput),
		});

		if (response) {
			const data = await response.json();
			setSuccess(data.success);
			setFeedback(data.message);
		}
	}

	return (
		<>
			<header className="position-sticky z-1 top-0 p-0 bg-primary">
				<Container className="d-flex justify-content-between align-items-center">
					<Navbar.Brand href='#foi'>
						<img className="my-1 bg-light rounded-pill"
							src="/img/logo-cashwise.png"
							alt="Logo marca do CashWise"
							title="CashWise. Educação Financeira"
							width="50%" />
					</Navbar.Brand>

					<Button onClick={handleShowLogin} variant="secondary" size="md">Entrar</Button>

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

					<p className='text-light fs-3 container text-center mt-5 pb-3 border-bottom'>
						<span className="lead text-primary fs-2">Bem-vindo ao nosso Sistema de Educação Financeira!</span> Aqui você encontrará ferramentas e recursos para ajudar jovens e
						adultos a alcançarem um futuro financeiro estável e confortável.
						Nós acreditamos que um <strong>planejamento sólido é a chave</strong> para uma vida
						financeira tranquila. Comece sua jornada hoje mesmo!
					</p>

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
							<Article title="Tenha controle com sua agenda" img="/img/homi-das-plantas.svg" alt="Desenho de um homem regando plantas dando 'moedas' como frutos.">
								Mantenha-se organizado com nossa agenda financeira. Marque datas importantes, prazos de pagamento e lembretes para garantir que suas finanças estejam sempre em dia.
							</Article>
						</Col>
					</Row>

					<div className="d-grid">
						<Button onClick={handleShowLogin} className="w-50 mx-auto p-2 my-3 fs-4 fw-bold" size="large" variant="primary">Acesse já!</Button>
					</div>
				</Container>
			</main>

			<Modal show={showLogin} onHide={handleCloseLogin} centered>
				<Modal.Header className="border-bottom border-secondary bg-primary" closeButton>
					<Modal.Title>Bem-vindo!</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form noValidate onSubmit={login}>
						<Row>
							<fieldset>
								<legend className="small text-center">Insira seu dados de login!</legend>
								<span className="text-danger">{feedback}</span>
								<Form.Group as={Col} className="my-4">
									<FloatingLabel label="E-mail" controlId="email-input">
										<Form.Control type="email" name="email" placeholder="zezinhoDoPneu@gmail.com" autoComplete="username" />
									</FloatingLabel>
									<Form.Switch className="my-2" label="Lembrar E-mail?" type="checkbox" name="lembrar" id="lembrar-email" />
								</Form.Group>

								<Form.Group as={Col} className="my-2">
									<FloatingLabel label="Senha" controlId="password-input">
										<Form.Control type="password" name="password" placeholder="*****" autoComplete="current-password" />
										<Form.Control.Feedback>Preencha sua senha</Form.Control.Feedback>
										<Form.Control.Feedback type='invalid'>Preencha sua senha</Form.Control.Feedback>
									</FloatingLabel>
									<p className="small text-muted"><span className="fs-3">&#129323;</span>Não compartilhe sua senha com ninguem.</p>
								</Form.Group>

								<div className="d-flex justify-content-between">
									<Button className="text-decoration-underline" variant="outline-dark" onClick={signModal}>Não tem uma conta?</Button>
									<Button type="submit">Acessar</Button>
								</div>
							</fieldset>
						</Row>
					</Form>
				</Modal.Body>
			</Modal>

			<Modal show={showSign} onHide={handleCloseSign} centered>
				<Modal.Header className="border-bottom border-secondary bg-primary" closeButton>
					<Modal.Title>Se junte ao CashWise!</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form onSubmit={createUser}>
						<Row>
							<fieldset>
								<legend className="small text-center">Preencha todos os campos!</legend>
								<span className={success ? "text-primary" : "text-danger"}>{feedback}</span>
								<Form.Group as={Col} className="my-4">
									<FloatingLabel label="Nome" controlId="name-input">
										<Form.Control type="text" name="name" placeholder="Mister" />
									</FloatingLabel>
								</Form.Group>

								<Form.Group as={Col} className="my-4">
									<FloatingLabel label='Sobrenome' controlId="sname-input">
										<Form.Control type="text" name="sname" placeholder="Senhor" />
									</FloatingLabel>
								</Form.Group>

								<Form.Group as={Col} className="my-4">
									<FloatingLabel label="E-mail" controlId="email-input">
										<Form.Control type="email" name="email" placeholder="zezinhoDoPneu@gmail.com" />
									</FloatingLabel>
								</Form.Group>

								<Form.Group as={Col} className="my-2">
									<FloatingLabel label="Senha" controlId="password-input">
										<Form.Control type="password" name="password" placeholder="*****" autoComplete="new-password" />
									</FloatingLabel>
									<p className="small text-muted">Não compartilhe sua senha com ninguem. Shhh.</p>
								</Form.Group>

								<Form.Group as={Col} className="my-2">
									<FloatingLabel label="Confirme sua senha" controlId="confirm-input">
										<Form.Control type="password" name="confirm" placeholder="*****" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
									</FloatingLabel>
								</Form.Group>

								<div className="d-flex justify-content-center mt-3">
									<Button className="w-50" type="submit">Criar!</Button>
								</div>
							</fieldset>
						</Row>
					</Form>
				</Modal.Body>
			</Modal>

			<Footer anchor="hero" />
		</>
	);
}

export default LandingPage