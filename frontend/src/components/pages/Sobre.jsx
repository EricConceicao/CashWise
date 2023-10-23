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

const cardStyle = {
    min: '12rem',
    max: '20rem',
};


const Sobre = () => {
    return (
        <>
            <Header />
            <main className="container-fluid" id='main' style={containerStyle}>
                <Content>
                    <Container className="p-0" id='text'>
                        <div className="jumbotron text-center" id='title' >
                            <h1 className="p-2">Sobre o CashWise</h1>
                        </div>

                        <div className="text-center">
                            <img src="/img/sobre-removebg-preview.png" className="col-md-6 float-md-end mb-3 ms-md-3" alt="..." width="100%" />

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugit, sint maxime vitae sequi animi ratione modi nemo nesciunt reprehenderit! Assumenda quis amet impedit aliquid soluta aliquam recusandae suscipit exercitationem.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatum est. Eos, dolore rerum eveniet ab ipsam quod. Sed quibusdam, placeat dignissimos eveniet nihil inventore commodi natus maiores ea consequuntur, autem modi facere odit vero.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nesciunt veniam obcaecati, nihil nisi adipisci doloribus minima veritatis totam saepe in numquam maiores possimus fugit aliquid illum. Nostrum?
                            </p>
                        </div>

                    </Container>

                    <Container fluid id='cardsAlunos' className='row justify-content-around'>
                        <div className="col-sm mb-2">
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

                        <div className="col-sm mb-2">
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

                        <div className="col-sm mb-2">
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

                        <div className="col-sm mb-2">
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

                        <div className="col-sm mb-2">
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
            </main>

            <Footer anchor="topo" />
        </>
    );
}

export default Sobre;