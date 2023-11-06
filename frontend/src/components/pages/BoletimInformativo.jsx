//import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const BoletimInformativo = () => {
  const cardBody = {
    minHeight: "28rem"
  }

  const cardImg = {
    maxHeight: "16rem"
  }

  const colorBody = {
    backgroundImage: "linear-gradient(180deg, #fff, var(--cw-primary) )"
  }

 
  return (
    <>
      <Header />
      <div style={colorBody}>
        <div className="bg-secondary text-white text-center py-5">
          <h1>Boletim Informativo</h1>
          <p>Artigos interessantes sobre investimentos para você.</p>
        </div>

        <Container className="mt-5">
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <Card style={cardBody}>
                <Card.Img style={cardImg} src="/img/poupanca.png" alt="Imagem do artigo poupança" />
                <Card.Body className={cardBody}>
                  <Card.Title>Poupança</Card.Title>
                  <Card.Text>Conheça as vantagens e desvantagens de um dos investimentos mais tradicionais.</Card.Text>
                  <Button variant="primary"><Link to="/poupanca">Leia Mais</Link></Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card style={cardBody}>
                <Card.Img style={cardImg} src="img/investimentos.png" alt="Imagem do artigo tipos de investimentos" />
                <Card.Body className={cardBody}>
                  <Card.Title>Principais Tipos de Investimentos</Card.Title>
                  <Card.Text>Os principais investimentos possuem diferentes níveis de risco e retorno.</Card.Text>
                  <Button variant="primary">Leia Mais</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card style={cardBody}>
                <Card.Img style={cardImg} src="/img/financas.png" alt="Imagem do artigo investimento para todos" />
                <Card.Body className={cardBody}>
                  <Card.Title>Investimentos para Todos</Card.Title>
                  <Card.Text>Desvendando alguns conceitos financeiros.</Card.Text>
                  <Button variant="primary">Leia Mais</Button>
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

export default BoletimInformativo;
