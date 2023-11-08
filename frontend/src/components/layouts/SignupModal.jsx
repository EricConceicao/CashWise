import { useState, useEffect } from 'react';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import { RiAccountBoxFill as AccountIco } from 'react-icons/ri';

function SignupModal({ handleFeedback, feedback, loginModal, showSign, handleShowSign, handleCloseSign }) {

	const [view, setView] = useState(false);

	// Hooks para validação //
	const [name, setName] = useState('');
	const [validName, setValidName] = useState(null); 

	const [sname, setSname] = useState('');
	const [validSname, setValidSname] = useState(null); 

	const [email, setEmail] = useState('');
	const [validEmail, setValidEmail] = useState(null); 

	const [pass, setPass] = useState('');
	const [validPass, setValidPass] = useState(null);

	const [match, setMatch] = useState('');
	const [validMatch, setValidMatch] = useState(null);

	// Esqueminhas em expressões regulares para checar as entradas //
	const NAME_REGEX = /^[a-zA-ZÀ-ÿ ]{3,30}$/; 
	const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	const PASS_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

	// Effects para validar o campo dinâmicamente os comparando com as expressões regulares //
	useEffect(() => {
		setValidName(NAME_REGEX.test(name));
	}, [name]);

	useEffect(() => {
		setValidSname(NAME_REGEX.test(sname));
	}, [sname]);

	useEffect(() => {
		setValidEmail(EMAIL_REGEX.test(email));
	}, [email]);

	useEffect(() => {
		setValidPass(PASS_REGEX.test(pass));
		if (pass)
		setValidMatch(pass === match);
	}, [pass, match]);

	function checkForm() {
        if (validName && validSname && validEmail && validPass && validMatch === true) {
            return true 
        } else {
            handleFeedback('Campos inválidos ou faltando');
            return false
        }
    }


	async function createUser(e) {
		e.preventDefault();
		if (checkForm() === false) return

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
			handleFeedback(data.message);
			loginModal();
			return

		} else if (response) {
			const data = await response.json();
			handleFeedback(data.message);
			return
		}
	}
	
	return (
		<Modal show={showSign} onHide={handleCloseSign} centered>
			<Modal.Header className="border-bottom border-primary bg-primary" closeButton>
				<Modal.Title className='text-center bg-primary'>Se junte ao CashWise!</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<Form noValidate onSubmit={createUser}>
					<Row>
						<fieldset>
							<legend className="small text-center">Preencha todos os campos!</legend>
							<span>{feedback}</span>
							<Form.Group as={Col} className="my-4">
								<FloatingLabel label="Nome" controlId="name-input">
									<Form.Control 
										type="text" 
										name="name" 
										placeholder="Mister"
										value={name}
										onChange={(e) => setName(e.target.value)} 
										isValid={validName}
										isInvalid={!validName && name ? true : false}
										aria-describedby="name-info"
										aria-invalid={!validName}
										autoComplete="off"
										required 
									/>
									<Form.Control.Feedback type="invalid" id="name-info">No mínimo 3 letras.</Form.Control.Feedback>
								</FloatingLabel>
							</Form.Group>

							<Form.Group as={Col} className="my-4">
								<FloatingLabel label='Sobrenome' controlId="sname-input">
									<Form.Control 
										type="text" 
										name="sname" 
										placeholder="Senhor" 
										value={sname}
										onChange={(e) => setSname(e.target.value)} 
										isValid={validSname}
										isInvalid={!validSname && sname ? true : false}
										aria-describedby="sname-info"
										aria-invalid={!validSname}
										autoComplete="off"
										required 
									/>
									<Form.Control.Feedback type="invalid" id="sname-info">No mínimo três letras</Form.Control.Feedback>
								</FloatingLabel>
							</Form.Group>

							<Form.Group as={Col} className="my-4">
								<FloatingLabel label="E-mail" controlId="email-input">
									<Form.Control 
										type="email" 
										name="email" 
										placeholder="zezinhoDoPneu@gmail.com" 
										value={email}
										onChange={(e) => setEmail(e.target.value)} 
										isValid={validEmail}
										isInvalid={!validEmail && email ? true : false}
										aria-describedby="email-info"
										aria-invalid={!validEmail}
										autoComplete="off"
										required 
									/>
									<Form.Control.Feedback type="invalid" id="email-info">Insira um E-mail válido. exemplo@dominio.com</Form.Control.Feedback>
								</FloatingLabel>
							</Form.Group>

							<Form.Group as={Col} className="my-2">
								
										<FloatingLabel label="Senha" controlId="password-input">
											<Form.Control
												type={view ? "text" : "password"}
												name="password"
												placeholder="*****"
												value={pass}
												onChange={(e) => setPass(e.target.value)}
												isValid={validPass}
												isInvalid={!validPass && pass ? true : false}
												aria-invalid={!validPass}
												aria-describedby="pass-info"
												autoComplete="off"
												required
											/>
											<Form.Check className='mx-1' label="Mostrar senha?" onClick={() => setView(!view)} />
											<Form.Control.Feedback type="invalid" id="pass-info" className="text-center">A senha deve conter pelo menos 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula e um número.</Form.Control.Feedback>
										</FloatingLabel>
								
										<FloatingLabel label="Confirme sua senha" controlId="confirm-input">
											<Form.Control 
												type={view ? "text" : "password"} 
												name="confirm" 
												placeholder="*****" 
												value={match} 
												onChange={(e) => setMatch(e.target.value)}
												isValid={validMatch}
												isInvalid={!validMatch && match ? true : false}
												aria-invalid={!validMatch}
												aria-describedby="confirm-info"
												autoComplete="off"
												required 
											/>
											<Form.Control.Feedback type="invalid" id="confirm-info">Confirme corretamente sua senha</Form.Control.Feedback>
										</FloatingLabel>
									<Form.Text className="small text-muted"><span className="fs-3">&#129323;</span>Não compartilhe sua senha com ninguem. Shhh.</Form.Text>
							</Form.Group>


							<div className="d-flex justify-content-center mt-3">
								<Button className="w-50" type="submit"
								disabled={validName && validSname && validEmail && validPass && validMatch === true ? false : true}>
									<AccountIco className='me-2' size={28} />Criar Conta!
								</Button>
							</div>
						</fieldset>
					</Row>
				</Form>
			</Modal.Body>
		</Modal>
	);
}

export default SignupModal