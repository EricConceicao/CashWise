// Imports de bibliotecas//
import { useEffect } from 'react';

// Imports de componentes do projeto //
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

// Imports do BS //
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Stores //
import useUserStore from '../store/UserStore';
import useCoinTextStore from '../store/CoinTextStore';

const BoletimInformativo = () => {

  const setCoinText = useCoinTextStore(state => state.setCoinText);
  const token = useUserStore(state => state.userToken);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://localhost:3000/coin',{
        method: "GET",
        headers: {
          "Authorization": `Bearer: ${token}`
        }
      });

      if (res) {
        const data = await res.json();

        if (data.success) {
          console.log("Sucesso: ", data);
          setCoinText(data.list);
          return
        } else {
          console.log("Erro: ", data)
        }
      }
    }
    fetchData();
  },[]);
  
  const cardBody = {
    minHeight: "32rem",
    maxHeight: "32rem",
    borderWidth: '3px',
  }

  const cardImg = {
    maxHeight: "18rem",
    minHeight: "16rem",

  }

  const colorBody = {
    backgroundImage: "linear-gradient(150deg, #fff, var(--cw-primary), #213740 )"
  }

  const buttonStyle = {
    position: 'absolute',
    bottom: '15px',
    right: '25px',
  };

  return (
    <>
      <Header />
      <div style={colorBody}>
        <div className="bg-secondary text-white text-center py-5 p-1">
          <h1 className="display-2">Boletim Informativo</h1>
          <h2 className="" style={{ color: '#AEF2C6' }}>Artigos Interessantes Sobre Investimentos para Você</h2>
        </div>

        <Container className="mt-5">
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <Card style={cardBody}>
                <Card.Img className="card-img-top img-fluid" style={cardImg} src="/img/poupanca.png" alt="Imagem do artigo poupança" />
                <Card.Body className={cardBody}>
                  <Card.Title className='fs-3 fw-bold' style={{ textAlign: "center" }}>Poupança</Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>Preferência popular que oferece acessibilidade, segurança e liquidez imediata. Conheça as vantagens e desvantagens de um dos investimentos mais tradicionais.</Card.Text>
                  <Button variant="outline-success" style={buttonStyle}><Link to="/poupanca" style={{ textDecoration: 'none', color: '#213740' }}>Leia Mais</Link></Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card style={cardBody}>
                <Card.Img className="card-img-top img-fluid" style={cardImg} src="img/investimento.png" alt="Imagem do artigo tipos de investimentos" />
                <Card.Body className={cardBody}>
                  <Card.Title className='fs-3 fw-bold' style={{ textAlign: "center" }}>Principais Tipos de Investimentos</Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>Conheça os principais investimentos para compreender a diversidade de risco e retorno.</Card.Text>
                  <Button variant="outline-success" style={buttonStyle}><Link to="/investimentos" style={{ textDecoration: 'none', color: '#213740' }}>Leia Mais</Link></Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card style={cardBody}>
                <Card.Img className="card-img-top img-fluid" style={cardImg} src="/img/financas.png" alt="Imagem do artigo investimento para todos" />
                <Card.Body className={cardBody}>
                  <Card.Title className='fs-3 fw-bold' style={{ textAlign: "center" }}>Investimentos para Todos</Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>Desmistificando conceitos financeiros essenciais para facilitar a compreensão do universo das finanças.</Card.Text>
                  <Button variant="outline-success" style={buttonStyle}><Link to="/investodos" style={{ textDecoration: 'none', color: '#213740' }}>Leia Mais</Link></Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card style={cardBody}>
                <Card.Img className="card-img-top img-fluid" style={cardImg} src="/img/previdencia.png" alt="Imagem do artigo investimento para todos" />
                <Card.Body className={cardBody}>
                  <Card.Title className='fs-3 fw-bold' style={{ textAlign: "center" }}>Previdência</Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>Construindo bases sólidas para um futuro financeiramente seguro e próspero, realizando seus objetivos com tranquilidade e estabilidade.</Card.Text>
                  <Button variant="outline-success" style={buttonStyle}><Link to="/prev" style={{ textDecoration: 'none', color: '#213740' }}>Leia Mais</Link></Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card style={cardBody}>
                <Card.Img className="card-img-top img-fluid" style={cardImg} src="/img/edu.png" alt="Imagem do artigo Educação Financeira" />
                <Card.Body className={cardBody}>
                  <Card.Title className='fs-3 fw-bold' style={{ textAlign: "center" }}>Educação financeira</Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>Aprender a gerenciar seu dinheiro é o primeiro passo para conquistar a liberdade financeira.</Card.Text>
                  <Button variant="outline-success" style={buttonStyle}><Link to="/educacao" style={{ textDecoration: 'none', color: '#213740' }}>Leia Mais</Link></Button>
                </Card.Body>
              </Card>
            </Col>


            <Col lg={4} md={6} className="mb-3">
              <Card style={cardBody}>
                <Card.Img className="card-img-top img-fluid" style={cardImg} src="/img/dicas.png" alt="Imagem do artigo Educação Financeira" />
                <Card.Body className={cardBody}>
                  <Card.Title className='fs-3 fw-bold' style={{ textAlign: "center" }}>Dicas</Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>Ideias práticas e inteligentes para organizar suas finanças de maneira simples e eficaz, proporcionando controle sobre seu dinheiro.</Card.Text>
                  <Button variant="outline-success" style={buttonStyle}><Link to="/dicas" style={{ textDecoration: 'none', color: '#213740' }}>Leia Mais</Link></Button>
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
