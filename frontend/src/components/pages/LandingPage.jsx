import {NavLink} from 'react-router-dom';

// Importações de componentes próprios //
import Header from '../layouts/Header';
import Article from '../layouts/Article';
import Footer from '../layouts/Footer';

// Importações de componentes do BS //
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

/* Texto pra mim mesmo usar em casa depois.
Previdência Social
Entenda como o sistema de previdência social funciona e descubra maneiras de otimizar seus benefícios no futuro.
*/

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
                    <p className='text-light fs-3 container text-center my-4 py-2 border-bottom'>
                    <span className="lead text-primary fs-2">Bem-vindo ao nosso Sistema de Educação Financeira!</span> Aqui você encontrará ferramentas e recursos para ajudar jovens e 
                    adultos a alcançarem um futuro financeiro estável e confortável. 
                    Nós acreditamos que um <strong>planejamento sólido é a chave</strong> para uma vida 
                    financeira tranquila. Comece sua jornada hoje mesmo!
                    </p>
                    <Row>
                        <Col md="6">
                            <Article title="Controle orçamentário" img="/img/cofrinho.svg" alt="Desenho de uma pessoa sentada em um puf com um notebook">
                            Aprenda a administrar suas finanças diárias. Defina metas, categorize seus gastos e acompanhe seu orçamento de forma eficaz.
                            </Article>
                        </Col>
                        <Col md="6">     
                            <Article title="Aprenda sobre investimentos" img="/img/menino-no-puf.svg" alt="Desenho de uma pessoa colocando moedas em um porquinho porta moedas.">
                            Visualize diferentes cenários de investimentos e renda passiva. Aprenda a tomar decisões acertadas sobre como fazer seu dinheiro crescer ao longo do tempo.
                            </Article>
                        </Col>
                        <Col md="12" lg="12">
                            <Article title="Tenha controle com sua agenda" img="/img/homi-das-plantas.svg" alt="Desenho de um homem regando plantas dando 'moedas' como frutos.">
                            Mantenha-se organizado com nossa agenda financeira. Marque datas importantes, prazos de pagamento e lembretes para garantir que suas finanças estejam sempre em dia.    
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