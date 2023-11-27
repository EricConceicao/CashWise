//import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const BoletimInformativo = () => {

  
  const cardBody = {
    minHeight: "30rem",
    borderWidth: '3px',
  }

  const cardImg = {
    maxHeight: "16rem"  
   
  }

  const colorBody = {
    backgroundImage: "linear-gradient(150deg, #fff, var(--cw-primary), #213740 )"
  }

 
  return (
    <>
      <Header />
      <div style={colorBody}>
        <div className="bg-secondary text-white text-center py-5">
          <h1>Boletim Informativo</h1>
          <h2 style={{ color: '#AEF2C6' }}>Artigos Interessantes Sobre Investimentos para Você</h2>
        </div>

        <Container className="mt-5">
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <Card style={cardBody}>
                <Card.Img className="" style={cardImg} src="/img/poupanca.png" alt="Imagem do artigo poupança" />
                <Card.Body className={cardBody}>
                  <Card.Title>Poupança</Card.Title>
                  <Card.Text>Conheça as vantagens e desvantagens de um dos investimentos mais tradicionais.</Card.Text>
                  <Button variant="outline-success mt-4"><Link to="/poupanca"  style={{textDecoration: 'none', color: '#213740'}}>Leia Mais</Link></Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card style={cardBody}>
                <Card.Img className="mb-3" style={cardImg} src="img/investimentos.png" alt="Imagem do artigo tipos de investimentos" />
                <Card.Body className={cardBody}>
                  <Card.Title>Principais Tipos de Investimentos</Card.Title>
                  <Card.Text>Conheça os principais investimentos para compreender a diversidade de risco e retorno.</Card.Text>
                  <Button variant="outline-success mt-4"><Link to="/investimentos" style={{textDecoration: 'none', color: '#213740'}}>Leia Mais</Link></Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card style={cardBody}>
                <Card.Img style={cardImg} src="/img/financas.png" alt="Imagem do artigo investimento para todos" />
                <Card.Body className={cardBody}>
                  <Card.Title>Investimentos para Todos</Card.Title>
                  <Card.Text>Desmistificando conceitos financeiros essenciais para facilitar a compreensão do universo das finanças.</Card.Text>
                  <Button variant="outline-success mt-4"><Link to="/investodos"  style={{textDecoration: 'none', color: '#213740'}}>Leia Mais</Link></Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card style={cardBody}>
                <Card.Img style={cardImg} src="/img/previdencia.png" alt="Imagem do artigo investimento para todos" />
                <Card.Body className={cardBody}>
                  <Card.Title>Previdência</Card.Title>
                  <Card.Text>Construindo bases sólidas para um futuro financeiramente seguro e próspero, realizando seus objetivos com tranquilidade e estabilidade.</Card.Text>
                  <Button variant="outline-success mt-2"><Link to="/prev"  style={{textDecoration: 'none', color: '#213740'}}>Leia Mais</Link></Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card style={cardBody}>
                <Card.Img style={cardImg} src="/img/edu.png" alt="Imagem do artigo Educação Financeira" />
                <Card.Body className={cardBody}>
                  <Card.Title>Educação financeira</Card.Title>
                  <Card.Text>Aprender a gerenciar seu dinheiro é o primeiro passo para conquistar a liberdade financeira.</Card.Text>
                  <Button variant="outline-success mt-4"><Link to="/educacao"  style={{textDecoration: 'none', color: '#213740'}}>Leia Mais</Link></Button>
                </Card.Body>
              </Card>
            </Col>

            
            <Col lg={4} md={6} className="mb-4">
              <Card style={cardBody}>
                <Card.Img style={cardImg} src="/img/dicas.png" alt="Imagem do artigo Educação Financeira" />
                <Card.Body className={cardBody}>
                  <Card.Title>Dicas</Card.Title>
                  <Card.Text>Ideias práticas e inteligentes para organizar suas finanças de maneira simples e eficaz, proporcionando controle sobre seu dinheiro.</Card.Text>
                  <Button variant="outline-success mt-4"><Link to="/dicas"  style={{textDecoration: 'none', color: '#213740'}}>Leia Mais</Link></Button>
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
