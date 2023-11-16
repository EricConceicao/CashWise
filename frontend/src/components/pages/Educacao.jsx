//import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { Container, Row, Col, Card, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Educacao = () => {


    const card = {
        minHeight: "35rem"
    }

    const cardBody = {
        minHeight: "28rem"
    }

    const cardImg = {
        width:'50%',
       
    }

    const colorBody = {
        backgroundImage: "linear-gradient(180deg, #fff, var(--cw-primary) )"
    }


    return (
        <>
            <Header />
            <div style={colorBody}>
                <div className="bg-secondary text-white text-center py-5">
                    <h1>Educação Financeira</h1>
                </div>

                <Container className="mt-5">
                    <Row>
                                             
                        <Col lg={6} md={12} className="mb-4">
                            <Card style={card}>
                                <Card.Img style={cardImg} src="img/ed.png" alt="Imagem do artigo educação financeira" />
                                <Card.Body className={cardBody}>
                                    <Card.Title>
                                        O QUE É EDUCAÇÃO FINANCEIRA?</Card.Title>
                                    <Card.Text>Educação financeira é o conhecimento acerca da organização das finanças, que vai além do controle de gastos e inclui a elaboração de orçamentos, poupança e investimentos; possibilitando  uma melhor gestão do dinheiro a partir de escolhas conscientes em relação aos gastos.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6} md={12} className="mb-4">
                            <Card style={card}>
                                <Card.Img style={cardImg} src="/img/educ.png" alt="Imagem do artigo Educação Financeira" />
                                <Card.Body className={cardBody}>
                                    <Card.Title>IMPORTÂNCIA DA EDUCAÇÃO FINANCEIRA</Card.Title>
                                    <Card.Text>Quando a população  possui um nível mais elevado sobre conhecimento financeiro as empresas, líderes governamentais e a sociedade como um todo também se beneficiam, pois a  educação financeira está na capacitação e na promoção da autonomia das pessoas, não apenas no aspecto financeiro, mas em todas as áreas da vida.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={12} className="mb-4">
                            <Card style={cardBody}>
                                <Card.Img style={cardImg} src="/img/previdencia.png" alt="Imagem do artigo investimento para todos" />
                                <Card.Body className={cardBody}>
                                    <Card.Title>A EDUCAÇÃO FINANCEIRA PERMITE:</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>Permite que as pessoas tenham mais controle sobre suas finanças;</li>
                                            <li>Ajuda a tomar decisões mais conscientes e inteligentes em relação aos gastos e investimentos;</li>
                                            <li>Evita o superendividamento precoce;</li>
                                            <li>Retira o estigma social de que quem economiza é mesquinho e que, no fim da vida, apesar de ter dinheiro, será infeliz;</li>
                                            <li>Retira o peso da falta de conhecimento na hora de consumir ou poupar;</li>
                                            <li>Ajuda a desenvolver habilidades técnicas e cultura financeira;</li>
                                            <li>Facilita a entrada dos jovens no mundo do trabalho;</li>
                                            <li>Canal significativo para alcançar uma sociedade mais igualitária e inclusiva;</li>
                                            <li>Ajuda a empresas a manterem e crescerem seus negócios.</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        </>
    );
}

export default Educacao;
