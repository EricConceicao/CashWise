import { useState } from 'react'; 

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import {FaArrowRight as ArrowIco} from 'react-icons/fa6';

function LoginModal({ changeModal, feedback, validated, success, showLogin, handleShowLogin, handleCloseLogin }) {

	const [view, setView] = useState(false);

	async function login(e) {
		const form = e.currentTarget;
		e.preventDefault();

		if (form.checkValidity() === false) {
			setValidated(true);
			return
		}
		setValidated(true);

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
		<Modal show={showLogin} onHide={handleCloseLogin} centered>
			<Modal.Header className="border-bottom border-secondary bg-primary" closeButton>
				<Modal.Title>Bem-vindo!</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<Form noValidate validated={validated} onSubmit={login}>
					<Row>
						<fieldset>
							<legend className="small text-center">Insira seu dados de login!</legend>
							<span className="text-danger">{feedback}</span>

							<Form.Group as={Col} className="my-4" controlId="email-input">
								<FloatingLabel label="E-mail">
									<Form.Control
										type="email"
										name="email"
										placeholder="zezinhoDoPneu@gmail.com"
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