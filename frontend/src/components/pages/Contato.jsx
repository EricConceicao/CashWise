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

      <Container className='m-2' style={{ height: "80vh" }}>


        <Row>
          <Col md="6">
            <Container className='d-flex'>
              <img className='rounded-pill' width={"30%"} src="../img/correio.jpg" alt="Icone com uma mão segurando um tablete com outra mão saindo de sua tela com uma carta" />
              <div className="d-flex justify-content-center flex-column mx-2">
                <h1>Contate-nos!</h1>
              </div>
            </Container>
          </Col>

          <Col md="6">

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <fieldset>
                <legend>Deixe um Feedback!</legend>
                <Form.Group controlId="validationCustom01">
                  <FloatingLabel label="Nome" controlId='form-name'>
                    <Form.Control
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">Por favor, insira seu nome.</Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <FloatingLabel label="E-mail" controlId='form-email'>
                    <Form.Control
                      type="email"
                      placeholder="nome@example.com"
                      value={email}
                      onChange={handleEmailChange}
                      isInvalid={!isValidEmail}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Por favor, insira um e-mail válido.
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>

                <Form.Group controlId="formAssunto" >
                  <FloatingLabel label="Assunto da mensagem" controlId='form-assunto'>
                    <Form.Control
                      type="text"
                      placeholder=""
                      value={assunto}
                      onChange={(e) => setAssunto(e.target.value)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Por favor, insira o assunto.
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>

                <Form.Group controlId="formMensagem">
                  <FloatingLabel label='Mensagem' controlId='form-mensagem'>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Digite a sua mensagem"
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Por favor, insira a mensagem.
                    </Form.Control.Feedback>
                  </FloatingLabel>
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
