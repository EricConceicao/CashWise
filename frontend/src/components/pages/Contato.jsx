import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contato() {
    return (
        <div style={{ backgroundColor: '#213740', color: 'white', padding: '100px', textAlign: 'center' }}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Col md={11} className="mt-5 mb-5">
                            <img src="../img/correio.jpg" alt="Imagem Estilizada" className="img-fluid" />
                        </Col>

                    </Col>
                    <Col md={6}>
                        <h2 className="mb-4">Envie seu Feedback</h2>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="Digite seu nome" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Digite seu email" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Mensagem</Form.Label>
                                <Form.Control as="textarea" rows={8} placeholder="Digite sua mensagem" />
                            </Form.Group>

                            <Button variant="primary" type="submit" style={{ backgroundColor: 'green', borderColor: 'green', color: 'white' }}>
                                Enviar
                            </Button>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contato;
