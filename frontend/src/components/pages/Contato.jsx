// Importações do React e afins
import React, { useState } from 'react';

// Importações dos nossos componentes
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

//Importações do Bootstrap
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';

// CSS
import './Contato.css';

function Contato() {

    const [showMessage, setShowMessage] = useState('');
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [isValidName, setIsValidName] = useState(null);
    const [isValidEmail, setIsValidEmail] = useState(null);
    const [isValidSub, setIsValidSub] = useState(null);
    const [isValidMessage, setIsValidMessage] = useState(null);

    const [validated, setValidated] = useState(false);

    const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const NAME_REGEX = /^[a-zA-ZÀ-ÿ ]{3,30}$/;
    const MESSAGE_REGEX = /^[.,;?!a-zA-ZÀ-ÿ ]{5,}$/;

    const handleEmail= (e) => {
        const inputValue = e.target.value;
        setEmail(inputValue);
        
        setIsValidEmail(EMAIL_REGEX.test(inputValue));
    };

    const handleName = (e) => {
        const inputValue = e.target.value;
        setName(inputValue);
        
        setIsValidName(NAME_REGEX.test(inputValue));
    };

    const handleSub = (e) => {
        const inputValue = e.target.value;
        setSubject(inputValue);
        
        setIsValidSub(MESSAGE_REGEX.test(inputValue));
    };

    const handleMessage = (e) => {
        const inputValue = e.target.value;
        setMessage(inputValue);
        
        setIsValidMessage(MESSAGE_REGEX.test(inputValue));
    };

    function checkForm() {
        if (isValidEmail && isValidMessage && isValidName && isValidSub === true) {
            return true 
        } else {
            setShowMessage('Campos inválidos');
            return false
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (checkForm() === false) return

        const userInput = {
            name: e.target.name.value,
            subject: e.target.subject.value,
            email: e.target.email.value,
            message: e.target.message.value,
        }

        const response = await fetch('http://localhost:3000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInput),
        });

        if (response.ok) {
            const data = await response.json();
            setShowMessage(data.message);
        }
    }

    const gradientBkg = {
        backgroundImage: 'linear-gradient(180deg, var(--cw-primary) 26%, var(--cw-secondary) 20%)'
    }

    return (
        <>
            <Header />

            <Container className='mt-3'>
                <Row style={{ minHeight: "80vh" }}>
                    <Col sm="6" md="12" lg="8" id='form-img'></Col>

                    <Col sm="6" md="12" lg="4" className='d-flex p-0 align-items-center justify-content-center'>
                        <Form className='w-100 p-3 mb-3 mx-2 rounded-3' noValidate onSubmit={handleSubmit} style={gradientBkg}>
                            <fieldset>
                                <legend>Envie seu Feedback!</legend>
                                <span className='d-block'>{showMessage}</span>

                                <Form.Group className='p-1 my-4' controlId="form-name">
                                    <FloatingLabel label="Nome">
                                        <Form.Control
                                            type="text"
                                            placeholder='Zezão'
                                            name='name'
                                            value={name}
                                            isValid={isValidName}
                                            isInvalid={!isValidName && name}
                                            onChange={handleName}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">Por favor, insira seu nome.</Form.Control.Feedback>
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group className='p-1 my-4' controlId="form-email">
                                    <FloatingLabel label="E-mail">
                                        <Form.Control
                                            type="email"
                                            placeholder="nome@example.com"
                                            value={email}
                                            name='email'
                                            onChange={handleEmail}
                                            isValid={isValidEmail}
                                            isInvalid={!isValidEmail && email}
                                            required
                                        />
                                        <Form.Control.Feedback className='text-warning' type="invalid">
                                            Por favor, insira um e-mail válido.
                                        </Form.Control.Feedback>
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group className='p-1 my-4' controlId="form-subject" >
                                    <FloatingLabel label="Assunto da mensagem">
                                        <Form.Control
                                            type="text"
                                            placeholder="Quero caféee"
                                            name='subject'
                                            value={subject}
                                            onChange={handleSub}
                                            isValid={isValidSub}
                                            isInvalid={!isValidSub && subject}
                                            required
                                        />
                                        <Form.Control.Feedback className='text-warning' type="invalid">
                                            Por favor, insira o assunto.
                                        </Form.Control.Feedback>
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group className='p-1 my-3 text-white' controlId="form-message">
                                    <Form.Label>Mensagem</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows='4'
                                        placeholder="Digite a sua mensagem"
                                        name='message'
                                        value={message}
                                        onChange={handleMessage}
                                        isValid={isValidMessage}
                                        isInvalid={!isValidMessage && message}
                                        required
                                    />
                                    <Form.Control.Feedback className='text-warning' type="invalid">
                                        Por favor, insira a mensagem.
                                    </Form.Control.Feedback>

                                </Form.Group>

                                <Button variant="primary" type="submit" disabled={isValidEmail && isValidMessage && isValidName && isValidSub === true ? false : true}>Enviar</Button>
                            </fieldset>
                        </Form>
                    </Col>
                </Row>
            </Container >

            <Footer />
        </>
    );
};

export default Contato;
