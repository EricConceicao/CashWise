import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Content from '../layouts/Content';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const containerStyle = {
    backgroundImage: 'linear-gradient(to bottom, #213740, #5BD992, #AEF2C6)',
    color: 'white',
};
const titleStyle = {
    padding: '10px',
    margin: '10px'
}

const cardStyle = {
    min: '12rem',
    max: '20rem',
    margin: '1rem',
};


const Sobre = () => {
    return (
        <>
            <Header />
            <div className="container-fluid" id='main' style={containerStyle}>
                <Content >
                    <Container fluid className='row' id='main'>
                        <Col xs={12}>
                            <div className="jumbotron text-center" id='topo' >
                                <h1 style={titleStyle}>Sobre o CashWise</h1>
                            </div>
                        </Col>
                        <Col xs={9}>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, reiciendis! Iusto perspiciatis commodi animi. Quo dicta aliquam magnam iure, placeat recusandae laudantium odio nostrum rerum similique reiciendis consequatur, ipsum doloremque?</p>
                        </Col>
                        <Col>
                            <img src="/img/fintechs-transparente.webp" alt="" className='figure-img img-fluid rounded' />
                        </Col>
                    </Container>

                    <Container fluid id='cardsAlunos' className='row mb-2 justify-content-around'>

                        <div className="col-lg-2" >
                            <Card className="card" style={cardStyle}>
                                <Card.Img variant="top" src="/img/aguia.jpg" />
                                <Card.Body>
                                    <Card.Title>Eric</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-lg-2">
                            <Card className="card" style={cardStyle}>
                                <Card.Img variant="top" src="/img/aguia.jpg" />
                                <Card.Body>
                                    <Card.Title>Maria Selma</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-lg-2">
                            <Card className="card" style={cardStyle}>
                                <Card.Img variant="top" src="/img/aguia.jpg" />
                                <Card.Body>
                                    <Card.Title>Renato</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-lg-2">
                            <Card className="card" style={cardStyle}>
                                <Card.Img variant="top" src="/img/aguia.jpg" />
                                <Card.Body>
                                    <Card.Title>Tatiana</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-lg-2">
                            <Card className="card" style={cardStyle}>
                                <Card.Img variant="top" src="/img/aguia.jpg" />
                                <Card.Body>
                                    <Card.Title>Valdimir</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                    </Container>

                </Content>
            </div>

            <Footer anchor="topo" />

        </>
    );
}

export default Sobre;