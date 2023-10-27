import React, { useState } from 'react';

// Importações dos nossos componentes
import Content from "../layouts/Content"
import Header from "../layouts/Header"
import Footer from "../layouts/Footer"

//Importações do Bootstrap
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

import './Contato.css';

function Contato() {

  const [showMensagem, setShowMensagem] = useState('');
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [validated, setValidated] = useState(false);
  const [nome, setNome] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(inputValue));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.checkValidity() === false) {
      return
    }  

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
      setShowMensagem (data.message);
    }
  };
  return (
    <>
      <Header />

      <Container>
        <Row style={{ minHeight: "80vh" }}>
          <Col sm="6" md="12" lg="8" id='form-img'>
            <Container className='d-flex'>

            </Container>
          </Col>

          <Col sm="6" md="12" lg="4" className='d-flex p-0 align-items-center justify-content-center'>

            <Form className='w-100 p-3 mb-3 rounded-3' noValidate validated={validated} onSubmit={handleSubmit}
              style={{ backgroundImage: 'linear-gradient(180deg, var(--cw-primary) 25%, var(--cw-secondary) 25%)' }}>
              <fieldset>
                <legend>Deixe um Feedback!</legend>
                <span>{showMensagem}</span>
                
                <Form.Group className='p-1 my-3' controlId="validationCustom01">
                  <FloatingLabel label="Nome" controlId='form-name'>
                    <Form.Control
                      type="text"
                      placeholder='Zezão'
                      name='name'
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">Por favor, insira seu nome.</Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>


                <Form.Group className='p-1 my-3' controlId="exampleForm.ControlInput1">
                  <FloatingLabel label="E-mail" controlId='form-email'>
                    <Form.Control
                      type="email"
                      placeholder="nome@example.com"
                      value={email}
                      name='email'
                      onChange={handleEmailChange}
                      isInvalid={!isValidEmail}
                      required
                    />
                    <Form.Control.Feedback className='text-warning' type="invalid">
                      Por favor, insira um e-mail válido.
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className='p-1 my-3' controlId="formAssunto" >
                  <FloatingLabel label="Assunto da mensagem" controlId='form-assunto'>
                    <Form.Control
                      type="text"
                      placeholder="Quero caféee"
                      value={assunto}
                      name='subject'
                      onChange={(e) => setAssunto(e.target.value)}
                      required
                    />
                    <Form.Control.Feedback className='text-warning' type="invalid">
                      Por favor, insira o assunto.
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className='p-1 my-3 text-white' controlId="form-mensagem">
                  <Form.Label>Mensagem</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows='4'
                    placeholder="Digite a sua mensagem"
                    value={mensagem}
                    name='message'
                    onChange={(e) => setMensagem(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback className='text-warning' type="invalid">
                    Por favor, insira a mensagem.
                  </Form.Control.Feedback>

                </Form.Group>

                <Button variant="primary" type="submit">Enviar</Button>
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
