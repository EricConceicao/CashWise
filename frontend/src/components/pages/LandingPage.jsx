// Importações de componentes próprios //
import Header from '../layouts/Header';
import Article from '../layouts/Article';
import Footer from '../layouts/Footer';

// Importações de componentes do BS //
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import './LandingPage.css';

const LandingPage = () => {
    return (
        <>
            <header className="position-sticky z-1 top-0 p-0 bg-primary">
                <Container className="d-flex justify-content-between align-items-center">
                    <Navbar.Brand href='#foi'>
                        <img className="rounded-pill" 
                        src="/img/logo-cashwise.jpg" 
                        alt="Logo marca do CashWise"
                        title="CashWise. Educação Financeira"
                        width="42%" />
                    </Navbar.Brand>

                    <Button variant="secondary" size="lg">Entrar</Button>
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
                <Container fluid className="bg-secondary pt-5">
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
                        <Col md="12" lg="12">
                            <Article title="Planeje o seu futuro" img="/img/homi-das-plantas.svg" alt="Desenho de um homem regando plantas dando 'moedas' como frutos.">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima doloribus aliquam tempore vel itaque minus laudantium, beatae ipsam dolore sequi illum, possimus dolor ab.
                            </Article>
                        </Col>
                    </Row>

                    <div className="d-grid">
                        <Button className="w-50 mx-auto p-2 my-3 fs-4 fw-bold" size="large" variant="primary">Acesse já!</Button>
                    </div>
                </Container>

                
            </main>

            <Footer anchor="hero" />
        </>
    );
}

export default LandingPage