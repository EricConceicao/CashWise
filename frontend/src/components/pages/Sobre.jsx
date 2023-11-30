import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Content from '../layouts/Content';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Quiz from '../layouts/Quizzz';
import EmojiPicker from 'emoji-picker-react';

const containerStyle = {
    backgroundImage: 'linear-gradient(to bottom, #213740, #5BD992, #AEF2C6)',
    color: 'white',
};
const titleStyle = {
    padding: '10px',
};

const cardStyle = {
    min: '12rem',
    max: '20rem',
    minHeight: '28rem',
};

const Sobre = () => {
    return (
        <>
            <Header />
            <main className="container-fluid" id='main' style={containerStyle}>
                <Content>
                    <Quiz/>
                    <Container className="p-0" id='text'>
                        <div className="jumbotron text-center" id='title' >
                            <h1 className="p-2">Sobre o CashWise</h1>
                        </div>
                        <div className="clearfix">
                            <Image src="/img/sobre-removebg-preview.png" className="col-md-6 float-md-end mb-3 ms-md-3 " alt="..." fluid />

                            <p>
                                A Educação financeira é mais do que guardar dinheiro, é sobre saber usá-lo. Buscando um presente consciente e um futuro tranquilo. A CashWise fornece uma plataforma de educação financeira de aprendizado simples e direta para controlar seus gastos, aprender sobre investimentos.
                            </p>

                            <p>
                                É buscar uma melhor qualidade de vida tanto hoje quanto no futuro, proporcionando a segurança material necessária para aproveitar os prazeres da vida e ao mesmo tempo obter uma garantia para eventuais imprevistos.
                            </p>

                            <p>
                                O nosso objetivo aqui é mostrar que pequenas mudanças e escolhas conscientes trarão equilíbrio na sua vida financeira. Passo a passo, com perseverança e sem esperar milagres se tornará o dono do seu futuro.
                            </p>
                        </div>

                    </Container>

                    <Container fluid id='cardsAlunos' className='row pb-2 justify-content-around'>
                        <div className="col-sm col-md-4 col-lg" >
                            <Card className="card my-3">
                                <Card.Img style={cardStyle} variant="top" src="/img/redimensionadas/ericArte.jpg" />
                                <Card.Body>
                                    <Card.Title>Eric</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-sm col-md-4 col-lg">
                            <Card className="card my-3">
                                <Card.Img style={cardStyle} variant="top" src="/img/redimensionadas/semaArte.jpg" />
                                <Card.Body>
                                    <Card.Title>Maria Selma</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-sm col-md-4 col-lg">
                            <Card className="card my-3">
                                <Card.Img style={cardStyle} variant="top" src="/img/redimensionadas/renatoArte.jpg" />
                                <Card.Body>
                                    <Card.Title>Renato</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-sm col-md-4 col-lg">
                            <Card className="card my-3">
                                <Card.Img style={cardStyle} variant="top" src="/img/redimensionadas/tatianaArte.jpg" />
                                <Card.Body>
                                    <Card.Title>Tatiana</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-sm col-md-4 col-lg">
                            <Card className="card my-3">
                                <Card.Img style={cardStyle} variant="top" src="/img/redimensionadas/valdemirArte1.jpg" />
                                <Card.Body>
                                    <Card.Title>Valdemir</Card.Title>
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