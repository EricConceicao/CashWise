import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contato = () => {
  const containerStyle = {
    backgroundImage: 'linear-gradient(to right, #213740, #5BD992, #AEF2C6)',
    color: 'white',
    padding: '50px 0',
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
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={2}>
            <img src="../img/logo-cashwise.jpg" alt="Logo" style={{ height: '150px', animation: 'swing 2s linear infinite' }} />
          </Col>
          <Col className='justify-content-center' md={6} >
            <h1>Contato</h1>
            <h4>Envie um Feedback</h4>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
          <Col md={6} >
            <Form>
              <Form.Group controlId="formNome" style={formGroupStyle}>
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="" style={inputStyle} />
              </Form.Group>
              <Form.Group controlId="formSobrenome" style={formGroupStyle}>
                <Form.Label>Sobrenome</Form.Label>
                <Form.Control type="text" placeholder="" style={inputStyle} />
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
    </div>
  );
};

export default Contato;
