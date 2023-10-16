
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

//Importações Validação

import { useState } from 'react';
import Feedback from 'react-bootstrap/Feedback';

function Contato() {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
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
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group controlId="validationCustom01" style={formGroupStyle}>
                <Form.Label>Nome</Form.Label>
                <Form.Control required
                  type="text"
                  placeholder="Nome"
                  defaultValue="Digite seu nome" style={inputStyle} />
              </Form.Group>
              <Form.Group controlId="validationCustomUsername" style={formGroupStyle}>
                <Form.Label>Email</Form.Label>

                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>

                  <Form.Control
                    type="email" obrigatório is isValid />
                    <Form.Control.Feedback type="inválido">
                      Digite seu Email
                    </Form.Control.Feedback>
                   
                </InputGroup>

              </Form.Group>
              <Form.Group controlId="formAssunto" style={formGroupStyle}>
                <Form.Label>Assunto</Form.Label>
                <Form.Control type="text" placeholder="" style={inputStyle} />
              </Form.Group>
            </Form>
            <Form.Group controlId="formMensagem" style={formGroupStyle}>
              <Form.Label>Mensagem</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Digite a sua mensagem" style={inputStyle} />
            </Form.Group>
            <Button variant="primary" type="submit" style={buttonStyle}>
              Enviar
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Contato;
