import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Content from '../layouts/Content';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Sobre = () => {
    return (
        <>
            <Header />
            <div className="main">
                <Content>
                    <Container fluid="md">
                        <div class="jumbotron text-center">
                            <h1>Sobre o CashWise</h1>
                        </div>
                        <Row>
                            <Col >1dfdksjfhsd</Col>
                        </Row>
                    </Container>


                </Content>
            </div>

            <Footer />

        </>
    );
}

export default Sobre;