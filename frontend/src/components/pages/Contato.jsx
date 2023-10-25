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

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);
    if (isValidEmail && nome && assunto && mensagem) {
      console.log('E-mail válido:', email);
      console.log('Nome:', nome);
      console.log('Assunto:', assunto);
      console.log('Mensagem:', mensagem);

    } else {
      console.log('Por favor, preencha todos os campos corretamente.');
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
            style={{backgroundImage: 'linear-gradient(180deg, var(--cw-primary) 25%, var(--cw-secondary) 25%)'}}>
              <fieldset>
                <legend>Deixe um Feedback!</legend>
                <Form.Group className='p-1 my-3' controlId="validationCustom01">
                  <FloatingLabel label="Nome" controlId='form-name'>
                    <Form.Control
                      type="text"
                      placeholder='Zezão'
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
