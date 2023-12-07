//import React from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import { Container, Row, Col, Card, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FcMoneyTransfer as Money } from "react-icons/fc";

const Educacao = () => {
    const card = {
        borderWidth: '3px'
    }

    const colorBody = {
        backgroundImage: 'url("img/moldura.png")',
    }


    return (
        <div id='topo' style={colorBody}>
            <Header />
            <header className="bg-secondary text-white text-center py-5">
                <h1 className='display-2'>Educação Financeira</h1>
                <h2 style={{ color: '#AEF2C6' }}> Aprenda, Planeje e Conquiste sua Liberdade Financeira</h2>
            </header>

            <main className="container mt-5 mb-5">
                <Row className='px-1 py-3'>
                    <Col lg={6} md={6} className="mb-4">
                        <section>
                            <Card border="#213740" style={card} >
                                <Card.Body>
                                    <Card.Title className='text-center p-3 bg-info rounded-3'>O que é Educação Financeira?</Card.Title>
                                    <Card.Img id='card-img' src="img/ed.png" alt="Imagem do artigo educação financeira" />
                                    <Card.Text style={{ textAlign: "justify" }}>
                                        <p>A educação financeira engloba o conjunto de conhecimentos e habilidades fundamentais para administrar as finanças 
                                        de forma abrangente. Vai muito além do simples controle dos gastos diários, envolvendo também a capacidade de 
                                        planejar, criar orçamentos realistas, cultivar hábitos de economia, poupança e até mesmo explorar estratégias de 
                                        investimento. Ela capacita as pessoas a gerenciarem seus recursos de maneira mais eficiente, promovendo escolhas 
                                        conscientes e equilibradas em relação ao dinheiro, o que é essencial para alcançar metas financeiras e manter uma 
                                        estabilidade econômica a longo prazo.</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </section>
                    </Col>

                    <Col lg={6} md={6} className="mb-4">
                        <section>
                            <Card border="#213740" style={card}>
                                <Card.Body>
                                    <Card.Title className='text-center p-3 bg-info rounded-3'>A Importância da Educação Financeira</Card.Title>
                                    <Card.Img id='card-img' src="/img/educ.png" alt="Imagem do artigo Educação Financeira" />
                                    <Card.Text style={{ textAlign: "justify" }}>
                                        <p>Quando a população tem um nível mais avançado de educação financeira, os 
                                        benefícios se estendem para além do indivíduo. Esse conhecimento robusto não só impacta a vida pessoal, 
                                        mas também influencia positivamente empresas, líderes governamentais e a sociedade como um todo. A educação 
                                        financeira atua como um catalisador, capacitando as pessoas a tomarem decisões mais informadas e conscientes 
                                        não apenas em questões monetárias, mas também em outras esferas da vida. Ao promover a autonomia e a habilidade de 
                                        planejar de forma estratégica, ela contribui para a estabilidade econômica geral, impulsionando o crescimento sustentável 
                                        das empresas, o desenvolvimento de políticas mais eficazes e uma sociedade mais resiliente e preparada para lidar com 
                                        desafios diversos.</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </section>
                    </Col>

                    <Col md={12} className="mb-4">
                        <section>
                            <Card border="#213740" style={card}>
                                <Card.Body>
                                    <Card.Title className='text-center p-3 bg-info rounded-3'>A Educação Financeira Permite</Card.Title>
                                    <Card.Img id='card-img' src="/img/investimentos.png" alt="Imagem do artigo investimento para todos" />
                                    <Card.Text style={{ textAlign: "justify" }}>
                                        <ul className='list-unstyled'>
                                            <li><Money size={22} className='text-primary' /> Reduzir o Estresse Financeiro através do conhecimento adequado se reduz a ansiedade associada a questões monetárias, permitindo lidar melhor com imprevistos e crises econômicas pessoais;</li>
                                            <li><Money size={22} className='text-primary' /> Estimular o Empreendedorismo que capacita indivíduos a identificar oportunidades de negócio, entender os riscos financeiros e tomar decisões mais sólidas ao iniciar empreendimentos próprios;</li>
                                            <li><Money size={22} className='text-primary' /> Evitar o superendividamento precoce;</li>
                                            <li><Money size={22} className='text-primary' /> Favorecer a Saúde Mental, pois com uma base financeira sólida, as pessoas conseguem focar mais na qualidade de vida, reduzindo problemas relacionados à saúde mental causados por problemas financeiros;</li>
                                            <li><Money size={22} className='text-primary' /> Promover a Independência Financeira, capacitando indivíduos a serem independentes financeiramente, não dependendo apenas de fontes externas de renda, o que proporciona liberdade e autonomia;</li>
                                            <li><Money size={22} className='text-primary' /> Estimular a Poupança para Aposentadoria por meio da Educação financeira que incentiva o planejamento a longo prazo, garantindo uma aposentadoria mais tranquila e segura;</li>
                                            <li><Money size={22} className='text-primary' /> Contribuir para a Sustentabilidade ao entender como o dinheiro impacta o mundo permite escolhas financeiras mais conscientes, como investimentos em empresas e projetos sustentáveis;</li>
                                            <li><Money size={22} className='text-primary' /> Canal significativo para alcançar uma sociedade mais igualitária e inclusiva;</li>
                                            <li><Money size={22} className='text-primary' /> Aumentar a Eficiência no Uso de Recursos, pois ensina a otimizar recursos disponíveis, evitando desperdícios e contribuindo para uma economia mais sustentável;</li>
                                            <li><Money size={22} className='text-primary' /> Melhorar Relações Interpessoais com o entendimento mútuo sobre finanças em relacionamentos ajuda a evitar conflitos e estabelecer metas financeiras comuns;</li>
                                            <li><Money size={22} className='text-primary' /> Ampliar Oportunidades de Investimento Social ao aprender sobre instrumentos financeiros, permitindo direcionar investimentos para causas sociais, contribuindo para o bem-estar coletivo.</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </section>
                    </Col>
                </Row>
            </main>

            <Footer anchor='topo' />
        </div>  
    );
}

export default Educacao;
