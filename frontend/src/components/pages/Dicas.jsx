import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Dicas = () => {

    const divStyle = {
        width: '100%',
        backgroundImage: 'url("img/papeldec.png")',
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

                    <article>

                        <Row className="align-items-left p-2"><h2 className='fw-bold text-center p-4'>Veja como organizar suas finanças:</h2>
                            <Col sm="6">
                                <img src="img/dicasorg.png" alt="Imagem do artigo dicas" style={{ width: '95%', height: 'auto', float: 'left', marginRight: '10px ' }} />
                            </Col>

                            <Col sm="6" className='px-2'>
                                
                                <p className='fs-4 p-3'>A economia financeira refere-se à gestão eficiente dos recursos monetários disponíveis, sendo um conjunto de práticas e estratégias que visa promover a estabilidade econômica pessoal, garantindo o equilíbrio entre o presente e o futuro financeiro.</p>
                            </Col>
                        </Row>

                        
                        <ul className='fs-4'>
                            <li>Planeje seu orçamento mensal para garantir que suas despesas não ultrapassem sua renda;</li>
                            <li>Estabeleça metas financeiras realistas e crie um plano para alcançá-las gradualmente;</li>
                            <li>Mantenha um registro detalhado de todas as suas despesas para identificar áreas de oportunidade de economia;</li>
                            <li>Priorize o pagamento de dívidas de juros elevados para reduzir custos a longo prazo;</li>
                            <li>Crie uma reserva de emergência equivalente a pelo menos três meses de despesas para lidar com imprevistos;</li>
                            <li>Considere investir parte de sua renda para construir um futuro financeiramente seguro;</li>
                            <li>Evite compras por impulso; reflita sobre a necessidade real do item antes de adquiri-lo;</li>
                            <li>Reveja regularmente seus gastos e ajuste seu orçamento conforme necessário para atingir suas metas;</li>
                            <li>Negocie tarifas e taxas para garantir que está obtendo o melhor valor em serviços;</li>
                            <li>Estabeleça limites claros para gastos em categorias específicas e adira a eles para manter o controle financeiro;</li>
                            <li>Esteja ciente das promoções e ofertas, mas não se deixe levar por elas se não estiverem alinhadas com suas prioridades financeiras;</li>
                            <li>Desenvolva o hábito de pesquisar preços antes de fazer grandes compras para garantir que está obtendo o melhor negócio;</li>
                            <li>Evite acumular dívidas desnecessárias; apenas tome empréstimos ou financiamentos quando absolutamente necessário;</li>
                            <li>Incentive a comunicação aberta sobre finanças em sua família para garantir que todos estejam alinhados com os objetivos financeiros comuns.</li>
                        </ul>

                    </article>


                </div>

            </main>
            <Footer />
        </>
    );
}

export default Dicas;