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
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

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

  const containerStyle = {
    backgroundImage: 'linear-gradient(to right, #213740, #5BD992, #AEF2C6)',
    color: 'white',
  };

  const inputStyle = {
    marginBottom: '20px',
  };

  const formGroupStyle = {
    marginBottom: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#213740',
    borderColor: 'white',
    color: 'white',
    margin: '0 auto',
    display: 'block',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <Header />
      <Container className="my-4">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="justify-content-center align-items-center">
            <Col md={2}>
              <img src="../img/correio.jpg" alt="Logo" style={{ height: '150px', animation: 'swing 2s linear infinite', borderRadius: "50%" }} />
            </Col>
            <Col className='justify-content-center' md={6} >
              <h1>Contato</h1>
              <h4>Envie um Feedback</h4>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col md={6} >

              <Form.Group controlId="validationCustom01" style={formGroupStyle}>
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  style={inputStyle}
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, insira seu nome.
                </Form.Control.Feedback>
              </Form.Group>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="nome@example.com"
                    value={email}
                    onChange={handleEmailChange}
                    isInvalid={!isValidEmail}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor, insira um e-mail válido.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formAssunto" style={formGroupStyle}>
                  <Form.Label>Assunto</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    value={assunto}
                    onChange={(e) => setAssunto(e.target.value)}
                    style={inputStyle}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor, insira o assunto.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formMensagem" style={formGroupStyle}>
                  <Form.Label>Mensagem</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Digite a sua mensagem"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    style={inputStyle}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor, insira a mensagem.
                  </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" style={buttonStyle}>
                  Enviar
                </Button>
              </Form>
            </Col>
          </Row>
        </Form>
      </Container>
      <Footer />
    </div>
  );
};

export default Contato;
