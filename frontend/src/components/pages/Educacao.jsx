//import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { Container, Row, Col, Card, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GiTakeMyMoney as Money } from "react-icons/gi";
const Educacao = () => {


    const card = {
        minHeight: "35rem",
        maxHeight: "35rem",
        borderWidth: '3px',
        overflow: 'auto'

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
                            <Card border="#213740" style={card} >
                                <Card.Body className={cardBody}>
                                    <Card.Title className='text-center'>O QUE É EDUCAÇÃO FINANCEIRA?</Card.Title>
                                    <Card.Img id='card-img' src="img/ed.png" alt="Imagem do artigo educação financeira" />
                                    <Card.Text style={{ textAlign: "justify" }}>A educação financeira engloba o conjunto de conhecimentos e habilidades fundamentais para administrar as finanças de forma abrangente. Vai muito além do simples controle dos gastos diários, envolvendo também a capacidade de planejar, criar orçamentos realistas, cultivar hábitos de economia, poupança e até mesmo explorar estratégias de investimento. Ela capacita as pessoas a gerenciarem seus recursos de maneira mais eficiente, promovendo escolhas conscientes e equilibradas em relação ao dinheiro, o que é essencial para alcançar metas financeiras e manter uma estabilidade econômica a longo prazo.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6} md={6} className="mb-4">
                            <Card border="#213740" style={card}>
                                <Card.Body className={cardBody}>
                                    <Card.Title className='text-center' >IMPORTÂNCIA DA EDUCAÇÃO FINANCEIRA</Card.Title>
                                    <Card.Img id='card-img' src="/img/educ.png" alt="Imagem do artigo Educação Financeira" />


                                    <Card.Text style={{ textAlign: "justify" }}>Quando a população tem um nível mais avançado de educação financeira, os benefícios se estendem para além do indivíduo. Esse conhecimento robusto não só impacta a vida pessoal, mas também influencia positivamente empresas, líderes governamentais e a sociedade como um todo. A educação financeira atua como um catalisador, capacitando as pessoas a tomarem decisões mais informadas e conscientes não apenas em questões monetárias, mas também em outras esferas da vida. Ao promover a autonomia e a habilidade de planejar de forma estratégica, ela contribui para a estabilidade econômica geral, impulsionando o crescimento sustentável das empresas, o desenvolvimento de políticas mais eficazes e uma sociedade mais resiliente e preparada para lidar com desafios diversos.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={12} className="mb-4">
                            <Card border="#213740" style={card}>
                                <Card.Body className={cardBody}>
                                    <Card.Img id='card-img' src="/img/previdencia.png" alt="Imagem do artigo investimento para todos" />

                                    <Card.Title className='text-center'>A EDUCAÇÃO FINANCEIRA PERMITE:</Card.Title>
                                    <Card.Text className="fs-5 p-3" style={{ textAlign: "justify" }}>
                                        <ul>
                                            <p> < Money size={20} className='text-primary' />Reduz o Estresse Financeiro através do conhecimento adequado se reduz a ansiedade associada a questões monetárias, permitindo lidar melhor com imprevistos e crises econômicas pessoais;</p>
                                            <p> < Money size={20} className='text-primary' />Estimula o Empreendedorismo que capacita indivíduos a identificar oportunidades de negócio, entender os riscos financeiros e tomar decisões mais sólidas ao iniciar empreendimentos próprios;</p>
                                            <p> < Money size={20} className='text-primary' />Evita o superendividamento precoce;</p>
                                            <p> < Money size={20} className='text-primary' />Favorece a Saúde Mental, pois com uma base financeira sólida, as pessoas conseguem focar mais na qualidade de vida, reduzindo problemas relacionados à saúde mental causados por problemas financeiros;</p>
                                            <p> < Money size={20} className='text-primary' />Promove a Independência Financeira, capacitando indivíduos a serem independentes financeiramente, não dependendo apenas de fontes externas de renda, o que proporciona liberdade e autonomia;</p>
                                            <p> < Money size={20} className='text-primary' />Estimula a Poupança para Aposentadoria por meio da Educação financeira que incentiva o planejamento a longo prazo, garantindo uma aposentadoria mais tranquila e segura;</p>
                                            <p> < Money size={20} className='text-primary' />Contribui para a Sustentabilidade ao entender como o dinheiro impacta o mundo permite escolhas financeiras mais conscientes, como investimentos em empresas e projetos sustentáveis;</p>
                                            <p> < Money size={20} className='text-primary' />Canal significativo para alcançar uma sociedade mais igualitária e inclusiva;</p>
                                            <p> < Money size={20} className='text-primary' />Aumenta a Eficiência no Uso de Recursos, pois ensina a otimizar recursos disponíveis, evitando desperdícios e contribuindo para uma economia mais sustentável;</p>
                                            <p> < Money size={20} className='text-primary' />Melhora Relações Interpessoais com o entendimento mútuo sobre finanças em relacionamentos ajuda a evitar conflitos e estabelecer metas financeiras comuns;</p>
                                            <p> < Money size={20} className='text-primary' />Amplia Oportunidades de Investimento Social ao aprender sobre instrumentos financeiros, permitindo direcionar investimentos para causas sociais, contribuindo para o bem-estar coletivo.</p>
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
