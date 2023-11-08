import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Prev = () => {

    const divStyle = {
        width: '100%',
        backgroundImage: 'url("img/moldura.png")',
        backgroundSize: 'contain',
        backgroundPosition: 'center',

    };


    return (
        <>
            <Header />
            <div style={divStyle}>
                <div className="bg-secondary text-white text-center py-5">
                    <h1>Previdência</h1>
                </div>

                <Container className="mt-5">
                    <Row>
                        <Col md={12} className="mb-4">
                            <Card>

                                <Card.Body>
                                    <Card.Img src="img/previdencia.png" alt="Imagem do artigo poupança" />
                                    <Card.Title><h2>Previdência Social e Previdência Privada:</h2></Card.Title>
                                    <Card.Text>

                                        <h3>Previdência Social</h3>

                                        <p>Previdência Social é um sistema público de seguridade social, onde os trabalhadores contribuem ao longo da vida e, quando se aposentam, recebem benefícios do governo. É uma forma de renda passiva, mas o valor pode ser limitado.</p>

                                        <h3>Previdência Privada</h3>
                                        <p>Previdência Privada é uma opção voluntária, onde você contribui regularmente para uma instituição financeira, como um banco ou seguradora, para receber benefícios na aposentadoria. Pode ser uma alternativa para complementar a Previdência Social.</p>

                                        <h3>Tesouro Renda+ (Tesouro Direto)</h3>
                                        <p>O Tesouro Renda+ é um programa do governo que permite que as pessoas comprem títulos públicos. </p>
                                        <p>Quando você compra um título do Tesouro, está emprestando dinheiro ao governo e, em troca, recebe juros. É uma forma de investimento em renda fixa, com diferentes opções de títulos de acordo com o prazo e a rentabilidade desejados.</p>
                                        <p>É importante lembrar que todos os investimentos têm riscos, e é fundamental fazer pesquisas, entender seus objetivos financeiros e talvez buscar aconselhamento de um profissional financeiro antes de começar a investir. Além disso, a educação financeira contínua é crucial para tomar decisões informadas sobre o seu dinheiro ao longo da vida.
                                        </p>
                                        <h5>Faça a sua Simulação Previdenciária Aqui!</h5>


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

export default Prev;