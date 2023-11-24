import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { Row, Col, Card } from 'react-bootstrap';
import { FaMoneyBillWheat as Dica } from "react-icons/fa6";
import './Artigos.css';

const Dicas = () => {

    const card = {
        minHeight: "28rem",
        maxHeight: "20rem",
        borderWidth: '3px',
        overflow: 'auto',
    }

    const divStyle = {
        width: '100%',
        backgroundImage: 'url("img/moldura.png")',
        backgroundSize: 'contain',
        backgroundPosition: 'center',

    };


    return (
        <>
            <Header />
            <main style={divStyle}>

                <header className="bg-secondary text-white text-center py-4 mb-3">
                    <h1 className='display-1'>Dicas</h1>
                </header>
                <div className="container p-5 bg-light text-justfy">

                    <Row className="align-items-left p-2">
                        <h2 className='fw-bold text-center p-4'>Veja como organizar suas finanças:</h2>
                        <Col md={12} className="mb-4">
                            <Card style={card} >
                                <Card.Body>
                                    <Card.Img id='card-img' src="img/dicasorg.png" alt="Imagem do artigo dicas" />
                                    <Card.Text className='fs-3' style={{ textAlign: "justify" }}>A economia financeira refere-se à gestão eficiente dos recursos monetários disponíveis, sendo um conjunto de práticas e estratégias que visa promover a estabilidade econômica pessoal, garantindo o equilíbrio entre o presente e o futuro financeiro.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6} md={6} className="mb-4">
                            <Card style={card}>
                                <Card.Body>

                                    <Card.Text>
                                        <ul className='fs-4'>
                                            <p>< Dica size={20} /> Planeje seu orçamento mensal para garantir que suas despesas não ultrapassem sua renda;</p>
                                            <p>< Dica size={20} /> Estabeleça metas financeiras realistas e crie um plano para alcançá-las gradualmente;</p>
                                            <p>< Dica size={20} /> Mantenha um registro detalhado de todas as suas despesas para identificar áreas de oportunidade de economia;</p>
                                            <p>< Dica size={20} /> Priorize o pagamento de dívidas de juros elevados para reduzir custos a longo prazo;</p>
                                            <p>< Dica size={20} /> Crie uma reserva de emergência equivalente a pelo menos três meses de despesas para lidar com imprevistos;</p>
                                            <p>< Dica size={20} /> Considere investir parte de sua renda para construir um futuro financeiramente seguro;</p>
                                            <p>< Dica size={20} /> Evite compras por impulso; reflita sobre a necessidade real do item antes de adquiri-lo;</p>
                                            <p>< Dica size={20} /> Reveja regularmente seus gastos e ajuste seu orçamento conforme necessário para atingir suas metas;</p>

                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6} md={6} className="mb-4">
                            <Card style={card}>
                                <Card.Body>
                                    <Card.Text>
                                        <ul className='fs-4'>
                                            <p>< Dica size={20} />  Negocie tarifas e taxas para garantir que está obtendo o melhor valor em serviços;</p>
                                            <p>< Dica size={20} />  Estabeleça limites claros para gastos em categorias específicas e adira a eles para manter o controle financeiro;</p>
                                            <p>< Dica size={20} />  Esteja ciente das promoções e ofertas, mas não se deixe levar por elas se não estiverem alinhadas com suas prioridades financeiras;</p>
                                            <p>< Dica size={20} />  Desenvolva o hábito de pesquisar preços antes de fazer grandes compras para garantir que está obtendo o melhor negócio;</p>
                                            <p>< Dica size={20} />  Evite acumular dívidas desnecessárias; apenas tome empréstimos ou financiamentos quando absolutamente necessário;</p>
                                            <p>< Dica size={20} />  Incentive a comunicação aberta sobre finanças em sua família para garantir que todos estejam alinhados com os objetivos financeiros comuns.</p>

                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Dicas;