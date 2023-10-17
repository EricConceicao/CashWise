// Bibliotecas //
import { useState } from 'react';

// Importações de componentes próprios //
import Header from '../layouts/Header';
import Article from '../layouts/Article';
import Footer from '../layouts/Footer';

// Importações de componentes do BS //
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import './LandingPage.css';

const LandingPage = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <header className="position-sticky z-1 top-0 p-0 bg-primary">
                <Container className="d-flex justify-content-between align-items-center">
                    <Navbar.Brand href='#foi'>
                        <img className="my-1 bg-light rounded-pill" 
                        src="/img/logo-cashwise.png" 
                        alt="Logo marca do CashWise"
                        title="CashWise. Educação Financeira"
                        width="50%" />
                    </Navbar.Brand>

                    <Button onClick={handleShow} variant="secondary" size="md">Entrar</Button>
                </Container>
            </header>
            
            <div className='position-relative bg-ligth' id="hero">
                <Image src='/img/banner-landing.svg'  
                alt="Desenho de aspecto educativo financeiro. Com uma mulher lendo um livro sentada em vários outros livros 
                gigantes, com dinheiro atrás. E um homem sentado em uma cadeira ao lago com um notebook." />
                <h1 
                className='position-absolute w-100 top-50 p-1 text-light display-1' 
                style={{ backgroundImage: "linear-gradient(45deg, black 20%, transparent 99%)" }}>
                    Aprenda, poupe e prospere<br />Com o <span className='text-primary'>CashWise</span> Você chega lá!
                </h1>
            </div>
            
            <main>
                <Container fluid className="bg-secondary pt-5" id="main-container"
                style={{backgroundImage: "linear-gradient(40deg, #172a32 45%, #213740 40%)"}}>
                    <Row>
                        <Col md="6">
                            <Article title="Controle seus gastos" img="/img/menino-no-puf.svg" alt="Desenho de uma pessoa sentada em um puf com um notebook">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima doloribus aliquam tempore vel itaque minus laudantium, beatae ipsam dolore sequi illum, possimus dolor ab.
                            </Article>
                        </Col>
                        <Col md="6">     
                            <Article title="Saiba o que fazer com seu dinheiro" img="/img/cofrinho.svg" alt="Desenho de uma pessoa colocando moedas em um porquinho porta moedas.">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima doloribus aliquam tempore vel itaque minus laudantium, beatae ipsam dolore sequi illum, possimus dolor ab.
                            </Article>
                        </Col>
                        <Col md="6">
                            <Article title="Planeje o seu futuro" img="/img/homi-das-plantas.svg" alt="Desenho de um homem regando plantas dando 'moedas' como frutos.">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima doloribus aliquam tempore vel itaque minus laudantium, beatae ipsam dolore sequi illum, possimus dolor ab.
                            </Article>
                        </Col>
                        <Col md="6">
                            <Article title="Aprenda sobre previdência" img="/img/homi-das-plantas.svg" alt="Desenho de um homem regando plantas dando 'moedas' como frutos.">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima doloribus aliquam tempore vel itaque minus laudantium, beatae ipsam dolore sequi illum, possimus dolor ab.
                            </Article>
                        </Col>
                    </Row>

                    <div className="d-grid">
                        <Button onClick={handleShow} className="w-50 mx-auto p-2 my-3 fs-4 fw-bold" size="large" variant="primary">Acesse já!</Button>
                    </div>
                </Container>
            </main>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header className="border-bottom border-secondary bg-primary" closeButton>
                    <Modal.Title>Bem-vindo!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Row>
                            <fieldset>
                                <legend className="small text-center">Insira seu E-mail e senha!</legend>
                                <Form.Group as={Col} className="my-4">
                                    <FloatingLabel  label="E-mail" controlId="email-input">
                                        <Form.Control type="email" name="email" placeholder="zezinhoDoPneu@gmail.com" />                    
                                    </FloatingLabel>
                                    <Form.Switch className="my-2" label="Lembrar E-mail?" type="checkbox" name="lembrar" id="lembrar-email" /> 
                                </Form.Group>

                                <Form.Group as={Col} className="my-2">
                                    <FloatingLabel  label="Senha" controlId="password-input">
                                        <Form.Control type="password" name="password" placeholder="*****" /> 
                                    </FloatingLabel>
                                    <p className="small text-muted">Não compartilhe sua senha com ninguem. Shhh.</p>
                                </Form.Group>

                                <div className="d-flex justify-content-between">
                                    <Button type="submit" variant="outline-dark" className="text-decoration-underline">Não tem uma conta?</Button>
                                    <Button type="submit">Acessar</Button>
                                </div>
                            </fieldset>
                        </Row>
                    </Form>
                </Modal.Body> 
            </Modal>

            <Footer anchor="hero" />
        </>
    );
}

export default LandingPage