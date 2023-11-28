import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Prev = () => {

    const divStyle = {
        padding: '2rem 0',
        width: '100%',
        backgroundImage: 'url("img/moldura.png")',
        backgroundSize: 'contain',
        backgroundPosition: 'center',

    }

    const colorBody = {
        backgroundImage: "linear-gradient(150deg, #fff, var(--cw-primary), #213740 )"
    };


    return (
        <>
            <Header />
            <div style={colorBody}>
                <div className="bg-secondary text-white text-center py-5">
                    <h1>Previdência</h1>
                    <h2 style={{ color: '#AEF2C6' }}>Previdência Social e Previdência Privada</h2>
                </div>

                <Container className="mt-5">
                    <Row className='bg-light px-1 py-3'>
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