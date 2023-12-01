import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Prev = () => {

    const divStyle = {
        padding: '2rem 0',
        width: '100%',
        backgroundSize: 'contain',
        backgroundPosition: 'center',

    }
    const colorBody = {
        backgroundImage: 'url("img/moldura.png")',
    }


    return (
        <>
            <Header />
            <div style={colorBody}>
                <div className="bg-secondary text-white text-center py-5">
                    <h1>Previdência</h1>
                    <h2 style={{ color: '#AEF2C6' }}>Previdência Social e Previdência Privada</h2>
                </div>

                <Container className="mt-5 mb-5">
                    <Row className='bg-light px-1 py-3'>
                        <Col md={12} className="mb-4">
                            <Card border="#213740" style={{ borderWidth: '3px' }}>
                                <Card.Body>
                                    <Card.Img id='card-img' style={{ width: "rem", float: "left" }} src="img/prev3.png" alt="Imagem do artigo Previdência" />
                                    <Card.Title className='fs-4 p-1 bg-info rounded-3 mb-3' style={{ textAlign: "center" }}>Investir em Previdência</Card.Title>
                                    <Card.Text className='fs-5 p-3' style={{ textAlign: "justify" }}>
                                        <p className='fs-5'> Para garantir uma vida financeira saudável, é importante ter uma combinação de renda ativa e passiva. A renda ativa é importante para garantir o sustento
                                            diário e a renda passiva pode ser utilizada para complementar a renda ativa e garantir um futuro mais tranquilo.</p>
                                        <p className='fs-5'> Nesse módulo queremos dar ênfase em uma parte muito importante da renda passiva que é a Previdência Social. A Previdência Social é um seguro público que
                                            garante renda aos seus contribuintes, quando esses por algum motivo de saúde ou acidentes de trabalho ficam impossibilitados de ter uma renda ativamente e
                                            também quando chega a hora de sua aposentadoria.</p>
                                        <p className='fs-5'> Todos os trabalhadores, sejam da iniciativa privada, seja do serviço público ou mesmo empresários, são automaticamente filiados a um Regime Previdenciário,
                                            seja o Regime Geral (INSS), seja a um Regime Próprio (Servidor Público Estatutário), que assim podem contribuir com o regime e garantir uma renda passiva,
                                            no caso de imprevistos como doenças, acidentes e outros eventos inesperados, além de garantir uma renda futura no caso da aposentadoria.</p>
                                        <p className='fs-5'> A partir da Emenda Constitucional 103/2019 (
                                            <a href="https://www.planalto.gov.br/ccivil_03/Constituicao/Emendas/Emc/emc103.htm" rel='noreferrer' target="_blank">
                                                Emenda Constitucional 103/2019
                                            </a>
                                            ), que entrou em vigor em 13 de novembro de 2019, <strong>o cálculo dos benefícios de Auxílio Doença e aposentadoria para</strong> para os trabalhadores que ingressaram no sistema previdenciário após a vigência da reforma <strong>mudou</strong> em relação ao modelo anterior.</p>
                                        <p className='fs-5'> Agora, o trabalhador precisará atingir a <strong>idade mínima</strong> de 62 anos, se mulher, e 65 anos, se homem, além de ter no mínimo 15 anos de <strong>contribuição</strong> para a Previdência Social, se mulher e 20 anos no caso de homem. Para esses casos, o cálculo do benefício previdenciário passou a ser feito com base na média aritmética simples de todos os salários de contribuição do trabalhador desde julho de 1994, corrigidos mês a mês pelo fator de atualização fornecido pelo governo, com base no inpc acumulado. O valor do benefício, então, será equivalente a 60% da média salarial, acrescido de 2% para cada ano de contribuição que exceder o tempo mínimo de 15 ou 20 anos, respectivamente, se mulher ou homem, para o caso de aposentadoria e 91% da média salarial, para o caso de Auxílio Doença.</p>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6} md={6} className="mb-4">
                            <Card border="#213740" style={{ borderWidth: '3px' }}>
                                <Card.Body>
                                    <Card.Img id='card-img' src="img/previdencia.png" alt="Imagem do artigo Previdência" />
                                    <Card.Title className='fs-4 p-1 bg-info rounded-3 mb-3' style={{ textAlign: "center" }}>Previdência Social</Card.Title>
                                    <Card.Text className='fs-5 p-3' style={{ textAlign: "justify" }}>
                                        <p className='fs-5'>Previdência Social é um sistema público de seguridade social, onde os trabalhadores contribuem ao longo da vida e, quando se aposentam, recebem benefícios do governo. É uma forma de renda passiva, mas o valor pode ser limitado.</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6} md={6} className="mb-4">
                            <Card border="#213740" style={{ borderWidth: '3px' }}>
                                <Card.Body>
                                    <Card.Img id='card-img' src="img/prev1.png" alt="Imagem do artigo Previdência" />
                                    <Card.Title className='fs-4 p-1 bg-info rounded-3 mb-3' style={{ textAlign: "center" }}>Previdência Privada</Card.Title>
                                    <Card.Text className='fs-5 p-3' style={{ textAlign: "justify" }}>
                                        <p className='fs-5'>Previdência Privada é uma opção voluntária, onde você contribui regularmente para uma instituição financeira, como um banco ou seguradora, para receber benefícios na aposentadoria. Pode ser uma alternativa para complementar a Previdência Social.</p>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col md={12} className="mb-4">
                            <Card border="#213740" style={{ borderWidth: '3px' }}>
                                <Card.Body>
                                    <Card.Img id='card-img' src="img/prev2.png" alt="Imagem do artigo Previdência" />
                                    <Card.Title className='fs-4 p-1 bg-info rounded-3 mb-3' style={{ textAlign: "center" }}>Tesouro Renda+ (Tesouro Direto)</Card.Title>
                                    <Card.Text className='fs-5 p-3' style={{ textAlign: "justify" }}>
                                        <p className='fs-5'>O Tesouro Renda+ é um programa do governo que permite que as pessoas comprem títulos públicos. </p>
                                        <p className='fs-5'>O Tesouro Renda+ é um programa do governo que permite que as pessoas comprem títulos públicos. </p>
                                        <p className='fs-5'>Quando você compra um título do Tesouro, está emprestando dinheiro ao governo e, em troca, recebe juros. É uma forma de investimento em renda fixa, com diferentes opções de títulos de acordo com o prazo e a rentabilidade desejados.</p>
                                        <p className='fs-5'>É importante lembrar que todos os investimentos têm riscos, e é fundamental fazer pesquisas, entender seus objetivos financeiros e talvez buscar aconselhamento de um profissional financeiro antes de começar a investir. Além disso, a educação financeira contínua é crucial para tomar decisões informadas sobre o seu dinheiro ao longo da vida.</p>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Footer anchor="top" />
            </div >
        </>
    );

}



export default Prev;