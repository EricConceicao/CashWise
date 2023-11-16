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
          <h2>Artigos interessantes sobre investimentos para você.</h2>
        </div>

        <Container className="mt-5">
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <Card style={cardBody}>
                <Card.Img style={cardImg} src="/img/poupanca.png" alt="Imagem do artigo poupança" />
                <Card.Body className={cardBody}>
                  <Card.Title>Poupança</Card.Title>
                  <Card.Text>Conheça as vantagens e desvantagens de um dos investimentos mais tradicionais.</Card.Text>
                  <Button variant="outline-success"><Link to="/poupanca"  style={{textDecoration: 'none', color: '#213740'}}>Leia Mais</Link></Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card style={cardBody}>
                <Card.Img style={cardImg} src="img/investimentos.png" alt="Imagem do artigo tipos de investimentos" />
                <Card.Body className={cardBody}>
                  <Card.Title>Principais Tipos de Investimentos</Card.Title>
                  <Card.Text>Os principais investimentos possuem diferentes níveis de risco e retorno.</Card.Text>
                  <Button variant="outline-success "><Link to="/investimentos" style={{textDecoration: 'none', color: '#213740'}}>Leia Mais</Link></Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card style={cardBody}>
                <Card.Img style={cardImg} src="/img/financas.png" alt="Imagem do artigo investimento para todos" />
                <Card.Body className={cardBody}>
                  <Card.Title>Investimentos para Todos</Card.Title>
                  <Card.Text>Desvendando alguns conceitos financeiros.</Card.Text>
                  <Button variant="outline-success"><Link to="/investodos"  style={{textDecoration: 'none', color: '#213740'}}>Leia Mais</Link></Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card style={cardBody}>
                <Card.Img style={cardImg} src="/img/previdencia.png" alt="Imagem do artigo investimento para todos" />
                <Card.Body className={cardBody}>
                  <Card.Title>Previdência</Card.Title>
                  <Card.Text>Investindo no seu Amanhã para um futuro financeiramente seguro</Card.Text>
                  <Button variant="outline-success"><Link to="/prev"  style={{textDecoration: 'none', color: '#213740'}}>Leia Mais</Link></Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card style={cardBody}>
                <Card.Img style={cardImg} src="/img/edu.png" alt="Imagem do artigo Educação Financeira" />
                <Card.Body className={cardBody}>
                  <Card.Title>Educação financeira</Card.Title>
                  <Card.Text>Aprender a gerenciar seu dinheiro é o primeiro passo para conquistar a liberdade financeira</Card.Text>
                  <Button variant="outline-success"><Link to="/educacao"  style={{textDecoration: 'none', color: '#213740'}}>Leia Mais</Link></Button>
                </Card.Body>
              </Card>
            </Col>

            
            <Col lg={4} md={6} className="mb-4">
              <Card style={cardBody}>
                <Card.Img style={cardImg} src="/img/dicas.png" alt="Imagem do artigo Educação Financeira" />
                <Card.Body className={cardBody}>
                  <Card.Title>Dicas</Card.Title>
                  <Card.Text>Ideias para organizar as finanças de forma simples e eficaz!</Card.Text>
                  <Button variant="outline-success"><Link to="/dicas"  style={{textDecoration: 'none', color: '#213740'}}>Leia Mais</Link></Button>
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
