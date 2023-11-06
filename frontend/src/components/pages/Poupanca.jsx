import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Poupanca = () => {

    return (
        <>
            <Header />
            <div>
                <div className="bg-secondary text-white text-center py-5">
                    <h1>Poupança</h1>
                    <p>Conheça as vantagens e desvantagens de um dos investimentos mais tradicionais.</p>
                </div>

                <Container className="mt-5">
                    <Row>
                        <Col md={12} className="mb-4">
                            <Card>
                                <Card.Img src="" alt="Imagem do artigo poupança" />
                                <Card.Body>
                                    <Card.Title>Poupança</Card.Title>
                                    <Card.Text>Conheça as vantagens e desvantagens de um dos investimentos mais tradicionais.</Card.Text>
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

export default Poupanca;