//import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { Container, Row, Col, Card, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Educacao = () => {


    const card = {
        minHeight: "20rem"
    }

    const cardBody = {
        minHeight: "28rem"
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
                                             
                        <Col lg={6} md={6} className="mb-4">
                            <Card style={card}>                               
                                <Card.Body className={cardBody}>
                                <Card.Title  className='text-center'>O QUE É EDUCAÇÃO FINANCEIRA?</Card.Title>
                                <Card.Img id='card-img' src="img/ed.png" alt="Imagem do artigo educação financeira" />                                   
                                    <Card.Text style={{ textAlign: "justify" }}>A educação financeira engloba o conjunto de conhecimentos e habilidades fundamentais para administrar as finanças de forma abrangente. Vai muito além do simples controle dos gastos diários, envolvendo também a capacidade de planejar, criar orçamentos realistas, cultivar hábitos de economia, poupança e até mesmo explorar estratégias de investimento. Ela capacita as pessoas a gerenciarem seus recursos de maneira mais eficiente, promovendo escolhas conscientes e equilibradas em relação ao dinheiro, o que é essencial para alcançar metas financeiras e manter uma estabilidade econômica a longo prazo.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6} md={6} className="mb-4">
                            <Card style={card}>
                            <Card.Body className={cardBody}>
                            <Card.Title  className='text-center' >IMPORTÂNCIA DA EDUCAÇÃO FINANCEIRA</Card.Title>
                                <Card.Img id='card-img' src="/img/educ.png" alt="Imagem do artigo Educação Financeira" />
                               
                                    
                                    <Card.Text style={{ textAlign: "justify" }}>Quando a população tem um nível mais avançado de educação financeira, os benefícios se estendem para além do indivíduo. Esse conhecimento robusto não só impacta a vida pessoal, mas também influencia positivamente empresas, líderes governamentais e a sociedade como um todo. A educação financeira atua como um catalisador, capacitando as pessoas a tomarem decisões mais informadas e conscientes não apenas em questões monetárias, mas também em outras esferas da vida. Ao promover a autonomia e a habilidade de planejar de forma estratégica, ela contribui para a estabilidade econômica geral, impulsionando o crescimento sustentável das empresas, o desenvolvimento de políticas mais eficazes e uma sociedade mais resiliente e preparada para lidar com desafios diversos.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={12} className="mb-4">
                            <Card style={cardBody}>
                            <Card.Body className={cardBody}>
                                <Card.Img id='card-img' src="/img/previdencia.png" alt="Imagem do artigo investimento para todos" />
                               
                                    <Card.Title  className='text-center'>A EDUCAÇÃO FINANCEIRA PERMITE:</Card.Title>
                                    <Card.Text style={{ textAlign: "justify" }}>
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
