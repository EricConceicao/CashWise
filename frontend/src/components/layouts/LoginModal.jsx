import { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import userStore from '../store/UserStore';

import {FaArrowRight as ArrowIco} from 'react-icons/fa6';

function LoginModal({ handleFeedback, feedback, changeModal, showLogin, handleShowLogin, handleCloseLogin }) {
	const userLogin = userStore(state => state.login);

	const navigate = useNavigate();
	const [view, setView] = useState(false);

	const [email, setEmail] = useState('');
	const [validEmail, setValidEmail] = useState(null); 

	const [pass, setPass] = useState('');
	const [validPass, setValidPass] = useState(null);

	const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	const PASS_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

	useEffect(() => {
		setValidEmail(EMAIL_REGEX.test(email));
	}, [email]);

	useEffect(() => {
		setValidPass(PASS_REGEX.test(pass));
	}, [pass]);

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
			credentials: "include",
			body: JSON.stringify(userInput),
		});

		if (response) {
			const data = await response.json();
			handleFeedback(data.message);

			if (data.success) {
				handleFeedback(data.message);
				userLogin(data.userData, data.userToken);

				navigate('/home');
			}
		}
	}

	return (
		<Modal show={showLogin} onHide={handleCloseLogin} centered>
			<Modal.Header className="border-bottom border-secondary bg-primary" closeButton>
				<Modal.Title>Bem-vindo!</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<Form noValidate onSubmit={login}>
					<Row>
						<fieldset>
							<legend className="small text-center">Insira seu dados de login!</legend>
							<span>{feedback}</span>

							<Form.Group as={Col} className="my-4" controlId="email-input">
								<FloatingLabel label="E-mail">
									<Form.Control
										type="email"
										name="email"
										placeholder="zezinhoDoPneu@gmail.com"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										isValid={validEmail && email}
										autoComplete="username"
										required
									/>
									<Form.Control.Feedback type="invalid">Insira seu E-mail</Form.Control.Feedback>
								</FloatingLabel>
							</Form.Group>

							<Form.Group as={Col} className="my-2" controlId="password-input">
								<FloatingLabel label="Senha">
									<Form.Control
										type={view ? "text" : "password"}
										name="password"
										placeholder="***"
										value={pass}
										onChange={(e) => setPass(e.target.value)}
										isValid={validPass && pass}
										autoComplete="current-password"
										required
									/>
									<Form.Control.Feedback type='invalid'>Preencha sua senha</Form.Control.Feedback>
								</FloatingLabel>
								<Form.Check className='mx-1' label="Mostrar senha?" onClick={() => setView(!view)} />
								<Form.Text className="small text-muted"><span className="fs-3">&#129323;</span>Não compartilhe sua senha com ninguem.</Form.Text>
							</Form.Group>

							<div className="d-flex justify-content-between">
								<Button className="text-decoration-underline" variant="outline-dark" onClick={changeModal}>Não tem uma conta?</Button>
								<Button type="submit"><ArrowIco className='me-2' size={28} />Acessar</Button>
							</div>
						</fieldset>
					</Row>
				</Form>
			</Modal.Body>
		</Modal>
	);
}

export default LoginModal