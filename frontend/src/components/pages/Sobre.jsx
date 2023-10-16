import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Content from '../layouts/Content';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


import './Sobre.css';


const Sobre = () => {
    return (
        <>
            <Header />
            <div className="container-fluid" id='main'>
                <Content>
                    <div className="jumbotron text-center" id='topo'>
                        <h1 >Sobre o CashWise</h1>
                    </div>
                    <Container fluid className='row'>
                        <Col xs={9}><p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, reiciendis! Iusto perspiciatis commodi animi. Quo dicta aliquam magnam iure, placeat recusandae laudantium odio nostrum rerum similique reiciendis consequatur, ipsum doloremque?</p></Col>
                        <Col>
                                <img src="/img/fintechs-transparente.webp" alt="" className='figure-img img-fluid rounded' />
                        </Col>
                    </Container>

                    <Container fluid id='cardsAlunos' className='row mb-5'>

                        <div className="col-sm-2 col-md-4" >
                            <Card className="card">
                                <Card.Img variant="top" src="/img/aguia.jpg" />
                                <Card.Body>
                                    <Card.Title>Card Title 1</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-sm-2 col-md-4">
                            <Card>
                                <Card.Img variant="top" src="/img/aguia.jpg" />
                                <Card.Body>
                                    <Card.Title>Card Title 2</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-sm-2 col-md-4">
                            <Card>
                                <Card.Img variant="top" src="/img/aguia.jpg" />
                                <Card.Body>
                                    <Card.Title>Card Title 3</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-sm-2 col-md-4">
                            <Card>
                                <Card.Img variant="top" src="/img/aguia.jpg" />
                                <Card.Body>
                                    <Card.Title>Card Title 4</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-sm-2 col-md-4">
                            <Card>
                                <Card.Img variant="top" src="/img/aguia.jpg" />
                                <Card.Body>
                                    <Card.Title>Card Title 5</Card.Title>
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