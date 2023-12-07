import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaMoneyBillWheat as Dica } from "react-icons/fa6";
import CoinText from '../../utils/CoinText';
import './Artigos.css';

const Dicas = () => {

    const card = {
        borderWidth: '3px',
    }
    const divStyle = {
        width: '100%',
        backgroundImage: 'url("img/moldura.png")',
        backgroundSize: 'contain',
        backgroundPosition: 'center',

    }
    const colorBody = {
        backgroundImage: 'url("img/moldura.png")',
    }

    return (
        <div id='topo' style={colorBody}>
            <Header />
            
            <header className="bg-secondary text-white text-center py-5 p-1">
                <h1 className='display-2'>Dicas</h1>
                <h2 style={{ color: '#AEF2C6' }}>Saiba Como Organizar suas Finanças</h2>
            </header>

            <main className="container mt-5 mb-5">
                <Row className='px-1 py-3'>
                    <Col md={12} className="mb-4">
                        <article>
                            <Card style={card} >
                                <Card.Body>
                                    <Card.Title className='text-center p-3 bg-info rounded-3'>Gestão Financeira Pessoal</Card.Title>
                                    <Card.Img id='card-img' src="img/dicasorg.png" alt="Imagem do artigo dicas" />
                                    <Card.Text style={{ textAlign: "justify" }}>
                                        <p>A economia financeira <CoinText>não se limita apenas a administrar o dinheiro</CoinText>, mas também envolve entender como cada escolha afeta nossas finanças a curto e longo prazo.</p>
                                        <p>Trata-se de um guia para uma vida financeira estável e próspera, onde cada passo é meticulosamente planejado para assegurar não apenas o bem-estar atual, mas também a segurança e o crescimento financeiro futuro.</p>
                                        <p>É o conjunto de estratégias inteligentes e hábitos responsáveis que pavimentam o caminho para alcançar metas, realizar sonhos e lidar com imprevistos sem comprometer o equilíbrio financeiro.</p>
                                        <p>Ao adotar essa mentalidade e cultivar essas práticas, não apenas se prepara para emergências financeiras, mas se desenvolve uma base sólida para aspirações maiores, permitindo a construção de um futuro financeiro seguro e a realização de uma variedade de metas, sejam elas a aquisição de bens, a liberdade para escolhas profissionais ou a construção de um legado para as próximas gerações.</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </article>
                    </Col>

                    <Col lg={6} md={6} className="mb-4">
                        <article>
                            <Card style={card}>
                                <Card.Body>
                                    <Card.Title className='text-center p-3 bg-info rounded-3'>Dicas Orçamentárias</Card.Title>
                                    <Card.Text>
                                        <ul className='list-unstyled'>
                                            <li className='p-1'><Dica size={20} style={{ color: '#5BD992' }} /> Planeje seu orçamento mensal para garantir que suas despesas não ultrapassem sua renda;</li>
                                            <li className='p-1'><Dica size={20} style={{ color: '#5BD992' }} /> Estabeleça metas financeiras realistas e crie um plano para alcançá-las gradualmente;</li>
                                            <li className='p-1'><Dica size={20} style={{ color: '#5BD992' }} /> Mantenha um registro detalhado de todas as suas despesas para identificar áreas de oportunidade de economia;</li>                                            <li className='p-1'>< Dica size={20} style={{ color: '#5BD992' }} /> Priorize o pagamento de dívidas de juros elevados para reduzir custos a longo prazo;</li>
                                            <li className='p-1'><Dica size={20} style={{ color: '#5BD992' }} /> Crie uma reserva de emergência equivalente a pelo menos três meses de despesas para lidar com imprevistos;</li>
                                            <li className='p-1'><Dica size={20} style={{ color: '#5BD992' }} /> Considere investir parte de sua renda para construir um futuro financeiramente seguro;</li>
                                            <li className='p-1'><Dica size={20} style={{ color: '#5BD992' }} /> Evite compras por impulso; reflita sobre a necessidade real do item antes de adquiri-lo;</li>
                                            <li className='p-1'><Dica size={20} style={{ color: '#5BD992' }} /> Reveja regularmente seus gastos e ajuste seu orçamento conforme necessário para atingir suas metas;</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </article>
                    </Col>

                    <Col lg={6} md={6} className="mb-4">
                        <article>
                            <Card style={card}>
                                <Card.Body>
                                    <Card.Title className='text-center p-3 bg-info rounded-3'>Dicas de Replanejamento</Card.Title>
                                    <Card.Text>
                                        <ul className='list-unstyled'>
                                            <li className='p-1'><Dica size={20} style={{ color: '#5BD992' }} /> Negocie tarifas e taxas para garantir que está obtendo o melhor valor em serviços;</li>
                                            <li className='p-1'><Dica size={20} style={{ color: '#5BD992' }} /> Estabeleça limites claros para gastos em categorias específicas e adira a eles para manter o controle financeiro;</li>
                                            <li className='p-1'><Dica size={20} style={{ color: '#5BD992' }} /> Esteja ciente das promoções e ofertas, mas não se deixe levar por elas se não estiverem alinhadas com suas prioridades financeiras;</li>
                                            <li className='p-1'><Dica size={20} style={{ color: '#5BD992' }} /> Desenvolva o hábito de pesquisar preços antes de fazer grandes compras para garantir que está obtendo o melhor negócio;</li>
                                            <li className='p-1'><Dica size={20} style={{ color: '#5BD992' }} /> Evite acumular dívidas desnecessárias; apenas tome empréstimos ou financiamentos quando absolutamente necessário;</li>
                                            <li className='p-1'><Dica size={20} style={{ color: '#5BD992' }} /> Incentive a comunicação aberta sobre finanças em sua família para garantir que todos estejam alinhados com os objetivos financeiros comuns.</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </article>
                    </Col>
                </Row>
            </main>

            <Footer anchor="topo" />
        </div>
    );
}


export default Dicas;